
import React, { useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow sticky top-0 left-0 z-30">
      <div className="flex items-center justify-between h-[70px] px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <Link to="/">
            <div className="flex items-center"> <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0d5d5d] via-[#0a4a4a] to-[#083838] bg-clip-text text-transparent hover:from-[#0f7a7a] hover:via-[#0c5f5f] hover:to-[#0a4a4a] transition-all"> NexaMart </h1> </div>
            
          </Link>
          </Link>
        </div>

        {/* Desktop Icons */}
        <nav className="hidden md:flex items-center">
          <Link to="/dashboard/cupouns">
            <AiOutlineGift
              color="#555"
              size={28}
              className="mx-3 hover:text-[#077f9c] transition"
            />
          </Link>
          <Link to="/dashboard-events">
            <MdOutlineLocalOffer
              color="#555"
              size={28}
              className="mx-3 hover:text-[#077f9c] transition"
            />
          </Link>
          <Link to="/dashboard-products">
            <FiShoppingBag
              color="#555"
              size={28}
              className="mx-3 hover:text-[#077f9c] transition"
            />
          </Link>
          <Link to="/dashboard-orders">
            <FiPackage
              color="#555"
              size={28}
              className="mx-3 hover:text-[#077f9c] transition"
            />
          </Link>
          <Link to="/dashboard-messages">
            <BiMessageSquareDetail
              color="#555"
              size={28}
              className="mx-3 hover:text-[#077f9c] transition"
            />
          </Link>
        </nav>

        {/* Right side: Avatar + Menu */}
        <div className="flex items-center gap-3">
          {user?.avatar?.url ? (
            <img
              src={user.avatar.url}
              alt="Admin Avatar"
              className="w-[45px] h-[45px] rounded-full object-cover border border-gray-300"
            />
          ) : (
            <div className="w-[45px] h-[45px] rounded-full bg-gray-300"></div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-gray-700 hover:text-[#077f9c] transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-100 py-3 px-5 space-y-4 animate-slideDown">
          <Link
            to="/dashboard/cupouns"
            className="flex items-center text-gray-700 hover:text-[#077f9c]"
            onClick={() => setMenuOpen(false)}
          >
            <AiOutlineGift className="mr-2" size={22} /> Coupons
          </Link>
          <Link
            to="/dashboard-events"
            className="flex items-center text-gray-700 hover:text-[#077f9c]"
            onClick={() => setMenuOpen(false)}
          >
            <MdOutlineLocalOffer className="mr-2" size={22} /> Events
          </Link>
          <Link
            to="/dashboard-products"
            className="flex items-center text-gray-700 hover:text-[#077f9c]"
            onClick={() => setMenuOpen(false)}
          >
            <FiShoppingBag className="mr-2" size={22} /> Products
          </Link>
          <Link
            to="/dashboard-orders"
            className="flex items-center text-gray-700 hover:text-[#077f9c]"
            onClick={() => setMenuOpen(false)}
          >
            <FiPackage className="mr-2" size={22} /> Orders
          </Link>
          <Link
            to="/dashboard-messages"
            className="flex items-center text-gray-700 hover:text-[#077f9c]"
            onClick={() => setMenuOpen(false)}
          >
            <BiMessageSquareDetail className="mr-2" size={22} /> Messages
          </Link>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
