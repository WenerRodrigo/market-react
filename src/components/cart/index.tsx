import { BsCart } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="flex items-center justify-between cursor-pointer ml-2">
      <div className="flex items-center">
        <BsCart className="flex items-center justify-center text-2xl text-white font-bold" />
      </div>
    </div>
  );
};

export default Cart;
