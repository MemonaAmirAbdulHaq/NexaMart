// import React, { useState } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { BsCartPlus } from "react-icons/bs";
// import styles from "../../styles/styles";
// import { AiOutlineHeart } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromWishlist } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";

// const Wishlist = ({ setOpenWishlist }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();

//   const removeFromWishlistHandler = (data) => {
//     dispatch(removeFromWishlist(data));
//   };

//   const addToCartHandler = (data) => {
//     const newData = {...data, qty:1};
//     dispatch(addTocart(newData));
//     setOpenWishlist(false);
//   }

//   return (
//     <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
//       <div className="fixed top-0 right-0 h-full w-[80%] overflow-y-scroll 800px:w-[25%] bg-white flex flex-col justify-between shadow-sm">
//         {wishlist && wishlist.length === 0 ? (
//           <div className="w-full h-screen flex items-center justify-center">
//             <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
//               <RxCross1
//                 size={25}
//                 className="cursor-pointer"
//                 onClick={() => setOpenWishlist(false)}
//               />
//             </div>
//             <h5>Wishlist Items is empty!</h5>
//           </div>
//         ) : (
//           <>
//             <div>
//               <div className="flex w-full justify-end pt-5 pr-5">
//                 <RxCross1
//                   size={25}
//                   className="cursor-pointer"
//                   onClick={() => setOpenWishlist(false)}
//                 />
//               </div>
//               {/* Item length */}
//               <div className={`${styles.noramlFlex} p-4`}>
//                 <AiOutlineHeart size={25} />
//                 <h5 className="pl-2 text-[20px] font-[500]">
//                   {wishlist && wishlist.length} items
//                 </h5>
//               </div>

//               {/* cart Single Items */}
//               <br />
//               <div className="w-full border-t">
//                 {wishlist &&
//                   wishlist.map((i, index) => (
//                     <CartSingle key={index} data={i} removeFromWishlistHandler={removeFromWishlistHandler} addToCartHandler={addToCartHandler} />
//                   ))}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const CartSingle = ({ data,removeFromWishlistHandler,addToCartHandler }) => {
//   const [value, setValue] = useState(1);
//   const totalPrice = data.discountPrice * value;

//   return (
//     <div className="border-b p-4">
//       <div className="w-full 800px:flex items-center">
//         <RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"
//         onClick={() => removeFromWishlistHandler(data)}
//         />
//         <img
//           src={`${data?.images[0]?.url}`}
//           alt=""
//           className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
//         />

//         <div className="pl-[5px]">
//           <h1>{data.name}</h1>
//           <h4 className="font-[600] pt-3 800px:pt-[3px] text-[17px] text-[#d02222] font-Roboto">
//             US${totalPrice}
//           </h4>
//         </div>
//         <div>
//           <BsCartPlus size={20} className="cursor-pointer" tile="Add to cart"
//            onClick={() => addToCartHandler(data)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;
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
    <div className="fixed top-0 left-0 w-full h-screen bg-black/30 z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col justify-between shadow-sm overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishlist(false)}
          />
        </div>

        {wishlist?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h5>Wishlist is empty!</h5>
          </div>
        ) : (
          <>
            {/* Wishlist Header */}
            <div className={`${styles.noramlFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">{wishlist.length} items</h5>
            </div>

            {/* Wishlist Items */}
            <div className="border-t">
              {wishlist.map((item, index) => (
                <CartSingle
                  key={index}
                  data={item}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={addToCartHandler}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [qty] = useState(1); // Wishlist usually adds 1 by default
  const totalPrice = data.discountPrice * qty;

  return (
    <div className="border-b p-4 flex items-center gap-3">
      <RxCross1
        className="cursor-pointer"
        onClick={() => removeFromWishlistHandler(data)}
        title="Remove from wishlist"
      />
      <img
        src={data?.images?.[0]?.url}
        alt={data.name}
        className="w-[130px] h-[130px] object-cover rounded-md"
      />
      <div className="flex-1">
        <h1 className="font-medium">{data.name}</h1>
        <h4 className="font-semibold pt-1 text-red-600 text-lg">
          US${totalPrice.toFixed(2)}
        </h4>
      </div>
      <BsCartPlus
        size={20}
        className="cursor-pointer"
        title="Add to cart"
        onClick={() => addToCartHandler(data)}
      />
    </div>
  );
};

export default Wishlist;
