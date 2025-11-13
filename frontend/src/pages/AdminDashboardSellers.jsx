// import React from 'react'
// import AdminHeader from '../components/Layout/AdminHeader'
// import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
// import AllSellers from "../components/Admin/AllSellers";

// const AdminDashboardSellers = () => {
//   return (
//     <div>
//     <AdminHeader />
//     <div className="w-full flex">
//       <div className="flex items-start justify-between w-full">
//         <div className="w-[80px] 800px:w-[330px]">
//           <AdminSideBar active={3} />
//         </div>
//         <AllSellers />
//       </div>
//     </div>
//   </div>
//   )
// }

// export default AdminDashboardSellers
import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllSellers from "../components/Admin/AllSellers";

const AdminDashboardSellers = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex flex-col 800px:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full 800px:w-[330px] mb-5 800px:mb-0">
          <AdminSideBar active={3} />
        </div>

        {/* Main Content */}
        <div className="w-full">
          <AllSellers />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardSellers;
