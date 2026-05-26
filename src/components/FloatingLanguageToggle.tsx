import { motion, AnimatePresence } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useState, useEffect } from 'react';

export default function FloatingLanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      // Hide on scroll down, show on scroll up for better UX on mobile
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleLanguage}
          className="fixed bottom-24 right-6 z-[45] lg:hidden w-14 h-14 bg-luxury-deep backdrop-blur-md border border-luxury-gold/30 rounded-full flex items-center justify-center shadow-2xl"
        >
          <div className="relative">
            <Languages size={24} className="text-luxury-gold" />
            <span className="absolute -top-1 -right-1 bg-luxury-gold text-luxury-deep text-[8px] font-bold px-1 rounded-sm uppercase">
              {language === 'en' ? 'HI' : 'EN'}
            </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
