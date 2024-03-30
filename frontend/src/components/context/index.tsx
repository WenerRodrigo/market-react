import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
};
type CartItem = {
  quantity: number;
  product: Product;
};


type CartContextType = {
  cartItems: { [key: string]: CartItem };
  addToCart: (product: Product, quantity: number) => void;
};
export const CartContext = createContext<CartContextType>({
    cartItems: {},
    addToCart: () => { },
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<{ [key: string]: CartItem }>({});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addToCart = (item: any, quantity: number) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };

            if (quantity > 0) {
                if (updatedCartItems[item.id]) {
                    updatedCartItems[item.id].quantity += quantity;
                } else {
                    updatedCartItems[item.id] = { quantity, product: item };
                }
            } else {
                if (updatedCartItems[item.id]) {
                    updatedCartItems[item.id].quantity += quantity;
                    if (updatedCartItems[item.id].quantity <= 0) {
                        delete updatedCartItems[item.id];
                    }
                }
            }
            return updatedCartItems;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};