# raffaellagallo.com — passare da WordPress.com a GitHub Pages

## 1. Prima di toccare qualsiasi cosa
- Salva l'export dei contenuti WordPress (Strumenti → Esporta) e scarica i file media da `wp-content/uploads` — dopo la disdetta non saranno più accessibili.
- Annota dove è registrato il dominio: se l'hai comprato tramite WordPress.com, il registrar è WordPress.com (Automattic) anche se cancelli il piano del sito.

## 2. Dominio: due strade
**A. Tenere il dominio su WordPress.com (solo registrazione, ~20 €/anno)**
Puoi disdire il piano del sito e mantenere attiva solo la registrazione del dominio. Poi in
Impostazioni → Domini → Nome del dominio → DNS, cambi i record verso GitHub Pages.

**B. Trasferire il dominio a un altro registrar** (Cloudflare Registrar, Namecheap…)
Nel pannello WordPress.com: sblocca il dominio, richiedi il codice EPP/auth, avvia il transfer dal nuovo registrar.
Il dominio deve essere registrato da più di 60 giorni. Fai il trasferimento **prima** di cancellare il piano, così hai ancora accesso al pannello.

## 3. Record DNS per GitHub Pages
Per il dominio apex `raffaellagallo.com` — quattro record A (e, opzionali, gli AAAA IPv6):

    A   @   185.199.108.153
    A   @   185.199.109.153
    A   @   185.199.110.153
    A   @   185.199.111.153

Per il sottodominio `www`:

    CNAME   www   <tuo-utente>.github.io

Rimuovi i vecchi record A/CNAME che puntano a WordPress.com.
La propagazione richiede da pochi minuti a 24 ore.

## 4. Pubblicare il sito
1. Crea un repository pubblico su GitHub (es. `raffaellagallo-site`).
2. Metti il file del sito come `index.html` nella root del repo, insieme alle foto in `/img`.
3. Aggiungi un file chiamato `CNAME` (senza estensione) con una sola riga: `raffaellagallo.com`
4. Settings → Pages → Source: `Deploy from a branch` → branch `main`, folder `/ (root)`.
5. Settings → Pages → Custom domain: `raffaellagallo.com` → salva → attiva **Enforce HTTPS**
   (il certificato viene emesso automaticamente, può richiedere qualche ora).

## 5. Disdire WordPress
Fallo **solo dopo** che il nuovo sito risponde correttamente su https://raffaellagallo.com:
- WordPress.com → Impostazioni → Piano → Annulla il piano (entro 14 giorni dal rinnovo hai diritto al rimborso).
- Se hai scelto la strada A, controlla che la voce "registrazione dominio" resti attiva e con rinnovo automatico.

## 6. Da non dimenticare
- Le email `@raffaellagallo.com`: se usi un servizio email collegato al dominio via WordPress, va riconfigurato (record MX) o migrato.
- Redirect: i vecchi URL WordPress (`/about/`, `/percorsi/`, `/pensioni-casalinghe/`…) non esisteranno più. GitHub Pages non fa redirect server-side; se ti interessa mantenere il posizionamento su Google, conviene creare pagine separate con quegli stessi percorsi.
- Aggiorna il link in bio su Instagram e Facebook se puntava a una pagina interna.

## 7. Il modulo contatti
GitHub Pages serve solo file statici e non può ricevere l'invio di un form. La pagina
`/contact/` usa quindi **Web3Forms**: il browser fa un `POST` in JSON a
`https://api.web3forms.com/submit` e loro inoltrano la richiesta via email a
`raffa.fliz@gmail.com`. Il `Rispondi` di Gmail è già preimpostato sull'indirizzo di chi ha
scritto.

**Il deploy non cambia.** Resta `npm run deploy`: il form non aggiunge nessun passo di
pubblicazione, nessun server e nessun record DNS.

**Access key.** Si ottiene su https://web3forms.com/ inserendo l'indirizzo email e cliccando
il link di verifica che arriva in casella. Va incollata in `web3formsKey` dentro
`src/theme.ts`. Non è un segreto: finisce nel bundle JavaScript pubblico ed è previsto che
sia così.

**Limiti del piano gratuito, da conoscere:**
- 250 invii al mese. Il volume atteso è di poche decine, il margine è ampio.
- Gli invii restano archiviati 30 giorni sui server Web3Forms (AWS, Stati Uniti), poi
  vengono cancellati. Non è un semplice inoltro: è un trattamento di dati personali fuori
  dall'UE e va dichiarato nell'informativa privacy.
- La risposta automatica a chi scrive e la restrizione per dominio sono funzioni a pagamento
  (~5 $/mese). Al posto della prima il sito mostra la schermata di conferma.

**Come si prova.** Solo dal browser. Web3Forms risponde `403` alle chiamate che non
sembrano venire da una pagina web, quindi un test con `curl` fallisce anche con la chiave
giusta: non è un errore di configurazione. La access key deve essere un UUID valido,
altrimenti la risposta è `400`.

**Se arriva spam.** La chiave è pubblica, quindi chiunque la copi dal sito può inviare a
quell'indirizzo: il blocco lato server descritto sopra si aggira impostando gli header di un
browser, è un rallentamento e non una protezione. Il form ha già un honeypot (campo
`botcheck`) che ferma i bot generici. Se
dovesse comparire spam mirato, in ordine di sforzo crescente: rigenerare la access key,
passare al piano a pagamento per l'allowlist di dominio, aggiungere Cloudflare Turnstile.

**Da chiudere prima di andare online.** `src/pages/Privacy.tsx` è ancora un placeholder, ma
il form ha una checkbox di consenso obbligatoria che ci punta. L'informativa deve nominare
Web3Forms come responsabile del trattamento, indicare la conservazione di 30 giorni negli
Stati Uniti e la base del trasferimento extra-UE, oltre a finalità, tempi e diritti
dell'interessato.
