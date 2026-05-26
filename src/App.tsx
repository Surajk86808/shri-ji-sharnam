import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DirectBookingBenefits from './components/DirectBookingBenefits';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Gallery from './components/Gallery';
import BookingWidget from './components/BookingWidget';
import FloatingLanguageToggle from './components/FloatingLanguageToggle';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import { motion } from 'framer-motion';
import { LanguageProvider } from './LanguageContext';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="relative min-h-screen bg-luxury-ivory">
          {/* Custom Cursor Glow */}
          <motion.div 
            className="cursor-glow"
            animate={{ x: mousePos.x, y: mousePos.y }}
            transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
          />

          <Navbar />
          
          <main>
            <Hero />
            <DirectBookingBenefits />
            <Experience />
            <BentoGrid />
            <Gallery />
            
            {/* Spiritual Quote Section Placeholder - Could be translated later */}
            <section className="py-48 px-8 text-center bg-luxury-ivory">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-5xl font-serif italic text-luxury-charcoal/80 leading-relaxed">
                  "At Shri Ji Sharnam, we believe that every journey to Vrindavan is a pilgrimage of the soul. Your sanctuary awaits."
                </h2>
                <div className="w-24 h-[1px] bg-luxury-gold mx-auto mt-12" />
              </motion.div>
            </section>

            <BookingWidget />
            <FloatingLanguageToggle />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}

export default App;
