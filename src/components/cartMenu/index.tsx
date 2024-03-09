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
              <span
                className="p-2 text-3xl cursor-pointer"
                onClick={closeMenu}
              >
                <IoCloseOutline />
              </span>
              <div className="flex items-center justify-center py-4">
                <span className="text-lg text-gray-700">Carrinho de compras</span>
              </div>
              <div className="py-4 px-4 text-3xl">
                <IoIosArrowForward />
              </div>
            </div>

            <div className="flex items-center justify-start py-6 px-4 w-full mt-12">
              <span className="text-6xl pr-6">:(</span>
              <div>
                <h3 className="text-lg font-bold">Ops!</h3>
                <p className="text-lg">Seu carrinho está vazio</p>
              </div>
            </div>
            {/* <button>Finalizar compra</button> */}
          </div>
        </>
      )}
    </>
  );
};

export default CartMenu;