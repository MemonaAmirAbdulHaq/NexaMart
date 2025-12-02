
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminSideBar = ({ active }) => {
  const [open, setOpen] = useState(false);

  const menu = [
    { id: 1, name: "Dashboard", icon: RxDashboard, path: "/admin/dashboard" },
    { id: 2, name: "All Orders", icon: FiShoppingBag, path: "/admin-orders" },
    { id: 3, name: "All Sellers", icon: GrWorkshop, path: "/admin-sellers" },
    { id: 4, name: "All Users", icon: HiOutlineUserGroup, path: "/admin-users" },
    { id: 5, name: "All Products", icon: BsHandbag, path: "/admin-products" },
    { id: 6, name: "All Events", icon: MdOutlineLocalOffer, path: "/admin-events" },
    { id: 7, name: "Withdraw", icon: CiMoneyBill, path: "/admin-withdraw-request" },
    { id: 8, name: "Settings", icon: AiOutlineSetting, path: "/profile" },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-30">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <button onClick={() => setOpen(!open)} className="text-2xl">
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${open ? "left-0" : "-left-full"} 
        md:left-0 fixed top-0 md:top-[70px] w-[70%] sm:w-[50%] md:w-full 
        h-[100vh] md:h-[calc(100vh-70px)] bg-white shadow-md 
        overflow-y-auto transition-all duration-300 z-20`}
      >
        <div className="mt-20 md:mt-0">
          {menu.map(({ id, name, icon: Icon, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 p-4 hover:bg-gray-100 border-b"
            >
              <Icon size={24} color={active === id ? "crimson" : "#555"} />
              <span
                className={`hidden sm:block text-[16px] ${
                  active === id ? "text-[crimson]" : "text-[#555]"
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSideBar;
