
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (user?._id) {
      dispatch(getAllOrdersOfUser(user._id));
    }
  }, [dispatch, user?._id]);

  const data = orders?.find((item) => item._id === id);

  const statusMessages = {
    "Processing": "Your order is processing in shop.",
    "Transferred to delivery partner": "Your order is on the way for delivery partner.",
    "Shipping": "Your order is on the way with our delivery partner.",
    "Received": "Your order is in your city. Our delivery man will deliver it.",
    "On the way": "Our delivery man is going to deliver your order.",
    "Delivered": "Your order is delivered!",
    "Processing refund": "Your refund is processing!",
    "Refund Success": "Your refund is successful!"
  };

  return (
    <div className="w-full h-[80vh] flex justify-center items-center text-center px-4">
      {data ? (
        <h1 className="text-[20px]">{statusMessages[data.status] || "Status unknown."}</h1>
      ) : (
        <h1 className="text-[20px]">Loading order details...</h1>
      )}
    </div>
  );
};

export default TrackOrder;
