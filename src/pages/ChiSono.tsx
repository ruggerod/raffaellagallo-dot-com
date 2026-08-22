import { Eyebrow, H1, H2, Prose, Photo, Rule, Band } from '../components/ui';
import { color, font } from '../theme';

export default function ChiSono() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>CHI SONO</Eyebrow>
        <H1>Piacere, sono Raffaella.</H1>
      </section>

      <Photo label="ritratto — Raffaella" ratio="3/4" max={480} />

      <Prose style={{ padding: '36px 0 0' }}>
        <p>Da bambina passavo ore davanti ai cartoni Disney sognando di avere un cane tutto mio. Quando avevo otto anni è arrivato Fliz, un piccolo Barbone bianco che ha cambiato la mia vita.</p>
        <p>Il mio primo maestro non è stato un educatore cinofilo.</p>
        <p>È stato proprio lui.</p>
        <p>Non era un cane facile: scappava, ringhiava e metteva spesso alla prova tutta la famiglia. Eppure è stato lui a insegnarmi, molto prima di iniziare questo lavoro, che dietro ogni comportamento c’è sempre qualcosa da capire.</p>
        <p>Qualche anno più tardi è arrivato Eddy e le passeggiate con loro erano tutto tranne che rilassanti. Tiravano, abbaiavano, si agitavano e spesso finivano per litigare tra loro. Cercando un aiuto, sono entrata per la prima volta nel mondo della SIUA (Scuola Interazione Uomo Animale). Pensavo di imparare a insegnare qualche esercizio ai miei cani. Invece ho scoperto un modo completamente diverso di guardare la relazione con loro.</p>
        <p>È lì che ho capito una cosa che ancora oggi guida il mio lavoro.</p>
      </Prose>

      <p style={{ fontFamily: font.display, fontSize: 'clamp(21px, 5vw, 30px)', lineHeight: 1.4, color: color.ink, marginTop: 30, maxWidth: '34ch' }}>
        Il problema non era insegnare un “seduto”. Il seduto è solo la punta dell’iceberg.
      </p>
      <p style={{ fontSize: 16.5, lineHeight: 1.8, color: color.body, marginTop: 18 }}>Prima bisogna capire chi abbiamo davanti.</p>

      <section style={{ padding: '56px 0 0' }}>
        <Rule style={{ marginBottom: 34 }} />
        <H2>Il mio modo di lavorare</H2>
        <Prose style={{ marginTop: 20 }}>
          <p>Non credo che educare un cane significhi semplicemente insegnargli cosa fare.</p>
          <p>Credo significhi prima di tutto aiutare due specie diverse a comprendersi.</p>
          <p>Quando decidiamo di vivere con un cane, spesso pensiamo che sia lui a doversi adattare a noi. Io credo che una relazione funzioni davvero quando anche la persona impara a leggere il cane, le sue emozioni, le sue motivazioni e il suo modo di comunicare.</p>
          <p>Una volta costruita questa sintonia, insegnare le competenze pratiche diventa molto più semplice e naturale.</p>
          <p style={{ color: color.ink, fontWeight: 700 }}>Il mio lavoro consiste nel sintonizzare la persona con il cane e poi il cane con la persona.</p>
          <p>È lì che nasce una relazione serena.</p>
        </Prose>
      </section>

      <section style={{ padding: '52px 0 0' }}>
        <Rule style={{ marginBottom: 34 }} />
        <H2>Continuo a imparare</H2>
        <Prose style={{ marginTop: 20 }}>
          <p>Da allora non ho mai smesso di studiare.</p>
          <p>La cinofilia è una parte fondamentale della mia vita, ma continuo a formarmi attraverso corsi, letture, seminari, esperienze sul campo e il percorso universitario che sto seguendo in Scienze della Formazione e dell’Educazione.</p>
          <p>Credo che chi lavora con il comportamento del cane non smetta mai di imparare.</p>
          <p>Ogni cane, ogni famiglia e ogni esperienza continuano a insegnarmi qualcosa.</p>
        </Prose>
      </section>

      <section style={{ padding: '52px 0 0' }}>
        <Rule style={{ marginBottom: 34 }} />
        <H2>La mia casa</H2>
        <Prose style={{ marginTop: 20 }}>
          <p>Oggi vivo con cinque Barboni Grande mole, ognuno con una personalità diversa.</p>
          <p>Sono loro i miei insegnanti più sinceri.</p>
          <p>Ogni giorno mi ricordano che non esistono ricette valide per tutti.</p>
          <p>Esistono osservazione, pazienza, flessibilità e rispetto.</p>
          <p>Sono gli stessi valori che porto in ogni percorso insieme alle persone che scelgono di affidarsi a me.</p>
        </Prose>
      </section>

      <Band tone="pearl">
        <p style={{ fontFamily: font.display, fontStyle: 'italic', fontSize: 'clamp(20px, 5vw, 29px)', lineHeight: 1.45, maxWidth: '30ch', margin: '0 auto', textAlign: 'center' }}>
          “Non cerco di costruire cani perfetti. Cerco di aiutare persone e cani a comprendersi davvero.”
        </p>
      </Band>
    </div>
  );
}
