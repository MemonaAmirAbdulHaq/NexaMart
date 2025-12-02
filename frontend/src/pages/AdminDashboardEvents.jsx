
import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllEvents from '../components/Admin/AllEvents';

const AdminDashboardEvents = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex flex-col 800px:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full 800px:w-[330px] mb-5 800px:mb-0">
          <AdminSideBar active={6} />
        </div>

        {/* Main content */}
        <div className="w-full">
          <AllEvents />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardEvents;
