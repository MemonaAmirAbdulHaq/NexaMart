// import React from 'react'
// import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
// import Footer from '../../components/Layout/Footer'
// import OrderDetails from "../../components/Shop/OrderDetails";

// const ShopOrderDetails = () => {
//   return (
//     <div>
//          <DashboardHeader />
//          <OrderDetails />
//           <Footer />
//     </div>
//   )
// }

// export default ShopOrderDetails
import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import Footer from "../../components/Layout/Footer";
import OrderDetails from "../../components/Shop/OrderDetails";

const ShopOrderDetails = () => {
  return (
    <div>
      {/* Header */}
      <DashboardHeader />

      {/* Order details section */}
      <OrderDetails />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShopOrderDetails;
