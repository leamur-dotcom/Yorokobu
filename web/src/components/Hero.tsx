import React from 'react';
import { ArrowRight, Flame, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import casaBatllo from '../assets/images/arquitectura-casa-batlo.jpg';

interface HeroProps {
  onOpenCommission: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCommission }) => {
  return (
    <section className="pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden relative border-b border-[#211d1a]/10">
      {/* Background pattern */}
      <div className="absolute inset-0 ceramic-texture pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae4d5] text-[#211d1a] font-mono text-xs sm:text-sm font-medium mb-6 border border-[#211d1a]/15">
              <span className="w-2 h-2 rounded-full bg-[#c35232] animate-pulse" />
              Gres · Cuerda seca · Hecho a mano en Barcelona
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#211d1a] leading-[1.12] mb-6">
              La línea que separa{' '}
              <span className="italic text-[#34548d] underline decoration-[#d99138] decoration-2 underline-offset-8">
                un color de otro
              </span>{' '}
              es la que sostiene todo lo demás.
            </h1>

            <p className="text-base sm:text-lg text-[#211d1a]/85 leading-relaxed mb-8 max-w-2xl">
              Cada pieza sale del mismo gesto: trazar un cordón de cera sobre gres crudo, verter el
              esmalte a un lado y al otro, y dejar que el fuego decida el resto. De ahí nacen
              azulejos, murales, vajilla y retratos de mascotas que no se parecen a nada hecho en
              serie.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenCommission}
                className="px-6 py-3.5 text-base font-medium text-[#f7f4ed] bg-[#211d1a] hover:bg-[#c35232] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 cursor-pointer group"
              >
                Solicitar un encargo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#colecciones"
                className="px-4 py-3 text-sm font-medium text-[#34548d] hover:text-[#c35232] transition-colors underline decoration-dotted"
              >
                Ver colecciones
              </a>
            </div>

            {/* Studio Key Facts */}
            <dl className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-[#211d1a]/15 text-left">
              <div>
                <dt className="text-xs font-mono text-[#211d1a]/60 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#d99138]" />
                  Técnica
                </dt>
                <dd className="text-xs sm:text-sm font-semibold text-[#211d1a]">Cuerda seca sobre gres</dd>
              </div>
              <div>
                <dt className="text-xs font-mono text-[#211d1a]/60 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#c35232]" />
                  Cocción
                </dt>
                <dd className="text-xs sm:text-sm font-semibold text-[#211d1a]">1220 °C alta temperatura</dd>
              </div>
              <div>
                <dt className="text-xs font-mono text-[#211d1a]/60 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#34548d]" />
                  Envíos
                </dt>
                <dd className="text-xs sm:text-sm font-semibold text-[#211d1a]">Toda la Península</dd>
              </div>
            </dl>
          </div>

          {/* Visual Column / Studio Artwork Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl p-4 bg-[#eae4d5] border-2 border-[#211d1a] shadow-xl">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#211d1a]/20 bg-[#f7f4ed]">
                <img
                  src={casaBatllo}
                  alt="Cerámica Yorokobu en gres con técnica cuerda seca"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#f7f4ed]/90 backdrop-blur-sm border border-[#211d1a]/20 rounded-lg text-xs font-mono text-[#211d1a] flex items-center justify-between">
                  <span>Mural Casa Batlló</span>
                  <span className="px-2 py-0.5 bg-[#34548d] text-white rounded text-[10px] uppercase font-bold">Original</span>
                </div>
              </div>

              {/* Decorative Wax Line Motif badge */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs font-mono text-[#211d1a]/70">
                <span>Barcelona, Catalunya</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#486e58]" />
                  Gres de 1ª calidad
                </span>
              </div>
            </div>

            {/* Subtle background card stack */}
            <div className="absolute -bottom-3 -right-3 inset-0 bg-[#34548d] rounded-2xl -z-10 border-2 border-[#211d1a]" />
          </div>

        </div>
      </div>
    </section>
  );
};
