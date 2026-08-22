export type RouteDef = { path: string; label: string; inNav: boolean };

/** I path ricalcano le vecchie URL WordPress per non perdere il posizionamento. */
export const routes: RouteDef[] = [
  { path: '/', label: 'Ogni cane ha una storia', inNav: true },
  { path: '/about/', label: 'Chi sono', inNav: true },
  { path: '/cani-con-ansie-e-fobie/', label: 'Come lavoro', inNav: true },
  { path: '/percorsi/', label: 'Percorsi', inNav: true },
  { path: '/barbone-in-sintonia/', label: 'Barbone in Sintonia', inNav: true },
  { path: '/rimettersi-in-forma-con-il-k9-cross-training/', label: 'K9 Cross Training', inNav: true },
  { path: '/pensioni-casalinghe/', label: 'Servizi e tariffe', inNav: true },
  { path: '/testimonial/', label: 'Dicono di me', inNav: true },
  { path: '/contact/', label: 'Contatti', inNav: true },
  { path: '/privacy-policy/', label: 'Privacy Policy', inNav: false },
];
