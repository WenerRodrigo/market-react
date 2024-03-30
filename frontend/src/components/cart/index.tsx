import { useState, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { CartMenu } from "../cartMenu";
import { useCart } from "../context";

const Cart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [cartItemsLength, setCartItemsLength] = useState(0);
  const { cartItems } = useCart();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    setCartItemsLength(Object.keys(cartItems).length);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cartItems]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between cursor-pointer ml-2 relative">
      <div className="flex items-center relative" onClick={toggleMenu}>
        <BsCart className="flex items-center justify-center text-2xl text-white font-bold" />
        <span className="text-sm text-white absolute -top-3 -right-3 bg-red-500 px-1 rounded-full">{cartItemsLength}</span>
      </div>
      {isMenuOpen && (
        <div className={`absolute ${isMobile ? 'top-full' : 'top-0'} -mt-1 ${isMobile ? 'w-full max-h-screen overflow-y-scroll' : ''}`}>
          <CartMenu onClose={closeMenu} />
        </div>
      )}
    </div>
  );
};

export default Cart;
