import { motion } from 'framer-motion';
import { Menu, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "transition-all duration-500 hover:scale-110 p-2",
              isScrolled ? "text-luxury-charcoal" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
          <div className={cn(
            "hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-500",
            isScrolled ? "text-luxury-charcoal/60" : "text-white/80"
          )}>
            <button onClick={() => scrollTo('experience')} className="hover:text-luxury-gold transition-colors">Experience</button>
            <button onClick={() => scrollTo('amenities')} className="hover:text-luxury-gold transition-colors">Residences</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-luxury-gold transition-colors">Vrindavan</button>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center w-max">
          <h1 
            onClick={() => scrollTo('home')}
            className={cn(
              "text-lg md:text-2xl font-serif tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-500 cursor-pointer pointer-events-auto",
              isScrolled ? "text-luxury-deep" : "text-white"
            )}
          >
            Shri Ji <span className="text-luxury-gold italic">Sharnam</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className={cn(
            "hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-500",
            isScrolled ? "text-luxury-charcoal/60" : "text-white/80"
          )}>
            <button onClick={() => scrollTo('gallery')} className="hover:text-luxury-gold transition-colors">Journal</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-luxury-gold transition-colors">Contact</button>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden sm:block hover:scale-110 transition-transform p-2">
              <Search size={20} strokeWidth={1.5} className={cn(
                "transition-colors duration-500",
                isScrolled ? "text-luxury-charcoal/60" : "text-white/80"
              )} />
            </button>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-luxury-gold text-white text-[9px] md:text-[10px] uppercase tracking-widest py-2 px-4 md:px-6 font-bold"
            >
              Book
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
          {['Experience', 'Residences', 'Vrindavan', 'Journal', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase() === 'residences' ? 'amenities' : item.toLowerCase())}
              className="block text-4xl font-serif text-white hover:text-luxury-gold transition-colors text-left"
            >
              {item}
            </button>
          ))}
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
