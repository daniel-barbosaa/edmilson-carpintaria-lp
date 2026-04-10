import { Hammer, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ProfessionalHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5538999842884?text=Olá, vi seu site e gostaria de um orçamento',
      '_blank',
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Serviços', id: 'servicos' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-300 mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg hidden sm:flex">
                <Hammer className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-[#1E293B] leading-tight">
                  Edmilson Carpinteiro
                </h1>
                <p className="text-xs sm:text-sm text-subtle hidden sm:block">
                  Especialista em Telhados • Mais de 20 anos
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-subtle hover:text-primary font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:+5538999842884"
                className="hidden xl:flex items-center gap-2 text-[#1E293B] hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(38) 99984-2884</span>
              </a>

              <button
                onClick={handleWhatsAppClick}
                className="hidden sm:flex items-center gap-2 bg-primary hover:bg-[#D97706] text-white px-5 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden md:inline">Solicitar orçamento</span>
                <span className="md:hidden">Orçamento</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#1E293B] hover:bg-[#F8FAFC] rounded-lg transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-18 left-0 right-0 z-40 bg-white shadow-xl lg:hidden overflow-hidden"
          >
            <nav className="max-w-300 mx-auto px-5 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-3 text-subtle hover:text-primary hover:bg-[#F8FAFC] rounded-lg font-medium transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                className="pt-4 border-t border-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a
                  href="tel:+5538999842884"
                  className="flex items-center gap-2 px-4 py-3 text-[#1E293B] hover:bg-[#F8FAFC] rounded-lg transition-colors mb-2"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-medium">(38) 99984-2884</span>
                </a>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#D97706] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg sm:hidden"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar orçamento
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
