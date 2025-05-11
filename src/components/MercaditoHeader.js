import React from 'react';

const MercaditoHeader = () => {
  return (
    <header className="bg-green-700 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="imagenes/MercaditoCubano.png" 
            alt="MercaditoCubano" 
            className="h-12"
          />
          <h1 className="ml-2 text-xl font-bold text-white">MercaditoCubano</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="text-green-100 hover:text-white">Inicio</a></li>
            <li><a href="#productos" className="text-green-100 hover:text-white">Productos</a></li>
            <li><a href="#pagos" className="text-green-100 hover:text-white">Pagos</a></li>
            <li><a href="#puntos" className="text-green-100 hover:text-white">Puntos</a></li>
            <li><a href="#contacto" className="text-green-100 hover:text-white">Contacto</a></li>
          </ul>
        </nav>
        <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors">
          Mi cuenta
        </button>
      </div>
    </header>
  );
};

export default MercaditoHeader;