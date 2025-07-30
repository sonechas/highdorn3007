import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import PropertiesPage from './pages/PropertiesPage';
import Office from './pages/Office';
import DeanBradleyHouse from './pages/DeanBradleyHouse';
import BridgeHouse from './pages/BridgeHouse';
import Residential from './pages/Residential';
import TheCloisters from './pages/TheCloisters';
import EndsleighCourt from './pages/EndsleighCourt';
import EmpireHouse from './pages/EmpireHouse';
import Directors from './pages/Directors';
import ExecutiveTeam from './pages/ExecutiveTeam';
import ManagementTeam from './pages/ManagementTeam';
import Financials2024 from './pages/Financials2024';
import Financials2023 from './pages/Financials2023';
import Financials2022 from './pages/Financials2022';
import Pensions from './pages/Pensions';
import Pensions2024 from './pages/Pensions2024';
import Pensions2023 from './pages/Pensions2023';
import Pensions2022 from './pages/Pensions2022';
import Pensions2020 from './pages/Pensions2020';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Remove preload class after initial render to enable transitions
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300 overflow-x-hidden">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ContactForm />
              </>
            }
          />

          {/* Properties Page */}
          <Route path="/properties" element={<PropertiesPage />} />
          
          {/* Property Type Pages */}
          <Route path="/office" element={<Office />} />
          <Route path="/office/dean-bradley-house" element={<DeanBradleyHouse />} />
          <Route path="/office/bridge-house" element={<BridgeHouse />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/residential/the-cloisters" element={<TheCloisters />} />
          <Route path="/residential/endsleigh-court" element={<EndsleighCourt />} />
          <Route path="/residential/empire-house" element={<EmpireHouse />} />
          
          {/* People Pages */}
          <Route path="/directors" element={<Directors />} />
          <Route path="/executive" element={<ExecutiveTeam />} />
          <Route path="/management" element={<ManagementTeam />} />
          
          {/* Financial Pages */}
          <Route path="/financials-2024" element={<Financials2024 />} />
          <Route path="/financials-2023" element={<Financials2023 />} />
          <Route path="/financials-2022" element={<Financials2022 />} />
          
          {/* Pensions Pages */}
          <Route path="/pensions" element={<Pensions />} />
          <Route path="/pensions-2024" element={<Pensions2024 />} />
          <Route path="/pensions-2023" element={<Pensions2023 />} />
          <Route path="/pensions-2022" element={<Pensions2022 />} />
          <Route path="/pensions-2020" element={<Pensions2020 />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
