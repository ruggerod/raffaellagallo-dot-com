import { Eyebrow, H1 } from '../components/ui';
import { testimonials } from '../data/content';
import { color, font } from '../theme';

export default function Dicono() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>TESTIMONIANZE</Eyebrow>
        <H1>Dicono di me</H1>
      </section>
      <section style={{ padding: '32px 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
        {testimonials.map(t => (
          <div key={t.name} style={{ background: color.white, border: '1px solid ' + color.pearl, padding: '30px 26px' }}>
            <span style={{ fontFamily: font.display, fontSize: 38, lineHeight: 0, color: color.tiffany, display: 'block' }}>“</span>
            <p style={{ fontSize: 15.8, lineHeight: 1.8, color: color.body, marginTop: 20, whiteSpace: 'pre-line', textWrap: 'pretty' }}>{t.text}</p>
            <p style={{ fontFamily: font.display, fontSize: 19, color: color.teal, marginTop: 20 }}>{t.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
