import React, { useState } from 'react';
import { WORKSHOPS } from '../data/ceramics';
import { Workshop } from '../types';
import { Calendar, Clock, Euro, CheckCircle2, Users, Sparkles, X, ChevronRight } from 'lucide-react';

export const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [bookingDate, setBookingDate] = useState<string>('');
  const [attendees, setAttendees] = useState<number>(1);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleOpenBooking = (ws: Workshop) => {
    setSelectedWorkshop(ws);
    setBookingDate(ws.upcomingDates[0]?.date || '');
    setAttendees(1);
    setBookingSuccess(false);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !bookingDate) return;
    setBookingSuccess(true);
  };

  return (
    <section id="talleres" className="py-20 bg-[#eae4d5]/30 border-b border-[#211d1a]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono text-[#c35232] uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#d99138]" />
            Formación &amp; Colaboración en Barcelona
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211d1a]">
            Tres maneras de entrar al taller
          </h2>
          <div className="w-16 h-1 bg-[#c35232] rounded-full my-3" />
          <p className="text-base text-[#211d1a]/80 mt-2">
            Aprende la técnica clásica de cuerda seca con grupos reducidos (máximo 6 personas) o solicita acompañamiento técnico para tus proyectos de interiorismo.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKSHOPS.map((ws) => (
            <article
              key={ws.id}
              className="bg-[#f7f4ed] rounded-2xl border-2 border-[#211d1a] p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#c35232] transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#211d1a]/70 mb-3">
                  <span className="flex items-center gap-1.5 bg-[#eae4d5] px-2.5 py-1 rounded-md font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#34548d]" />
                    {ws.duration}
                  </span>
                  <span className="font-bold text-[#c35232] text-sm font-mono">
                    {ws.price > 0 ? `${ws.price}€` : 'A medida'}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#211d1a] mb-3">
                  {ws.title}
                </h3>

                <p className="text-xs text-[#211d1a]/80 leading-relaxed mb-6">
                  {ws.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-[11px] font-mono uppercase text-[#211d1a]/60 font-semibold tracking-wider">
                    Lo que aprenderás:
                  </h4>
                  {ws.details.map((item, idx) => (
                    <div key={idx} className="text-xs text-[#211d1a] flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#d99138] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {ws.upcomingDates.length > 0 && (
                  <div className="bg-[#eae4d5]/70 p-3.5 rounded-xl border border-[#211d1a]/15 mb-6">
                    <span className="text-[10px] font-mono text-[#211d1a]/70 block font-semibold mb-1 uppercase tracking-wider">
                      Próxima convocatoria:
                    </span>
                    <span className="text-xs font-semibold text-[#211d1a] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#486e58]" />
                      {ws.upcomingDates[0].date} ({ws.upcomingDates[0].seatsLeft} plazas)
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleOpenBooking(ws)}
                className="w-full py-3 px-4 bg-[#211d1a] hover:bg-[#c35232] text-[#f7f4ed] font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm font-mono uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                Reservar plaza
              </button>
            </article>
          ))}
        </div>

      </div>

      {/* Booking Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 bg-[#211d1a]/70 backdrop-blur-sm p-4 overflow-y-auto flex items-center justify-center animate-in fade-in">
          <div className="relative w-full max-w-lg bg-[#f7f4ed] rounded-2xl border-4 border-[#211d1a] shadow-2xl p-6 sm:p-8 my-8">
            <button
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-4 right-4 p-2 bg-[#211d1a] text-white rounded-full hover:bg-[#c35232] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <>
                <div className="mb-6">
                  <span className="px-2.5 py-1 bg-[#d99138] text-white font-mono text-[10px] uppercase font-bold rounded">
                    Reserva de Taller
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#211d1a] mt-2">
                    {selectedWorkshop.title}
                  </h3>
                  <p className="text-xs text-[#211d1a]/70 mt-1">
                    Duración: {selectedWorkshop.duration} · Precio: {selectedWorkshop.price}€ / asistente
                  </p>
                </div>

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#211d1a]/70 block font-semibold mb-1">
                      Fecha y Horario
                    </label>
                    <select
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full p-2.5 bg-[#eae4d5]/60 border border-[#211d1a]/20 rounded-xl text-xs font-medium text-[#211d1a] focus:outline-none focus:border-[#34548d]"
                      required
                    >
                      {selectedWorkshop.upcomingDates.map((d, i) => (
                        <option key={i} value={d.date}>
                          {d.date} ({d.seatsLeft} plazas disponibles)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#211d1a]/70 block font-semibold mb-1">
                        Asistentes
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="4"
                        value={attendees}
                        onChange={(e) => setAttendees(parseInt(e.target.value) || 1)}
                        className="w-full p-2.5 bg-[#eae4d5]/60 border border-[#211d1a]/20 rounded-xl text-xs font-medium text-[#211d1a]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase text-[#211d1a]/70 block font-semibold mb-1">
                        Total Estimado
                      </label>
                      <div className="p-2.5 bg-[#eae4d5] border border-[#211d1a]/20 rounded-xl text-xs font-mono font-bold text-[#211d1a]">
                        {selectedWorkshop.price * attendees} €
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#211d1a]/70 block font-semibold mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full p-2.5 bg-[#eae4d5]/60 border border-[#211d1a]/20 rounded-xl text-xs text-[#211d1a]"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#211d1a]/70 block font-semibold mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full p-2.5 bg-[#eae4d5]/60 border border-[#211d1a]/20 rounded-xl text-xs text-[#211d1a]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#c35232] hover:bg-[#211d1a] text-white font-medium text-xs rounded-xl shadow transition-colors cursor-pointer mt-2"
                  >
                    Confirmar solicitud de plaza
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-[#486e58] text-white rounded-full flex items-center justify-center mx-auto shadow">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#211d1a]">
                  ¡Reserva Recibida!
                </h3>
                <p className="text-xs text-[#211d1a]/80 leading-relaxed max-w-sm mx-auto">
                  Hemos registrado la solicitud para <strong>{userName}</strong> ({attendees} plaza/s) para el{' '}
                  <strong>{bookingDate}</strong>. Te enviamos los detalles de confirmación e instrucciones del taller a{' '}
                  <strong>{userEmail}</strong>.
                </p>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="px-6 py-2.5 bg-[#211d1a] text-white text-xs font-medium rounded-xl hover:bg-[#c35232] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
