
// import React from "react";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
// import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
// import AllEvents from "../../components/Shop/AllEvents";

// const ShopAllEvents = () => {
//   return (
//     <div>
//       <DashboardHeader />
//       <div className="flex justify-between w-full">
//         <div className="w-[80px] 800px:w-[330px]">
//           <DashboardSideBar active={5} />
//         </div>
//         <div className="w-full flex justify-center">
//           <AllEvents />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopAllEvents;
import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllEvents from "../../components/Shop/AllEvents";

const ShopAllEvents = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex w-full min-h-screen">
        
        {/* Sidebar - active set to 5 for All Events */}
        <DashboardSideBar active={5} />

        {/* Main Content Area */}
        <div className="flex-1 p-3 800px:p-6 overflow-x-hidden bg-[#f5f5f5]">
          <div className="w-full bg-white rounded-md shadow-sm">
            <AllEvents />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopAllEvents;