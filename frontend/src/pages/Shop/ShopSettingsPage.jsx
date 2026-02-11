
import React from "react";
import Footer from "../../components/Layout/Footer";
import ShopSettings from "../../components/Shop/ShopSettings";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopSettingsPage = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex w-full min-h-screen">
        
        {/* Sidebar - active set to 11 for Settings */}
        <DashboardSideBar active={11} />

        {/* Main Content Area */}
        <div className="flex-1 p-3 800px:p-6 bg-[#f5f5f5] flex justify-center">
          <div className="w-full bg-white rounded-md shadow-sm p-4">
            <ShopSettings />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ShopSettingsPage;