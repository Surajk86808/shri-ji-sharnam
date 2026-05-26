import { motion } from 'framer-motion';
import { Coffee, Shield, Wifi, Wind, MapPin, Clock } from 'lucide-react';

const amenities = [
  {
    title: "Temple Sunrise Views",
    description: "Wake up to the serene sights of Vrindavan's ancient temples from your private balcony.",
    icon: <MapPin className="text-luxury-gold" size={24} />,
    className: "md:col-span-2 md:row-span-2 bg-[url('https://images.unsplash.com/photo-1590059536098-9418a9376662?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center text-white",
    overlay: "bg-luxury-deep/40"
  },
  {
    title: "Artisanal Sattvic Dining",
    description: "Pure, soulful cuisine prepared by master chefs.",
    icon: <Coffee className="text-luxury-gold" size={24} />,
    className: "bg-luxury-beige",
  },
  {
    title: "24/7 Spiritual Concierge",
    description: "Guided temple tours and ritual arrangements.",
    icon: <Clock className="text-luxury-gold" size={24} />,
    className: "bg-luxury-sand/40",
  },
  {
    title: "Meditation Atrium",
    description: "A glass-roofed sanctuary for inner peace.",
    icon: <Wind className="text-luxury-gold" size={24} />,
    className: "md:col-span-2 bg-luxury-brown text-white/90",
  },
  {
    title: "Hyper-Speed Connectivity",
    description: "Stay connected in your sanctuary.",
    icon: <Wifi className="text-luxury-gold" size={24} />,
    className: "bg-luxury-ivory border border-luxury-sand/30",
  },
  {
    title: "Privacy & Security",
    description: "Discrete, world-class protection for your peace of mind.",
    icon: <Shield className="text-luxury-gold" size={24} />,
    className: "bg-luxury-gold/5",
  }
];

export default function BentoGrid() {
  return (
    <section className="py-48 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">Amenities</span>
          <h2 className="text-5xl md:text-6xl font-serif text-luxury-deep mt-6">Unrivaled Comforts</h2>
          <div className="w-16 h-[2px] bg-luxury-gold/30 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2rem] p-10 flex flex-col justify-end transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 ${item.className}`}
            >
              {item.overlay && <div className={`absolute inset-0 ${item.overlay} transition-opacity duration-700 group-hover:opacity-60`} />}
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-700 inline-block p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 tracking-tight">{item.title}</h3>
                <p className="text-sm font-light opacity-70 leading-relaxed max-w-[240px] tracking-wide">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
