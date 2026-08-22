import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { color, font, site, waLink, igLink, mailLink } from '../theme';

const link = { fontSize: 14.5, color: 'rgba(250,249,246,.75)' } as const;

export default function Footer({ sticky }: { sticky: boolean }) {
  return (
    <footer style={{ background: color.ink, color: color.ivory, padding: sticky ? '52px 20px 110px' : '52px 20px 56px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
        <div>
          <p style={{ fontFamily: font.display, fontSize: 19, letterSpacing: '.1em' }}>RAFFAELLA GALLO</p>
          <p style={{ fontFamily: font.accent, fontSize: 8.5, letterSpacing: '.34em', color: color.tiffany, marginTop: 6 }}>- PET COACH -</p>
          <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'rgba(250,249,246,.66)', marginTop: 18 }}>
            {site.city}<br />{site.email}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ fontFamily: font.accent, fontSize: 10, letterSpacing: '.2em', color: color.tiffany }}>NAVIGAZIONE</p>
          {routes.filter(r => r.inNav).map(r => (
            <Link key={r.path} to={r.path} className="footLink" style={link}>{r.label}</Link>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ fontFamily: font.accent, fontSize: 10, letterSpacing: '.2em', color: color.tiffany }}>SEGUIMI</p>
          <a href={igLink} target="_blank" rel="noopener" className="footLink" style={link}>Instagram</a>
          <a href={waLink} target="_blank" rel="noopener" className="footLink" style={link}>WhatsApp</a>
          <a href={mailLink} className="footLink" style={link}>Email</a>
          <Link to="/privacy-policy/" className="footLink" style={{ fontSize: 13, color: 'rgba(250,249,246,.45)', marginTop: 12 }}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
