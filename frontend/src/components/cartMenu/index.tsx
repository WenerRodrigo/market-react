import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CartContext } from "../context";
import { CartItem } from "../cartItem";

interface CartMenuProps {
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const { cartItems } = useContext(CartContext);

  const closeMenu = () => {
    setIsVisible(false);
    onClose();
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(cartItems).forEach((itemId) => {
      const { product, quantity } = cartItems[itemId];
      total += parseFloat(product.price.toString()) * quantity;
    });
    return total.toFixed(2);
};

  return (
    <>
      {isVisible && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>
          <div className="flex flex-col items-center justify-start z-50 fixed top-0 right-0 w-4/5 h-full max-w-lg bg-white shadow-lg">
            <div className="flex items-center justify-between w-full shadow-md">
              <span className="p-2 text-3xl cursor-pointer" onClick={closeMenu}>
                <IoCloseOutline />
              </span>
              <div className="flex items-center justify-center py-4">
                <span className="text-lg text-gray-700">
                  Carrinho de compras
                </span>
              </div>
              <div className="py-4 px-4 text-3xl">
                <IoIosArrowForward />
              </div>
            </div>

            <div className="flex items-center justify-start py-6 px-4 w-full mt-12 flex-col">
              {Object.keys(cartItems).map((itemId) => (
                <CartItem
                  key={itemId}
                  product={cartItems[itemId].product}
                  quantity={cartItems[itemId].quantity}
                />
              ))}
            </div>
            <div className="bottom-4">
              <span>Total: R$ {calculateTotal()}</span>
            </div>
            <div className="fixed flex items-center justify-center bottom-4">
              <button className="text-md bg-green-500 hover:bg-green-600 text-white px-8 py-4 w-full rounded-md">
                Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartMenu;
