import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import Pharmacy from './pages/Pharmacy';
import ComingSoon from './pages/ComingSoon';

// Wrapper to handle scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen text-slate-100 selection:bg-accent-400 selection:text-black">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
