/**
 * Prerender statico per GitHub Pages.
 *
 * Perché serve: GitHub Pages restituisce solo file che esistono su disco. Con il solo
 * `dist/index.html` ogni altro indirizzo (/about/, /percorsi/, …) risponde HTTP 404 e
 * Googlebot scarta l'URL prima di eseguire il JavaScript, quindi nessuna pagina interna
 * può essere indicizzata. Questo script scrive un `index.html` per ogni rotta, con il
 * contenuto React già renderizzato e i tag <head> della singola pagina, più sitemap.xml
 * e robots.txt. Gira automaticamente in coda a `npm run build`.
 *
 * Nessuna dipendenza aggiuntiva: usa vite, react-dom/server e react-router-dom/server,
 * già presenti nel progetto.
 */
import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, '.prerender');

const SEO_START = '<!-- seo:start';
const SEO_END = '<!-- seo:end -->';
const ROOT_DIV = '<div id="root"></div>';

/** Rende sicuro un testo dentro un attributo HTML fra virgolette doppie. */
const attr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Compila src/entry-server.tsx in un bundle Node importabile. */
async function buildServerBundle() {
  await build({
    logLevel: 'warn',
    build: {
      ssr: path.join('src', 'entry-server.tsx'),
      outDir: path.relative(root, ssrDir),
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
    },
  });
  return import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
}

/**
 * Dati strutturati LocalBusiness: dicono a Google che dietro il sito c'è un'attività
 * con una sede precisa, il che aiuta sulle ricerche locali del tipo
 * "educatrice cinofila Buccinasco". Non produce nessun effetto visibile sulla pagina.
 *
 * I valori vengono da src/theme.ts, che resta l'unica fonte dei contatti: `site.city`
 * è una stringa pensata per essere letta ("20090, Buccinasco (MI)") e qui viene scomposta
 * nei campi che schema.org richiede. Se un giorno cambia formato, la build si ferma qui
 * invece di pubblicare dati sbagliati.
 */
function buildJsonLd(m) {
  const [postalCode, rest = ''] = m.site.city.split(',').map((s) => s.trim());
  const addressLocality = rest.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const addressRegion = (rest.match(/\(([^)]+)\)/) || [])[1] || '';

  if (!/^\d{5}$/.test(postalCode) || !addressLocality || !addressRegion) {
    throw new Error(
      `site.city in src/theme.ts vale "${m.site.city}" ma qui serve il formato ` +
        '"CAP, Comune (SIGLA)", per esempio "20090, Buccinasco (MI)". ' +
        'Aggiorna la scomposizione in scripts/prerender.mjs se il formato è cambiato apposta.',
    );
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': m.siteUrl + '/#business',
    name: m.siteName,
    description: m.pageSeo['/'].description,
    url: m.siteUrl,
    image: m.ogImage,
    email: m.site.email,
    inLanguage: 'it-IT',
    address: {
      '@type': 'PostalAddress',
      postalCode,
      addressLocality,
      addressRegion,
      addressCountry: 'IT',
    },
    areaServed: [
      { '@type': 'City', name: addressLocality },
      { '@type': 'AdministrativeArea', name: 'Città metropolitana di Milano' },
    ],
    sameAs: [m.igLink],
  };
}

/**
 * I tag <head> specifici di una pagina, che sostituiscono il blocco seo di index.html.
 * `routePath` è null per la 404: quel file viene servito sotto qualsiasi indirizzo
 * sbagliato, quindi non esiste un URL canonico da dichiarare.
 */
function buildHead(m, { path: routePath, seo, jsonLd }) {
  const url = routePath === null ? null : m.siteUrl + routePath;
  const lines = [
    `<meta name="google-site-verification" content="${attr(m.googleSiteVerification)}" />`,
    `<title>${attr(seo.title)}</title>`,
    `<meta name="description" content="${attr(seo.description)}" />`,
  ];

  if (url) lines.push(`<link rel="canonical" href="${attr(url)}" />`);
  if (seo.noindex) lines.push('<meta name="robots" content="noindex, follow" />');

  lines.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="it_IT" />`,
    `<meta property="og:site_name" content="${attr(m.siteName)}" />`,
  );
  if (url) lines.push(`<meta property="og:url" content="${attr(url)}" />`);
  lines.push(
    `<meta property="og:title" content="${attr(seo.title)}" />`,
    `<meta property="og:description" content="${attr(seo.description)}" />`,
    `<meta property="og:image" content="${attr(m.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(seo.title)}" />`,
    `<meta name="twitter:description" content="${attr(seo.description)}" />`,
    `<meta name="twitter:image" content="${attr(m.ogImage)}" />`,
  );

  // JSON-LD solo dove serve: ripeterlo su ogni pagina non aggiunge nulla.
  if (routePath === '/') {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
    );
  }

  return lines.map((l) => '    ' + l).join('\n');
}

/** Compone la pagina finale a partire dallo shell prodotto da Vite. */
function composePage(shell, head, body) {
  const start = shell.indexOf(SEO_START);
  const end = shell.indexOf(SEO_END);
  if (start === -1 || end === -1) {
    throw new Error(
      `Non trovo i marcatori "${SEO_START}" / "${SEO_END}" in dist/index.html. ` +
        'Sono in index.html e servono al prerender per sapere dove scrivere i tag della pagina.',
    );
  }
  if (!shell.includes(ROOT_DIV)) {
    throw new Error(`Non trovo "${ROOT_DIV}" in dist/index.html: non so dove inserire il contenuto.`);
  }

  return shell
    .slice(0, start)
    .concat(head.trimStart(), shell.slice(end + SEO_END.length))
    .replace(ROOT_DIV, `<div id="root">${body}</div>`);
}

function writeSitemap(m, paths) {
  const urls = paths
    .filter((p) => !m.pageSeo[p].noindex)
    .map((p) => `  <url>\n    <loc>${m.siteUrl}${p}</loc>\n  </url>`)
    .join('\n');

  fs.writeFileSync(
    path.join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
}

function writeRobots(m) {
  fs.writeFileSync(
    path.join(distDir, 'robots.txt'),
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${m.siteUrl}/sitemap.xml`, ''].join('\n'),
  );
}

async function main() {
  const shellPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(shellPath)) {
    throw new Error('Manca dist/index.html: esegui prima `vite build`.');
  }
  const shell = fs.readFileSync(shellPath, 'utf8');

  const m = await buildServerBundle();
  const jsonLd = buildJsonLd(m);
  const paths = m.routes.map((r) => r.path);

  for (const p of paths) {
    if (!m.pageSeo[p]) {
      throw new Error(`Manca la voce "${p}" in src/seo.ts: ogni rotta di routes.ts deve averne una.`);
    }
  }

  for (const p of paths) {
    const seo = m.pageSeo[p];
    const page = composePage(shell, buildHead(m, { path: p, seo, jsonLd }), m.render(p));
    const outDir = p === '/' ? distDir : path.join(distDir, p);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), page);
    console.log(`  ${p.padEnd(48)} → ${path.relative(root, path.join(outDir, 'index.html'))}`);
  }

  // 404.html: GitHub Pages lo serve per ogni indirizzo che non corrisponde a un file.
  // Qui ci mettiamo la pagina "non trovata" vera, già renderizzata, così Google riceve
  // un 404 con contenuto sensato invece di un redirect verso la home.
  const notFound = composePage(
    shell,
    buildHead(m, { path: null, seo: m.notFoundSeo, jsonLd }),
    m.render('/__not_found__'),
  );
  fs.writeFileSync(path.join(distDir, '404.html'), notFound);
  console.log(`  ${'(404)'.padEnd(48)} → dist/404.html`);

  writeSitemap(m, paths);
  writeRobots(m);
  console.log(`  ${'(sitemap + robots)'.padEnd(48)} → dist/sitemap.xml, dist/robots.txt`);

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`\nPrerender: ${paths.length} pagine + 404, sitemap e robots.txt.`);
}

main().catch((err) => {
  console.error('\nPrerender fallito:\n' + (err?.stack || err));
  process.exit(1);
});
