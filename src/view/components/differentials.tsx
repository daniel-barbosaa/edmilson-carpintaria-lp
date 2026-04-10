import { Gem, Shield, Users, Zap } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    {
      icon: Zap,
      title: 'Entrega rápida',
      description: 'Cumprimos prazos e surpreendemos com agilidade',
    },
    {
      icon: Gem,
      title: 'Acabamento de qualidade',
      description: 'Detalhes que fazem a diferença no resultado final',
    },
    {
      icon: Users,
      title: 'Equipe experiente',
      description: 'Mais de 20 anos de experiência no mercado',
    },
    {
      icon: Shield,
      title: 'Garantia e suporte',
      description: 'Segurança e suporte após o serviço concluído',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Por que escolher nosso trabalho?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <div className="inline-flex p-5 bg-primary/10 rounded-2xl mb-6">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-subtle leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
