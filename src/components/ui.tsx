import type { ReactNode, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { color, font } from '../theme';

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p style={{ fontFamily: font.accent, fontSize: 9.5, letterSpacing: '.3em', color: color.teal }}>{children}</p>
);

export const H1 = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <h1 style={{ fontFamily: font.display, fontSize: 'clamp(32px, 8vw, 56px)', lineHeight: 1.08, marginTop: 18, ...style }}>{children}</h1>
);

export const H2 = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <h2 style={{ fontFamily: font.display, fontSize: 'clamp(24px, 6vw, 36px)', lineHeight: 1.2, ...style }}>{children}</h2>
);

export const Sub = ({ children }: { children: ReactNode }) => (
  <p style={{ fontFamily: font.display, fontStyle: 'italic', fontSize: 'clamp(18px, 4.4vw, 24px)', color: color.teal, marginTop: 14, lineHeight: 1.35 }}>{children}</p>
);

/** Blocco di paragrafi con ritmo di lettura costante. */
export const Prose = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{ maxWidth: '60ch', fontSize: 16.5, lineHeight: 1.8, color: color.body, display: 'flex', flexDirection: 'column', gap: 18, ...style }}>
    {children}
  </div>
);

export const Rule = ({ style }: { style?: CSSProperties }) => (
  <div style={{ height: 1, background: color.pearl, ...style }} />
);

/** Testo multi-riga: rispetta i ritorni a capo del contenuto. */
export const Multi = ({ text, style }: { text: string; style?: CSSProperties }) => (
  <p style={{ fontSize: 15.8, lineHeight: 1.8, color: color.body, whiteSpace: 'pre-line', textWrap: 'pretty', ...style } as CSSProperties}>{text}</p>
);

export const Band = ({ children, tone = 'tiffany' }: { children: ReactNode; tone?: 'tiffany' | 'pearl' }) => (
  <section style={{
    margin: '56px -20px 0',
    background: tone === 'tiffany' ? color.tiffany : color.pearl,
    color: tone === 'tiffany' ? '#fff' : color.ink,
    padding: '52px 26px',
  }}>
    <div style={{ maxWidth: 640, margin: '0 auto' }}>{children}</div>
  </section>
);

export const Cta = ({ href, children, tone = 'solid' }: { href: string; children: ReactNode; tone?: 'solid' | 'ghost' | 'onDark' }) => {
  const styles: Record<string, CSSProperties> = {
    solid: { background: color.tiffany, color: '#fff' },
    ghost: { border: '1px solid ' + color.teal, color: color.teal },
    onDark: { background: '#fff', color: color.teal },
  };
  const s: CSSProperties = {
    display: 'inline-block', marginTop: 24, fontFamily: font.accent, fontSize: 11,
    letterSpacing: '.18em', textTransform: 'uppercase', padding: '17px 30px',
    borderRadius: 2, ...styles[tone],
  };
  const cls = tone === 'ghost' ? 'btnGhost' : tone === 'solid' ? 'btn' : undefined;
  if (href.startsWith('/')) return <Link to={href} className={cls} style={s}>{children}</Link>;
  return <a href={href} target="_blank" rel="noopener" className={cls} style={s}>{children}</a>;
};

/** Foto inserita nel flusso della colonna di testo. */
export const Shot = ({ src, alt, ratio = '3/2', max, position = '50% 45%', style }: { src: string; alt: string; ratio?: string; max?: number; position?: string; style?: CSSProperties }) => (
  <figure style={{ margin: '28px 0 0', aspectRatio: ratio, maxHeight: max, overflow: 'hidden', background: color.pearl, ...style }}>
    <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }} />
  </figure>
);

/** Foto a tutta larghezza, esce dai margini del contenitore. */
export const BleedShot = ({ src, alt, position = '50% 45%', style }: { src: string; alt: string; position?: string; style?: CSSProperties }) => (
  <figure style={{ margin: 0, marginInline: 'calc(50% - 50vw)', width: '100vw', height: 'clamp(280px, 42vw, 520px)', overflow: 'hidden', background: color.pearl, ...style }}>
    <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }} />
  </figure>
);

export const Card = ({ children, accentTop = false }: { children: ReactNode; accentTop?: boolean }) => (
  <div style={{
    background: color.white,
    border: '1px solid ' + color.pearl,
    borderTop: accentTop ? '2px solid ' + color.tiffany : '1px solid ' + color.pearl,
    padding: '30px 24px',
  }}>
    {children}
  </div>
);
