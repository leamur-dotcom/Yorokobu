import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

interface HeaderProps {
  onOpenCommission: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommission }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Wax cord top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-[#eae4d5]">
        <div
          className="h-full bg-[#211d1a] transition-all duration-150 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c35232] border-2 border-[#211d1a] rounded-full shadow-sm" />
        </div>
      </div>

      <header
        className={`fixed top-1.5 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f7f4ed]/95 backdrop-blur-md shadow-sm border-b border-[#211d1a]/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2 text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#211d1a]"
          >
            <span className="relative">
              Yorokobu
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c35232] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <span className="text-sm sm:text-base font-sans font-normal text-[#34548d] italic">
              Cerámica
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#211d1a]">
            <a href="#colecciones" className="hover:text-[#c35232] transition-colors">
              Colecciones
            </a>
            <a href="#talleres" className="hover:text-[#c35232] transition-colors">
              Talleres
            </a>
            <a href="#bitacora" className="hover:text-[#c35232] transition-colors">
              Bitácora
            </a>
            <a href="#sobre" className="hover:text-[#c35232] transition-colors">
              Estudio
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCommission}
              className="px-4 py-2 text-sm font-medium text-[#f7f4ed] bg-[#211d1a] rounded-lg hover:bg-[#c35232] transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Pedir un encargo
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#211d1a] hover:bg-[#eae4d5] rounded-lg transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f7f4ed] border-b border-[#211d1a]/10 px-6 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <a
              href="#colecciones"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#211d1a] hover:text-[#c35232]"
            >
              Colecciones
            </a>
            <a
              href="#talleres"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#211d1a] hover:text-[#c35232]"
            >
              Talleres
            </a>
            <a
              href="#bitacora"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#211d1a] hover:text-[#c35232]"
            >
              Bitácora
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#211d1a] hover:text-[#c35232]"
            >
              Estudio
            </a>
            <div className="pt-2 border-t border-[#eae4d5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommission();
                }}
                className="w-full py-3 text-center text-sm font-medium text-[#f7f4ed] bg-[#211d1a] rounded-lg hover:bg-[#c35232] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Pedir un encargo
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
