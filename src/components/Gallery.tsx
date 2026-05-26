import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "https://images.unsplash.com/photo-1544161515-436cefd1f16d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512100356956-c1397c24dfb8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598977123418-4500552382b4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563293750-2c21458a1f6e?q=80&w=2070&auto=format&fit=crop",
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-luxury-brown">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-24">
          <div className="flex-shrink-0 w-[500px] flex flex-col justify-center">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs mb-4 block">Visual Journey</span>
            <h2 className="text-6xl font-serif text-white leading-tight">
              A Glimpse Into <br /> <span className="italic">Serenity</span>
            </h2>
          </div>
          
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              className="flex-shrink-0 w-[800px] h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
