// CheckoutCart.js
import { useContext } from 'react';
import { CartItem } from '../../components/cartItem';
import { CartContext } from '../../components/context';

export const CheckoutCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Produtos no Carrinho:</h2>
      <ul>
        {Object.keys(cartItems).map((itemId) => (
          <CartItem
            key={itemId}
            product={cartItems[itemId].product}
            quantity={cartItems[itemId].quantity}
          />
        ))}
      </ul>
    </div>
  );
};

