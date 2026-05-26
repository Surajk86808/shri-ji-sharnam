import { motion } from 'framer-motion';
import { Utensils, Wifi, Car, Tv, Laptop, Shield } from 'lucide-react';

const amenities = [
  {
    title: "Fully Equipped Kitchen",
    description: "Prepare your own sattvic meals with all necessary appliances and cookware provided.",
    icon: <Utensils className="text-luxury-gold" size={24} />,
    className: "md:col-span-2 md:row-span-2 bg-[url('https://a0.muscache.com/im/pictures/hosting/Hosting-1630145871946847328/original/e886c4f4-e499-4cb0-ae42-d6cd5eaead0e.jpeg')] bg-cover bg-center text-white",
    overlay: "bg-black/40"
  },
  {
    title: "High-Speed WiFi",
    description: "Stay connected with reliable high-speed internet throughout the apartment.",
    icon: <Wifi className="text-luxury-gold" size={24} />,
    className: "bg-luxury-beige",
  },
  {
    title: "Free Parking",
    description: "Stress-free arrival with dedicated free parking on the premises.",
    icon: <Car className="text-luxury-gold" size={24} />,
    className: "bg-luxury-sand/40",
  },
  {
    title: "HDTV with Streaming",
    description: "Enjoy Netflix, Prime Video, and Disney+ on a high-definition screen.",
    icon: <Tv className="text-luxury-gold" size={24} />,
    className: "md:col-span-2 bg-luxury-brown text-white/90",
  },
  {
    title: "Dedicated Workspace",
    description: "A quiet spot designed for focus and productivity during your stay.",
    icon: <Laptop className="text-luxury-gold" size={24} />,
    className: "bg-luxury-ivory border border-luxury-sand/30",
  },
  {
    title: "Self Check-in",
    description: "Flexible arrival with a secure lockbox for your convenience.",
    icon: <Shield className="text-luxury-gold" size={24} />,
    className: "bg-luxury-gold/5",
  }
];

export default function BentoGrid() {
  return (
    <section id="amenities" className="py-16 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">Amenities</span>
          <h2 className="text-4xl md:text-6xl font-serif text-luxury-deep mt-4 md:mt-6">Unrivaled Comforts</h2>
          <div className="w-16 h-[2px] bg-luxury-gold/30 mx-auto mt-6 md:mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[280px] md:auto-rows-[300px]">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl md:rounded-[2rem] p-8 md:p-10 flex flex-col justify-end transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 ${item.className}`}
            >
              {item.overlay && <div className={`absolute inset-0 ${item.overlay} transition-opacity duration-700 group-hover:opacity-60`} />}
              
              <div className="relative z-10">
                <div className="mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-700 inline-block p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-4 tracking-tight">{item.title}</h3>
                <p className="text-xs md:text-sm font-light opacity-70 leading-relaxed max-w-[240px] tracking-wide">
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
