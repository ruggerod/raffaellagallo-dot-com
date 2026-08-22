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
- Il modulo contatti non esiste più: il sito usa link diretti WhatsApp / Instagram / email, che funzionano senza server.
