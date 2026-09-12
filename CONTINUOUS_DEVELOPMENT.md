# raffaellagallo.com — sviluppo e aggiornamenti

`DEPLOY.md` racconta la migrazione da WordPress e la prima pubblicazione: si legge una volta
sola. Questo file è quello di tutti i giorni, da qui in avanti.

## Il modello: due pubblicazioni distinte

È la cosa da capire prima di ogni altra, perché non è ovvia e perché sbagliarla non dà
nessun errore.

    git push origin main     pubblica il SORGENTE   → branch main
    npm run deploy           pubblica il SITO       → branch gh-pages

Sono **indipendenti**. Nessuna delle due fa l'altra.

- Se fai `push` e non `deploy`: il codice è su GitHub, ma online resta la versione vecchia.
- Se fai `deploy` e non `push`: il sito cambia, ma nessuno — te compreso, da un altro
  computer — ha il codice che lo ha generato. È il caso pericoloso.

Regola: **prima `push`, poi `deploy`**, sempre entrambi. Se il push fallisce ti fermi prima
di aver toccato il sito pubblico.

Il branch `gh-pages` è generato dalla macchina. Non si modifica a mano, non si apre, non si
fanno PR verso di lui: al `deploy` successivo viene sovrascritto.

## Il ciclo di lavoro

    git pull                    # se lavori da più computer
    npm install                 # solo su una macchina nuova
    npm run dev                 # sviluppo, ricarica a caldo

Poi, quando la modifica è pronta:

    npm run build               # deve passare tsc -b senza errori
    npm run preview             # serve esattamente ciò che verrà pubblicato
    git commit -am "..."        # messaggio in inglese, imperativo, una riga
    git push origin main
    npm run deploy

`npm run preview` è il passaggio che si tende a saltare ed è quello che conta: `npm run dev`
usa il server di sviluppo, `preview` serve la cartella `dist/` reale. Le differenze fra i due
sono rare ma esistono, ed è l'ultima occasione per vederle prima che siano pubbliche.

Un'avvertenza su `preview`: per un indirizzo inesistente mostra la home, mentre GitHub Pages
mostra la pagina "Pagina non trovata". È una differenza del server di anteprima, non un
errore. Per controllare quella pagina in locale apri direttamente `dist/404.html`.

## Il prerender: perché `build` fa un passaggio in più

    npm run build   →   tsc -b   →   vite build   →   node scripts/prerender.mjs

GitHub Pages serve soltanto file che esistono su disco. Con il solo `dist/index.html`, ogni
indirizzo diverso dalla home rispondeva `404`: per una persona funzionava lo stesso, grazie al
ripiego JavaScript, ma **Googlebot registrava il 404 e scartava l'URL prima di eseguire il
JavaScript**, quindi nessuna pagina interna poteva essere indicizzata.

`scripts/prerender.mjs` risolve la cosa alla radice: dopo la build compila l'applicazione una
seconda volta per Node (`src/entry-server.tsx`) e scrive un `index.html` per ogni rotta, con il
contenuto React già renderizzato dentro, i tag `<head>` della singola pagina presi da
`src/seo.ts`, e in più `sitemap.xml`, `robots.txt` e un `404.html` vero. Sul browser
`src/main.tsx` riusa quell'HTML (`hydrateRoot`) invece di ridisegnarlo.

Non servono dipendenze nuove: usa `vite`, `react-dom/server` e `react-router-dom/server`, già
presenti. La cartella temporanea `.prerender/` viene cancellata al termine ed è in `.gitignore`.

Conseguenze pratiche:

- **Ogni rotta in `src/routes.ts` deve avere la sua voce in `src/seo.ts`**, altrimenti la build
  si ferma con un messaggio esplicito. È voluto: una pagina senza titolo proprio è una pagina
  che su Google compare identica a un'altra.
- I marcatori `<!-- seo:start -->` e `<!-- seo:end -->` in `index.html` delimitano il blocco che
  il prerender sostituisce. Se spariscono, la build si ferma.
- Il tag di verifica di Google Search Console sta in `googleSiteVerification` dentro
  `src/seo.ts` e viene scritto in tutte le pagine. **Non va rimosso**: Google ricontrolla
  periodicamente e toglierlo fa decadere la proprietà in Search Console.

## Dove si mette cosa

| Cosa vuoi cambiare | File |
|---|---|
| Un testo breve, ripetuto o strutturato | `src/data/content.ts` |
| Prosa lunga di una singola pagina | direttamente in `src/pages/<Pagina>.tsx` |
| Colori, font, email, dati di contatto | `src/theme.ts` — unica fonte, non duplicare |
| Titolo e descrizione di una pagina su Google | `src/seo.ts` |
| Aggiungere una pagina | una riga in `src/routes.ts` + una voce in `src/seo.ts` + un file in `src/pages/` |
| Foto e immagini | `public/images/`, riferite con path assoluto `/images/...` |
| Logo, favicon | `public/brand/` |
| Un elemento visivo ricorrente | `src/components/ui.tsx` (Eyebrow, H1, H2, Prose, Card…) |

Prima di scrivere un componente nuovo, guarda `ui.tsx`: quasi tutto esiste già.

## Cose da non rompere mai

- **`public/CNAME`** — contiene `raffaellagallo.com`. Se sparisce, al primo deploy GitHub
  perde il dominio personalizzato e l'HTTPS si rompe. È il singolo file più fragile del repo.
- **`public/404.html`** — era il ripiego SPA di GitHub Pages: convertiva `/percorsi/` in
  `/?redirect=/percorsi/`. Dal prerender in poi **non arriva più in produzione**: il passaggio
  di build sovrascrive `dist/404.html` con la pagina "Pagina non trovata" vera. Resta nel repo,
  in coppia con le righe che leggono `redirect` in `src/main.tsx`, solo come rete di sicurezza
  per una build senza prerender. Non cancellarlo, ma non è più il meccanismo attivo.
- **`scripts/prerender.mjs` e i marcatori `seo` in `index.html`** — senza di loro si torna al
  404 su ogni pagina interna e il sito sparisce da Google nel giro di qualche settimana.
- **`base: '/'` in `vite.config.ts`** — corretto per un dominio apex. Cambiarlo rompe tutti
  i path degli asset.
- **I path delle rotte** — ricalcano le vecchie URL WordPress per non perdere il
  posizionamento su Google. Non si rinominano.
- **Le dipendenze** — non se ne aggiungono. Se una modifica sembra richiederne una, fermati
  e chiedi.

## Dopo ogni deploy: la verifica

La cache di GitHub Pages è di **dieci minuti** (`Cache-Control: max-age=600`, verificato in
produzione), quindi subito dopo il deploy puoi ancora vedere la versione precedente. **Non è
un deploy fallito.** Aspetta, oppure ricarica con la cache disabilitata.

Controllo rapido da terminale:

    curl -sI https://raffaellagallo.com | head -3
    curl -s -o /dev/null -w "%{http_code}\n" https://raffaellagallo.com/percorsi/
    curl -s https://raffaellagallo.com/ | grep -o 'assets/index-[^"]*'

Il terzo comando mostra il nome dell'asset pubblicato: se l'hash è cambiato rispetto a prima,
il deploy è arrivato davvero. `/percorsi/` deve rispondere **`200`**: se torna `404`, il
prerender non è arrivato in produzione ed è un problema serio, perché è esattamente ciò che
impedisce a Google di indicizzare il sito.

Dal browser, dopo una modifica importante: home, una pagina interna raggiunta da link, la
stessa pagina raggiunta **incollando l'URL**, un indirizzo inventato (deve mostrare la pagina
"Pagina non trovata", non la home) e la pagina Contatti.

## Tornare indietro

Se un deploy ha rotto qualcosa, la via pulita:

    git revert <sha>
    git push origin main
    npm run deploy

Se serve rimettere online la versione precedente **subito**, senza ragionare sulla storia:

    git checkout <sha-buono>
    npm run deploy
    git checkout main

Il secondo modo pubblica il vecchio build senza toccare `main`: rimedia in un minuto, ma
lascia sito e sorgente disallineati. Serve solo come tampone, poi si sistema con `revert`.

## Modifiche che toccano la privacy

`src/pages/Privacy.tsx` non è copy di sito: è un documento legale, e descrive esattamente
quali terze parti ricevono dati. Se una modifica **aggiunge un servizio esterno** — analytics,
un embed di mappa, un player video, un font caricato da un CDN diverso, un altro form —
l'informativa va aggiornata nello stesso momento, non dopo. Vale anche per il contrario: se
un servizio viene tolto, la sua voce va rimossa.

Il modulo contatti e i suoi vincoli sono documentati in `DEPLOY.md` §7.

## Google e Search Console

La proprietà `raffaellagallo.com` è verificata con il metodo **Tag HTML**: il token sta in
`googleSiteVerification` dentro `src/seo.ts` e il prerender lo scrive in tutte le pagine.

Cosa controllare quando si aggiunge o si rinomina una pagina:

1. la voce corrispondente in `src/seo.ts` (senza, la build si ferma);
2. dopo il deploy, che `https://raffaellagallo.com/sitemap.xml` contenga il nuovo indirizzo;
3. in Search Console, **Controllo URL** sul nuovo indirizzo → **Richiedi indicizzazione**.

Le pagine con `noindex: true` in `src/seo.ts` — oggi solo la privacy policy — restano
raggiungibili ma fuori dalla sitemap e fuori dall'indice. È voluto.

Una pagina eliminata deve rispondere `404`, non essere reindirizzata alla home: Google tratta
un redirect verso una pagina non equivalente come *soft 404* e non trasferisce posizionamento.
Il `404` corretto fa sparire il vecchio indirizzo dall'indice da solo in qualche settimana.

## Manutenzione periodica

- **Rinnovo del dominio** presso WordPress.com, circa 20 €/anno. È il singolo punto di
  fallimento totale: se scade, spariscono sito ed email insieme. Verifica che il rinnovo
  automatico sia attivo.
- **Certificato HTTPS**: si rinnova da solo, non serve fare nulla. Se un giorno il browser
  segnala un problema, quasi sempre è un record DNS toccato per sbaglio.
- **Modulo contatti**: ogni tanto manda una richiesta di prova dal sito e controlla che
  arrivi. Il piano gratuito copre 250 invii al mese.
- **Record DNS**: non toccare `MX` e `NS` per nessun motivo mentre gestisci il sito. L'`MX`
  è l'inoltro di posta di `@raffaellagallo.com`.
- **Dipendenze**: `npm audit` ogni tanto. Aggiorna solo se c'è una ragione, e sempre con un
  `build` + `preview` prima del deploy.

## Cosa GitHub Pages non può fare

Da ricordare quando arriva una richiesta nuova, per non promettere l'impossibile:

- nessun redirect lato server (`301` da vecchi URL): si può solo simulare via JavaScript;
- nessun backend, nessun database, nessuna variabile d'ambiente segreta — **tutto ciò che sta
  nel repo finisce nel bundle pubblico**;
- nessuna area riservata o login reale;
- nessuna elaborazione di form: serve sempre un servizio esterno, come oggi Web3Forms.

## Possibile evoluzione: deploy automatico

Oggi il deploy parte dal computer di chi sviluppa: richiede il repo clonato, `npm install`
fatto, e la persona giusta davanti alla tastiera. Un workflow GitHub Actions su push di
`main` renderebbe la pubblicazione automatica e indipendente dalla macchina.

Vale la pena **solo se** il sito comincia a essere aggiornato spesso o da più persone. Con un
aggiornamento ogni tanto, il flusso manuale ha un vantaggio concreto: obbliga a passare da
`npm run preview` prima di pubblicare, e su un sito senza test automatici quel controllo
umano è l'unica rete di sicurezza che c'è. Non è stato implementato per questa ragione.
