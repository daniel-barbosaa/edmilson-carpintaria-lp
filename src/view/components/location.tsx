import { MapPin } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cities = [
    'Montes Claros',
    'Nova Esperança',
    'Cabeceiras',
    "Pau D'Óleo",
    'Poço Novo',
    'Tábuas',
    'Samambaia',
    'São João da Vereda',
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Atendimento
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="text-lg text-subtle max-w-3xl mx-auto leading-relaxed">
            Atendemos Montes Claros e região: Nova Esperança, Cabeceiras, Pau
            D'Óleo, Poço Novo, Tábuas, Samambaia, São João da Vereda e demais
            localidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-[#F8FAFC] rounded-lg px-4 py-3 hover:bg-primary/10 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
            >
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground font-medium">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
