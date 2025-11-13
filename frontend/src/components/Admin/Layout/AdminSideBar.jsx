// import React from "react";
// import { FiShoppingBag } from "react-icons/fi";
// import {GrWorkshop} from "react-icons/gr";
// import { RxDashboard } from "react-icons/rx";
// import { CiMoneyBill, CiSettings } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { BsHandbag } from "react-icons/bs";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { AiOutlineSetting } from "react-icons/ai";

// const AdminSideBar = ({ active }) => {
//   return (
//     <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
//       {/* single item */}
//       <div className="w-full flex items-center p-4">
//         <Link to="/admin/dashboard" className="w-full flex items-center">
//           <RxDashboard
//             size={30}
//             color={`${active === 1 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 1 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Dashboard
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/admin-orders" className="w-full flex items-center">
//           <FiShoppingBag
//             size={30}
//             color={`${active === 2 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 2 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Orders
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/admin-sellers" className="w-full flex items-center">
//           <GrWorkshop
//             size={30}
//             color={`${active === 3 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 3 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Sellers
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/admin-users" className="w-full flex items-center">
//           <HiOutlineUserGroup
//             size={30}
//             color={`${active === 4 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 4 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Users
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/admin-products" className="w-full flex items-center">
//           <BsHandbag
//             size={30}
//             color={`${active === 5 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 5 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Products
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/admin-events" className="w-full flex items-center">
//           <MdOutlineLocalOffer
//             size={30}
//             color={`${active === 6 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 6 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Events
//           </h5>
//         </Link>
//       </div>



//       <div className="w-full flex items-center p-4">
//         <Link
//           to="/admin-withdraw-request"
//           className="w-full flex items-center"
//         >
//           <CiMoneyBill
//             size={30}
//             color={`${active === 7 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 7 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Withdraw Request
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link
//           to="/profile"
//           className="w-full flex items-center"
//         >
//           <AiOutlineSetting
//             size={30}
//             color={`${active === 8 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 8 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Settings
//           </h5>
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default AdminSideBar;
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const AdminSideBar = ({ active }) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "Dashboard", icon: RxDashboard, path: "/admin/dashboard" },
    { id: 2, name: "All Orders", icon: FiShoppingBag, path: "/admin-orders" },
    { id: 3, name: "All Sellers", icon: GrWorkshop, path: "/admin-sellers" },
    { id: 4, name: "All Users", icon: HiOutlineUserGroup, path: "/admin-users" },
    { id: 5, name: "All Products", icon: BsHandbag, path: "/admin-products" },
    { id: 6, name: "All Events", icon: MdOutlineLocalOffer, path: "/admin-events" },
    { id: 7, name: "Withdraw Request", icon: CiMoneyBill, path: "/admin-withdraw-request" },
    { id: 8, name: "Settings", icon: AiOutlineSetting, path: "/profile" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-20">
        <h2 className="text-lg font-semibold text-gray-700">Admin Panel</h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-gray-700 focus:outline-none"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          open ? "left-0" : "-left-full"
        } md:left-0 fixed top-0 md:top-[70px] h-[90vh] md:h-[calc(100vh-70px)] w-[70%] sm:w-[50%] md:w-[20%] bg-white shadow-md overflow-y-auto transition-all duration-300 z-10`}
      >
        {menuItems.map(({ id, name, icon: Icon, path }) => (
          <div key={id} className="w-full flex items-center p-4 hover:bg-gray-100 transition-all">
            <Link to={path} className="w-full flex items-center" onClick={() => setOpen(false)}>
              <Icon size={26} color={active === id ? "crimson" : "#555"} />
              <h5
                className={`hidden sm:block pl-2 text-[17px] font-[400] ${
                  active === id ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                {name}
              </h5>
            </Link>
          </div>
        ))}
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[5] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSideBar;
