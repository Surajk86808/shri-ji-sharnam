import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-48 px-8 bg-luxury-ivory overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        
        <motion.div style={{ y: y1 }} className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1974&auto=format&fit=crop" 
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] hidden xl:block">
            <img 
              src="https://images.unsplash.com/photo-1590059536098-9418a9376662?q=80&w=1964&auto=format&fit=crop" 
              alt="Meditation Space"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="space-y-12">
          <div>
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Experience</span>
            <h2 className="text-6xl md:text-7xl font-serif text-luxury-deep leading-[1.1] mb-8">
              Transcending the <br /> <span className="italic font-normal text-luxury-gold/80">Ordinary</span>
            </h2>
            <div className="w-20 h-[2px] bg-luxury-gold/30 mb-12" />
          </div>

          <div className="space-y-8">
            <p className="text-luxury-charcoal/80 text-xl leading-relaxed font-light tracking-wide">
              Nestled in the heart of Vrindavan, Shri Ji Sharanam offers more than just a stay. It is an invitation to reconnect with your inner self in an environment of unparalleled elegance and spiritual resonance.
            </p>
            <p className="text-luxury-charcoal/80 text-xl leading-relaxed font-light tracking-wide">
              Every detail, from the saffron-scented air to the golden hour views of the Banke Bihari temple, is designed to elevate your consciousness.
            </p>
          </div>
          
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h4 className="font-serif text-2xl text-luxury-deep">Soulful Design</h4>
              <p className="text-sm text-luxury-charcoal/60 leading-relaxed">Crafted with Vedic principles and contemporary aesthetics to create a harmonious sanctuary.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-2xl text-luxury-deep">Divine Proximity</h4>
              <p className="text-sm text-luxury-charcoal/60 leading-relaxed">Located steps away from Vrindavan's most sacred sites and the vibration of the holy town.</p>
            </div>
          </div>

          <button className="group flex items-center gap-6 text-luxury-deep uppercase tracking-[0.3em] text-[10px] font-bold pt-12">
            <span className="w-16 h-[1px] bg-luxury-gold group-hover:w-24 transition-all duration-700" />
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
