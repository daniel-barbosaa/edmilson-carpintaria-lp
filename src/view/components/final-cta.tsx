import { MessageCircle, Phone } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5538999842884?text=Olá, vi seu site e gostaria de um orçamento',
      '_blank',
    );
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-linear-to-br from-foreground to-subtle relative overflow-hidden"
      id="contato"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Precisa de um telhado ou estrutura?
            <br />
            <span className="text-primary">Fale agora com a gente.</span>
          </h2>

          <p className="text-xl text-slate-200">
            Atendimento rápido via WhatsApp. Orçamento sem compromisso.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          >
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 bg-primary hover:bg-[#D97706] text-white px-10 py-5 rounded-lg text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-primary/50 hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </button>

            <a
              href="tel:+5538999842884"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-lg text-lg font-bold transition-all duration-300 border-2 border-white/30 hover:scale-105 w-full sm:w-auto"
            >
              <Phone className="w-6 h-6" />
              (38) 99984-2884
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
