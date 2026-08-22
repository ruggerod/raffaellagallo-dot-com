import { color, font } from '../theme';

export default function Privacy() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0', maxWidth: '60ch' }}>
        <h1 style={{ fontFamily: font.display, fontSize: 'clamp(30px, 7.4vw, 48px)', lineHeight: 1.1 }}>Privacy Policy</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: color.body, marginTop: 22 }}>
          Questa pagina raccoglierà l’informativa privacy del sito. Il testo attuale è pubblicato su WordPress: da recuperare e inserire qui integralmente.
        </p>
        <p style={{ fontFamily: font.mono, fontSize: 11, color: color.muted, marginTop: 20, lineHeight: 1.8 }}>
          placeholder — testo informativa da recuperare
        </p>
      </section>
    </div>
  );
}
