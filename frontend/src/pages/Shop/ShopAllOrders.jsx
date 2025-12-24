
// import React from "react";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
// import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
// import AllOrders from "../../components/Shop/AllOrders";

// const ShopAllOrders = () => {
//   return (
//     <div>
//       <DashboardHeader />
//       <div className="flex justify-between w-full">
//         <div className="w-[80px] 800px:w-[330px]">
//           <DashboardSideBar active={2} />
//         </div>
//         <div className="w-full flex justify-center">
//           <AllOrders />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopAllOrders;
import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllOrders from "../../components/Shop/AllOrders";

const ShopAllOrders = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex w-full min-h-screen">
        
        {/* Sidebar - Letting the component handle its own responsive width */}
        <DashboardSideBar active={2} />

        {/* Main Content Area */}
        <div className="flex-1 p-3 800px:p-6 overflow-x-hidden bg-[#f5f5f5]">
           <div className="w-full bg-white rounded-md shadow-sm">
              <AllOrders />
           </div>
        </div>

      </div>
    </div>
  );
};

export default ShopAllOrders;