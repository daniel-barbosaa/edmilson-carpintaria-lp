import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

import { ImageWithFallback } from './image-with-fallback';

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Telhados', 'Pergolados', 'Quiosques', 'Reformas'];

  const projects = [
    {
      image:
        'https://images.unsplash.com/photo-1755168648692-ef8937b7e63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3NzU2MDQ1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Telhados',
      title: 'Telhado Embutido',
    },
    {
      image:
        'https://images.unsplash.com/photo-1773430271887-7384e5a8c838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwZXJnb2xhJTIwY29uc3RydWN0aW9uJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzU2MDQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pergolados',
      title: 'Pergolado em Madeira',
    },
    {
      image:
        'https://images.unsplash.com/photo-1767764508879-f246f15b5b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBnYXplYm8lMjBvdXRkb29yJTIwc3RydWN0dXJlfGVufDF8fHx8MTc3NTYwNDUzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Quiosques',
      title: 'Quiosque Completo',
    },
    {
      image:
        'https://images.unsplash.com/photo-1679797870465-b4eda40ead96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NTYwNDUzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Reformas',
      title: 'Deck de Madeira',
    },
    {
      image:
        'https://images.unsplash.com/photo-1673193368496-e5911a773dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc1NjA0NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Telhados',
      title: 'Estrutura Moderna',
    },
    {
      image:
        'https://images.unsplash.com/photo-1667923316358-df29a911e139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjBjcmFmdHNtYW4lMjB3b3JraW5nJTIwd29vZHxlbnwxfHx8fDE3NzU2MDQ1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pergolados',
      title: 'Trabalho Artesanal',
    },
  ];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section ref={ref} className="py-20 bg-white" id="projetos">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projetos Realizados
          </h2>
          <div className="w-24 h-1 bg-[#F59E0B] mx-auto"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-[#F59E0B] text-white shadow-lg'
                  : 'bg-[#F8FAFC] text-foreground hover:bg-[#F59E0B]/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative aspect-4/3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: 0.2 + index * 0.05,
                ease: 'easeOut',
              }}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm text-[#F59E0B] font-medium mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
