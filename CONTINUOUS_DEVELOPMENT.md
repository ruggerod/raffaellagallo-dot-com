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

## Dove si mette cosa

| Cosa vuoi cambiare | File |
|---|---|
| Un testo breve, ripetuto o strutturato | `src/data/content.ts` |
| Prosa lunga di una singola pagina | direttamente in `src/pages/<Pagina>.tsx` |
| Colori, font, email, dati di contatto | `src/theme.ts` — unica fonte, non duplicare |
| Aggiungere una pagina | una riga in `src/routes.ts` + un file in `src/pages/` |
| Foto e immagini | `public/images/`, riferite con path assoluto `/images/...` |
| Logo, favicon | `public/brand/` |
| Un elemento visivo ricorrente | `src/components/ui.tsx` (Eyebrow, H1, H2, Prose, Card…) |

Prima di scrivere un componente nuovo, guarda `ui.tsx`: quasi tutto esiste già.

## Cose da non rompere mai

- **`public/CNAME`** — contiene `raffaellagallo.com`. Se sparisce, al primo deploy GitHub
  perde il dominio personalizzato e l'HTTPS si rompe. È il singolo file più fragile del repo.
- **`public/404.html`** — è il ripiego SPA di GitHub Pages: converte `/percorsi/` in
  `/?redirect=/percorsi/`. Funziona in coppia con le righe 8-9 di `src/main.tsx`, che
  riscrivono l'URL prima che parta il router. Se tocchi uno, controlla l'altro: senza, ogni
  link diretto a una pagina interna smette di funzionare.
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
il deploy è arrivato davvero. `/percorsi/` risponde `404` **ed è corretto**: GitHub serve
`404.html` con quello stato, e il redirect avviene nel browser.

Dal browser, dopo una modifica importante: home, una pagina interna raggiunta da link, la
stessa pagina raggiunta **incollando l'URL** (è il caso che usa il ripiego 404), e la pagina
Contatti.

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
