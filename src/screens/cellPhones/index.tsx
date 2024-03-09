import React, { useEffect, useState } from "react";
import axios from "axios";

interface IProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  discountedPrice?: number;
  model?: string;
  condition?: string;
}

export const CellPhones: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IProduct[]>([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.mercadolibre.com/sites/MLB/search?q=celular"
      );
      setData(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-6xl px-4">
        {data.map((product) => (
          <div key={product.id} className="border p-4 flex flex-col rounded-md hover:shadow-lg">
            <img src={product.thumbnail} alt={product.title} className="mb-2 object-cover h-auto w-full" />
            <div className="flex flex-col justify-between h-32"> {/* Definindo uma altura fixa para a área de descrição */}
              <div>
                <h2 className="text-sm font-bold mb-2">{product.title}</h2>
                {product.discountedPrice && (
                  <p className="text-gray-700 mb-2">
                    Discounted Price: {product.discountedPrice}
                  </p>
                )}
                {product.model && (
                  <p className="text-gray-700 mb-2">Model: {product.model}</p>
                )}
              </div>
              <p className="text-black text-sm mb-2">R$: {product.price}</p> {/* Preço fora do contêiner flexível */}
            </div>
            <button type="button" className="bg-green-600 text-white rounded-md py-2">
              Comprar
            </button>
          </div>
        ))}
      </div>
      {isLoading && <p className="text-center">Carregando...</p>}
    </div>
  );
};
