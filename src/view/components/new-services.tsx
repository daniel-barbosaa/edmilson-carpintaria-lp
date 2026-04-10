import {
  Building2,
  Hammer,
  Home,
  TreePine,
  Umbrella,
  Warehouse,
} from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function NewServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mainService = {
    icon: Home,
    title: 'Telhados (Especialidade)',
    items: [
      'Fibrocimento (amianto)',
      'Embutido',
      'Estrutura completa',
      'Telhados metálicos (zinco)',
      'Entregue pronto (sem necessidade de outro pedreiro)',
    ],
    featured: true,
  };

  const otherServices = [
    {
      icon: TreePine,
      title: 'Pergolados',
      description: 'Estruturas em madeira para área externa',
    },
    {
      icon: Warehouse,
      title: 'Quiosques',
      description: 'Espaços de lazer cobertos',
    },
    {
      icon: Umbrella,
      title: 'Varandas',
      description: 'Ampliação e cobertura de varandas',
    },
    {
      icon: Building2,
      title: 'Ombrelones',
      description: 'Estruturas de sombra',
    },
    {
      icon: Hammer,
      title: 'Reformas em Geral',
      description: 'Diversos serviços de carpintaria',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F8FAFC]" id="servicos">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="bg-linear-to-br from-foreground to-subtle rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border-2 sm:border-4 border-primary hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-primary rounded-xl shrink-0 self-start">
                <mainService.icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
              </div>

              <div className="flex-1 w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 wrap-break-word">
                  {mainService.title}
                </h3>

                <ul className="space-y-2 sm:space-y-3">
                  {mainService.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 text-slate-200 text-sm sm:text-base md:text-lg wrap-break-word"
                    >
                      <span className="text-primary mt-1 shrink-0">✓</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: 0.2 + index * 0.05,
                ease: 'easeOut',
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-[#F8FAFC] rounded-xl">
                  <service.icon className="w-8 h-8 text-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  {service.title}
                </h4>
                <p className="text-subtle">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
