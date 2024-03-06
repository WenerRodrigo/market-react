import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

interface CartMenuProps {
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeMenu = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <>
      {isVisible && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>
          <div className="flex items-center flex-col z-50 fixed top-0 right-0 w-full h-full max-w-lg bg-white shadow-lg">
            <div className="relative flex items-center justify-start text-center w-full shadow-md">
              <span
                className="flex items-center py-2 px-2 text-xl cursor-pointer"
                onClick={closeMenu}
              >
                <IoCloseOutline />
              </span>
              <div className="flex items-center justify-end text-sm  font-bold text-gray-700 py-4">
                <span>Carrinho de compras</span>
              </div>
            </div>

            <div className="absolute right-0 py-4 px-1 text-lg">
              <IoIosArrowForward />
            </div>
            <div className="flex items-center justify-start py-6 px-7 w-full">
              <span className="text-bold text-2xl px-6">:(</span>
              <div>
                <h3 className="text-lg font-bold">Ops!</h3>
                <p className="text-lg">Seu carrinho está vazio</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  ) : null;
};

export default CartMenu;
