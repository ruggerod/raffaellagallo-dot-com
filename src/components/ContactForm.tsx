import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { color, font } from '../theme';

/** Endpoint del form. Vuoto = nessun invio, mostra solo lo stato di conferma. */
const ENDPOINT = '';

const field: CSSProperties = {
  fontFamily: 'Lato, system-ui, sans-serif', fontSize: 16, color: color.ink,
  background: color.white, border: '1px solid ' + color.pearl, borderRadius: 2,
  padding: '14px 16px', outline: 'none', width: '100%',
};
const labelText: CSSProperties = { fontFamily: font.accent, fontWeight: 500, fontSize: 11, letterSpacing: '.1em', color: color.ink };
const legend: CSSProperties = { fontFamily: font.accent, fontWeight: 500, fontSize: 10, letterSpacing: '.24em', color: color.teal, marginBottom: 14 };
const group: CSSProperties = { border: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 };
const errText: CSSProperties = { fontSize: 13, color: '#C2544D' };
const Req = () => <span style={{ color: color.tiffany }}>*</span>;

const modalitaOptions = ['Da me a Buccinasco', 'Online', 'A domicilio', 'Non lo so ancora'];
const servizi = [
  'Incontro educativo individuale',
  'Primi Passi — cuccioli',
  'Sintonia',
  'Barbone in Sintonia',
  'Incontri a domicilio',
  'K9 Cross Training',
];

type Values = Record<string, string | boolean>;

export default function ContactForm() {
  const [v, setV] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const set = (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const t = e.target as HTMLInputElement;
    setV(s => ({ ...s, [name]: t.type === 'checkbox' ? t.checked : t.value }));
    setErrors(s => ({ ...s, [name]: null }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!String(v.nome ?? '').trim()) next.nome = 'Indicami come ti chiami';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v.email ?? '').trim())) next.email = 'Serve un indirizzo email valido';
    if (!String(v.richiesta ?? '').trim()) next.richiesta = 'Raccontami brevemente cosa vi porta qui';
    if (!v.privacy) next.privacy = 'Necessario per poterti rispondere';
    if (Object.keys(next).length) { setErrors(next); return; }

    if (ENDPOINT) {
      setBusy(true);
      try {
        await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) });
      } finally { setBusy(false); }
    }
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (sent) {
    return (
      <section style={{ margin: '36px 0 0', background: color.white, borderTop: '2px solid ' + color.tiffany, border: '1px solid ' + color.pearl, borderTopWidth: 2, borderTopColor: color.tiffany, padding: '44px 30px', maxWidth: 620 }}>
        <p style={{ fontFamily: font.accent, fontSize: 10, letterSpacing: '.24em', color: color.teal }}>RICHIESTA INVIATA</p>
        <h2 style={{ fontFamily: font.display, fontSize: 'clamp(24px, 5.4vw, 32px)', lineHeight: 1.25, marginTop: 16 }}>Grazie per avermi raccontato qualcosa di voi.</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: color.body, marginTop: 16 }}>Leggo personalmente ogni richiesta e ti risponderò appena possibile durante i miei giorni lavorativi.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: color.body, marginTop: 14 }}>Se inizieremo un percorso insieme, troveremo anche il modo più adatto per restare in contatto tra un incontro e l’altro, secondo le modalità previste dal percorso scelto.</p>
      </section>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{ maxWidth: 620, marginTop: 36, display: 'flex', flexDirection: 'column', gap: 34 }}>
      <fieldset style={group}>
        <legend style={legend}>I TUOI DATI</legend>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={labelText}>Nome e cognome <Req /></span>
          <input type="text" className="fieldInput" autoComplete="name" value={String(v.nome ?? '')} onChange={set('nome')} style={field} />
          {errors.nome && <span style={errText}>{errors.nome}</span>}
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={labelText}>Email <Req /></span>
          <input type="email" className="fieldInput" autoComplete="email" value={String(v.email ?? '')} onChange={set('email')} style={field} />
          {errors.email && <span style={errText}>{errors.email}</span>}
        </label>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={labelText}>Telefono</span>
            <input type="tel" className="fieldInput" autoComplete="tel" value={String(v.telefono ?? '')} onChange={set('telefono')} style={field} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={labelText}>Località</span>
            <input type="text" className="fieldInput" placeholder="Comune o zona" value={String(v.localita ?? '')} onChange={set('localita')} style={field} />
          </label>
        </div>
      </fieldset>

      <fieldset style={group}>
        <legend style={legend}>IL TUO CANE</legend>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={labelText}>Nome, età, razza o incrocio, carattere</span>
          <textarea rows={4} className="fieldInput" placeholder="Anche poche righe vanno benissimo." value={String(v.cane ?? '')} onChange={set('cane')} style={{ ...field, lineHeight: 1.6, resize: 'vertical' }} />
        </label>
      </fieldset>

      <fieldset style={group}>
        <legend style={legend}>LA TUA RICHIESTA</legend>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={labelText}>Che cosa vorresti affrontare o approfondire? <Req /></span>
          <textarea rows={5} className="fieldInput" value={String(v.richiesta ?? '')} onChange={set('richiesta')} style={{ ...field, lineHeight: 1.6, resize: 'vertical' }} />
          {errors.richiesta && <span style={errText}>{errors.richiesta}</span>}
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={labelText}>Quale servizio ti interessa?</span>
          <select className="fieldInput" value={String(v.servizio ?? '')} onChange={set('servizio')} style={{
            ...field,
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' fill='none' stroke='%232799A4' stroke-width='1.6'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            paddingRight: 44,
          }}>
            <option value="">Non lo so ancora</option>
            {servizi.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={labelText}>Come preferiresti svolgere gli incontri?</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {modalitaOptions.map(o => (
              <label key={o} className="hoverCard" style={{ display: 'flex', alignItems: 'center', gap: 9, background: color.white, border: '1px solid ' + color.pearl, borderRadius: 2, padding: '12px 16px', fontSize: 14.5, color: color.body, cursor: 'pointer' }}>
                <input type="radio" name="modalita" value={o} checked={v.modalita === o} onChange={set('modalita')} style={{ accentColor: color.tiffany, margin: 0 }} />
                {o}
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, borderTop: '1px solid ' + color.pearl, paddingTop: 26 }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14.5, lineHeight: 1.6, color: color.body, cursor: 'pointer' }}>
          <input type="checkbox" checked={Boolean(v.privacy)} onChange={set('privacy')} style={{ accentColor: color.tiffany, margin: '3px 0 0', width: 17, height: 17, flex: 'none' }} />
          <span>Ho letto e accetto l’<Link to="/privacy-policy/">informativa sulla privacy</Link>. <Req /></span>
        </label>
        {errors.privacy && <span style={{ ...errText, marginTop: -10 }}>{errors.privacy}</span>}
        <button type="submit" className="btn" disabled={busy} style={{ alignSelf: 'flex-start', background: color.tiffany, color: '#fff', border: 'none', fontFamily: font.accent, fontWeight: 500, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', padding: '18px 34px', borderRadius: 2, cursor: 'pointer' }}>
          {busy ? 'Invio…' : 'Invia la richiesta'}
        </button>
        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: color.muted }}>I campi con <Req /> sono necessari. Rispondo personalmente a ogni richiesta nei giorni lavorativi.</p>
      </div>
    </form>
  );
}
