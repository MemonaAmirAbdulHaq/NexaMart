
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
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-8"
      } lg:flex p-4 lg:p-2`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 m-auto flex justify-center">
        <img
          src={`${data.images[0]?.url}`}
          alt={data.name}
          className="w-full h-auto max-h-[300px] object-contain rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center mt-4 lg:mt-0 lg:pl-6">
        <h2 className={`${styles.productTitle} text-lg lg:text-2xl`}>{data.name}</h2>
        <p className="text-sm lg:text-base mt-2">{data.description}</p>

        {/* Price */}
        <div className="flex flex-wrap py-2 justify-between items-center">
          <div className="flex items-center gap-3">
            <h5 className="font-[500] text-[16px] lg:text-[18px] text-[#d55b45] line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[18px] lg:text-[20px] text-[#333]">
              {data.discountPrice}$
            </h5>
          </div>
          <span className="font-[400] text-[14px] lg:text-[17px] text-[#44a55e] mt-2 lg:mt-0">
            {data.sold_out} sold
          </span>
        </div>

        {/* Countdown */}
        <div className="mt-2">
          <CountDown data={data} />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-[#fff]`}
            onClick={() => addToCartHandler(data)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
