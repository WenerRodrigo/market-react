import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CartContext } from "../context";
import { CartItem } from "../cartItem";
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface CartMenuProps {
  onClose: () => void;
}

export const CartMenu = ({ onClose }: CartMenuProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
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
    return (total - discount).toFixed(2); 
  };

  const formik = useFormik({
    initialValues: {
      cupom: '',
    },
    validationSchema: Yup.object({
      cupom: Yup.string().trim().required('Por favor, insira o cupom').matches(/^BEMVINDO$/, 'Cupom inválido'),
    }),
    onSubmit: () => {
      applyCoupon();
    },
  });

  const applyCoupon = () => {
    if (formik.isValid && !couponApplied) {
      const discountAmount = Number(calculateTotal()) * 0.1;
      setDiscount(discountAmount);
      setCouponApplied(true);
    } else {
      alert('Cupom já aplicado ou inválido');
    }
  };

  return (
    <>
      {isVisible && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>
          <div className="flex flex-col items-center justify-start z-50 fixed top-0 right-0 w-4/5 h-full max-w-lg bg-white shadow-lg overflow-auto">
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

            <div className="flex items-center justify-start py-6 px-4 w-full mt-8 flex-col">
              {Object.keys(cartItems).map((itemId) => (
                <CartItem
                  key={itemId}
                  product={cartItems[itemId].product}
                  quantity={cartItems[itemId].quantity}
                />
              ))}
            </div>
            <form onSubmit={formik.handleSubmit} className="flex items-center w-full">
              <div className="gap-2 px-4 bg-gray-200 w-full py-4">
                <div className="text-gray-500 flex items-center justify-between py-4">
                  <h3>Sub Total:</h3>
                  <p>R$ {calculateTotal()}</p>
                </div>
                <div className="text-gray-500 flex items-center justify-between">
                  <h3 className="flex items-center w-full">Cupom:</h3>
                  <input
                    type="text"
                    name="cupom"
                    className={`flex items-center py-2 px-2 rounded-md justify-end  w-40 ${formik.touched.cupom && formik.errors.cupom ? 'border-red-500' : ''}`}
                    placeholder="Insira o cupom"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cupom}
                  />
                  {formik.touched.cupom && formik.errors.cupom ? (
                    <p className="text-red-500 text-sm flex-col flex w-full text-center">{formik.errors.cupom}</p>
                  ) : null}
                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ml-2">
                    aplicar
                  </button>
                </div>
                <div className="text-gray-500 flex items-center justify-between py-4">
                  <h3>Desconto:</h3>
                  <p>R$ {discount.toFixed(2)}</p>
                </div>
                <div className="text-gray-500 flex items-center justify-between py-4">
                  <h3>Total:</h3>
                  <p>R$ {(Number(calculateTotal()) - discount).toFixed(2)}</p>
                </div>
              </div>
            </form>
            <div className="flex items-center justify-center mt-2">
              <button className="text-md bg-green-500 hover:bg-green-600 text-white px-8 py-4 w-full rounded-md mb-4">
                Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

