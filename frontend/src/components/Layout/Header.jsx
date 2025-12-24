
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useSelector } from "react-redux";

const Header = ({ activeHeading }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = allProducts?.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
    setSearchData(filtered || []);
  };

  const closeAllModals = () => {
    setOpenSidebar(false);
    setOpenCart(false);
    setOpenWishlist(false);
  };

  return (
    <>
      {/* -------- Desktop Header -------- */}
      <div className={`${styles.section} hidden lg:block`}>
        <div className="h-[80px] my-[20px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0d5d5d] via-[#0a4a4a] to-[#083838] bg-clip-text text-transparent hover:from-[#0f7a7a] hover:via-[#0c5f5f] hover:to-[#0a4a4a] transition-all">
              NexaMart
            </h1>
          </Link>

          {/* Search bar */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[45px] w-full px-3 border-2 border-teal-500 rounded-md outline-none focus:border-teal-400"
            />
            <AiOutlineSearch
              size={28}
              className="absolute right-3 top-2.5 cursor-pointer text-teal-600"
            />
            {searchData.length > 0 && (
              <div className="absolute bg-white shadow-md w-full z-10 max-h-[250px] overflow-y-auto mt-1 rounded-md">
                {searchData.map((item, i) => (
                  <Link
                    key={i}
                    to={`/product/${item._id}`}
                    onClick={() => setSearchData([])}
                    className="flex items-center gap-3 p-2 hover:bg-teal-50"
                  >
                    <img
                      src={item.images[0]?.url}
                      alt="product"
                      className="w-[40px] h-[40px] rounded object-cover"
                    />
                    <p className="text-sm">{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Seller / Dashboard Button */}
          <div className="bg-gradient-to-r from-[#0d5d5d] via-[#0a4a4a] to-[#083838] rounded-lg hover:from-[#0f7a7a] hover:via-[#0c5f5f] hover:to-[#0a4a4a] transition-all duration-300 transform hover:scale-105">
            <Link to={isSeller ? "/dashboard" : "/shop-create"}>
              <h1 className="text-white flex items-center px-6 py-2">
                {isSeller ? "Go Dashboard" : "Become Seller"}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/* -------- Navbar Section -------- */}
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-20" : ""
        } hidden lg:flex items-center justify-between w-full bg-gradient-to-r from-[#0d5d5d] via-[#0a4a4a] to-[#083838] h-[70px] transition-all duration-300`}
      >
        <div className={`${styles.section} flex justify-between items-center`}>
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropDown((prev) => !prev)}
              className="flex items-center justify-between w-[270px] bg-white h-[60px] px-4 rounded-t-md font-medium hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2">
                <BiMenuAltLeft size={26} />
                <span>All Categories</span>
              </div>
              <IoIosArrowDown size={20} />
            </button>
            {dropDown && (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            )}
          </div>

          {/* Navigation Links */}
          <Navbar active={activeHeading} />

          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* Wishlist */}
            <div
              className="relative cursor-pointer group"
              onClick={() => setOpenWishlist(true)}
              role="button"
              tabIndex={0}
            >
              <AiOutlineHeart
                size={28}
                color="#fff"
                className="group-hover:text-teal-300 transition-colors"
              />
              {wishlist?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-gradient-to-r from-teal-500 to-teal-400 text-white text-[12px] w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Cart */}
            <div
              className="relative cursor-pointer group"
              onClick={() => setOpenCart(true)}
              role="button"
              tabIndex={0}
            >
              <AiOutlineShoppingCart
                size={28}
                color="#fff"
                className="group-hover:text-cyan-300 transition-colors"
              />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[12px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Profile */}
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="hover:ring-2 hover:ring-teal-400 rounded-full transition-all"
              >
                <img
                  src={user?.avatar?.url}
                  alt="Profile"
                  className="w-[35px] h-[35px] rounded-full border-2 border-teal-400 object-cover"
                />
              </Link>
            ) : (
              <Link to="/login" className="hover:text-cyan-300 transition-colors">
                <CgProfile size={30} color="#fff" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* -------- Mobile Header -------- */}
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-20" : ""
        } lg:hidden w-full bg-gradient-to-r from-[#0d5d5d] via-[#0a4a4a] to-[#083838] h-[60px] flex items-center justify-between px-3 sm:px-4`}
      >
        {/* Menu Button */}
        <button
          className="p-2 cursor-pointer text-white hover:text-teal-400 active:scale-95 transition-all"
          onClick={() => setOpenSidebar(true)}
          aria-label="Open menu"
        >
          <BiMenuAltLeft size={30} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-lg sm:text-xl font-bold text-white">NexaMart</h1>
        </Link>

        {/* Icons Container */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist Icon */}
          <button
            className="p-2 relative cursor-pointer text-white hover:text-teal-400 active:scale-95 transition-all"
            onClick={() => setOpenWishlist(true)}
            aria-label="Open wishlist"
          >
            <AiOutlineHeart size={24} />
            {wishlist?.length > 0 && (
              <span className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-teal-400 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            className="p-2 relative cursor-pointer text-white hover:text-teal-400 active:scale-95 transition-all"
            onClick={() => setOpenCart(true)}
            aria-label="Open cart"
          >
            <AiOutlineShoppingCart size={24} />
            {cart?.length > 0 && (
              <span className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* -------- Sidebar for Mobile -------- */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-[#00000060] z-30 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        >
          <div
            className="fixed bg-black text-white w-[85%] sm:w-[75%] h-full overflow-y-auto shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-black flex justify-between items-center p-4 border-b border-teal-500">
              {/* Wishlist Icon */}
              <button
                className="p-2 relative cursor-pointer text-white hover:text-teal-400 transition-colors"
                onClick={() => setOpenWishlist(true)}
                aria-label="Open wishlist"
              >
                <AiOutlineHeart size={24} />
                {wishlist?.length > 0 && (
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-teal-400 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Close Button */}
              <button
                className="p-2 cursor-pointer hover:text-teal-400 active:scale-95 transition-all"
                onClick={() => setOpenSidebar(false)}
                aria-label="Close menu"
              >
                <RxCross1 size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-teal-500">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[40px] w-full border-2 border-teal-500 rounded-md px-3 focus:border-teal-400 focus:outline-none bg-gray-900 text-white placeholder-gray-400"
              />
              {searchData.length > 0 && (
                <div className="bg-gray-900 shadow-md w-full mt-2 rounded-md max-h-[200px] overflow-y-auto border border-teal-500">
                  {searchData.map((item, i) => (
                    <Link
                      key={i}
                      to={`/product/${item._id}`}
                      onClick={() => closeAllModals()}
                      className="flex items-center gap-3 p-3 hover:bg-teal-900 active:bg-teal-800 transition-colors border-b border-gray-800"
                    >
                      <img
                        src={item.images[0]?.url}
                        alt="product"
                        className="w-[40px] h-[40px] rounded object-cover flex-shrink-0"
                      />
                      <p className="text-sm text-gray-100 line-clamp-2">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="p-4 border-b border-teal-500">
              <Navbar active={activeHeading} />
            </nav>

            {/* Seller Button */}
            <div className="p-4 border-b border-teal-500">
              <Link
                to={isSeller ? "/dashboard" : "/shop-create"}
                onClick={() => setOpenSidebar(false)}
              >
                <div className="bg-gradient-to-r from-[#0d5d5d] via-[#0a4a4a] to-[#083838] rounded-lg hover:shadow-lg transition-all duration-300 active:scale-95">
                  <h1 className="text-white flex items-center justify-center px-6 py-3 font-medium">
                    {isSeller ? "Go Dashboard" : "Become Seller"}
                    <IoIosArrowForward className="ml-2" />
                  </h1>
                </div>
              </Link>
            </div>

            {/* Profile Section */}
            <div className="p-4">
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  onClick={() => setOpenSidebar(false)}
                  className="flex items-center gap-3 p-3 hover:bg-teal-900 active:bg-teal-800 rounded-lg transition-colors"
                >
                  <img
                    src={user?.avatar?.url}
                    alt="profile"
                    className="w-[50px] h-[50px] rounded-full border-2 border-teal-400 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">My Profile</p>
                    <p className="text-gray-400 text-xs">{user?.name}</p>
                  </div>
                </Link>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setOpenSidebar(false)}
                    className="block w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-3 rounded-lg text-center font-medium hover:shadow-lg active:scale-95 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/sign-up"
                    onClick={() => setOpenSidebar(false)}
                    className="block w-full bg-gray-800 text-white py-3 rounded-lg text-center font-medium hover:bg-gray-700 active:scale-95 transition-all"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Popups */}
      {openCart && <Cart setOpenCart={setOpenCart} />}
      {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
    </>
  );
};

export default Header;