// import React from "react";
// import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
// import { FiPackage, FiShoppingBag } from "react-icons/fi";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { RxDashboard } from "react-icons/rx";
// import { VscNewFile } from "react-icons/vsc";
// import { CiMoneyBill, CiSettings } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { HiOutlineReceiptRefund } from "react-icons/hi";

// const DashboardSideBar = ({ active }) => {
//   return (
//     <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
//       {/* single item */}
//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard" className="w-full flex items-center">
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
//         <Link to="/dashboard-orders" className="w-full flex items-center">
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
//         <Link to="/dashboard-products" className="w-full flex items-center">
//           <FiPackage size={30} color={`${active === 3 ? "crimson" : "#555"}`} />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 3 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Products
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link
//           to="/dashboard-create-product"
//           className="w-full flex items-center"
//         >
//           <AiOutlineFolderAdd
//             size={30}
//             color={`${active === 4 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 4 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Create Product
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-events" className="w-full flex items-center">
//           <MdOutlineLocalOffer
//             size={30}
//             color={`${active === 5 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 5 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             All Events
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-create-event" className="w-full flex items-center">
//           <VscNewFile
//             size={30}
//             color={`${active === 6 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 6 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Create Event
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link
//           to="/dashboard-withdraw-money"
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
//             Withdraw Money
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-messages" className="w-full flex items-center">
//           <BiMessageSquareDetail
//             size={30}
//             color={`${active === 8 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 8 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Shop Inbox
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-coupouns" className="w-full flex items-center">
//           <AiOutlineGift
//             size={30}
//             color={`${active === 9 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 9 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Discount Codes
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/dashboard-refunds" className="w-full flex items-center">
//           <HiOutlineReceiptRefund
//             size={30}
//             color={`${active === 10 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 10 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Refunds
//           </h5>
//         </Link>
//       </div>

//       <div className="w-full flex items-center p-4">
//         <Link to="/settings" className="w-full flex items-center">
//           <CiSettings
//             size={30}
//             color={`${active === 11 ? "crimson" : "#555"}`}
//           />
//           <h5
//             className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
//               active === 11 ? "text-[crimson]" : "text-[#555]"
//             }`}
//           >
//             Settings
//           </h5>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DashboardSideBar;
import React, { useState } from "react";
import {
  AiOutlineFolderAdd,
  AiOutlineGift,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "Dashboard", icon: <RxDashboard size={30} />, link: "/dashboard" },
    { id: 2, name: "All Orders", icon: <FiShoppingBag size={30} />, link: "/dashboard-orders" },
    { id: 3, name: "All Products", icon: <FiPackage size={30} />, link: "/dashboard-products" },
    { id: 4, name: "Create Product", icon: <AiOutlineFolderAdd size={30} />, link: "/dashboard-create-product" },
    { id: 5, name: "All Events", icon: <MdOutlineLocalOffer size={30} />, link: "/dashboard-events" },
    { id: 6, name: "Create Event", icon: <VscNewFile size={30} />, link: "/dashboard-create-event" },
    { id: 7, name: "Withdraw Money", icon: <CiMoneyBill size={30} />, link: "/dashboard-withdraw-money" },
    { id: 8, name: "Shop Inbox", icon: <BiMessageSquareDetail size={30} />, link: "/dashboard-messages" },
    { id: 9, name: "Discount Codes", icon: <AiOutlineGift size={30} />, link: "/dashboard-coupouns" },
    { id: 10, name: "Refunds", icon: <HiOutlineReceiptRefund size={30} />, link: "/dashboard-refunds" },
    { id: 11, name: "Settings", icon: <CiSettings size={30} />, link: "/settings" },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="fixed top-5 left-5 z-50 800px:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 bg-white p-2 rounded-md shadow-md"
        >
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed 800px:static top-0 left-0 h-screen w-[70%] sm:w-[60%] 800px:w-[280px] bg-white shadow-md overflow-y-auto transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 800px:translate-x-0`}
      >
        <div className="pt-20 800px:pt-5">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full flex items-center p-4">
              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center"
              >
                {React.cloneElement(item.icon, {
                  color: active === item.id ? "crimson" : "#555",
                })}
                <h5
                  className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                    active === item.id ? "text-[crimson]" : "text-[#555]"
                  }`}
                >
                  {item.name}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay (click to close on mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-30 800px:hidden"
        ></div>
      )}
    </>
  );
};

export default DashboardSideBar;
