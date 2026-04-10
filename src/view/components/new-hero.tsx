import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function NewHero() {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5538999842884?text=Olá, vi seu site e gostaria de um orçamento',
      '_blank',
    );
  };

  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-foreground/90 via-foreground/80 to-foreground/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            Telhados, Pergolados e Quiosques com Acabamento Profissional e
            Entrega Rápida
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-slate-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            Mais de 20 anos de experiência atendendo Montes Claros e região, com
            equipe especializada e garantia no serviço.
          </motion.p>

          <motion.button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-primary hover:bg-[#D97706] text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-primary/50 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar orçamento no WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
