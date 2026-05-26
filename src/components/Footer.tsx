import { Instagram, Facebook, MapPin, User } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-luxury-deep text-white pt-24 md:pt-32 pb-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-24 md:mb-32">
        <div className="md:col-span-2 space-y-8 md:space-y-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-[0.3em] md:tracking-[0.4em]">
            Shri Ji <span className="text-luxury-gold italic">Sharnam</span>
          </h2>
          <p className="text-white/40 max-w-sm mx-auto md:mx-0 font-light leading-relaxed text-base md:text-lg tracking-wide">
            A 1BHK luxury spiritual retreat in Omaxe Eternity, Vrindavan. Experience the divine essence of the holy town in unparalleled comfort.
          </p>
          <div className="flex justify-center md:justify-start gap-6 md:gap-8">
            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10 text-center md:text-left">
          <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold">Explore</h4>
          <ul className="space-y-4 md:space-y-5 text-white/50 font-light text-sm tracking-widest">
            <li><button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">The Experience</button></li>
            <li><button onClick={() => scrollTo('amenities')} className="hover:text-white transition-colors">Amenities</button></li>
            <li><button onClick={() => scrollTo('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
          </ul>
        </div>

        <div className="space-y-8 md:space-y-10 text-center md:text-left">
          <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-bold">Sanctuary</h4>
          <ul className="space-y-6 md:space-y-8 text-white/50 font-light text-sm tracking-wide">
            <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5">
              <MapPin size={18} className="text-luxury-gold flex-shrink-0" />
              <span className="leading-relaxed">Omaxe Eternity, <br /> Vrindavan, Uttar Pradesh</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5">
              <User size={18} className="text-luxury-gold flex-shrink-0" />
              <span>Hosted by Rishabh <br /> <span className="text-[10px] opacity-60">Replies within an hour</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/20 font-medium">
        <p className="text-center md:text-left">&copy; 2026 Shri Ji Sharnam. All Rights Reserved.</p>
        <div className="flex gap-8 md:gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <p className="italic font-serif normal-case tracking-widest hidden sm:block">Designed for Transcendence</p>
      </div>
    </footer>
  );
}
