import { Link } from 'react-router-dom';
import { Eyebrow, H1, Cta } from '../components/ui';
import { routes } from '../routes';
import { color, font } from '../theme';

export default function NotFound() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>PAGINA NON TROVATA</Eyebrow>
        <H1>Qui non c’è niente</H1>
        <p style={{ fontSize: 16.5, lineHeight: 1.8, color: color.body, marginTop: 22, maxWidth: '52ch', textWrap: 'pretty' }}>
          L’indirizzo che hai aperto non corrisponde a nessuna pagina del sito. Può darsi che sia
          cambiato o che ci sia un errore di battitura.
        </p>
        <Cta href="/">TORNA ALLA HOME</Cta>
      </section>

      <section style={{ padding: '40px 0 0' }}>
        <div style={{ height: 1, background: color.pearl, marginBottom: 24 }} />
        <p style={{ fontFamily: font.accent, fontSize: 10.5, letterSpacing: '.2em', color: color.teal }}>TUTTE LE PAGINE</p>
        <nav style={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}>
          {routes.filter(r => r.inNav).map(r => (
            <Link
              key={r.path}
              to={r.path}
              className="navLink"
              style={{
                borderBottom: '1px solid ' + color.pearl, color: color.ink,
                fontFamily: font.accent, fontSize: 12, letterSpacing: '.14em',
                textTransform: 'uppercase', padding: '15px 2px',
              }}
            >
              {r.label}
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
}
