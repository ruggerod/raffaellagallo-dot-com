import { Eyebrow, H1 } from '../components/ui';
import ContactForm from '../components/ContactForm';
import { color, font, site } from '../theme';

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

      <ContactForm />

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
