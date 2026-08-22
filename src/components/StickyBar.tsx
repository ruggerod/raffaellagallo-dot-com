import { color, font, waLink, igLink, mailLink } from '../theme';

const base = {
  flex: 1, textAlign: 'center' as const, fontFamily: font.accent, fontSize: 10.5,
  letterSpacing: '.16em', padding: '20px 8px', minHeight: 56,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

export default function StickyBar() {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, display: 'flex', gap: 1, background: color.pearl, boxShadow: '0 -6px 20px rgba(37,40,42,.08)' }}>
      <a href={waLink} target="_blank" rel="noopener" style={{ ...base, background: color.tiffany, color: '#fff' }}>WHATSAPP</a>
      <a href={igLink} target="_blank" rel="noopener" style={{ ...base, background: color.ivory, color: color.teal }}>INSTAGRAM</a>
      <a href={mailLink} style={{ ...base, background: color.ivory, color: color.ink }}>EMAIL</a>
    </div>
  );
}
