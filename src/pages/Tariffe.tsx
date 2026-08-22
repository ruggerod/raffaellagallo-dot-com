import { Eyebrow, H1, Prose, Card, Multi, Cta } from '../components/ui';
import { tariffeBlocks, infoBlocks } from '../data/content';
import { color, font, waLink } from '../theme';

export default function Tariffe() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>SERVIZI E TARIFFE</Eyebrow>
        <H1 style={{ fontSize: 'clamp(29px, 7vw, 46px)', lineHeight: 1.14, maxWidth: '26ch' }}>
          Percorsi costruiti sul cane, sulla persona e sulla loro vita insieme
        </H1>
        <Prose style={{ marginTop: 24, gap: 16 }}>
          <p>Ogni cane è diverso, così come lo sono le persone che vivono con lui.</p>
          <p>Per questo non lavoro attraverso protocolli standardizzati: ogni percorso parte dall’osservazione del cane, del suo contesto di vita e delle esigenze della famiglia, per costruire insieme obiettivi realistici e realmente utili nella quotidianità.</p>
          <p>Gli incontri possono svolgersi presso di me a <strong>Buccinasco</strong>, online oppure, quando necessario, a domicilio.</p>
          <p>Ho scelto di indicare chiaramente le mie tariffe perché credo che anche la trasparenza faccia parte di un buon rapporto professionale.</p>
        </Prose>
      </section>

      <section style={{ padding: '40px 0 0', display: 'grid', gap: 16 }}>
        {tariffeBlocks.map(b => (
          <Card key={b.title} accentTop>
            <h2 style={{ fontFamily: font.display, fontSize: 'clamp(23px, 5.4vw, 32px)', lineHeight: 1.2 }}>{b.title}</h2>
            <p style={{ fontFamily: font.display, fontStyle: 'italic', fontSize: 17, color: color.teal, marginTop: 8 }}>{b.sub}</p>
            <Multi text={b.body} style={{ marginTop: 16 }} />
            {b.map && (
              <figure style={{ margin: '22px 0 0', background: color.pearl }}>
                <img src={b.map} alt="Mappa delle zone di intervento a domicilio, suddivise in tre fasce" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </figure>
            )}
            {b.bodyAfter && <Multi text={b.bodyAfter} style={{ marginTop: 16 }} />}
            <p style={{ fontFamily: font.display, fontSize: 40, color: color.ink, marginTop: 18 }}>{b.price}</p>
          </Card>
        ))}
      </section>

      <section style={{ padding: '44px 0 0' }}>
        <h2 style={{ fontFamily: font.accent, fontSize: 11, letterSpacing: '.24em', color: color.teal }}>INFORMAZIONI UTILI</h2>
        <div style={{ display: 'grid', gap: 2, marginTop: 20 }}>
          {infoBlocks.map(b => (
            <div key={b.title} style={{ background: color.pearl, padding: '24px 22px' }}>
              <h3 style={{ fontFamily: font.display, fontSize: 21 }}>{b.title}</h3>
              <Multi text={b.body} style={{ fontSize: 15.5, marginTop: 12 }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: '48px -20px 0', background: color.tiffany, color: '#fff', padding: '48px 26px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontFamily: font.display, fontSize: 'clamp(23px, 5.6vw, 32px)' }}>Non sai da dove iniziare?</h2>
          <p style={{ fontSize: 15.8, lineHeight: 1.8, marginTop: 16, color: 'rgba(255,255,255,.92)' }}>
            Non è necessario sapere già quale percorso scegliere. Raccontami brevemente chi è il tuo cane, la sua età e che cosa vorresti migliorare o approfondire. Ti aiuterò a individuare la soluzione più adatta.
          </p>
          <Cta href={waLink} tone="onDark">Richiedi un primo incontro</Cta>
        </div>
      </section>
    </div>
  );
}
