
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(1);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user || {},
    totalPrice: orderData?.totalPrice,
  };

  // Helper to complete order for all payment types
  const completeOrder = async (paymentInfo) => {
    const config = { headers: { "Content-Type": "application/json" } };
    if (paymentInfo) order.paymentInfo = paymentInfo;

    try {
      await axios.post(`${server}/order/create-order`, order, config);
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      toast.success("Order successful!");
      navigate("/order/success");
      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.message || "Order failed");
    }
  };

  // Stripe Payment
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    try {
      const paymentData = { amount: Math.round(orderData?.totalPrice * 100) };
      const { data } = await axios.post(
        `${server}/payment/process`,
        paymentData,
        { headers: { "Content-Type": "application/json" } }
      );

      const client_secret = data.client_secret;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: { card: elements.getElement(CardNumberElement) },
      });

      if (result.error) {
        toast.error(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        await completeOrder({
          id: result.paymentIntent.id,
          status: result.paymentIntent.status,
          type: "Credit Card",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  // Cash on Delivery
  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();
    await completeOrder({ type: "Cash On Delivery" });
  };

  // PayPal
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          { description: "Sunflower", amount: { currency_code: "USD", value: orderData?.totalPrice } },
        ],
        application_context: { shipping_preference: "NO_SHIPPING" },
      })
      .then((orderID) => orderID);
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      if (payer) {
        completeOrder({
          id: payer.payer_id,
          status: "succeeded",
          type: "Paypal",
        });
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
            {/* Payment Method Selection */}
            <PaymentOption
              select={select}
              setSelect={setSelect}
              user={user}
              paymentHandler={paymentHandler}
              cashOnDeliveryHandler={cashOnDeliveryHandler}
              open={open}
              setOpen={setOpen}
              onApprove={onApprove}
              createOrder={createOrder}
              loading={loading}
            />
          </div>
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

const PaymentOption = ({
  select,
  setSelect,
  user,
  paymentHandler,
  cashOnDeliveryHandler,
  open,
  setOpen,
  onApprove,
  createOrder,
  loading,
}) => {
  return (
    <>
      {/* Credit/Debit Card */}
      <div className="flex w-full pb-5 border-b mb-2 cursor-pointer" onClick={() => setSelect(1)}>
        <div className={`w-[25px] h-[25px] rounded-full border-[3px] flex items-center justify-center ${select===1?"bg-[#1d1a1acb]":"bg-transparent"}`}>
          {select === 1 && <div className="w-[13px] h-[13px] bg-white rounded-full" />}
        </div>
        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">Pay with Debit/Credit card</h4>
      </div>
      {select === 1 && (
        <form onSubmit={paymentHandler}>
          <div className="flex flex-col gap-3">
            <label>Name on Card</label>
            <input placeholder={user?.name} className={`${styles.input} w-full`} value={user?.name} readOnly />
            <label>Card Number</label>
            <CardNumberElement className={`${styles.input} w-full`} />
            <div className="flex gap-3">
              <div className="w-1/2">
                <label>Exp Date</label>
                <CardExpiryElement className={`${styles.input} w-full`} />
              </div>
              <div className="w-1/2">
                <label>CVV</label>
                <CardCvcElement className={`${styles.input} w-full`} />
              </div>
            </div>
            <button type="submit" disabled={loading} className={`${styles.button} ${loading?"opacity-50":"bg-[#f63b60]"} w-full h-12 mt-2`}>
              {loading ? "Processing..." : "Pay"}
            </button>
          </div>
        </form>
      )}

      {/* PayPal */}
      <div className="flex w-full pb-5 border-b mb-2 cursor-pointer mt-5" onClick={() => setSelect(2)}>
        <div className={`w-[25px] h-[25px] rounded-full border-[3px] flex items-center justify-center ${select===2?"bg-[#1d1a1acb]":"bg-transparent"}`}>
          {select === 2 && <div className="w-[13px] h-[13px] bg-white rounded-full" />}
        </div>
        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">Pay with PayPal</h4>
      </div>
      {select === 2 && (
        <div>
          <button onClick={() => setOpen(true)} className={`${styles.button} bg-[#f63b60] text-white w-full h-12`}>
            Pay Now
          </button>
          {open && (
            <div className="w-full fixed top-0 left-0 bg-[#00000039] h-screen flex items-center justify-center z-[99999]">
              <div className="w-full 800px:w-[40%] h-screen 800px:h-[80vh] bg-white rounded-[5px] shadow flex flex-col justify-center p-8 relative overflow-y-scroll">
                <RxCross1 size={30} className="cursor-pointer absolute top-3 right-3" onClick={() => setOpen(false)} />
                <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
                  <PayPalButtons style={{ layout: "vertical" }} createOrder={createOrder} onApprove={onApprove} />
                </PayPalScriptProvider>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Cash on Delivery */}
      <div className="flex w-full pb-5 border-b mb-2 cursor-pointer mt-5" onClick={() => setSelect(3)}>
        <div className={`w-[25px] h-[25px] rounded-full border-[3px] flex items-center justify-center ${select===3?"bg-[#1d1a1acb]":"bg-transparent"}`}>
          {select === 3 && <div className="w-[13px] h-[13px] bg-white rounded-full" />}
        </div>
        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">Cash on Delivery</h4>
      </div>
      {select === 3 && (
        <form onSubmit={cashOnDeliveryHandler}>
          <button type="submit" className={`${styles.button} bg-[#f63b60] text-white w-full h-12 mt-2`}>
            Confirm
          </button>
        </form>
      )}
    </>
  );
};

// Cart Summary
const CartData = ({ orderData }) => {
  const shipping = orderData?.shipping ? orderData.shipping.toFixed(2) : "0.00";
  return (
    <div className="w-full bg-white rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[#000000a4]">Subtotal:</h3>
        <h5>${orderData?.subTotalPrice}</h5>
      </div>
      <div className="flex justify-between mt-2">
        <h3 className="text-[#000000a4]">Shipping:</h3>
        <h5>${shipping}</h5>
      </div>
      <div className="flex justify-between border-b pb-3 mt-2">
        <h3 className="text-[#000000a4]">Discount:</h3>
        <h5>{orderData?.discountPrice ? "$" + orderData.discountPrice : "-"}</h5>
      </div>
      <h5 className="text-end pt-3 font-bold text-lg">${orderData?.totalPrice}</h5>
    </div>
  );
};

export default Payment;
