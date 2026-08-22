import { Link } from 'react-router-dom';
import { color, font } from '../theme';

export default function StickyBar() {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, background: color.pearl, boxShadow: '0 -6px 20px rgba(37,40,42,.08)' }}>
      <Link
        to="/contact/"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', fontFamily: font.accent, fontSize: 10.5,
          letterSpacing: '.16em', padding: '20px 8px', minHeight: 56,
          background: color.tiffany, color: '#fff',
        }}
      >
        RICHIEDI UN INCONTRO
      </Link>
    </div>
  );
}
