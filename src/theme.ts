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
} as const;

export const igLink = 'https://instagram.com/' + site.instagram;
export const mailLink = 'mailto:' + site.email;
