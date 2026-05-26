import { motion } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 flex items-center justify-between transition-all duration-500",
          isScrolled 
            ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-luxury-gold/10" 
            : "bg-transparent py-6"
        )}
      >
        {/* Left Side: Mobile Toggle & Desktop Links */}
        <div className="flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden transition-all duration-500 hover:scale-110 p-2 z-50",
              isScrolled ? "text-luxury-charcoal" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
          
          <div className={cn(
            "hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em] font-medium transition-colors duration-500 ml-8",
            isScrolled ? "text-luxury-charcoal/60" : "text-white/80"
          )}>
            <button onClick={() => scrollTo('experience')} className="hover:text-luxury-gold transition-colors">{t.navbar.experience}</button>
            <button onClick={() => scrollTo('amenities')} className="hover:text-luxury-gold transition-colors">{t.navbar.residences}</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-luxury-gold transition-colors">{t.navbar.vrindavan}</button>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center w-max z-20">
          <h1 
            onClick={() => scrollTo('home')}
            className={cn(
              "text-lg sm:text-xl md:text-3xl font-serif tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-500 cursor-pointer pointer-events-auto",
              isScrolled ? "text-luxury-deep" : "text-white"
            )}
          >
            Shri Ji <span className="text-luxury-gold italic">Sharnam</span>
          </h1>
        </div>

        {/* Right Side: Desktop Links & Book Button */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className={cn(
            "hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em] font-medium transition-colors duration-500",
            isScrolled ? "text-luxury-charcoal/60" : "text-white/80"
          )}>
            <button onClick={() => scrollTo('gallery')} className="hover:text-luxury-gold transition-colors">{t.navbar.journal}</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-luxury-gold transition-colors">{t.navbar.contact}</button>
          </div>

          <div className="flex items-center gap-6">
            {/* Language Toggle: Visible only on Desktop */}
            <button 
              onClick={toggleLanguage}
              className={cn(
                "hidden lg:flex hover:scale-110 transition-transform p-2 items-center gap-2",
                isScrolled ? "text-luxury-charcoal" : "text-white"
              )}
            >
              <Languages size={24} strokeWidth={1.5} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {language === 'en' ? 'Hindi' : 'English'}
              </span>
            </button>

            {/* Book Button: Visible only on Desktop (Mobile uses Menu/Hero CTAs) */}
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block btn-premium bg-luxury-gold text-white text-xs uppercase tracking-widest py-3 px-8 font-bold"
            >
              {t.navbar.book}
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[45] bg-luxury-deep flex flex-col justify-center px-12 lg:hidden"
      >
        <div className="space-y-8">
          {[
            { name: t.navbar.experience, id: 'experience' },
            { name: t.navbar.residences, id: 'amenities' },
            { name: t.navbar.vrindavan, id: 'gallery' },
            { name: t.navbar.journal, id: 'gallery' },
            { name: t.navbar.contact, id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block text-4xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
            >
              {item.name}
            </button>
          ))}
          
          <div className="pt-8 space-y-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-4 text-luxury-gold text-2xl font-serif"
            >
              <Languages size={32} />
              {language === 'en' ? 'Switch to Hindi' : 'अंग्रेजी में बदलें'}
            </button>

            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-premium bg-luxury-gold text-white text-sm uppercase tracking-widest py-4 px-10 font-bold"
            >
              {t.navbar.book}
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-12">
          <p className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-4">Inquiries</p>
          <a href="https://wa.me/919876543210" className="text-white/60 hover:text-white transition-colors">
            +91 98765 43210
          </a>
        </div>
      </motion.div>
    </>
  );
}
