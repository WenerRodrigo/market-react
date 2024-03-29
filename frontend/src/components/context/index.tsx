import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  price(price: any): React.ReactNode;
  description: ReactNode;
  title: ReactNode;
  thumbnail: string | undefined;
  id: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: string) => {
    const itemIndex = cartItems.findIndex((item) => item.id === productId);

    if (itemIndex === -1) {
      setCartItems([
        ...cartItems,
        {
          id: productId,
          title: "Product Title",
          thumbnail: "Product Thumbnail",
          quantity: 1,
          price: () => <div>Product Price</div>,
          description: <div>Product Description</div>,
        },
      ]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
