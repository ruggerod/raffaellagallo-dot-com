import { Eyebrow, H1 } from '../components/ui';
import { color, font, site, waLink, igLink, mailLink } from '../theme';

const rows = [
  { href: waLink, label: 'SCRIVIMI SU WHATSAPP', detail: 'Risposta rapida, direttamente dal telefono', solid: true },
  { href: igLink, label: 'SEGUIMI SU INSTAGRAM', detail: '@' + site.instagram, solid: false },
  { href: mailLink, label: 'EMAIL', detail: site.email, solid: false },
];

export default function Contatti() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>CONTATTI</Eyebrow>
        <H1>Iniziamo da qui</H1>
        <p style={{ fontSize: 16.5, lineHeight: 1.8, color: color.body, marginTop: 22, maxWidth: '52ch', textWrap: 'pretty' }}>
          Raccontami brevemente chi è il tuo cane e che cosa vi porta qui. Non è necessario sapere già quale percorso scegliere: dalle informazioni che mi darai potrò aiutarti a individuare quello più adatto.
        </p>
      </section>

      <section style={{ padding: '32px 0 0', display: 'grid', gap: 12 }}>
        {rows.map(r => (
          <a
            key={r.label}
            href={r.href}
            target={r.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener"
            className={r.solid ? 'btn' : 'hoverCard'}
            style={{
              background: r.solid ? color.tiffany : color.white,
              border: r.solid ? 'none' : '1px solid ' + color.pearl,
              color: r.solid ? '#fff' : color.ink,
              padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            }}
          >
            <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ fontFamily: font.accent, fontSize: 11, letterSpacing: '.2em', color: r.solid ? '#fff' : color.teal }}>{r.label}</span>
              <span style={{ fontSize: 14.5, color: r.solid ? 'rgba(255,255,255,.9)' : color.body }}>{r.detail}</span>
            </span>
            <span style={{ fontFamily: font.display, fontSize: 26, color: r.solid ? '#fff' : color.teal }}>→</span>
          </a>
        ))}
      </section>

      <section style={{ padding: '40px 0 0' }}>
        <div style={{ height: 1, background: color.pearl, marginBottom: 24 }} />
        <p style={{ fontFamily: font.accent, fontSize: 10.5, letterSpacing: '.2em', color: color.teal }}>DOVE MI TROVI</p>
        <p style={{ fontSize: 16.5, lineHeight: 1.9, color: color.body, marginTop: 12 }}>
          {site.city}<br />Incontri presso di me, online e a domicilio.<br />Dal lunedì al sabato, su appuntamento.
        </p>
      </section>
    </div>
  );
}
