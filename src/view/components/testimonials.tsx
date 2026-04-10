import { Quote } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      text: 'Serviço rápido e muito bem feito, recomendo demais!',
      name: 'Carlos',
    },
    {
      text: 'Terminou antes do prazo e com ótimo acabamento',
      name: 'Maria',
    },
    {
      text: 'Profissional de confiança, já contratei mais de uma vez',
      name: 'José',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#F8FAFC] rounded-2xl p-8 relative shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <div className="absolute -top-4 left-8">
                <div className="p-3 bg-primary rounded-xl">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <p className="text-lg text-[#0F172A] leading-relaxed mb-6 mt-4">
                "{testimonial.text}"
              </p>

              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
