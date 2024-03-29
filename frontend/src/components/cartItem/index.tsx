import React, { useState } from "react";
import { useCart } from "../context";
import { FaRegTrashAlt } from "react-icons/fa";

type Product = {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
};

type CartItemProps = {
  product: Product;
  quantity: number;
};

export const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const { addToCart } = useCart();

  const handleAddItem = () => {
    setItemQuantity(itemQuantity + 1);
    addToCart(product, 1);
  };

  const handleRemoveItem = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      addToCart(product, -1);
    }
  };

  const handleRemoveQuantity = () => {
    setItemQuantity(0);
    addToCart(product, -itemQuantity);
  };

  return (
    <div className="flex items-center justify-start px-4 w-full border rounded-md flex-col shadow-md mb-4">
      <div className="flex items-center justify-center flex-wrap">
        <img className="w-auto" src={product.thumbnail} alt="Imagem Produto" />
        <div className="flex items-center flex-col w-full">
          <h2 className="text-sm flex-wrap text-gray-700">{product.title}</h2>
          <div className="flex items-start justify-start w-full flex-col text-blue-500 mt-2">
            <p className="text-sm">R$ {product.price}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end w-full mt-2 py-2">
        <button
          onClick={handleRemoveItem}
          className="flex items-center justify-center px-6 w-10 hover:bg-gray-100 border rounded-md mr-2"
        >
          -
        </button>
        <p className="text-sm  text-gray-500 w-auto px-4 mr-2">{itemQuantity}</p>
        <button
          onClick={handleAddItem}
          className="flex items-center justify-center px-6 w-10 hover:bg-gray-100 border rounded-md mr-2"
        >
          +
        </button>
        <button
          className="text-sm text-white border rounded-md h-7 w-10"
          onClick={handleRemoveQuantity}
        >
          <span className="flex items-center justify-center">
            <FaRegTrashAlt className="text-sm text-red-600" />
          </span>
        </button>
      </div>
    </div>
  );
};
