import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Rete di sicurezza per una build senza prerender: in quel caso public/404.html è
// ancora il vecchio fallback SPA e arriva qui con il path nella query string.
// Con il prerender attivo questo parametro non compare mai.
const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) window.history.replaceState(null, '', redirect);

const el = document.getElementById('root')!;

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Tutte le pagine prodotte da scripts/prerender.mjs arrivano con l'HTML già dentro
// #root: si riusa quello invece di ridisegnarlo da capo. Il ramo createRoot serve solo
// se il prerender non è stato eseguito (per esempio un `vite build` lanciato a mano).
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);
