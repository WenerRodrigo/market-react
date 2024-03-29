import React from "react";

export const Main = () => {
  return (
    <div className="hidden md:flex items-center justify-center py-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between">
          <a href="/cellphones" className="px-4 py-2 mr-4 hover:text-gray-300">Celulares</a>
          <a href="/tablets" className="px-4 py-2 mr-4 hover:text-gray-300">Tablets</a>
          <a href="/computers" className="px-4 py-2 mr-4 hover:text-gray-300">Computadores</a>
          <a href="/acessory" className="px-4 py-2 mr-4 hover:text-gray-300">Acessórios</a>
          <a href="/house" className="px-4 py-2 mr-4 hover:text-gray-300">Casa</a>
          <a href="/offers" className="px-4 py-2 mr-4 hover:bg-red-300 bg-red-400 rounded-md text-white">Ofertas</a>
        </div>
      </div>
    </div>
  );
};
