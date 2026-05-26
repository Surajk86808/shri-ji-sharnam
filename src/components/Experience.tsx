import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../LanguageContext';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const { t } = useLanguage();

  // Balanced parallax for all devices
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="experience" ref={containerRef} className="py-16 md:py-24 px-6 md:px-8 bg-luxury-ivory overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
        
        <motion.div 
          style={{ y: y1 }} 
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <img 
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/4ed03bc6-41ed-4a94-8a21-41a997a5408f.png" 
              alt="Luxury Bedroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 w-48 md:w-80 aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] hidden sm:block">
            <img 
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/10d7e8f8-32d3-4733-be7a-11213f5cee13.jpeg" 
              alt="Living Area"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y2 }} 
          className="space-y-8 md:space-y-12 order-1 lg:order-2"
        >
          <div>
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 md:mb-6 block">{t.experience.retreat}</span>
            <h2 className="text-4xl md:text-7xl font-serif text-luxury-deep leading-[1.2] md:leading-[1.1] mb-6 md:mb-8">
              {t.experience.title.split('Omaxe Eternity')[0]} <br className="hidden md:block" /> <span className="italic font-normal text-luxury-gold/80">Omaxe Eternity</span> {t.experience.title.split('Omaxe Eternity')[1]}
            </h2>
            <div className="w-16 md:w-20 h-[2px] bg-luxury-gold/30 mb-8 md:mb-12" />
          </div>

          <div className="space-y-6 md:space-y-8">
            <p className="text-luxury-charcoal/80 text-lg md:text-xl leading-relaxed font-light tracking-wide">
              {t.experience.description1}
            </p>
            <p className="text-luxury-charcoal/80 text-base md:text-lg leading-relaxed font-light tracking-wide">
              {t.experience.description2}
            </p>
          </div>
          
          <div className="pt-8 md:pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-4">
              <h4 className="font-serif text-xl md:text-2xl text-luxury-deep">{t.experience.location}</h4>
              <ul className="text-sm text-luxury-charcoal/60 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  1.6 km from Prem Mandir
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  2 km from ISKCON
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  4 km from Banke Bihari Temple
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-xl md:text-2xl text-luxury-deep">{t.experience.stay}</h4>
              <p className="text-sm text-luxury-charcoal/60 leading-relaxed">Self check-in via lockbox and dedicated support from your host, Rishabh, ensuring a peaceful arrival.</p>
            </div>
          </div>

          {/* Interactive Feature Cards */}
          <div className="pt-8 md:pt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border border-luxury-gold/10 shadow-sm hover:shadow-md transition-all duration-500"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-gold/5 flex items-center justify-center mb-3 md:mb-4">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-luxury-gold animate-pulse" />
              </div>
              <h5 className="font-serif text-base md:text-lg text-luxury-deep mb-1 md:mb-2">{t.experience.features.view.title}</h5>
              <p className="text-[9px] md:text-[10px] text-luxury-charcoal/40 uppercase tracking-widest leading-relaxed">
                {t.experience.features.view.desc}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border border-luxury-gold/10 shadow-sm hover:shadow-md transition-all duration-500"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-gold/5 flex items-center justify-center mb-3 md:mb-4">
                <div className="w-3 md:w-4 h-[1px] bg-luxury-gold rotate-45" />
                <div className="w-3 md:w-4 h-[1px] bg-luxury-gold -rotate-45" />
              </div>
              <h5 className="font-serif text-base md:text-lg text-luxury-deep mb-1 md:mb-2">{t.experience.features.comfort.title}</h5>
              <p className="text-[9px] md:text-[10px] text-luxury-charcoal/40 uppercase tracking-widest leading-relaxed">
                {t.experience.features.comfort.desc}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border border-luxury-gold/10 shadow-sm hover:shadow-md transition-all duration-500 hidden xs:block"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-gold/5 flex items-center justify-center mb-3 md:mb-4">
                <span className="text-luxury-gold text-[10px] md:text-xs italic font-serif">Om</span>
              </div>
              <h5 className="font-serif text-base md:text-lg text-luxury-deep mb-1 md:mb-2">{t.experience.features.aura.title}</h5>
              <p className="text-[9px] md:text-[10px] text-luxury-charcoal/40 uppercase tracking-widest leading-relaxed">
                {t.experience.features.aura.desc}
              </p>
            </motion.div>
          </div>

          <a 
            href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Shri%20Ji%20Sharnam.%20Could%20you%20please%20provide%20more%20details?"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 md:gap-6 text-luxury-deep uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] font-bold pt-8 md:pt-12"
          >
            <span className="w-12 md:w-16 h-[1px] bg-luxury-gold group-hover:w-20 md:group-hover:w-24 transition-all duration-700" />
            {t.experience.book}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
