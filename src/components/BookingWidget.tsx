import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

export default function BookingWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.getElementById('contact');
      
      // Show widget only after scrolling down a bit, and hide at footer
      const showThreshold = 300;
      let hideForFooter = false;

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
          hideForFooter = true;
        }
      }

      if (scrollY > showThreshold && !hideForFooter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 sm:bottom-12 left-1/2 z-40 w-[92%] max-w-xl"
        >
          <div className="glass-dark px-4 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-between gap-2 sm:gap-6 shadow-2xl border border-white/20">
            <div className="flex flex-col flex-shrink-0">
              <span className="text-luxury-gold font-bold text-xs sm:text-sm">5.0 ★</span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/60">{t.widget.reviews}</span>
            </div>

            <div className="w-[1px] h-8 bg-white/10 flex-shrink-0" />

            <a 
              href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20booking%20a%20stay%20at%20Shri%20Ji%20Sharnam.%20Could%20you%20please%20provide%20more%20details?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-luxury-gold text-white text-[9px] sm:text-xs uppercase tracking-widest py-2 sm:py-3 px-4 sm:px-8 font-bold whitespace-nowrap flex-shrink-0"
            >
              {t.widget.book}
            </a>

            <div className="w-[1px] h-8 bg-white/10 flex-shrink-0 hidden sm:block" />

            <a 
              href="https://wa.me/919876543210" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors flex-shrink-0"
            >
              <MessageCircle size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-center leading-tight hidden md:block">{t.widget.inquiry}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
