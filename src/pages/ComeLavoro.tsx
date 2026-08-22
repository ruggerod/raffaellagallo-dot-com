import { Eyebrow, H1, Prose, Multi, Band } from '../components/ui';
import { principi } from '../data/content';
import { color, font } from '../theme';

export default function ComeLavoro() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>METODO</Eyebrow>
        <H1>Come lavoro</H1>
        <Prose style={{ marginTop: 26 }}>
          <p>Ogni cane è diverso.</p>
          <p>Ogni famiglia è diversa.</p>
          <p>Per questo non credo nei percorsi standard o nelle soluzioni preconfezionate.</p>
          <p>Prima di insegnare un esercizio, mi interessa capire chi ho davanti.</p>
          <p>Osservo il cane, ascolto la famiglia e costruisco un percorso su misura, rispettando i tempi di entrambi.</p>
          <p>Il mio obiettivo non è avere un cane perfetto, ma aiutare le persone a comprenderlo davvero, perché una relazione solida nasce prima di tutto dalla conoscenza reciproca.</p>
        </Prose>
      </section>

      <section style={{ padding: '46px 0 0', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {principi.map(p => (
          <div key={p.n} style={{ background: color.white, border: '1px solid ' + color.pearl, padding: '26px 24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <span style={{ fontFamily: font.display, fontSize: 30, color: color.tiffany, lineHeight: 1, minWidth: 34 }}>{p.n}</span>
            <div>
              <h3 style={{ fontFamily: font.display, fontSize: 20, lineHeight: 1.3 }}>{p.title}</h3>
              <Multi text={p.body} style={{ fontSize: 15.5, marginTop: 10 }} />
            </div>
          </div>
        ))}
      </section>

      <Band>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: font.display, fontSize: 'clamp(21px, 5.4vw, 32px)', lineHeight: 1.35 }}>Osservare. Comprendere. Costruire sintonia.</p>
          <p style={{ fontFamily: font.accent, fontSize: 10, letterSpacing: '.24em', marginTop: 20, color: 'rgba(255,255,255,.85)' }}>RAFFAELLA GALLO</p>
        </div>
      </Band>
    </div>
  );
}
