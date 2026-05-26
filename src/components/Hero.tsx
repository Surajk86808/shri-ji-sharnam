import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(".hero-bg", {
      scale: 1.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-content", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[100vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-luxury-deep py-20 md:py-0">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg absolute inset-0 w-full h-full">
          <img 
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/0b83f9b8-da59-43f5-822e-5b9a6c7f3442.png" 
            alt="Shri Ji Sharnam - Luxury Spiritual Retreat"
            className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-luxury-ivory/10" />
      </div>

      {/* Floating Particles/Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cursor-glow opacity-30 md:opacity-50" />
      </div>

      <div ref={textRef} className="hero-content relative z-10 text-center px-6 pt-24 md:pt-40 pb-32 md:pb-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col items-center mb-6 md:mb-8"
        >
          <span className="text-luxury-gold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-xs mb-3 md:mb-4 block font-medium">
            {t.hero.sanctuary}
          </span>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <span className="text-luxury-gold font-bold text-xs md:text-sm">5.0 ★</span>
            <span className="text-white/80 text-[8px] md:text-[10px] uppercase tracking-widest">{t.hero.reviews}</span>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 md:mb-10 leading-[1.2] md:leading-[1] tracking-tight"
        >
          {t.hero.title.split(t.hero.subtitle)[0]} <br /> 
          <span className="italic font-normal text-luxury-gold/90">{t.hero.subtitle}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-white/90 max-w-xs md:max-w-2xl mx-auto text-sm md:text-xl font-light leading-relaxed mb-10 md:mb-16 tracking-wide drop-shadow-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <div className="relative w-full sm:hidden">
            {/* Guaranteed Best Rate Badge: Positioned outside the button to prevent overlap */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-luxury-deep text-[7px] md:text-[8px] py-1 px-3 rounded-full whitespace-nowrap animate-bounce shadow-lg border border-luxury-gold/20 z-20 font-bold uppercase tracking-widest">
              Guaranteed Best Rate
            </span>
            <a 
              href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Shri%20Ji%20Sharnam.%20Could%20you%20please%20provide%20more%20details?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-premium bg-luxury-gold text-luxury-deep px-8 md:px-14 py-4 md:py-5 text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center"
            >
              {t.hero.directBooking}
            </a>
          </div>
          
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto glass px-10 md:px-14 py-4 md:py-5 rounded-full text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all border border-white/20"
          >
            {t.hero.gallery}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 hidden xs:flex"
      >
        <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
}
