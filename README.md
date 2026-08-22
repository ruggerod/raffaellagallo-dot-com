# raffaellagallo-dot-com

Sito di Raffaella Gallo — Pet Coach. React + TypeScript + Vite, frontend-only.

## Avvio

    npm install
    npm run dev

## Build

    npm run build      # output in dist/
    npm run preview

## Struttura

    src/theme.ts            colori, font, contatti (numero WhatsApp, handle Instagram)
    src/routes.ts           elenco rotte + label di navigazione
    src/data/content.ts     tutti i testi del sito, tipizzati
    src/components/         Header, Footer, StickyBar, primitive UI
    src/pages/              una pagina per rotta
    public/CNAME            dominio custom per GitHub Pages
    public/404.html         fallback SPA per GitHub Pages

I path delle rotte ricalcano le vecchie URL WordPress (\`/about/\`, \`/percorsi/\`,
\`/pensioni-casalinghe/\`…) per non perdere il posizionamento sui motori di ricerca.

## Cose da completare

- Foto reali: sostituire il componente \`Photo\` con \`<img>\` (metti i file in \`public/img/\`).
- Testo della Privacy Policy in \`src/pages/Privacy.tsx\`.
- Barra fissa mobile WhatsApp/Instagram/Email: \`SHOW_STICKY_BAR\` in \`src/App.tsx\`.
- Altre testimonianze in \`src/data/content.ts\`.

## Deploy su GitHub Pages

Opzione rapida:

    npm run deploy      # pubblica dist/ sul branch gh-pages

Poi Settings → Pages → branch \`gh-pages\`, custom domain \`raffaellagallo.com\`,
Enforce HTTPS. Dettagli su DNS e disdetta WordPress in \`DEPLOY.md\`.

## Setup locale

    cd C:\\Users\\Ruggero\\Developer
    git clone https://github.com/<tuo-utente>/raffaellagallo-dot-com.git
    cd raffaellagallo-dot-com
    # copia qui i file di questo pacchetto
    npm install && npm run dev
