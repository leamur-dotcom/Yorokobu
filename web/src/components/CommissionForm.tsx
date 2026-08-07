import React, { useState, useEffect } from 'react';
import { CollectionItem } from '../types';
import { Send, CheckCircle2, Calculator, Sparkles, Clock, ShieldCheck, X } from 'lucide-react';

interface CommissionFormProps {
  preselectedItem?: CollectionItem | null;
  onClearPreselection?: () => void;
}

export const CommissionForm: React.FC<CommissionFormProps> = ({
  preselectedItem,
  onClearPreselection,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState<string>('Azulejo o mural');
  const [quantity, setQuantity] = useState<number>(1);
  const [dimensions, setDimensions] = useState<string>('15 x 15 cm');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [commissionRef, setCommissionRef] = useState('');

  // Auto-update project type if item preselected
  useEffect(() => {
    if (preselectedItem) {
      if (preselectedItem.category === 'azulejos') setProjectType('Azulejo o mural');
      else if (preselectedItem.category === 'mascotas') setProjectType('Retrato de mascota');
      else if (preselectedItem.category === 'utilitaria') setProjectType('Pieza utilitaria');
      else if (preselectedItem.category === 'marcas') setProjectType('Diseño para marca o local');
      setDetails(`Interesado en la obra: ${preselectedItem.title}`);
    }
  }, [preselectedItem]);

  // Live Price & Weeks Calculator logic
  const calculateEstimates = () => {
    let basePricePerUnit = 45;
    let weeksPerUnit = 2;

    if (projectType === 'Azulejo o mural') {
      basePricePerUnit = 45;
      weeksPerUnit = 2;
    } else if (projectType === 'Retrato de mascota') {
      basePricePerUnit = 85;
      weeksPerUnit = 2.5;
    } else if (projectType === 'Pieza utilitaria') {
      basePricePerUnit = 38;
      weeksPerUnit = 1.5;
    } else if (projectType === 'Diseño para marca o local') {
      basePricePerUnit = 120;
      weeksPerUnit = 3;
    }

    const totalEstPrice = Math.round(basePricePerUnit * quantity);
    const totalEstWeeks = Math.max(2, Math.round(weeksPerUnit + Math.log2(quantity)));

    return { totalEstPrice, totalEstWeeks };
  };

  const { totalEstPrice, totalEstWeeks } = calculateEstimates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const ref = `YRK-${Math.floor(100000 + Math.random() * 900000)}`;
    setCommissionRef(ref);
    setIsSubmitted(true);
  };

  return (
    <section id="encargo" className="py-20 bg-[#f7f4ed] border-b border-[#211d1a]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-mono text-[#c35232] uppercase tracking-widest font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#d99138]" />
            Atención Personalizada
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211d1a] mb-2">
            Contame tu idea
          </h2>
          <div className="w-16 h-1 bg-[#c35232] rounded-full mx-auto my-3" />
          <p className="text-base text-[#211d1a]/80 leading-relaxed">
            Un espacio, una marca, la cara de tu gato: contame qué querés traducir a cerámica y te
            respondo en 24-48h con una propuesta y presupuesto orientativo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#eae4d5]/40 rounded-3xl border-4 border-[#211d1a] p-6 sm:p-10 shadow-xl">
          
          {/* Preselected Notice */}
          {preselectedItem && (
            <div className="mb-6 p-4 bg-[#34548d]/10 border-2 border-[#34548d] rounded-2xl flex items-center justify-between">
              <div className="text-xs font-mono text-[#34548d]">
                <strong>Pieza seleccionada:</strong> {preselectedItem.title} ({preselectedItem.priceFrom})
              </div>
              <button
                onClick={onClearPreselection}
                className="text-[#34548d] hover:text-[#c35232] text-xs font-bold underline"
              >
                Cambiar
              </button>
            </div>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs font-mono uppercase text-[#211d1a]/80 block font-semibold mb-2">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full p-3 bg-[#f7f4ed] border-2 border-[#211d1a]/20 rounded-xl text-xs sm:text-sm text-[#211d1a] focus:outline-none focus:border-[#c35232]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-mono uppercase text-[#211d1a]/80 block font-semibold mb-2">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full p-3 bg-[#f7f4ed] border-2 border-[#211d1a]/20 rounded-xl text-xs sm:text-sm text-[#211d1a] focus:outline-none focus:border-[#c35232]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-1">
                  <label htmlFor="project" className="text-xs font-mono uppercase text-[#211d1a]/80 block font-semibold mb-2">
                    Tipo de proyecto
                  </label>
                  <select
                    id="project"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-3 bg-[#f7f4ed] border-2 border-[#211d1a]/20 rounded-xl text-xs sm:text-sm text-[#211d1a] focus:outline-none focus:border-[#c35232]"
                  >
                    <option value="Azulejo o mural">Azulejo o mural</option>
                    <option value="Retrato de mascota">Retrato de mascota</option>
                    <option value="Pieza utilitaria">Pieza utilitaria</option>
                    <option value="Diseño para marca o local">Diseño para marca o local</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="text-xs font-mono uppercase text-[#211d1a]/80 block font-semibold mb-2">
                    Cantidad de piezas
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full p-3 bg-[#f7f4ed] border-2 border-[#211d1a]/20 rounded-xl text-xs sm:text-sm text-[#211d1a] focus:outline-none focus:border-[#c35232]"
                  />
                </div>

                <div>
                  <label htmlFor="dimensions" className="text-xs font-mono uppercase text-[#211d1a]/80 block font-semibold mb-2">
                    Dimensiones aproximadas
                  </label>
                  <input
                    id="dimensions"
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="Ej: 20x20 cm o 1x2 metros"
                    className="w-full p-3 bg-[#f7f4ed] border-2 border-[#211d1a]/20 rounded-xl text-xs sm:text-sm text-[#211d1a] focus:outline-none focus:border-[#c35232]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="details" className="text-xs font-mono uppercase text-[#211d1a]/80 block font-semibold mb-2">
                  Contame tu idea en detalle
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Espacio, preferencia de colores (cobalto, ocre, terracota...), referencias visuales o detalles particulares..."
                  className="w-full p-3 bg-[#f7f4ed] border-2 border-[#211d1a]/20 rounded-xl text-xs sm:text-sm text-[#211d1a] focus:outline-none focus:border-[#c35232]"
                />
              </div>

              {/* Calculator Live Output Banner */}
              <div className="p-4 bg-[#f7f4ed] rounded-2xl border-2 border-[#211d1a] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#34548d] text-white rounded-xl">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#211d1a]/60 block font-bold">
                      Cálculo Orientativo en Tiempo Real
                    </span>
                    <div className="text-sm font-bold text-[#211d1a] flex items-center gap-3">
                      <span>Presupuesto est.: <strong className="text-[#c35232] font-mono text-base">~{totalEstPrice} €</strong></span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-mono text-xs text-[#34548d]">
                        <Clock className="w-3.5 h-3.5" />
                        ~{totalEstWeeks} semanas
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-[#211d1a]/60 text-right">
                  * Precio final sujeto a confirmación tras revisar el boceto
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#211d1a] hover:bg-[#c35232] text-[#f7f4ed] font-bold text-sm sm:text-base rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Enviar propuesta de encargo
              </button>

            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-[#486e58] text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#211d1a]">
                ¡Propuesta Recibida!
              </h3>

              <div className="p-4 bg-[#f7f4ed] rounded-2xl border-2 border-[#211d1a] max-w-md mx-auto text-left space-y-2 text-xs font-mono">
                <div><strong>Código de seguimiento:</strong> <span className="text-[#c35232] font-bold">{commissionRef}</span></div>
                <div><strong>Cliente:</strong> {name} ({email})</div>
                <div><strong>Proyecto:</strong> {projectType} ({quantity} unidades, {dimensions})</div>
                <div><strong>Presupuesto estimado:</strong> ~{totalEstPrice}€</div>
                <div><strong>Plazo estimado:</strong> ~{totalEstWeeks} semanas de taller</div>
              </div>

              <p className="text-xs text-[#211d1a]/80 max-w-md mx-auto leading-relaxed">
                Revisaremos tu consulta en el estudio de Barcelona y te responderemos a <strong>{email}</strong> con un boceto en acuarela y la ficha técnica de esmaltado.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 bg-[#211d1a] text-white text-xs font-medium rounded-xl hover:bg-[#c35232] transition-colors cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
