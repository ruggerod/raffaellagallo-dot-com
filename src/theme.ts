export const color = {
  tiffany: '#2BC4C4',
  teal: '#2799A4',
  ink: '#25282A',
  body: '#4A5254',
  muted: '#7D8A8C',
  ivory: '#FAF9F6',
  pearl: '#EEF3F3',
  white: '#FFFFFF',
} as const;

export const font = {
  display: "'Playfair Display', Georgia, serif",
  text: "Lato, system-ui, sans-serif",
  accent: "Montserrat, system-ui, sans-serif",
  mono: "ui-monospace, Menlo, monospace",
} as const;

export const site = {
  instagram: 'raffaellagallo_petcoach',
  email: 'raffa.fliz@gmail.com',
  city: '20090, Buccinasco (MI)',
  /**
   * Access key di Web3Forms, associata a site.email. Non è un segreto: sta nel bundle
   * pubblico ed è così per progetto. Si ottiene da https://web3forms.com/ inserendo
   * l'indirizzo email e confermando il link di verifica che arriva in casella.
   */
  web3formsKey: '0f04ec17-5c9d-4f59-9cd9-5213f81b72ee',
} as const;

export const igLink = 'https://instagram.com/' + site.instagram;
export const mailLink = 'mailto:' + site.email;
