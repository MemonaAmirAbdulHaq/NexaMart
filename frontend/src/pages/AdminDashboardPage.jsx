
import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain";

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex flex-col 800px:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full 800px:w-[330px] mb-5 800px:mb-0">
          <AdminSideBar active={1} />
        </div>

        {/* Main Dashboard Content */}
        <div className="w-full">
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
