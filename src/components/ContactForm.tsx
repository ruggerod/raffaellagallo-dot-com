import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { color, font, site, mailLink } from '../theme';

/** Web3Forms: la richiesta arriva via email a site.email. La chiave sta in theme.ts. */
const ENDPOINT = 'https://api.web3forms.com/submit';

const errColor = '#C2544D';

const field: CSSProperties = {
  fontFamily: 'Lato, system-ui, sans-serif', fontSize: 16, color: color.ink,
  background: color.white, border: '1px solid ' + color.pearl, borderRadius: 2,
  padding: '14px 16px', outline: 'none', width: '100%',
};
const labelText: CSSProperties = { fontFamily: font.accent, fontWeight: 500, fontSize: 11, letterSpacing: '.1em', color: color.ink };
const legend: CSSProperties = { fontFamily: font.accent, fontWeight: 500, fontSize: 10, letterSpacing: '.24em', color: color.teal, marginBottom: 14 };
const group: CSSProperties = { border: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 };
const errText: CSSProperties = { fontSize: 13, color: errColor };
/** Fuori dallo schermo ma non display:none, che i bot riconoscono. */
const honeypot: CSSProperties = { position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 };
const Req = () => <span style={{ color: color.tiffany }}>*</span>;

const ERR_RETE = 'Non sono riuscita a ricevere il tuo messaggio: può essere un problema momentaneo di collegamento. Riprova tra qualche minuto.';
const ERR_LIMITE = 'Il modulo ha raggiunto il numero massimo di invii consentiti per oggi.';

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
  const [failed, setFailed] = useState<string | null>(null);

  const set = (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const t = e.target as HTMLInputElement;
    setV(s => ({ ...s, [name]: t.type === 'checkbox' ? t.checked : t.value }));
    setErrors(s => ({ ...s, [name]: null }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const txt = (k: string) => String(v[k] ?? '').trim();

    const next: Record<string, string> = {};
    if (!txt('nome')) next.nome = 'Indicami come ti chiami';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(txt('email'))) next.email = 'Serve un indirizzo email valido';
    if (!txt('richiesta')) next.richiesta = 'Raccontami brevemente cosa vi porta qui';
    if (!v.privacy) next.privacy = 'Necessario per poterti rispondere';
    if (Object.keys(next).length) { setErrors(next); return; }

    // Web3Forms costruisce il corpo della mail dai nomi delle chiavi: qui diventano
    // etichette leggibili. I campi lasciati vuoti non vengono inviati.
    const payload: Record<string, string | boolean> = {
      access_key: site.web3formsKey,
      subject: 'Nuova richiesta dal sito — ' + txt('nome'),
      from_name: 'Sito raffaellagallo.com',
      botcheck: Boolean(v.botcheck),
      email: txt('email'),
    };
    const campi: [string, string][] = [
      ['Nome e cognome', txt('nome')],
      ['Telefono', txt('telefono')],
      ['Località', txt('localita')],
      ['Il cane', txt('cane')],
      ['Richiesta', txt('richiesta')],
      ['Servizio di interesse', txt('servizio')],
      ['Modalità preferita', txt('modalita')],
      ['Consenso privacy', v.privacy ? 'Sì, accettato' : 'No'],
    ];
    for (const [etichetta, valore] of campi) if (valore) payload[etichetta] = valore;

    setBusy(true);
    setFailed(null);
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        setFailed(res.status === 429 ? ERR_LIMITE : ERR_RETE);
        return;
      }
      setSent(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setFailed(ERR_RETE);
    } finally {
      setBusy(false);
    }
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
      <input
        type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true"
        checked={Boolean(v.botcheck)} onChange={set('botcheck')} style={honeypot}
      />

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

        {failed && (
          <div role="alert" aria-live="polite" style={{ background: color.white, border: '1px solid ' + color.pearl, borderTop: '2px solid ' + errColor, padding: '26px 24px' }}>
            <p style={{ fontFamily: font.accent, fontSize: 10, letterSpacing: '.24em', color: errColor }}>RICHIESTA NON INVIATA</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: color.body, marginTop: 14 }}>{failed}</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: color.body, marginTop: 12 }}>
              Se preferisci, scrivimi direttamente a <a href={mailLink}>{site.email}</a>: leggo personalmente ogni messaggio.
            </p>
          </div>
        )}

        <button type="submit" className="btn" disabled={busy} style={{ alignSelf: 'flex-start', background: color.tiffany, color: '#fff', border: 'none', fontFamily: font.accent, fontWeight: 500, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', padding: '18px 34px', borderRadius: 2, cursor: busy ? 'default' : 'pointer', opacity: busy ? 0.6 : 1 }}>
          {busy ? 'Invio…' : 'Invia la richiesta'}
        </button>
        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: color.muted }}>I campi con <Req /> sono necessari. Rispondo personalmente a ogni richiesta nei giorni lavorativi.</p>
      </div>
    </form>
  );
}
