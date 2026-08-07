import React, { useState } from 'react';
import { COLLECTION_ITEMS } from '../data/ceramics';
import { CollectionItem, CategoryId } from '../types';
import { Search, Sparkles, Eye, Check, X, Send, Tag, Flame, Ruler } from 'lucide-react';

interface CollectionsProps {
  onSelectItemForCommission: (item: CollectionItem) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectItemForCommission }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<CollectionItem | null>(null);

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'Todas las obras' },
    { id: 'azulejos', label: 'Azulejos & Murales' },
    { id: 'utilitaria', label: 'Utilitaria & Volumétrica' },
    { id: 'mascotas', label: 'Retratos de Mascotas' },
    { id: 'marcas', label: 'Pop Culture & Marcas' },
  ];

  const filteredItems = COLLECTION_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="colecciones" className="py-20 bg-[#f7f4ed] border-b border-[#211d1a]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono text-[#34548d] uppercase tracking-widest font-semibold mb-2">
              Colecciones del Estudio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211d1a]">
              Cuatro formas de trabajar la misma técnica
            </h2>
            <p className="text-base text-[#211d1a]/80 mt-2 max-w-2xl">
              El cordón de cera fija el límite; el esmalte hace el resto. Estos son los campos donde
              aplicamos ese principio, del muro a la mesa.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#211d1a]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar pieza o técnica..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#eae4d5]/60 border border-[#211d1a]/20 rounded-xl focus:outline-none focus:border-[#34548d] transition-colors text-[#211d1a]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#211d1a]/50 hover:text-[#211d1a]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-[#211d1a] text-[#f7f4ed] border-[#211d1a] shadow-sm'
                  : 'bg-[#eae4d5]/50 text-[#211d1a] border-[#211d1a]/15 hover:bg-[#eae4d5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#eae4d5]/30 rounded-2xl border border-dashed border-[#211d1a]/20">
            <p className="text-sm font-medium text-[#211d1a]/70">No se encontraron piezas con el filtro actual.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#34548d] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group bg-[#f7f4ed] rounded-2xl border-2 border-[#211d1a] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-[#eae4d5] overflow-hidden border-b-2 border-[#211d1a]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#c35232] text-white font-mono text-[10px] font-bold uppercase rounded tracking-wider shadow">
                      {item.badge}
                    </span>
                  )}

                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#211d1a]/85 backdrop-blur-sm text-[#f7f4ed] font-mono text-[10px] rounded">
                    {item.categoryLabel}
                  </span>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-[#211d1a]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="px-4 py-2 bg-[#f7f4ed] text-[#211d1a] font-medium text-xs rounded-lg shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer hover:bg-[#eae4d5]"
                    >
                      <Eye className="w-4 h-4 text-[#34548d]" />
                      Ver detalles y ficha técnica
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#211d1a] mb-2 group-hover:text-[#34548d] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#211d1a]/80 leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Tag line */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#c35232] font-semibold bg-[#c35232]/10 px-2.5 py-1 rounded-md mb-4 border border-[#c35232]/20">
                      <Tag className="w-3 h-3" />
                      {item.tag}
                    </div>

                    <div className="pt-4 border-t border-[#211d1a]/10 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#211d1a]">
                        {item.priceFrom}
                      </span>

                      <button
                        onClick={() => onSelectItemForCommission(item)}
                        className="px-3.5 py-2 text-xs font-medium text-[#f7f4ed] bg-[#211d1a] hover:bg-[#c35232] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        Encargar
                        <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-[#211d1a]/70 backdrop-blur-sm p-4 overflow-y-auto flex items-center justify-center animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#f7f4ed] rounded-2xl border-4 border-[#211d1a] shadow-2xl overflow-hidden my-8">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#211d1a] text-white rounded-full hover:bg-[#c35232] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-6 bg-[#eae4d5] relative aspect-[3/4] md:aspect-auto">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-1 bg-[#34548d] text-white font-mono text-[10px] uppercase font-bold rounded tracking-wider">
                    {activeModalItem.categoryLabel}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#211d1a] mt-3 mb-2">
                    {activeModalItem.title}
                  </h3>

                  <p className="text-xs text-[#211d1a]/85 leading-relaxed mb-6">
                    {activeModalItem.longDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono text-[#211d1a] flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-[#d99138]" />
                      <strong>Dimensiones:</strong> {activeModalItem.dimensions}
                    </div>
                    <div className="text-xs font-mono text-[#211d1a] flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#c35232]" />
                      <strong>Cocción:</strong> {activeModalItem.firingTemp}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase text-[#211d1a]/70 font-semibold mb-2">
                      Características de la pieza
                    </h4>
                    <ul className="space-y-1.5">
                      {activeModalItem.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-[#211d1a] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#486e58] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#211d1a]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#211d1a]/60 uppercase block">Orientación</span>
                    <span className="text-sm font-mono font-bold text-[#211d1a]">{activeModalItem.priceFrom}</span>
                  </div>

                  <button
                    onClick={() => {
                      const item = activeModalItem;
                      setActiveModalItem(null);
                      onSelectItemForCommission(item);
                    }}
                    className="px-5 py-2.5 bg-[#c35232] hover:bg-[#211d1a] text-white font-medium text-xs rounded-xl shadow transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    Pedir esta pieza a medida
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
