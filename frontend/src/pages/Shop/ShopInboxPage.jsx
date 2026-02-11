

import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import DashboardMessages from "../../components/Shop/DashboardMessages";

const ShopInboxPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <DashboardHeader />

      {/* Main content with sidebar */}
      <div className="flex w-full min-h-screen">
        
        {/* Sidebar - active set to 8 for Shop Inbox */}
        <DashboardSideBar active={8} />

        {/* Messages section - Wrapped in flex-1 to fill the screen */}
        <div className="flex-1 overflow-x-hidden">
          <DashboardMessages />
        </div>
        
      </div>
    </div>
  );
};

export default ShopInboxPage;