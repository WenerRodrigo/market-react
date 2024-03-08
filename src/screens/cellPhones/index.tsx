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

  if (isLoading) {
    return <p className="text-center">Carregando...</p>;
  }

  return (
    <div className="flex items-center justify-center py-4">
      <h1>Home</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.price}</p>
            {product.discountedPrice && <p>{product.discountedPrice}</p>}
            {product.model && <p>{product.model}</p>}
            {product.condition && <p>{product.condition}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};
