// import React from "react";
// import Footer from "../../components/Layout/Footer";
// import ShopSettings from "../../components/Shop/ShopSettings";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
// import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

// const ShopSettingsPage = () => {
//   return (
//     <div>
//       <DashboardHeader />
//       <div className="flex items-start justify-between w-full">
//         <div className="w-[80px] 800px:w-[330px]">
//           <DashboardSideBar active={11} />
//         </div>
//         <ShopSettings />
//       </div>
//     </div>
//   );
// };

// export default ShopSettingsPage;
import React from "react";
import Footer from "../../components/Layout/Footer";
import ShopSettings from "../../components/Shop/ShopSettings";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopSettingsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col 800px:flex-row items-start justify-between w-full">
        {/* Sidebar */}
        <div className="w-full 800px:w-[330px] mb-5 800px:mb-0">
          <DashboardSideBar active={11} />
        </div>

        {/* Main content */}
        <div className="w-full">
          <ShopSettings />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopSettingsPage;
