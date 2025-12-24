
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
    <div className="fixed top-0 left-0 w-full h-screen bg-[#0000004b] z-[2000] flex justify-end">
      {/* Responsive Widths:
         - Mobile: 85% width
         - Tablet: 50% width
         - Laptop (lg): 30% width
         - Large Desktop (xl): 25% width
      */}
      <div className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[30%] xl:w-[25%] h-full bg-white flex flex-col justify-between overflow-y-auto shadow-2xl relative animate-slide-in">
        
        <div>
          {/* Cart Header */}
          <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-30">
            <div className={`${styles.noramlFlex} gap-2`}>
              <IoBagHandleOutline size={25} className="text-red-600" />
              <h5 className="text-[18px] font-semibold">
                {cart?.length} {cart?.length === 1 ? "item" : "items"}
              </h5>
            </div>
            <RxCross1
              size={25}
              className="cursor-pointer text-gray-500 hover:text-black transition-colors"
              onClick={() => setOpenCart(false)}
            />
          </div>

          {cart && cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[80vh] gap-3">
              <IoBagHandleOutline size={50} className="text-gray-300" />
              <h5 className="text-gray-500 font-medium text-[16px]">Your cart is empty!</h5>
            </div>
          ) : (
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
          )}
        </div>

        {/* Checkout Button Section */}
        {cart && cart.length > 0 && (
          <div className="p-5 sticky bottom-0 bg-white border-t z-30">
            <Link to="/checkout">
              <div className="h-[50px] w-full flex items-center justify-center bg-[#d55b45] rounded-[8px] hover:bg-[#b04a39] transition-all">
                <h1 className="text-white text-[17px] font-semibold">
                  Checkout Now (USD ${totalPrice.toFixed(2)})
                </h1>
              </div>
            </Link>
          </div>
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
    <div className="flex items-center p-4 gap-4 hover:bg-gray-50 transition-colors">
      {/* Quantity Selector */}
      <div className="flex flex-col items-center">
        <div
          className="bg-red-500 rounded-full w-[24px] h-[24px] flex items-center justify-center cursor-pointer shadow-sm hover:scale-110 active:scale-95 transition-all"
          onClick={increment}
        >
          <HiPlus size={14} color="#fff" />
        </div>
        <span className="py-1 font-medium text-[15px]">{value}</span>
        <div
          className="bg-gray-200 rounded-full w-[24px] h-[24px] flex items-center justify-center cursor-pointer shadow-sm hover:scale-110 active:scale-95 transition-all"
          onClick={decrement}
        >
          <HiOutlineMinus size={14} className="text-gray-600" />
        </div>
      </div>

      {/* Product Image */}
      <img
        src={data.images[0]?.url}
        alt={data.name}
        className="w-[70px] h-[70px] lg:w-[85px] lg:h-[85px] object-contain rounded-[5px] bg-white border"
      />

      {/* Details */}
      <div className="flex-1">
        <h1 className="font-medium text-[15px] text-[#333] line-clamp-1">{data.name}</h1>
        <h4 className="text-[13px] text-gray-500 pt-1">
          ${data.discountPrice.toFixed(2)} x {value}
        </h4>
        <h4 className="font-bold text-[#d55b45] text-[16px] mt-1">
          USD ${totalPrice.toFixed(2)}
        </h4>
      </div>

      {/* Delete Icon */}
      <RxCross1
        size={20}
        className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
        onClick={() => removeFromCartHandler(data)}
        title="Remove item"
      />
    </div>
  );
};

export default Cart;