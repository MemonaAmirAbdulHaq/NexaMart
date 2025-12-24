
// import React from "react";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
// import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
// import AllCoupons from "../../components/Shop/AllCoupons";

// const ShopAllCoupons = () => {
//   return (
//     <div>
//       <DashboardHeader />
//       <div className="flex justify-between w-full">
//         <div className="w-[80px] 800px:w-[330px]">
//           <DashboardSideBar active={9} />
//         </div>
//         <div className="w-full flex justify-center">
//           <AllCoupons />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopAllCoupons;
import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllCoupons from "../../components/Shop/AllCoupons";

const ShopAllCoupons = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex w-full min-h-screen">
        
        {/* Sidebar - active set to 9 for Discount Codes */}
        <DashboardSideBar active={9} />

        {/* Main Content Area */}
        <div className="flex-1 p-3 800px:p-6 overflow-x-hidden bg-[#f5f5f5]">
          <div className="w-full bg-white rounded-md shadow-sm">
            <AllCoupons />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopAllCoupons;