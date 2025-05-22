import React from 'react';

const MercaditoHeader = () => {
  return (
    <header className="bg-green-700 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <img 
            src="imagenes/MercaditoCubano.png" 
            alt="MercaditoCubano" 
            className="h-12"
          />
          <h1 className="ml-2 text-lg sm:text-xl font-bold text-white whitespace-nowrap">MercaditoCubano</h1>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap sm:flex-row w-full sm:w-auto text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-6 justify-center sm:justify-start">
            <li><a href="#inicio" className="text-green-100 hover:text-white block">Inicio</a></li>
            <li><a href="#productos" className="text-green-100 hover:text-white block">Productos</a></li>
            <li><a href="#pagos" className="text-green-100 hover:text-white block">Pagos</a></li>
            <li><a href="#puntos" className="text-green-100 hover:text-white block">Puntos</a></li>
            <li><a href="#contacto" className="text-green-100 hover:text-white block">Contacto</a></li>
          </ul>
        </nav>
        <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors w-full sm:w-auto mt-2 sm:mt-0">
          Mi cuenta
        </button>
      </div>
    </header>
  );
};

export default MercaditoHeader;