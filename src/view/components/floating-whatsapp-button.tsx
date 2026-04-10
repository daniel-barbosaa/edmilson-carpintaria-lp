import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsAppButton() {
  const handleClick = () => {
    window.open(
      'https://wa.me/5538999842884?text=Olá, vi seu site e gostaria de um orçamento',
      '_blank',
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1fb855] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Abrir WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FaWhatsapp className="w-7 h-7" />
      </motion.div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1E293B] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Fale conosco!
      </span>
    </motion.button>
  );
}
