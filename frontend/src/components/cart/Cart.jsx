
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex justify-end">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[35%] h-full bg-white flex flex-col justify-between overflow-y-auto shadow-lg relative">
        {/* Close Button */}
        <div className="flex justify-end p-4 sticky top-0 bg-white z-20">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>

        {cart && cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <h5 className="text-lg font-medium">Cart is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              {/* Cart Header */}
              <div className={`${styles.noramlFlex} px-4 py-2 border-b`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[18px] font-[500]">
                  {cart.length} items
                </h5>
              </div>

              {/* Cart Items */}
              <div className="divide-y">
                {cart.map((item) => (
                  <CartSingle
                    key={item._id}
                    data={item}
                    quantityChangeHandler={quantityChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
              </div>
            </div>

            {/* Checkout */}
            <div className="p-4 sticky bottom-0 bg-white border-t">
              <Link to="/checkout">
                <div className="h-[45px] w-full flex items-center justify-center bg-red-600 rounded-[5px]">
                  <h1 className="text-white text-[18px] font-semibold">
                    Checkout Now (USD ${totalPrice.toFixed(2)})
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = () => {
    if (data.stock <= value) {
      toast.error("Product stock limited!");
    } else {
      const newQty = value + 1;
      setValue(newQty);
      quantityChangeHandler({ ...data, qty: newQty });
    }
  };

  const decrement = () => {
    const newQty = value === 1 ? 1 : value - 1;
    setValue(newQty);
    quantityChangeHandler({ ...data, qty: newQty });
  };

  return (
    <div className="flex items-center p-4 gap-3">
      <div className="flex flex-col items-center justify-center">
        <div
          className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={increment}
        >
          <HiPlus size={14} color="#fff" />
        </div>
        <span className="py-1">{value}</span>
        <div
          className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={decrement}
        >
          <HiOutlineMinus size={14} />
        </div>
      </div>

      <img
        src={data.images[0]?.url}
        alt={data.name}
        className="w-24 h-24 object-cover rounded-md"
      />

      <div className="flex-1">
        <h1 className="font-medium">{data.name}</h1>
        <h4 className="text-gray-500">
          ${data.discountPrice} x {value}
        </h4>
        <h4 className="font-semibold text-red-600">USD ${totalPrice.toFixed(2)}</h4>
      </div>

      <RxCross1
        className="cursor-pointer"
        onClick={() => removeFromCartHandler(data)}
      />
    </div>
  );
};

export default Cart;
