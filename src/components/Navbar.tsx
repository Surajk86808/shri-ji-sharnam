import { motion } from 'framer-motion';
import { Menu, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-8">
        <button className="text-luxury-charcoal hover:scale-110 transition-transform">
          <Menu size={24} strokeWidth={1.5} />
        </button>
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-medium text-luxury-charcoal/60">
          <a href="#" className="hover:text-luxury-gold transition-colors">Experience</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Residences</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Vrindavan</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl font-spiritual tracking-[0.3em] uppercase text-luxury-charcoal">
          Shri Ji <span className="text-luxury-gold italic">Sharanam</span>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-medium text-luxury-charcoal/60">
          <a href="#" className="hover:text-luxury-gold transition-colors">Journal</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <Search size={20} strokeWidth={1.5} className="text-luxury-charcoal/60" />
          <User size={20} strokeWidth={1.5} className="text-luxury-charcoal/60" />
          <button className="btn-premium bg-luxury-gold text-white text-[10px] uppercase tracking-widest py-2 px-6">
            Book Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
