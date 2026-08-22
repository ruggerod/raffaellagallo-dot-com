import type { ReactNode } from 'react';
import { Eyebrow, H1, Prose, Rule } from '../components/ui';
import { color, font, site, mailLink } from '../theme';

const Sez = ({ title, children }: { title: string; children: ReactNode }) => (
  <section style={{ marginTop: 40 }}>
    <h2 style={{ fontFamily: font.display, fontSize: 'clamp(19px, 4.4vw, 23px)', lineHeight: 1.3, color: color.ink }}>{title}</h2>
    <Prose style={{ marginTop: 14, fontSize: 16 }}>{children}</Prose>
  </section>
);

const Voce = ({ nome, children }: { nome: string; children: ReactNode }) => (
  <p style={{ margin: 0 }}>
    <span style={{ fontFamily: font.accent, fontWeight: 600, fontSize: 12.5, letterSpacing: '.06em', color: color.ink }}>{nome}</span>
    <br />{children}
  </p>
);

export default function Privacy() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>PRIVACY</Eyebrow>
        <H1>Informativa privacy</H1>
        <Prose style={{ marginTop: 22, fontSize: 16 }}>
          <p style={{ margin: 0 }}>
            Informativa resa ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679 (GDPR) e del D.lgs. 196/2003, come modificato dal D.lgs. 101/2018.
          </p>
          <p style={{ margin: 0, color: color.muted, fontSize: 14.5 }}>Ultimo aggiornamento: agosto 2026.</p>
        </Prose>
      </section>

      <Rule style={{ marginTop: 34 }} />

      <Sez title="Titolare del trattamento">
        <p style={{ margin: 0 }}>
          Il titolare del trattamento è Raffaella Gallo, {site.city}. Per qualsiasi questione relativa ai tuoi dati personali,
          compreso l’esercizio dei diritti descritti più avanti, puoi scrivere a <a href={mailLink}>{site.email}</a>.
        </p>
      </Sez>

      <Sez title="Quali dati raccolgo">
        <p style={{ margin: 0 }}>
          Attraverso il modulo della pagina Contatti raccolgo il tuo nome e cognome, il tuo indirizzo email e — se scegli di
          indicarli — numero di telefono, località, informazioni sul tuo cane e il contenuto della tua richiesta. Sono dati che
          fornisci liberamente: decidi tu quanto raccontare.
        </p>
        <p style={{ margin: 0 }}>
          Il servizio che si occupa di recapitarmi il modulo registra inoltre l’indirizzo IP da cui parte l’invio, per prevenire
          spam e abusi.
        </p>
        <p style={{ margin: 0 }}>
          Non raccolgo categorie particolari di dati fra quelle indicate dall’articolo 9 del GDPR e non chiedo dati di pagamento
          attraverso il sito.
        </p>
      </Sez>

      <Sez title="Finalità e base giuridica">
        <p style={{ margin: 0 }}>
          I dati raccolti dal modulo servono a una cosa sola: leggere la tua richiesta, risponderti e — se lo vorrai — accordarci
          su un primo incontro.
        </p>
        <p style={{ margin: 0 }}>
          La base giuridica è il tuo consenso, previsto dall’articolo 6, paragrafo 1, lettera a) del GDPR, che presti spuntando la
          casella prima dell’invio. Puoi revocarlo in qualsiasi momento scrivendo all’indirizzo indicato sopra: la revoca non
          pregiudica la liceità del trattamento svolto prima di essa.
        </p>
        <p style={{ margin: 0 }}>
          Non uso i tuoi dati per inviarti comunicazioni promozionali, non li cedo a nessuno e non li sottopongo a profilazione né
          a processi decisionali automatizzati.
        </p>
      </Sez>

      <Sez title="Se i dati sono obbligatori">
        <p style={{ margin: 0 }}>
          Nome, indirizzo email e descrizione della richiesta sono necessari: senza, non avrei modo di risponderti. Tutti gli altri
          campi sono facoltativi e servono soltanto a farmi capire meglio la situazione. Non fornire i dati necessari comporta
          unicamente l’impossibilità di dare seguito alla richiesta.
        </p>
      </Sez>

      <Sez title="Come vengono trattati">
        <p style={{ margin: 0 }}>
          Il trattamento avviene con strumenti elettronici e automatizzati, con misure tecniche e organizzative adeguate al
          rischio. Il sito è pubblicato esclusivamente in HTTPS e i dati del modulo viaggiano cifrati. I dati non vengono diffusi.
        </p>
      </Sez>

      <Sez title="A chi vengono comunicati">
        <p style={{ margin: 0 }}>
          Il sito non ha un server proprio: per funzionare si appoggia ai fornitori elencati qui sotto, che trattano i dati come
          responsabili del trattamento o, per la parte di propria competenza, come titolari autonomi.
        </p>
        <Voce nome="WEB3CREATIVE — WEB3FORMS">
          Riceve il contenuto del modulo e me lo recapita via email. Agisce come responsabile del trattamento sulla base di un
          accordo che incorpora le Clausole Contrattuali Tipo. È stabilita in India e si avvale a sua volta di Amazon Web
          Services, Cloudflare e Hetzner (Germania e Finlandia) per l’infrastruttura, e di CleanTalk e Automattic (Akismet) per il
          filtro antispam: questi ultimi ricevono l’indirizzo IP e l’indirizzo email di chi invia il modulo.
        </Voce>
        <Voce nome="GOOGLE">
          La casella di posta sulla quale ricevo le richieste è un account Gmail: i messaggi restano quindi archiviati presso
          Google. I caratteri tipografici del sito sono inoltre caricati da Google Fonts, e per farlo il tuo browser contatta i
          server di Google, che ne ricevono l’indirizzo IP.
        </Voce>
        <Voce nome="GITHUB (MICROSOFT)">
          Ospita le pagine del sito attraverso il servizio GitHub Pages e registra nei propri log tecnici l’indirizzo IP di chi le
          visita.
        </Voce>
        <p style={{ margin: 0 }}>
          Nessun altro soggetto riceve i tuoi dati. Non vengono venduti né ceduti per finalità commerciali.
        </p>
      </Sez>

      <Sez title="Trasferimento fuori dall’Unione Europea">
        <p style={{ margin: 0 }}>
          Alcuni dei fornitori elencati sopra hanno sede o infrastrutture fuori dallo Spazio Economico Europeo, in particolare
          negli Stati Uniti e in India. Il trasferimento avviene sulla base delle Clausole Contrattuali Tipo adottate dalla
          Commissione Europea con la decisione di esecuzione (UE) 2021/914 e, per i fornitori che vi aderiscono, della decisione
          di adeguatezza relativa al EU-US Data Privacy Framework.
        </p>
      </Sez>

      <Sez title="Per quanto tempo li conservo">
        <p style={{ margin: 0 }}>
          Le email con le richieste restano nella mia casella per il tempo necessario a gestire il contatto e l’eventuale percorso
          che ne consegue, e comunque non oltre due anni dall’ultimo scambio, salvo obblighi di legge.
        </p>
        <p style={{ margin: 0 }}>
          Presso Web3Forms le richieste sono soggette a cancellazione automatica entro tre anni dall’invio e restano consultabili
          nel pannello di controllo per trenta giorni.
        </p>
        <p style={{ margin: 0 }}>Puoi chiedermi in qualsiasi momento la cancellazione anticipata.</p>
      </Sez>

      <Sez title="Cookie">
        <p style={{ margin: 0 }}>
          Questo sito non usa cookie di profilazione, non ha strumenti di analisi statistica e non traccia la navigazione. Non
          viene installato alcun cookie che richieda il tuo consenso.
        </p>
      </Sez>

      <Sez title="I tuoi diritti">
        <p style={{ margin: 0 }}>
          In qualunque momento puoi esercitare i diritti riconosciuti dagli articoli da 15 a 22 del GDPR. In particolare hai
          diritto di:
        </p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <li>sapere se sto trattando dati che ti riguardano e ottenerne copia (accesso);</li>
          <li>far correggere dati inesatti o completare dati incompleti (rettifica);</li>
          <li>ottenere la cancellazione dei dati che ti riguardano (diritto all’oblio);</li>
          <li>chiedere che il trattamento sia limitato a determinate operazioni (limitazione);</li>
          <li>ricevere i dati in un formato leggibile da un dispositivo automatico (portabilità);</li>
          <li>opporti al trattamento per motivi legati alla tua situazione particolare (opposizione);</li>
          <li>revocare il consenso prestato, in ogni momento e senza dover motivare la scelta.</li>
        </ul>
        <p style={{ margin: 0 }}>
          Per esercitarli è sufficiente scrivere a <a href={mailLink}>{site.email}</a>. Ti risponderò entro un mese dalla
          richiesta.
        </p>
        <p style={{ margin: 0 }}>
          Se ritieni che il trattamento dei tuoi dati violi il Regolamento, hai inoltre diritto di proporre reclamo al Garante per
          la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>)
          o all’autorità di controllo dello Stato in cui risiedi.
        </p>
      </Sez>

      <Sez title="Modifiche a questa informativa">
        <p style={{ margin: 0 }}>
          Eventuali aggiornamenti verranno pubblicati su questa pagina, con l’indicazione della data di revisione.
        </p>
      </Sez>
    </div>
  );
}
