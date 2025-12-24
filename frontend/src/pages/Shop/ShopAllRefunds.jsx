
// import React from "react";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
// import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
// import AllRefundOrders from "../../components/Shop/AllRefundOrders";

// const ShopAllRefunds = () => {
//   return (
//     <div>
//       <DashboardHeader />
//       <div className="flex justify-between w-full">
//         <div className="w-[80px] 800px:w-[330px]">
//           <DashboardSideBar active={10} />
//         </div>
//         <div className="w-full flex justify-center">
//           <AllRefundOrders />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopAllRefunds;
import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllRefundOrders from "../../components/Shop/AllRefundOrders";

const ShopAllRefunds = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex w-full min-h-screen">
        
        {/* Sidebar - active set to 10 for Refunds */}
        <DashboardSideBar active={10} />

        {/* Main Content Area */}
        <div className="flex-1 p-3 800px:p-6 overflow-x-hidden bg-[#f5f5f5]">
          <div className="w-full bg-white rounded-md shadow-sm">
            <AllRefundOrders />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopAllRefunds;