import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/0b83f9b8-da59-43f5-822e-5b9a6c7f3442.png",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/4ed03bc6-41ed-4a94-8a21-41a997a5408f.png",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/10d7e8f8-32d3-4733-be7a-11213f5cee13.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/e886c4f4-e499-4cb0-ae42-d6cd5eaead0e.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/3599c334-245f-4538-837d-1e0eaceef161.png",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/2933d83d-ccc0-4319-8b78-9f0ded92bf93.jpeg",
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Dynamic horizontal scroll that works on all devices
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section id="gallery" ref={targetRef} className="relative h-[400vh] lg:h-[300vh] bg-luxury-brown">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 lg:gap-12 px-6 lg:px-24">
          <div className="flex-shrink-0 w-[280px] sm:w-[400px] lg:w-[500px] flex flex-col justify-center">
            <span className="text-luxury-gold uppercase tracking-[0.4em] lg:tracking-[0.5em] text-[10px] lg:text-xs mb-4 block">Visual Journey</span>
            <h2 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
              A Glimpse Into <br /> <span className="italic">Serenity</span>
            </h2>
          </div>
          
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              className="flex-shrink-0 w-[300px] sm:w-[600px] lg:w-[800px] h-[400px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl relative group"
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
