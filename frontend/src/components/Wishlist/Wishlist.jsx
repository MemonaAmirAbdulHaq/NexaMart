
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import styles from "../../styles/styles";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (item) => dispatch(removeFromWishlist(item));
  
  const addToCartHandler = (item) => {
    dispatch(addTocart({ ...item, qty: 1 }));
    setOpenWishlist(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#0000004b] z-[2000] flex justify-end">
      {/* Responsiveness breakdown:
          - w-[85%] on small mobile
          - w-[50%] on tablets (md)
          - w-[30%] on laptops (lg)
          - w-[25%] on large desktops (xl)
      */}
      <div className="h-full w-[85%] md:w-[50%] lg:w-[30%] xl:w-[25%] bg-white flex flex-col justify-between shadow-2xl animate-slide-in overflow-y-auto">
        
        <div>
          {/* Close Button & Title */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className={`${styles.noramlFlex} gap-2`}>
              <AiOutlineHeart size={25} className="text-red-500" />
              <h5 className="text-[20px] font-[600]">
                {wishlist?.length} {wishlist?.length === 1 ? "Item" : "Items"}
              </h5>
            </div>
            <RxCross1
              size={25}
              className="cursor-pointer text-gray-500 hover:text-black transition-colors"
              onClick={() => setOpenWishlist(false)}
            />
          </div>

          {wishlist?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[80vh] gap-3">
              <AiOutlineHeart size={50} className="text-gray-300" />
              <h5 className="text-gray-500 font-medium">Your wishlist is empty!</h5>
            </div>
          ) : (
            <div className="w-full">
              {/* Wishlist Items */}
              {wishlist.map((item, index) => (
                <CartSingle
                  key={index}
                  data={item}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={addToCartHandler}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const totalPrice = data.discountPrice;

  return (
    <div className="border-b p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
      {/* Remove Icon */}
      <RxCross1
        size={20}
        className="cursor-pointer text-gray-400 hover:text-red-500"
        onClick={() => removeFromWishlistHandler(data)}
        title="Remove from wishlist"
      />

      {/* Product Image */}
      <img
        src={data?.images?.[0]?.url}
        alt={data.name}
        className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] object-contain rounded-md bg-white border"
      />

      {/* Details */}
      <div className="flex-1">
        <h1 className="font-semibold text-[15px] lg:text-[16px] text-[#333] line-clamp-1">
          {data.name}
        </h1>
        <h4 className="font-bold pt-1 text-[#d55b45] text-[16px]">
          US${totalPrice.toFixed(2)}
        </h4>
      </div>

      {/* Add to Cart Icon */}
      <div className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors cursor-pointer group">
        <BsCartPlus
          size={22}
          className="text-gray-600 group-hover:text-blue-600"
          title="Add to cart"
          onClick={() => addToCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Wishlist;