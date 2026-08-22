import { Eyebrow, H1, Sub, Prose, Photo, Multi, Cta } from '../components/ui';
import { barboneBlocks } from '../data/content';
import { color, font, waLink } from '../theme';

export default function Barbone() {
  return (
    <div className="page">
      <section style={{ padding: '44px 0 0' }}>
        <Eyebrow>PERCORSO DEDICATO</Eyebrow>
        <H1>Barbone in Sintonia</H1>
        <Sub>Il percorso dedicato al Barbone in tutte le taglie, dal Toy alla Grande Mole</Sub>
      </section>

      <Photo label="foto — Barbone, dettaglio mantello" ratio="3/2" />

      <Prose style={{ padding: '32px 0 0' }}>
        <p>Il Barbone occupa un posto particolare nella mia vita personale e professionale.</p>
        <p>Vivo con questa razza da molti anni e nel tempo una parte sempre più importante delle famiglie che si rivolgono a me vive proprio con un Barbone.</p>
        <p>Da questa esperienza nasce <strong>Barbone in Sintonia</strong>: un percorso che unisce educazione, relazione e conoscenza della razza alla gestione di un aspetto che accompagnerà questi cani per tutta la vita: <strong>la cura del mantello e la collaborazione durante la manipolazione.</strong></p>
        <p>Non un programma uguale per tutti, ma un percorso costruito sul singolo cane e sulla sua famiglia.</p>
      </Prose>

      <section style={{ padding: '44px 0 0', display: 'grid', gap: 16 }}>
        {barboneBlocks.map(b => (
          <div key={b.title} style={{ background: color.white, border: '1px solid ' + color.pearl, padding: '28px 24px' }}>
            <h2 style={{ fontFamily: font.accent, fontSize: 11.5, letterSpacing: '.2em', color: color.teal, lineHeight: 1.6 }}>{b.title}</h2>
            <div style={{ height: 1, background: color.pearl, margin: '16px 0 18px' }} />
            <Multi text={b.body} />
          </div>
        ))}
      </section>

      <section style={{ margin: '48px -20px 0', background: color.tiffany, color: '#fff', padding: '50px 26px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: font.accent, fontSize: 11, letterSpacing: '.24em' }}>COME FUNZIONA</h2>
          <p style={{ fontFamily: font.display, fontSize: 'clamp(22px, 5.4vw, 30px)', marginTop: 20 }}>5 incontri individuali da 90 minuti</p>
          <div style={{ fontSize: 15.8, lineHeight: 1.8, color: 'rgba(255,255,255,.92)', display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
            <p>Gli incontri possono svolgersi <strong>presso di me a Buccinasco oppure online</strong>, rendendo il percorso accessibile anche a chi vive lontano.</p>
            <p>Quando è utile lavorare nell’ambiente del cane, uno o più incontri possono essere svolti a domicilio con il supplemento previsto per la zona.</p>
            <p>Il percorso comprende una <strong>cartella personale con schede e materiali dedicati</strong> e la possibilità di inviarmi brevi video, audio e aggiornamenti relativi al lavoro che stiamo svolgendo.</p>
            <p>Validità: 2 mesi</p>
          </div>
          <p style={{ fontFamily: font.display, fontSize: 46, marginTop: 26 }}>390 €</p>
          <Cta href={waLink} tone="onDark">Richiedi un primo incontro</Cta>
        </div>
      </section>
    </div>
  );
}
