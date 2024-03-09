import React from "react";

export const Main = () => {
  return (
    <div className="hidden md:flex items-center justify-center py-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between">
          <a href="/cell-phones" className="px-4 py-2 mr-4 hover:text-gray-300">Celulares</a>
          <a href="#" className="px-4 py-2 mr-4 hover:text-gray-300">Tablets</a>
          <a href="#" className="px-4 py-2 mr-4 hover:text-gray-300">Computadores</a>
          <a href="#" className="px-4 py-2 mr-4 hover:text-gray-300">Casa Mesa Banho</a>
          <a href="#" className="px-4 py-2 mr-4 hover:text-gray-300">Ofertas</a>
          <a href="#" className="px-4 py-2 mr-4 hover:text-gray-300">Casa</a>
          <a href="#" className="px-4 py-2 hover:text-gray-300">Variedades</a>
        </div>
      </div>
    </div>
  );
};
