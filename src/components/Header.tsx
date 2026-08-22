import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../routes';
import { color, font, waLink, igLink } from '../theme';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const nav = routes.filter(r => r.inNav);

  const go = (path: string) => () => { setOpen(false); navigate(path); };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(250,249,246,.94)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid ' + color.pearl,
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <Link to="/" onClick={() => setOpen(false)} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <span style={{ fontFamily: font.display, fontSize: 19, letterSpacing: '.1em', color: color.ink, lineHeight: 1 }}>RAFFAELLA GALLO</span>
          <span style={{ fontFamily: font.accent, fontSize: 8.5, letterSpacing: '.34em', color: color.teal }}>- PET COACH -</span>
        </Link>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          style={{
            border: '1px solid ' + color.pearl, background: color.white, borderRadius: 999,
            width: 44, height: 44, display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 4, cursor: 'pointer', padding: 0,
          }}
        >
          {[0, 1, 2].map(i => <span key={i} style={{ width: 16, height: 1.5, background: color.ink, display: 'block' }} />)}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid ' + color.pearl, background: color.ivory, padding: '10px 20px 22px', animation: 'fadeUp .25s ease both' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            {nav.map(r => (
              <button
                key={r.path}
                className="navLink"
                onClick={go(r.path)}
                style={{
                  background: 'none', border: 'none', borderBottom: '1px solid ' + color.pearl,
                  textAlign: 'left', cursor: 'pointer', color: color.ink,
                  fontFamily: font.accent, fontSize: 12, letterSpacing: '.14em',
                  textTransform: 'uppercase', padding: '15px 2px',
                }}
              >
                {r.label}
              </button>
            ))}
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <a href={waLink} target="_blank" rel="noopener" style={{ flex: 1, textAlign: 'center', background: color.tiffany, color: '#fff', fontFamily: font.accent, fontSize: 10.5, letterSpacing: '.14em', padding: '15px 10px', borderRadius: 2 }}>WHATSAPP</a>
              <a href={igLink} target="_blank" rel="noopener" style={{ flex: 1, textAlign: 'center', border: '1px solid ' + color.teal, color: color.teal, fontFamily: font.accent, fontSize: 10.5, letterSpacing: '.14em', padding: '15px 10px', borderRadius: 2 }}>INSTAGRAM</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
