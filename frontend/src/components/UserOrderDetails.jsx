
import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/styles";
import { getAllOrdersOfUser } from "../redux/actions/order";
import { server } from "../server";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const UserOrderDetails = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(1);

  useEffect(() => {
    if (user?._id) dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch, user?._id]);

  const data = orders?.find((item) => item._id === id);

  const reviewHandler = async () => {
    if (!selectedItem) return;
    try {
      const res = await axios.put(
        `${server}/product/create-new-review`,
        {
          user,
          rating,
          comment,
          productId: selectedItem._id,
          orderId: id,
        },
        { withCredentials: true }
      );
      toast.success(res.data.message);
      dispatch(getAllOrdersOfUser(user._id));
      setComment("");
      setRating(1);
      setOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const refundHandler = async () => {
    try {
      const res = await axios.put(`${server}/order/order-refund/${id}`, {
        status: "Processing refund",
      });
      toast.success(res.data.message);
      dispatch(getAllOrdersOfUser(user._id));
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
      </div>

      {/* Order info */}
      <div className="w-full flex items-center justify-between pt-6">
        <h5 className="text-[#00000084]">
          Order ID: <span>#{data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className="text-[#00000084]">
          Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>

      {/* Order items */}
      <div className="mt-6 space-y-5">
        {data?.cart?.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <img
              src={item.images?.[0]?.url}
              alt={item.name}
              className="w-[80px] h-[80px] object-cover rounded-md"
            />
            <div className="flex-1">
              <h5 className="text-[20px]">{item.name}</h5>
              <h5 className="text-[20px] text-[#00000091]">
                US${item.discountPrice} x {item.qty}
              </h5>
            </div>
            {!item.isReviewed && data?.status === "Delivered" && (
              <button
                className={`${styles.button} text-white`}
                onClick={() => {
                  setSelectedItem(item);
                  setOpen(true);
                }}
              >
                Write a review
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Review popup */}
      {open && selectedItem && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[50%] bg-white p-5 rounded shadow">
            <div className="flex justify-end">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <h2 className="text-center text-2xl font-semibold">Give a Review</h2>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={selectedItem.images?.[0]?.url}
                alt={selectedItem.name}
                className="w-[80px] h-[80px] object-cover rounded-md"
              />
              <div>
                <h3 className="text-[18px] font-medium">{selectedItem.name}</h3>
                <p className="text-[#00000091]">
                  US${selectedItem.discountPrice} x {selectedItem.qty}
                </p>
              </div>
            </div>

            {/* Rating */}
            <h5 className="mt-4">Give a Rating *</h5>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((i) =>
                rating >= i ? (
                  <AiFillStar
                    key={i}
                    size={25}
                    color="rgb(246,186,0)"
                    className="cursor-pointer"
                    onClick={() => setRating(i)}
                  />
                ) : (
                  <AiOutlineStar
                    key={i}
                    size={25}
                    color="rgb(246,186,0)"
                    className="cursor-pointer"
                    onClick={() => setRating(i)}
                  />
                )
              )}
            </div>

            <textarea
              className="w-full mt-3 border p-2 rounded outline-none"
              rows={4}
              placeholder="Write a comment (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className={`${styles.button} text-white mt-3`}
              onClick={reviewHandler}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Pricing & Shipping */}
      <div className="border-t mt-5 pt-3 text-right">
        <h5>
          Total Price: <strong>US${data?.totalPrice}</strong>
        </h5>
      </div>

      <div className="mt-5 800px:flex gap-5">
        <div className="flex-1">
          <h4 className="text-[20px] font-semibold">Shipping Address:</h4>
          <p>{`${data?.shippingAddress?.address1 || ""} ${data?.shippingAddress?.address2 || ""}`}</p>
          <p>{data?.shippingAddress?.country}</p>
          <p>{data?.shippingAddress?.city}</p>
          <p>{data?.user?.phoneNumber}</p>
        </div>
        <div className="flex-1">
          <h4 className="text-[20px] font-semibold">Payment Info:</h4>
          <p>Status: {data?.paymentInfo?.status || "Not Paid"}</p>
          {data?.status === "Delivered" && (
            <button className={`${styles.button} text-white mt-2`} onClick={refundHandler}>
              Give a Refund
            </button>
          )}
        </div>
      </div>

      <Link to="/">
        <button className={`${styles.button} text-white mt-5`}>Send Message</button>
      </Link>
    </div>
  );
};

export default UserOrderDetails;
