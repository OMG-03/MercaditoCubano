import React, { useState } from 'react';

const MercaditoHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="imagenes/MercaditoCubano.png" 
            alt="MercaditoCubano" 
            className="h-12"
          />
          <h1 className="ml-2 text-lg sm:text-xl font-bold text-white whitespace-nowrap">MercaditoCubano</h1>
        </div>
        {/* Botón hamburguesa solo en móviles */}
        <button
          className="sm:hidden ml-2 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Menú de navegación */}
        <nav
          className={`$ {
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-green-700 sm:static sm:block sm:w-auto`}
        >
          <ul className="flex flex-col sm:flex-row text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
            <li><a href="#inicio" className="text-green-100 hover:text-white block">Inicio</a></li>
            <li><a href="#productos" className="text-green-100 hover:text-white block">Productos</a></li>
            <li><a href="#pagos" className="text-green-100 hover:text-white block">Pagos</a></li>
            <li><a href="#puntos" className="text-green-100 hover:text-white block">Puntos</a></li>
            <li><a href="#contacto" className="text-green-100 hover:text-white block">Contacto</a></li>
            <li className="sm:hidden"><button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors w-full mt-2">Mi cuenta</button></li>
          </ul>
        </nav>
        {/* Botón Mi cuenta solo visible en desktop */}
        <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors hidden sm:block">
          Mi cuenta
        </button>
      </div>
    </header>
  );
};

export default MercaditoHeader;