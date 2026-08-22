import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import ComeLavoro from './pages/ComeLavoro';
import Percorsi from './pages/Percorsi';
import Barbone from './pages/Barbone';
import K9 from './pages/K9';
import Tariffe from './pages/Tariffe';
import Dicono from './pages/Dicono';
import Contatti from './pages/Contatti';
import Privacy from './pages/Privacy';

/** Barra fissa in fondo allo schermo con la CTA "Richiedi un incontro". */
const SHOW_STICKY_BAR = true;

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', background: '#FAF9F6' }}>
      <Header />
      <main style={{ maxWidth: 1080, margin: '0 auto', padding: SHOW_STICKY_BAR ? '0 20px 120px' : '0 20px 60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<ChiSono />} />
          <Route path="/cani-con-ansie-e-fobie/" element={<ComeLavoro />} />
          <Route path="/percorsi/" element={<Percorsi />} />
          <Route path="/barbone-in-sintonia/" element={<Barbone />} />
          <Route path="/rimettersi-in-forma-con-il-k9-cross-training/" element={<K9 />} />
          <Route path="/pensioni-casalinghe/" element={<Tariffe />} />
          <Route path="/testimonial/" element={<Dicono />} />
          <Route path="/contact/" element={<Contatti />} />
          <Route path="/privacy-policy/" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer sticky={SHOW_STICKY_BAR} />
      {SHOW_STICKY_BAR && <StickyBar />}
    </div>
  );
}
