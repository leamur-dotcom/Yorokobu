import React from 'react';
import { ArrowUp, Instagram, MapPin, Mail, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#211d1a] text-[#f7f4ed] pt-16 pb-12 border-t-4 border-[#c35232] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#top" className="text-2xl font-serif font-bold text-[#f7f4ed] tracking-tight">
                Yorokobu <span className="text-[#d99138] italic font-sans font-normal">Cerámica</span>
              </a>
              <p className="text-xs text-[#f7f4ed]/75 leading-relaxed mt-3 max-w-sm">
                Gres, cuerda seca y encargos a medida hechos uno a uno a mano en Barcelona.
                Envíos protegidos a toda la Península Ibérica.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#f7f4ed]/70">
              <span className="flex items-center gap-1.5 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#c35232]" />
                Barcelona, Catalunya
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase text-[#d99138] font-bold tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-[#f7f4ed]/80">
              <li><a href="#colecciones" className="hover:text-[#d99138] transition-colors">Colecciones</a></li>
              <li><a href="#talleres" className="hover:text-[#d99138] transition-colors">Talleres &amp; Cursos</a></li>
              <li><a href="#bitacora" className="hover:text-[#d99138] transition-colors">Bitácora de Taller</a></li>
              <li><a href="#sobre" className="hover:text-[#d99138] transition-colors">El Estudio</a></li>
              <li><a href="#encargo" className="hover:text-[#d99138] transition-colors">Pedir un encargo</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase text-[#d99138] font-bold tracking-wider mb-4">
              Contacto de Estudio
            </h4>
            <div className="space-y-3 text-xs text-[#f7f4ed]/80">
              <a
                href="https://instagram.com/yorokobu.ceramica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#d99138] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#c35232]" />
                @yorokobu.ceramica
              </a>
              <div className="flex items-center gap-2 text-[#f7f4ed]/70">
                <Mail className="w-4 h-4 text-[#34548d]" />
                hola@yorokobuceramica.com
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#f7f4ed]/5 rounded-xl border border-[#f7f4ed]/10 text-xs text-[#f7f4ed]/70">
              Cocción a 1220°C en horno eléctrico y atmósfera de alta densidad.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#f7f4ed]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f7f4ed]/50 font-mono">
          <div>
            © {new Date().getFullYear()} Yorokobu Cerámica · Barcelona. Todos los derechos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#f7f4ed]/10 hover:bg-[#c35232] text-white rounded-full transition-colors cursor-pointer flex items-center gap-1.5 text-[11px]"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Volver arriba</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
