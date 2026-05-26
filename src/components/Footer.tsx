import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-deep text-white pt-32 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
        <div className="md:col-span-2 space-y-10">
          <h2 className="text-4xl font-spiritual uppercase tracking-[0.4em]">
            Shri Ji <span className="text-luxury-gold italic">Sharanam</span>
          </h2>
          <p className="text-white/40 max-w-sm font-light leading-relaxed text-lg tracking-wide">
            A sanctuary where spiritual heritage meets contemporary luxury. Experience the divine essence of Vrindavan in unparalleled comfort.
          </p>
          <div className="flex gap-8">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-10">
          <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold">Explore</h4>
          <ul className="space-y-5 text-white/50 font-light text-sm tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">Our Residences</a></li>
            <li><a href="#" className="hover:text-white transition-colors">The Experience</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vrindavan Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Spiritual Journal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bespoke Rituals</a></li>
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold">Sanctuary</h4>
          <ul className="space-y-8 text-white/50 font-light text-sm tracking-wide">
            <li className="flex gap-5">
              <MapPin size={20} className="text-luxury-gold flex-shrink-0" />
              <span className="leading-relaxed">Near Banke Bihari Temple, <br /> Vrindavan, Uttar Pradesh</span>
            </li>
            <li className="flex gap-5">
              <Phone size={20} className="text-luxury-gold flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-5">
              <Mail size={20} className="text-luxury-gold flex-shrink-0" />
              <span>welcome@shrijisharanam.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20 font-medium">
        <p>&copy; 2026 Shri Ji Sharanam. All Rights Reserved.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <p className="italic font-serif normal-case tracking-widest">Designed for Transcendence</p>
      </div>
    </footer>
  );
}
