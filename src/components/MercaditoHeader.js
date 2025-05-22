import React from 'react';

const MercaditoHeader = () => {
  return (
    <header className="bg-green-700 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
          <img 
            src="imagenes/MercaditoCubano.png" 
            alt="MercaditoCubano" 
            className="h-12"
          />
          <h1 className="ml-2 text-lg sm:text-xl font-bold text-white whitespace-nowrap">MercaditoCubano</h1>
        </div>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-2">
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-row flex-wrap w-full sm:w-auto text-center sm:text-left justify-center sm:justify-start gap-x-2 gap-y-1">
              <li><a href="#inicio" className="text-green-100 hover:text-white block px-2">Inicio</a></li>
              <li><a href="#productos" className="text-green-100 hover:text-white block px-2">Productos</a></li>
              <li><a href="#pagos" className="text-green-100 hover:text-white block px-2">Pagos</a></li>
              <li><a href="#puntos" className="text-green-100 hover:text-white block px-2">Puntos</a></li>
              <li><a href="#contacto" className="text-green-100 hover:text-white block px-2">Contacto</a></li>
            </ul>
          </nav>
          <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors w-full sm:w-auto">
            Mi cuenta
          </button>
        </div>
      </div>
    </header>
  );
};

export default MercaditoHeader;