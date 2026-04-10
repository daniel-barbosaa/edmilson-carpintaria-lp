import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import { ImageWithFallback } from './image-with-fallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-[#F8FAFC]" id="sobre">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667923316358-df29a911e139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjBjcmFmdHNtYW4lMjB3b3JraW5nJTIwd29vZHxlbnwxfHx8fDE3NzU2MDQ1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Edmilson Carpinteiro trabalhando"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Sobre
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>

            <p className="text-lg text-subtle leading-relaxed">
              <strong className="font-bold text-foreground">
                Edmilson "Truta"
              </strong>{' '}
              é carpinteiro e pedreiro com mais de 20 anos de experiência.
              Trabalha com uma equipe qualificada, realizando desde telhados
              completos até estruturas como pergolados, quiosques e galpões
              sempre com foco em qualidade, agilidade e compromisso com o
              cliente.
            </p>

            <motion.div
              className="grid sm:grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">20+</div>
                <p className="text-subtle">Anos de experiência</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">4</div>
                <p className="text-subtle">Profissionais qualificados</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
