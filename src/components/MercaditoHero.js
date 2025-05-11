import React from 'react';

const MercaditoHero = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Del campo a tu mesa, <span className="text-green-600">sin colas</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Conectamos directamente a los agricultores cubanos con los consumidores. 
            Productos frescos, precios justos y entrega rápida.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors">
            Ver productos por provincia
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="imagenes/agricultores_cubanos.jpg" 
            alt="Agricultores cubanos" 
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MercaditoHero;