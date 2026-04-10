import { MapPin, MessageCircle, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

export function Footer() {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5538999842884?text=Olá, vi seu site e gostaria de um orçamento',
      '_blank',
    );
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText('(38) 999842884');

    toast.success('Número copiado!');
  };

  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Edmilson Carpinteiro
            </h3>
            <div className="space-y-3">
              <a
                onClick={handleCopy}
                className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(38) 99984-2884</span>
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Telhados</li>
              <li>Pergolados</li>
              <li>Quiosques</li>
              <li>Varandas</li>
              <li>Reformas em Geral</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Área de Atendimento</h4>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-5 h-5 shrink-0 mt-1 text-primary" />
              <p>Montes Claros e região</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
          <p>© 2026 Edmilson Carpinteiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
