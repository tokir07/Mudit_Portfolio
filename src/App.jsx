import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cinematic-900 min-h-screen text-white selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-cinematic-900">
        <Showreel />
        <Services />
        <Portfolio />
        <About />
        <Clients />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
