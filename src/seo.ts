/**
 * Metadati per i motori di ricerca, una voce per ogni rotta di `routes.ts`.
 * Li legge `scripts/prerender.mjs`, che al termine della build scrive un file HTML
 * per ogni pagina con il proprio <title>, la propria description e il canonical.
 * Nessuna pagina React usa questo file: i tag vengono scritti in fase di build.
 */

export const siteUrl = 'https://raffaellagallo.com';

export const siteName = 'Raffaella Gallo — Pet Coach';

/**
 * Immagine mostrata nell'anteprima dei link condivisi (WhatsApp, Instagram, Facebook).
 * Deve essere un PNG o un JPG: l'SVG usato finora non viene renderizzato da
 * WhatsApp né da Facebook, che mostrano l'anteprima senza immagine.
 */
export const ogImage = siteUrl + '/brand/png/logo-badge-2000.png';

/**
 * Token del metodo "Tag HTML" di Google Search Console, generato da Google per
 * questa proprietà. Non è un segreto: sta nell'HTML pubblico di ogni pagina, ed è
 * così per progetto.
 *
 * NON RIMUOVERE dopo la verifica: Google ricontrolla periodicamente la presenza del
 * tag e toglierlo fa decadere la proprietà in Search Console.
 */
export const googleSiteVerification = 'zL_7D0N2OF0Nm2_UkzpdhF_Na7NOXaqcZWGZoa7ANCc';

export type PageSeo = {
  title: string;
  description: string;
  /** Esclude la pagina dall'indice di Google pur lasciandola raggiungibile. */
  noindex?: boolean;
};

/** Una voce per ogni path di `routes.ts`. Il prerender fallisce se ne manca una. */
export const pageSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Raffaella Gallo — Pet Coach a Buccinasco (MI)',
    description: 'Percorsi personalizzati di educazione e rieducazione cinofila. Educazione, relazione, sintonia. A Buccinasco (MI), online e a domicilio.',
  },
  '/about/': {
    title: 'Chi sono — Raffaella Gallo, Pet Coach',
    description: 'Il mio percorso e il mio modo di lavorare: osservare il cane, ascoltare la famiglia e costruire insieme un percorso su misura.',
  },
  '/cani-con-ansie-e-fobie/': {
    title: 'Come lavoro: cani con ansie e fobie — Raffaella Gallo',
    description: 'Niente percorsi standard. Prima di insegnare un esercizio mi interessa capire chi ho davanti: osservare, comprendere, costruire sintonia.',
  },
  '/percorsi/': {
    title: 'Percorsi di educazione cinofila — Raffaella Gallo',
    description: 'Cuccioli, passeggiate difficili, percorsi personalizzati e consulenze singole. Ogni situazione va osservata prima di essere affrontata.',
  },
  '/barbone-in-sintonia/': {
    title: 'Barbone in Sintonia — percorso dedicato al Barbone',
    description: 'Un percorso per il Barbone in tutte le taglie, dal Toy alla Grande Mole: educazione, gestione del mantello e collaborazione alle cure.',
  },
  '/rimettersi-in-forma-con-il-k9-cross-training/': {
    title: 'K9 Cross Training a Buccinasco — Raffaella Gallo',
    description: 'Preparazione fisica e consapevolezza corporea per cani adulti in salute. Sessioni da 60 minuti presso la sede di Buccinasco oppure online.',
  },
  '/pensioni-casalinghe/': {
    title: 'Servizi e tariffe — Raffaella Gallo Pet Coach',
    description: 'Incontri individuali, Primi Passi, Sintonia, Barbone in Sintonia e K9 Cross Training. Tariffe chiare, a Buccinasco (MI), online e a domicilio.',
  },
  '/testimonial/': {
    title: 'Dicono di me — Raffaella Gallo Pet Coach',
    description: 'Le parole delle famiglie che hanno percorso un tratto di strada insieme a me e ai loro cani.',
  },
  '/contact/': {
    title: 'Contatti — Raffaella Gallo Pet Coach, Buccinasco (MI)',
    description: 'Scrivimi per un primo confronto. Incontri presso di me a Buccinasco, online e a domicilio.',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy — Raffaella Gallo Pet Coach',
    description: 'Informativa sul trattamento dei dati personali del sito raffaellagallo.com.',
    noindex: true,
  },
};

/** Metadati della pagina mostrata per un indirizzo che non esiste. */
export const notFoundSeo: PageSeo = {
  title: 'Pagina non trovata — Raffaella Gallo Pet Coach',
  description: 'La pagina che cercavi non esiste.',
  noindex: true,
};
