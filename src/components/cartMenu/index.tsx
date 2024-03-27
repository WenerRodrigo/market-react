import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useCart } from "../context";

interface CartMenuProps {
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const { cartItems } = useCart();

  const closeMenu = () => {
    setIsVisible(false);
    onClose();
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

            <div className="flex items-center justify-start py-6 px-4 w-full mt-12">
              {cartItems.length === 0 ? (
                <div className="text-6xl pr-6">:(</div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center mb-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                      {/* <p className="text-gray-700">Price: {item.price}</p> */}
                      <p className="text-gray-700">
                        <button className="px-4 border rounded-md text-gray-500 hover:bg-gray-100">
                          +
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button className="px-4 border rounded-md text-gray-500 hover:bg-gray-100">
                          -
                        </button>
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="bottom-4">
              <span>Total</span>
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
