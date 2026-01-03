// import React, { useEffect, useState } from "react";
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineMessage,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { RxCross1 } from "react-icons/rx";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { addTocart } from "../../../redux/actions/cart";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../../redux/actions/wishlist";

// const ProductDetailsCard = ({ setOpen, data }) => {
//   const { cart } = useSelector((state) => state.cart);
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();
//   const [count, setCount] = useState(1);
//   const [click, setClick] = useState(false);
//   //   const [select, setSelect] = useState(false);

//   const handleMessageSubmit = () => {};

//   const decrementCount = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const addToCartHandler = (id) => {
//     const isItemExists = cart && cart.find((i) => i._id === id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       if (data.stock < count) {
//         toast.error("Product stock limited!");
//       } else {
//         const cartData = { ...data, qty: count };
//         dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
//     }
//   };

//   useEffect(() => {
//     if (wishlist && wishlist.find((i) => i._id === data._id)) {
//       setClick(true);
//     } else {
//       setClick(false);
//     }
//   }, [wishlist]);

//   const removeFromWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(removeFromWishlist(data));
//   };

//   const addToWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(addToWishlist(data));
//   };

//   return (
//     <div className="bg-[#fff]">
//       {data ? (
//         <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
//           <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
//             <RxCross1
//               size={30}
//               className="absolute right-3 top-3 z-50"
//               onClick={() => setOpen(false)}
//             />

//             <div className="block w-full 800px:flex">
//               <div className="w-full 800px:w-[50%]">
//                 <img src={`${data.images && data.images[0]?.url}`} alt="" />
//                 <div className="flex">
//                   <Link to={`/shop/preview/${data.shop._id}`} className="flex">
//                     <img
//                       src={`${data.images && data.images[0]?.url}`}
//                       alt=""
//                       className="w-[50px] h-[50px] rounded-full mr-2"
//                     />
//                     <div>
//                       <h3 className={`${styles.shop_name}`}>
//                         {data.shop.name}
//                       </h3>
//                       <h5 className="pb-3 text-[15px]">{data?.ratings} Ratings</h5>
//                     </div>
//                   </Link>
//                 </div>
//                 <div
//                   className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
//                   onClick={handleMessageSubmit}
//                 >
//                   <span className="text-[#fff] flex items-center">
//                     Send Message <AiOutlineMessage className="ml-1" />
//                   </span>
//                 </div>
//                 <h5 className="text-[16px] text-[red] mt-5">(50) Sold out</h5>
//               </div>

//               <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
//                 <h1 className={`${styles.productTitle} text-[20px]`}>
//                   {data.name}
//                 </h1>
//                 <p>{data.description}</p>

//                 <div className="flex pt-3">
//                   <h4 className={`${styles.productDiscountPrice}`}>
//                     {data.discountPrice}$
//                   </h4>
//                   <h3 className={`${styles.price}`}>
//                     {data.originalPrice ? data.originalPrice + "$" : null}
//                   </h3>
//                 </div>
//                 <div className="flex items-center mt-12 justify-between pr-3">
//                   <div>
//                     <button
//                       className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                       onClick={decrementCount}
//                     >
//                       -
//                     </button>
//                     <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
//                       {count}
//                     </span>
//                     <button
//                       className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                       onClick={incrementCount}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div>
//                     {click ? (
//                       <AiFillHeart
//                         size={30}
//                         className="cursor-pointer"
//                         onClick={() => removeFromWishlistHandler(data)}
//                         color={click ? "red" : "#333"}
//                         title="Remove from wishlist"
//                       />
//                     ) : (
//                       <AiOutlineHeart
//                         size={30}
//                         className="cursor-pointer"
//                         onClick={() => addToWishlistHandler(data)}
//                         title="Add to wishlist"
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div
//                   className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
//                   onClick={() => addToCartHandler(data._id)}
//                 >
//                   <span className="text-[#fff] flex items-center">
//                     Add to cart <AiOutlineShoppingCart className="ml-1" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default ProductDetailsCard;
import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlist";
import axios from "axios";
import { server } from "../../../server";

const ProductDetailsCard = ({ setOpen, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const decrementCount = () => count > 1 && setCount(count - 1);
  const incrementCount = () => setCount(count + 1);

  const addToCartHandler = () => {
    const isItemExists = cart?.some((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else if (data.stock < count) {
      toast.error("Product stock limited!");
    } else {
      dispatch(addTocart({ ...data, qty: count }));
      toast.success("Item added to cart successfully!");
    }
  };

  useEffect(() => {
    setClick(wishlist?.some((i) => i._id === data._id));
  }, [wishlist, data._id]);

  const removeFromWishlistHandler = () => {
    setClick(false);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = () => {
    setClick(true);
    dispatch(addToWishlist(data));
  };

  // Messaging seller
  const handleMessageSubmit = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to create a conversation");
      return;
    }

    if (!user?._id || !data?.shop?._id) {
      toast.error("Unable to start conversation. Please try again.");
      return;
    }

    try {
      const groupTitle = data._id + user._id;
      const res = await axios.post(
        `${server}/conversation/create-new-conversation`,
        {
          groupTitle,
          userId: user._id,
          sellerId: data.shop._id,
        },
        { withCredentials: true }
      );
      setOpen(false); // Close the modal
      navigate(`/inbox?${res.data.conversation._id}`);
    } catch (error) {
      console.error("Error creating conversation:", error);
      toast.error(error.response?.data?.message || "Failed to create conversation");
    }
  };

  return (
    <div className="bg-[#fff]">
      {data && (
        <div className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center">
          <div className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] h-[90vh] sm:h-[80vh] overflow-y-auto bg-white rounded-md shadow-lg relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 cursor-pointer z-50"
              onClick={() => setOpen(false)}
            />

            <div className="flex flex-col 800px:flex-row gap-6">
              {/* Left Section: Image and Shop */}
              <div className="w-full 800px:w-1/2">
                <img
                  src={data.images?.[0]?.url}
                  alt={data.name}
                  className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-md"
                />
                <div className="flex items-center mt-4">
                  <Link to={`/shop/preview/${data.shop._id}`} className="flex items-center gap-3">
                    <img
                      src={data.images?.[0]?.url}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover" //10
                    />
                    <div>
                      <h3 className={styles.shop_name}>{data.shop.name}</h3>
                      <h5 className="text-sm">{data?.ratings} Ratings</h5>
                    </div>
                  </Link>
                </div>

                <button
                  className={`${styles.button} bg-black text-white mt-4 w-full flex justify-center items-center gap-2 h-11 rounded-md cursor-pointer hover:opacity-90 transition-opacity`}
                  onClick={handleMessageSubmit}
                >
                  Send Message <AiOutlineMessage />
                </button>

                <h5 className="text-red-500 mt-4">(50) Sold out</h5>
              </div>

              {/* Right Section: Details */}
              <div className="w-full 800px:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className={`${styles.productTitle} text-lg sm:text-xl font-semibold`}>
                    {data.name}
                  </h1>
                  <p className="mt-2 text-gray-700">{data.description}</p>

                  <div className="flex items-center gap-4 mt-3">
                    <h4 className={styles.productDiscountPrice}>{data.discountPrice}$</h4>
                    {data.originalPrice > 0 && (
                      <h3 className={styles.price}>{data.originalPrice}$</h3>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      className="px-3 py-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold hover:opacity-75 transition"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 bg-gray-200 text-gray-800 font-medium">
                      {count}
                    </span>
                    <button
                      className="px-3 py-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold hover:opacity-75 transition"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={removeFromWishlistHandler}
                        color="red"
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={addToWishlistHandler}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>

                <button
                  className={`${styles.button} mt-6 w-full flex text-white justify-center items-center gap-2 h-11 rounded-md`}
                  onClick={addToCartHandler}
                >
                  Add to cart <AiOutlineShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCard;
