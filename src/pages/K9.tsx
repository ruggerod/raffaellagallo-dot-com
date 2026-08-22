import { Eyebrow, H1, Sub, Prose, Photo, Multi, Cta } from '../components/ui';
import { k9Blocks } from '../data/content';
import { color, font, waLink } from '../theme';

const priceCards = [
  { label: 'INCONTRO INDIVIDUALE', detail: '60 minuti\nPresso di me oppure online', price: '50 €' },
  { label: 'PERCORSO 5 INCONTRI', detail: '5 incontri individuali da 60 minuti\nValidità: 2 mesi', price: '225 €' },
];

export default function K9() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>MOVIMENTO E BENESSERE</Eyebrow>
        <H1>K9 Cross Training</H1>
        <Sub>Il movimento come parte del benessere</Sub>
        <Prose style={{ marginTop: 24 }}>
          <p>Quando pensiamo al benessere di un cane, spesso ci concentriamo sulla passeggiata, sul gioco e sull’attività mentale. Ma anche <strong>il modo in cui il cane utilizza il proprio corpo</strong> merita attenzione.</p>
          <p>Il K9 Cross Training è un’attività di preparazione fisica che attraverso esercizi strutturati lavora su movimento, coordinazione, equilibrio e consapevolezza corporea.</p>
          <p>Non significa semplicemente “far stancare il cane” e non è una gara di abilità.</p>
          <p>Significa proporgli un’attività costruita sulle sue caratteristiche, sulle sue capacità e sugli obiettivi che vogliamo raggiungere insieme.</p>
        </Prose>
      </section>

      <Photo label="foto — cane in movimento / esercizio" ratio="1/1" max={460} />

      <section style={{ padding: '44px 0 0', display: 'grid', gap: 16 }}>
        {k9Blocks.map(b => (
          <div key={b.title} style={{ background: color.white, border: '1px solid ' + color.pearl, padding: '28px 24px' }}>
            <h2 style={{ fontFamily: font.accent, fontSize: 11.5, letterSpacing: '.2em', color: color.teal, lineHeight: 1.6 }}>{b.title}</h2>
            <div style={{ height: 1, background: color.pearl, margin: '16px 0 18px' }} />
            <Multi text={b.body} />
          </div>
        ))}
      </section>

      <section style={{ padding: '44px 0 0' }}>
        <h2 style={{ fontFamily: font.accent, fontSize: 11, letterSpacing: '.24em', color: color.teal }}>INCONTRI E TARIFFE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16, marginTop: 20 }}>
          {priceCards.map(c => (
            <div key={c.label} style={{ background: color.pearl, padding: '26px 22px' }}>
              <p style={{ fontFamily: font.accent, fontSize: 10.5, letterSpacing: '.18em', color: color.ink }}>{c.label}</p>
              <p style={{ fontSize: 15, color: color.body, marginTop: 12, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.detail}</p>
              <p style={{ fontFamily: font.display, fontSize: 38, color: color.teal, marginTop: 14 }}>{c.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: '48px -20px 0', background: color.tiffany, color: '#fff', padding: '48px 26px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontFamily: font.display, fontSize: 'clamp(22px, 5.4vw, 30px)', lineHeight: 1.3 }}>Vuoi provare il K9 Cross Training?</h2>
          <p style={{ fontSize: 15.8, lineHeight: 1.8, marginTop: 16, color: 'rgba(255,255,255,.92)' }}>
            Non è necessario sapere già quali esercizi siano adatti al tuo cane. Partiremo da lui: dalle sue caratteristiche, dalle sue capacità e da ciò che vogliamo costruire insieme.
          </p>
          <Cta href={waLink} tone="onDark">Richiedi un incontro</Cta>
        </div>
      </section>
    </div>
  );
}
