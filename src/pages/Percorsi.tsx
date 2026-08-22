import { Eyebrow, H1, Prose, Card, Multi, Band, Cta } from '../components/ui';
import { percorsiBlocks } from '../data/content';
import { color, font, waLink } from '../theme';

export default function Percorsi() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>PERCORSI</Eyebrow>
        <H1 style={{ fontSize: 'clamp(29px, 7vw, 46px)', lineHeight: 1.14, maxWidth: '26ch' }}>
          Ogni cane è diverso. Anche il percorso che costruiremo insieme.
        </H1>
        <Prose style={{ marginTop: 26, gap: 16 }}>
          <p>Ogni famiglia arriva con una storia diversa.</p>
          <p>C’è chi sta per accogliere un cucciolo.</p>
          <p>Chi fatica durante le passeggiate.</p>
          <p>Chi desidera semplicemente capire meglio il proprio cane.</p>
          <p>Per questo motivo non troverai percorsi uguali per tutti.</p>
          <p>Ogni percorso nasce dall’osservazione, dall’ascolto e dagli obiettivi che costruiremo insieme.</p>
        </Prose>
      </section>

      <section style={{ padding: '44px 0 0', display: 'grid', gap: 16 }}>
        {percorsiBlocks.map(b => (
          <Card key={b.title} accentTop>
            <h2 style={{ fontFamily: font.display, fontSize: 'clamp(22px, 5.2vw, 30px)', lineHeight: 1.25 }}>{b.title}</h2>
            <p style={{ fontFamily: font.display, fontStyle: 'italic', fontSize: 17, color: color.teal, marginTop: 10 }}>{b.sub}</p>
            <Multi text={b.body} style={{ marginTop: 16 }} />
          </Card>
        ))}
      </section>

      <Band tone="pearl">
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: font.display, fontSize: 'clamp(20px, 4.8vw, 28px)', lineHeight: 1.4, maxWidth: '30ch', margin: '0 auto' }}>
            Non inizieremo dal seduto. Inizieremo dal capire chi abbiamo davanti.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, color: color.body, marginTop: 18, maxWidth: '44ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Non è necessario sapere quale percorso scegliere: il primo passo è conoscerci. Raccontami la vostra storia e capiremo insieme da dove iniziare.
          </p>
          <Cta href={waLink}>Prenota il primo incontro</Cta>
        </div>
      </Band>
    </div>
  );
}
