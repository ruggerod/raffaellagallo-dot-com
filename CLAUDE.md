# CLAUDE.md — raffaellagallo-dot-com

Sito di Raffaella Gallo, Pet Coach (Buccinasco, MI). React + TypeScript + Vite, frontend-only,
pubblicato su GitHub Pages sul dominio raffaellagallo.com. Nessun backend, nessun CMS.

## Il tuo ruolo in questo repo

Il design e le decisioni visive vengono fatte a monte (in Omelette, dove esiste una versione
prototipo del sito). Tu ricevi contenuti di file già scritti o istruzioni precise e li applichi:
sovrascrivi i file indicati, verifica che il build passi, committa.

Flusso standard per una richiesta di modifica:

1. `npm run build` prima di iniziare, per assicurarti che il punto di partenza sia sano.
2. Applica le modifiche ai file indicati. Non "migliorare" file non menzionati.
3. `npm run build` di nuovo — deve passare `tsc -b` senza errori.
4. Commit con messaggio in inglese, imperativo, una riga: `Add photo gallery to Barbone page`.
5. Non fare push su `main` senza che sia stato chiesto esplicitamente.

## Comandi

    npm install
    npm run dev        # dev server
    npm run build      # tsc -b && vite build → dist/
    npm run preview
    npm run deploy     # gh-pages -d dist --dotfiles

Il sito è già online su https://raffaellagallo.com. `CONTINUOUS_DEVELOPMENT.md` è il
riferimento per gli aggiornamenti: spiega in particolare che `git push` (sorgente) e
`npm run deploy` (sito pubblicato) sono due operazioni distinte e vanno fatte entrambe.
`DEPLOY.md` riguarda la migrazione iniziale e il modulo contatti.

I nomi dei file sono in inglese anche quando il contenuto è in italiano.

## Struttura

    src/theme.ts          colori, font, contatti (WhatsApp, Instagram, email). Unica fonte dei token.
    src/routes.ts         rotte + label del menu. Aggiungere una pagina = una riga qui + un file in pages/.
    src/data/content.ts   TUTTI i testi del sito, tipizzati. Nessuna copy hardcoded nelle pagine tranne la prosa lunga.
    src/components/ui.tsx primitive: Eyebrow, H1, H2, Sub, Prose, Rule, Multi, Band, Cta, Photo, Card.
    src/components/       Header (menu a tendina), Footer, StickyBar, ContactForm.
    src/pages/            una pagina per rotta.
    public/CNAME          raffaellagallo.com — non cancellare.
    public/404.html       fallback SPA per GitHub Pages — non cancellare.

## Regole non negoziabili

**Testi.** La copy è quella del sito WordPress originale, verbatim. Non riscrivere, non
"migliorare", non accorciare, non tradurre. Correggi solo se il committente lo chiede
esplicitamente. Tutto il sito è in italiano.

**Brand.** Palette e font vengono dal brand guide e stanno in `src/theme.ts`:

    tiffany #2BC4C4   colore principale, sfondi, CTA
    teal    #2799A4   titoli, link, dettagli
    ink     #25282A   testi principali
    ivory   #FAF9F6   sfondo principale
    pearl   #EEF3F3   sfondo secondario, separatori

    Playfair Display  titoli e frasi in evidenza
    Lato              testi lunghi
    Montserrat        piccoli titoli, pulsanti, navigazione (letterspacing ampio)

Non introdurre nuovi colori, nuovi font, gradienti o emoji. Niente librerie di UI, niente
Tailwind, niente CSS-in-JS: lo stile è in style object inline più `src/index.css` per reset,
font e stati hover.

**Rotte.** I path ricalcano le vecchie URL WordPress (`/about/`, `/cani-con-ansie-e-fobie/`,
`/percorsi/`, `/barbone-in-sintonia/`, `/rimettersi-in-forma-con-il-k9-cross-training/`,
`/pensioni-casalinghe/`, `/testimonial/`, `/contact/`, `/privacy-policy/`) per non perdere il
posizionamento su Google. Non rinominarli.

**Mobile first.** Si progetta per lo schermo del telefono e si allarga con
`grid-template-columns: repeat(auto-fit, minmax(...))` e `clamp()` per la tipografia.
Nessuna media query se si può evitare. Target touch mai sotto 44px.

**Contatti.** La pagina `/contact/` ha un form (`src/components/ContactForm.tsx`) che recapita
le richieste a `site.email` tramite **Web3Forms**: un `POST` in JSON, nessun backend, nessun
passo di deploy in più. Vedi `DEPLOY.md` per la access key e i limiti del piano gratuito.
Altrove restano i link diretti Instagram e `mailto:`, che devono aprire le app native su
mobile. Tutti i valori stanno in `src/theme.ts`, non duplicarli.

**Dipendenze.** Non aggiungerne. Se una modifica sembra richiedere un pacchetto, fermati e
chiedi.

## Stato aperto

- Le foto sono segnaposto (componente `Photo`). Quando arrivano i file reali vanno in
  `public/img/` e `Photo` va sostituito con `<img>` con `alt` in italiano.
- `src/pages/Privacy.tsx` è stata riscritta per l'assetto attuale (form via Web3Forms,
  hosting GitHub Pages): manca solo l'approvazione di Raffaella. È un testo legale, non
  toccarlo per iniziativa propria.
- Mancano i testi della pagina "Il mio percorso" e ci sono solo 2 testimonianze su
  `/testimonial/` (quelle presenti in home sul sito originale).
- `SHOW_STICKY_BAR` in `src/App.tsx` è `false`: la barra fissa mobile è disattivata.
