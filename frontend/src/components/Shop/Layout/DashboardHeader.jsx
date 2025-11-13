// import React from "react";
// import { AiOutlineGift } from "react-icons/ai";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { FiPackage, FiShoppingBag } from "react-icons/fi";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { BiMessageSquareDetail } from "react-icons/bi";

// const DashboardHeader = () => {
//   const { seller } = useSelector((state) => state.seller);
//   return (
//     <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
//       <div>
//         <Link to="/dashboard">
//           <img
//             src="https://shopo.quomodothemes.website/assets/images/logo.svg"
//             alt=""
//           />
//         </Link>
//       </div>
//       <div className="flex items-center">
//         <div className="flex items-center mr-4">
//           <Link to="/dashboard/cupouns" className="800px:block hidden">
//             <AiOutlineGift
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>
//           <Link to="/dashboard-events" className="800px:block hidden">
//             <MdOutlineLocalOffer
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>
//           <Link to="/dashboard-products" className="800px:block hidden">
//             <FiShoppingBag
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>
//           <Link to="/dashboard-orders" className="800px:block hidden">
//             <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
//           </Link>
//           <Link to="/dashboard-messages" className="800px:block hidden">
//             <BiMessageSquareDetail
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>
//           <Link to={`/shop/${seller._id}`}>
//             <img
//               src={`${seller.avatar?.url}`}
//               alt=""
//               className="w-[50px] h-[50px] rounded-full object-cover"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHeader;
import React, { useState } from "react";
import { AiOutlineGift, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      {/* LOGO */}
      <div>
        <Link to="/dashboard">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt="Logo"
            className="w-[120px]"
          />
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden 800px:flex items-center">
        <Link to="/dashboard/cupouns">
          <AiOutlineGift color="#555" size={28} className="mx-4 cursor-pointer" />
        </Link>
        <Link to="/dashboard-events">
          <MdOutlineLocalOffer color="#555" size={28} className="mx-4 cursor-pointer" />
        </Link>
        <Link to="/dashboard-products">
          <FiShoppingBag color="#555" size={28} className="mx-4 cursor-pointer" />
        </Link>
        <Link to="/dashboard-orders">
          <FiPackage color="#555" size={28} className="mx-4 cursor-pointer" />
        </Link>
        <Link to="/dashboard-messages">
          <BiMessageSquareDetail color="#555" size={28} className="mx-4 cursor-pointer" />
        </Link>
        <Link to={`/shop/${seller?._id}`}>
          <img
            src={seller?.avatar?.url || "https://via.placeholder.com/50"}
            alt="Seller"
            className="w-[50px] h-[50px] rounded-full object-cover border border-gray-200"
          />
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="flex 800px:hidden items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md py-5 flex flex-col items-center 800px:hidden animate-fadeIn z-40">
          <Link
            to="/dashboard/cupouns"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2"
          >
            <AiOutlineGift size={22} className="mr-2" /> Coupons
          </Link>
          <Link
            to="/dashboard-events"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2"
          >
            <MdOutlineLocalOffer size={22} className="mr-2" /> Events
          </Link>
          <Link
            to="/dashboard-products"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2"
          >
            <FiShoppingBag size={22} className="mr-2" /> Products
          </Link>
          <Link
            to="/dashboard-orders"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2"
          >
            <FiPackage size={22} className="mr-2" /> Orders
          </Link>
          <Link
            to="/dashboard-messages"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2"
          >
            <BiMessageSquareDetail size={22} className="mr-2" /> Messages
          </Link>
          <Link
            to={`/shop/${seller?._id}`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2"
          >
            <img
              src={seller?.avatar?.url || "https://via.placeholder.com/50"}
              alt="Seller"
              className="w-[40px] h-[40px] rounded-full object-cover border border-gray-200 mr-2"
            />
            My Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
