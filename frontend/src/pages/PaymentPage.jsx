// import React from 'react'
// import CheckoutSteps from '../components/Checkout/CheckoutSteps'
// import Footer from '../components/Layout/Footer'
// import Header from '../components/Layout/Header'
// import Payment from "../components/Payment/Payment";

// const PaymentPage = () => {
//   return (
//     <div className='w-full min-h-screen bg-[#f6f9fc]'>
//        <Header />
//        <br />
//        <br />
//        <CheckoutSteps active={2} />
//        <Payment />
//        <br />
//        <br />
//        <Footer />
//     </div>
//   )
// }

// export default PaymentPage
import React from 'react';
import CheckoutSteps from '../components/Checkout/CheckoutSteps';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f9fc] flex flex-col">
      <Header />

      <div className="py-10 w-full max-w-7xl mx-auto px-4">
        <CheckoutSteps active={2} />
        <div className="mt-8">
          <Payment />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentPage;
