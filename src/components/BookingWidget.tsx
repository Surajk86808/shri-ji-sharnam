import { motion } from 'framer-motion';
import { Calendar, Users, MessageCircle } from 'lucide-react';

export default function BookingWidget() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="glass-dark px-8 py-4 rounded-full flex items-center gap-12 shadow-2xl border border-white/20">
        <div className="flex items-center gap-4 group cursor-pointer">
          <Calendar size={18} className="text-luxury-gold" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/60">Check In</span>
            <span className="text-sm font-medium text-white">Add Date</span>
          </div>
        </div>

        <div className="w-[1px] h-8 bg-white/10" />

        <div className="flex items-center gap-4 group cursor-pointer">
          <Users size={18} className="text-luxury-gold" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/60">Guests</span>
            <span className="text-sm font-medium text-white">2 Adults</span>
          </div>
        </div>

        <button className="btn-premium bg-luxury-gold text-white text-xs uppercase tracking-widest py-3 px-10 font-bold">
          Check Availability
        </button>

        <div className="w-[1px] h-8 bg-white/10" />

        <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <MessageCircle size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold hidden md:block">WhatsApp</span>
        </button>
      </div>
    </motion.div>
  );
}
