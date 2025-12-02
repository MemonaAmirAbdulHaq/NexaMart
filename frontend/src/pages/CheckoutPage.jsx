
import React from 'react';
import Header from '../components/Layout/Header';
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from '../components/Layout/Footer';

const CheckoutPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5]">
        <Header />
        <div className="mt-5 md:mt-10 px-4 md:px-10 lg:px-20">
            <CheckoutSteps active={1} />
            <div className="mt-5 md:mt-8">
                <Checkout />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default CheckoutPage;
