import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-luxury-deep">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop" 
            alt="Vrindavan Spiritual Luxury"
            className="w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-deep/60 via-transparent to-luxury-ivory" />
      </div>

      {/* Floating Particles/Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cursor-glow opacity-50" />
      </div>

      <div ref={textRef} className="hero-content relative z-10 text-center px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-luxury-gold uppercase tracking-[0.6em] text-[10px] md:text-xs mb-8 block font-medium"
        >
          A Sanctuary for the Soul
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-white mb-10 leading-[0.9] tracking-tighter"
        >
          Awaken to <br /> 
          <span className="italic font-normal text-luxury-gold/90">Divine Peace</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-white/70 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed mb-16 tracking-wide"
        >
          Experience Vrindavan's most exclusive spiritual retreat, where timeless devotion meets unparalleled modern luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="btn-premium bg-luxury-gold text-luxury-deep px-14 py-5 text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl">
            Reserve Your Stay
          </button>
          <button className="glass px-14 py-5 rounded-full text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all border border-white/20">
            The Experience
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll to Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
}
