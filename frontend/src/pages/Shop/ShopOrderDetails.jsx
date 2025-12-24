
// import React from "react";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
// import Footer from "../../components/Layout/Footer";
// import OrderDetails from "../../components/Shop/OrderDetails";

// const ShopOrderDetails = () => {
//   return (
//     <div>
//       {/* Header */}
//       <DashboardHeader />

//       {/* Order details section */}
//       <OrderDetails />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default ShopOrderDetails;
import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import Footer from "../../components/Layout/Footer";
import OrderDetails from "../../components/Shop/OrderDetails";

const ShopOrderDetails = () => {
  return (
    <div className="w-full bg-[#f5f5f5] min-h-screen">
      <DashboardHeader />
      
      {/* Container to center and pad the order details */}
      <div className="flex justify-center p-3 800px:p-10">
        <div className="w-full 800px:w-[90%] bg-white rounded-md shadow-sm">
           <OrderDetails />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopOrderDetails;