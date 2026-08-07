import React from 'react';
import { ExternalLink, Instagram, Flame, Compass, MapPin, Heart, CheckCircle2 } from 'lucide-react';
import cuerdaSecaProceso from '../assets/images/cuerdaseca-proceso.jpg';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#eae4d5]/30 border-b border-[#211d1a]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Swatch & Visual Panel */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#f7f4ed] p-6 rounded-2xl border-4 border-[#211d1a] shadow-xl relative overflow-hidden">
              <img
                src={cuerdaSecaProceso}
                alt="Proceso de trabajo de cuerda seca en el taller de Barcelona"
                className="w-full aspect-square object-cover rounded-xl border-2 border-[#211d1a]"
              />

              <div className="mt-4 p-3 bg-[#eae4d5] rounded-xl border border-[#211d1a]/15 text-xs font-mono text-[#211d1a] flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#c35232]" />
                  Taller en Barcelona
                </span>
                <span className="text-[10px] text-[#211d1a]/70">Gres &amp; Óxidos minerales</span>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-4 -left-4 inset-0 bg-[#d99138] rounded-2xl -z-10 border-2 border-[#211d1a]" />
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7">
            <p className="text-xs font-mono text-[#c35232] uppercase tracking-widest font-semibold mb-2">
              El Estudio
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211d1a] mb-2">
              Trabajo con las manos, en gres, desde Barcelona
            </h2>

            <div className="w-16 h-1 bg-[#c35232] rounded-full mb-6" />

            <div className="space-y-4 text-sm text-[#211d1a]/85 leading-relaxed font-sans">
              <p>
                <strong>Yorokobu Cerámica</strong> es un taller de una sola persona. Cada pieza se modela a mano
                —sin torno industrial, sin moldes en serie— y se esmalta con la técnica tradicional de cuerda seca:
                un cordón de cera y manganeso separa los colores antes de la cocción, así que cada línea del
                dibujo queda marcada en el propio esmalte, no pintada encima.
              </p>
              <p>
                Esto significa piezas de producción lenta, tiempos de entrega reales y un margen de
                variación de pieza a pieza que no es un defecto: es la firma de que nadie más tiene
                una igual en el mundo.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="p-3.5 bg-[#f7f4ed] rounded-xl border-2 border-[#211d1a] text-xs text-[#211d1a] flex items-center gap-2.5 shadow-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#486e58] shrink-0" />
                <span>Gres de alta temperatura (1220°C)</span>
              </div>
              <div className="p-3.5 bg-[#f7f4ed] rounded-xl border-2 border-[#211d1a] text-xs text-[#211d1a] flex items-center gap-2.5 shadow-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#486e58] shrink-0" />
                <span>Esmaltes minerales inalterables</span>
              </div>
              <div className="p-3.5 bg-[#f7f4ed] rounded-xl border-2 border-[#211d1a] text-xs text-[#211d1a] flex items-center gap-2.5 shadow-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#486e58] shrink-0" />
                <span>Resistente al agua y la intemperie</span>
              </div>
              <div className="p-3.5 bg-[#f7f4ed] rounded-xl border-2 border-[#211d1a] text-xs text-[#211d1a] flex items-center gap-2.5 shadow-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#486e58] shrink-0" />
                <span>Encargos y murales a medida</span>
              </div>
            </div>

            {/* Instagram CTA */}
            <a
              href="https://instagram.com/yorokobu.ceramica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#211d1a] hover:bg-[#34548d] text-[#f7f4ed] font-mono uppercase text-xs font-bold rounded-xl transition-colors shadow"
            >
              <Instagram className="w-4 h-4 text-[#d99138]" />
              Ver el proceso en Instagram &rarr; @yorokobu.ceramica
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

        </div>

        {/* Instagram Process Grid Preview */}
        <div className="mt-16 pt-12 border-t border-[#211d1a]/15">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg font-bold text-[#211d1a] flex items-center gap-2">
              <Instagram className="w-5 h-5 text-[#c35232]" />
              Bitácora visual en directo
            </h3>
            <span className="text-xs font-mono text-[#211d1a]/60">@yorokobu.ceramica</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Trazado de cera en gres crudo', tag: '#cuerdaseca' },
              { label: 'Carga de horno a 1220°C', tag: '#kilnload' },
              { label: 'Azulejo retrato de mascota', tag: '#ceramicpet' },
              { label: 'Instalación de mural', tag: '#tilemural' },
            ].map((post, idx) => (
              <a
                key={idx}
                href="https://instagram.com/yorokobu.ceramica"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-[#eae4d5] rounded-xl border-2 border-[#211d1a] overflow-hidden flex flex-col justify-end p-3 hover:border-[#c35232] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#211d1a]/90 via-[#211d1a]/30 to-transparent group-hover:from-[#211d1a] transition-all" />
                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono text-[#d99138] block font-bold mb-1">{post.tag}</span>
                  <p className="text-xs font-medium leading-tight line-clamp-2">{post.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
