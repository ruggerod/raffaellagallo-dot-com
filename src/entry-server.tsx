/**
 * Punto di ingresso usato solo in fase di build da `scripts/prerender.mjs`.
 * Non finisce nel bundle del browser: Vite lo compila a parte in `.prerender/`.
 */
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export { routes } from './routes';
export { site, igLink } from './theme';
export { siteUrl, siteName, ogImage, googleSiteVerification, pageSeo, notFoundSeo } from './seo';

/** Restituisce l'HTML della pagina corrispondente al path, senza <html> né <head>. */
export function render(path: string): string {
  return renderToString(
    createElement(StaticRouter, { location: path }, createElement(App)),
  );
}
