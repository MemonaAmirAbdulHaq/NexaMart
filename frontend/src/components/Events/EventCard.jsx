
import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <div
      className={`w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
        active ? "unset" : "mb-8"
      } overflow-hidden`}
    >
      <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-6">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 rounded-lg p-4">
          <img
            src={`${data.images[0]?.url}`}
            alt={data.name}
            className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className={`${styles.productTitle} text-xl md:text-2xl font-semibold mb-3`}>
              {data.name}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
              {data.description}
            </p>

            {/* Price */}
            <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-200">
              <div className="flex items-center gap-3">
                {data.originalPrice > 0 && (
                  <h5 className="font-medium text-base md:text-lg text-[#d55b45] line-through">
                    {data.originalPrice}$
                  </h5>
                )}
                <h5 className="font-bold text-xl md:text-2xl text-[#333]">
                  {data.discountPrice}$
                </h5>
              </div>
              <span className="font-medium text-sm md:text-base text-[#44a55e]">
                {data.sold_out} sold
              </span>
            </div>

            {/* Countdown */}
            <div className="mt-4">
              <CountDown data={data} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link 
              to={`/product/${data._id}?isEvent=true`}
              className="flex-1"
            >
              <button className={`${styles.button} text-white w-full py-3 rounded-md hover:opacity-90 transition-opacity cursor-pointer`}>
                See Details
              </button>
            </Link>
            <button
              className={`${styles.button} text-white flex-1 py-3 rounded-md hover:opacity-90 transition-opacity cursor-pointer`}
              onClick={() => addToCartHandler(data)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
