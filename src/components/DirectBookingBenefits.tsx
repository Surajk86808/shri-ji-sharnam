import { motion } from 'framer-motion';
import { Wallet, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function DirectBookingBenefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t.directBenefits.items.fees.title,
      desc: t.directBenefits.items.fees.desc,
      icon: <Wallet className="text-luxury-gold" size={32} />
    },
    {
      title: t.directBenefits.items.contact.title,
      desc: t.directBenefits.items.contact.desc,
      icon: <MessageCircle className="text-luxury-gold" size={32} />
    },
    {
      title: t.directBenefits.items.price.title,
      desc: t.directBenefits.items.price.desc,
      icon: <ShieldCheck className="text-luxury-gold" size={32} />
    },
    {
      title: t.directBenefits.items.secure.title,
      desc: t.directBenefits.items.secure.desc,
      icon: <Zap className="text-luxury-gold" size={32} />
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div>
              <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                {t.directBenefits.tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-luxury-deep mb-6 leading-tight">
                {t.directBenefits.title}
              </h2>
              <p className="text-luxury-charcoal/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                {t.directBenefits.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-luxury-gold/5 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-serif text-luxury-deep">{benefit.title}</h4>
                  <p className="text-sm text-luxury-charcoal/60 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a 
                href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20booking%20directly%20to%20save%20on%20fees.%20Could%20you%20please%20provide%20the%20best%20available%20rate?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-premium bg-luxury-gold text-white px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold shadow-xl hover:scale-105 transition-transform"
              >
                {t.directBenefits.cta}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative min-h-[300px] w-full"
          >
            <div className="relative w-full h-full aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-luxury-gold/5">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Direct Booking"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-deep/60 to-transparent pointer-events-none" />
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-luxury-gold/20 max-w-[200px]"
              >
                <p className="text-luxury-gold font-bold text-3xl mb-1">20%</p>
                <p className="text-luxury-deep text-[10px] uppercase tracking-widest font-bold leading-tight">
                  Average Savings when booking direct
                </p>
              </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-luxury-deep/5 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
