import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  // Controla si el menú móvil esta abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#09090F] text-white sticky top-0 z-50 px-4 pt-3 sm:px-6 md:px-8">
      <div className="relative flex w-full items-center justify-between py-5 sm:px-6 md:px-8 mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0B0B12]/75 px-5 backdrop-blur-xl shadow-lg shadow-black/10">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide">
          Focusly <span className="text-violet-500">.</span>
        </a>

        {/* Enlaces para escritorio */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#caracteristicas"
            className="text-sm text-gray-300 transition-colors duration-300 hover:text-violet-400"
          >
            Características
          </a>
          <a
            href="#testimonios"
            className="text-sm text-gray-300 transition-colors duration-300 hover:text-violet-400"
          >
            Testimonios
          </a>
          <a
            href="#precios"
            className="text-sm text-gray-300 transition-colors duration-300 hover:text-violet-400"
          >
            Precios
          </a>
        </div>

        {/* Boton CTA para escritorio */}
        <Button
          label="Comenzar gratis"
          href="#precios"
          size="sm"
          className="hidden! md:inline-flex!"
        />

        {/* Boton del menú movil */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menú desplegable para móvil */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-t border-white/10 bg-[#09090F] px-4 py-5 shadow-xl md:hidden">
            <a
              href="#caracteristicas"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 transition-colors hover:text-violet-400"
            >
              Características
            </a>

            <a
              href="#testimonios"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 transition-colors hover:text-violet-400"
            >
              Testimonios
            </a>

            <a
              href="#precios"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-300 transition-colors hover:text-violet-400"
            >
              Precios
            </a>

            <a
              href="#precios"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg bg-violet-600 px-5 py-3 text-center text-sm font-semibold transition-colors hover:bg-violet-700"
            >
              Comenzar gratis
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
