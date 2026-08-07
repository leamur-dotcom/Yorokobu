import { useState } from "react";
import { galleryItems } from "../data/galleryData";

const FAQS = [
  {
    q: "¿Dónde puedo comprar las piezas de Yorokobu Cerámica?",
    a: "Actualmente vendemos de forma exclusiva a través de nuestra tienda oficial en Etsy. Ahí podés explorar el catálogo completo y gestionar tu compra de forma segura.",
  },
  {
    q: "¿Las piezas son aptas para uso alimentario y microondas?",
    a: "Sí. Todas nuestras vajillas y piezas utilitarias están elaboradas con esmaltes sin plomo y aptos para consumo alimentario, resistiendo microondas y lavavajillas, aunque recomendamos lavado a mano para prolongar su acabado natural.",
  },
  {
    q: "¿Se realizan envíos internacionales?",
    a: "Sí, enviamos a toda la Unión Europea y destinos internacionales, con seguimiento a través del sistema de envíos de Etsy.",
  },
  {
    q: "¿Aceptáis encargos personalizados o piezas a medida?",
    a: "Sí, realizamos colaboraciones puntuales y colecciones especiales. Para proyectos a medida o pedidos al por mayor, escribinos directamente por correo electrónico.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#d8cdbe]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-serif text-lg text-[#2b2622]">{q}</span>
        <span
          className={`shrink-0 text-2xl leading-none text-[#8b4a3b] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        } overflow-hidden`}
      >
        <p className="min-h-0 text-[#5b5147] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function GaleriaYorokobu() {
  return (
    <section className="bg-[#f7f3ec] text-[#2b2622]">
      {/* Cabecera */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[#8b4a3b] mb-4">
          Yorokobu Cerámica
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4">
          Piezas hechas a mano, tirada por tirada
        </h1>
        <p className="max-w-2xl mx-auto text-[#5b5147] leading-relaxed">
          Cerámica de diseño contemporáneo y estética minimalista, pensada
          para integrarse en espacios serenos. Cada pieza combina
          funcionalidad, textura orgánica y acabados de alta calidad.
        </p>
      </div>

      {/* Galería */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="group relative overflow-hidden rounded-sm bg-[#eae3d6]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-4">
                <p className="text-white font-serif text-lg leading-tight">
                  {item.title}
                </p>
                <p className="text-white/80 text-sm">{item.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="font-serif text-3xl mb-8 text-center">
          Preguntas frecuentes
        </h2>
        <div>
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
