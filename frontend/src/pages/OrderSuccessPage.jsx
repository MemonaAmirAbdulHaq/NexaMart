

import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";

const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-20">
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mt-6 text-2xl md:text-3xl text-gray-700">
        Your order is successful 😍
      </h5>
    </div>
  );
};

export default OrderSuccessPage;
