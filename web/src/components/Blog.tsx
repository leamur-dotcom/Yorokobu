import React, { useState } from 'react';
import { ARTICLES } from '../data/ceramics';
import { Article } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X, Quote } from 'lucide-react';

export const Blog: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="bitacora" className="py-20 bg-[#f7f4ed] border-b border-[#211d1a]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono text-[#34548d] uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#34548d]" />
            Bitácora de Taller
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211d1a]">
            Lo que pasa entre el boceto y la cocción
          </h2>
          <div className="w-16 h-1 bg-[#34548d] rounded-full my-3" />
          <p className="text-base text-[#211d1a]/80 mt-2">
            Notas de trabajo, química de esmaltes y secretos del horno de gres explicados desde el día a día en el estudio de Barcelona.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-[#f7f4ed] rounded-2xl border-2 border-[#211d1a] p-6 sm:p-8 shadow-sm hover:border-[#34548d] transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#211d1a]/70 mb-4">
                  <span className="px-2.5 py-1 bg-[#eae4d5] text-[#211d1a] font-semibold rounded uppercase tracking-wider text-[10px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#34548d]" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#211d1a] mb-3 group-hover:text-[#34548d] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#211d1a]/80 leading-relaxed mb-6 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#211d1a]/15 flex items-center justify-between text-xs font-mono font-bold text-[#34548d] group-hover:text-[#c35232] uppercase tracking-wider">
                <span>Leer nota completa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-[#211d1a]/70 backdrop-blur-sm p-4 overflow-y-auto flex items-center justify-center animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#f7f4ed] rounded-2xl border-4 border-[#211d1a] shadow-2xl p-6 sm:p-10 my-8">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 bg-[#211d1a] text-white rounded-full hover:bg-[#c35232] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-3 text-xs font-mono text-[#211d1a]/60 mb-2">
                <span className="px-2.5 py-1 bg-[#34548d] text-white rounded uppercase font-bold">
                  {activeArticle.category}
                </span>
                <span>{activeArticle.date}</span>
                <span>· {activeArticle.readTime}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#211d1a] mt-2 leading-tight">
                {activeArticle.title}
              </h3>
            </div>

            {activeArticle.quote && (
              <div className="p-4 bg-[#eae4d5] border-l-4 border-[#c35232] rounded-r-xl mb-6 font-serif italic text-sm text-[#211d1a] flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#c35232] shrink-0" />
                <p>"{activeArticle.quote}"</p>
              </div>
            )}

            <div className="space-y-4 text-xs sm:text-sm text-[#211d1a]/90 leading-relaxed font-sans mb-8">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#211d1a]/15 flex items-center justify-between">
              <span className="text-xs font-mono text-[#211d1a]/60">Yorokobu Cerámica · Barcelona</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-[#211d1a] text-white text-xs font-medium rounded-xl hover:bg-[#c35232] transition-colors"
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
