// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../styles/styles";
// import { categoriesData, productData } from "../../static/data";
// import {
//   AiOutlineHeart,
//   AiOutlineSearch,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import DropDown from "./DropDown";
// import Navbar from "./Navbar";
// import { useSelector } from "react-redux";
// import Cart from "../cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";
// import { RxCross1 } from "react-icons/rx";

// const Header = ({ activeHeading }) => {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const { isSeller } = useSelector((state) => state.seller);
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const { allProducts } = useSelector((state) => state.products);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchData, setSearchData] = useState(null);
//   const [active, setActive] = useState(false);
//   const [dropDown, setDropDown] = useState(false);
//   const [openCart, setOpenCart] = useState(false);
//   const [openWishlist, setOpenWishlist] = useState(false);
//   const [open, setOpen] = useState(false);

//   const handleSearchChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const filteredProducts =
//       allProducts &&
//       allProducts.filter((product) =>
//         product.name.toLowerCase().includes(term.toLowerCase())
//       );
//     setSearchData(filteredProducts);
//   };

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 70) {
//       setActive(true);
//     } else {
//       setActive(false);
//     }
//   });

//   return (
//     <>
//       <div className={`${styles.section}`}>
//         <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
//           <div>
//             <Link to="/">
//               <img
//                 src="https://shopo.quomodothemes.website/assets/images/logo.svg"
//                 alt=""
//               />
//             </Link>
//           </div>
//           {/* search box */}
//           <div className="w-[50%] relative">
//             <input
//               type="text"
//               placeholder="Search Product..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
//             />
//             <AiOutlineSearch
//               size={30}
//               className="absolute right-2 top-1.5 cursor-pointer"
//             />
//             {searchData && searchData.length !== 0 ? (
//               <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
//                 {searchData &&
//                   searchData.map((i, index) => {
//                     return (
//                       <Link to={`/product/${i._id}`}>
//                         <div className="w-full flex items-start-py-3">
//                           <img
//                             src={`${i.images[0]?.url}`}
//                             alt=""
//                             className="w-[40px] h-[40px] mr-[10px]"
//                           />
//                           <h1>{i.name}</h1>
//                         </div>
//                       </Link>
//                     );
//                   })}
//               </div>
//             ) : null}
//           </div>

//           <div className={`${styles.button}`}>
//             <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
//               <h1 className="text-[#fff] flex items-center">
//                 {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
//                 <IoIosArrowForward className="ml-1" />
//               </h1>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
//       >
//         <div
//           className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
//         >
//           {/* categories */}
//           <div onClick={() => setDropDown(!dropDown)}>
//             <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
//               <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
//               <button
//                 className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
//               >
//                 All Categories
//               </button>
//               <IoIosArrowDown
//                 size={20}
//                 className="absolute right-2 top-4 cursor-pointer"
//                 onClick={() => setDropDown(!dropDown)}
//               />
//               {dropDown ? (
//                 <DropDown
//                   categoriesData={categoriesData}
//                   setDropDown={setDropDown}
//                 />
//               ) : null}
//             </div>
//           </div>
//           {/* navitems */}
//           <div className={`${styles.noramlFlex}`}>
//             <Navbar active={activeHeading} />
//           </div>

//           <div className="flex">
//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenWishlist(true)}
//               >
//                 <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                   {wishlist && wishlist.length}
//                 </span>
//               </div>
//             </div>

//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenCart(true)}
//               >
//                 <AiOutlineShoppingCart
//                   size={30}
//                   color="rgb(255 255 255 / 83%)"
//                 />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                   {cart && cart.length}
//                 </span>
//               </div>
//             </div>

//             <div className={`${styles.noramlFlex}`}>
//               <div className="relative cursor-pointer mr-[15px]">
//                 {isAuthenticated ? (
//                   <Link to="/profile">
//                     <img
//                       src={`${user?.avatar?.url}`}
//                       className="w-[35px] h-[35px] rounded-full"
//                       alt=""
//                     />
//                   </Link>
//                 ) : (
//                   <Link to="/login">
//                     <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* cart popup */}
//             {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

//             {/* wishlist popup */}
//             {openWishlist ? (
//               <Wishlist setOpenWishlist={setOpenWishlist} />
//             ) : null}
//           </div>
//         </div>
//       </div>

//       {/* mobile header */}
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         }
//       w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
//       >
//         <div className="w-full flex items-center justify-between">
//           <div>
//             <BiMenuAltLeft
//               size={40}
//               className="ml-4"
//               onClick={() => setOpen(true)}
//             />
//           </div>
//           <div>
//             <Link to="/">
//               <img
//                 src="https://shopo.quomodothemes.website/assets/images/logo.svg"
//                 alt=""
//                 className="mt-3 cursor-pointer"
//               />
//             </Link>
//           </div>
//           <div>
//             <div
//               className="relative mr-[20px]"
//               onClick={() => setOpenCart(true)}
//             >
//               <AiOutlineShoppingCart size={30} />
//               <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
//                 {cart && cart.length}
//               </span>
//             </div>
//           </div>
//           {/* cart popup */}
//           {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

//           {/* wishlist popup */}
//           {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
//         </div>

//         {/* header sidebar */}
//         {open && (
//           <div
//             className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
//           >
//             <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
//               <div className="w-full justify-between flex pr-3">
//                 <div>
//                   <div
//                     className="relative mr-[15px]"
//                     onClick={() => setOpenWishlist(true) || setOpen(false)}
//                   >
//                     <AiOutlineHeart size={30} className="mt-5 ml-3" />
//                     <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
//                       {wishlist && wishlist.length}
//                     </span>
//                   </div>
//                 </div>
//                 <RxCross1
//                   size={30}
//                   className="ml-4 mt-5"
//                   onClick={() => setOpen(false)}
//                 />
//               </div>

//               <div className="my-8 w-[92%] m-auto h-[40px relative]">
//                 <input
//                   type="search"
//                   placeholder="Search Product..."
//                   className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//                 {searchData && (
//                   <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
//                     {searchData.map((i) => {
//                       const d = i.name;

//                       const Product_name = d.replace(/\s+/g, "-");
//                       return (
//                         <Link to={`/product/${Product_name}`}>
//                           <div className="flex items-center">
//                             <img
//                               src={i.image_Url[0]?.url}
//                               alt=""
//                               className="w-[50px] mr-2"
//                             />
//                             <h5>{i.name}</h5>
//                           </div>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               <Navbar active={activeHeading} />
//               <div className={`${styles.button} ml-4 !rounded-[4px]`}>
//                 <Link to="/shop-create">
//                   <h1 className="text-[#fff] flex items-center">
//                     Become Seller <IoIosArrowForward className="ml-1" />
//                   </h1>
//                 </Link>
//               </div>
//               <br />
//               <br />
//               <br />

//               <div className="flex w-full justify-center">
//                 {isAuthenticated ? (
//                   <div>
//                     <Link to="/profile">
//                       <img
//                         src={`${user.avatar?.url}`}
//                         alt=""
//                         className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
//                       />
//                     </Link>
//                   </div>
//                 ) : (
//                   <>
//                     <Link
//                       to="/login"
//                       className="text-[18px] pr-[10px] text-[#000000b7]"
//                     >
//                       Login /
//                     </Link>
//                     <Link
//                       to="/sign-up"
//                       className="text-[18px] text-[#000000b7]"
//                     >
//                       Sign up
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;
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

  return (
    <>
      {/* -------- Desktop Header -------- */}
      <div className={`${styles.section}`}>
        <div className="hidden lg:flex h-[80px] my-[20px] items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="Logo"
              className="h-[45px]"
            />
          </Link>

          {/* Search bar */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[45px] w-full px-3 border-2 border-[#3957db] rounded-md outline-none"
            />
            <AiOutlineSearch
              size={28}
              className="absolute right-3 top-2.5 cursor-pointer text-[#555]"
            />
            {searchData.length > 0 && (
              <div className="absolute bg-white shadow-md w-full z-10 max-h-[250px] overflow-y-auto mt-1 rounded-md">
                {searchData.map((item, i) => (
                  <Link
                    key={i}
                    to={`/product/${item._id}`}
                    onClick={() => setSearchData([])}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100"
                  >
                    <img
                      src={item.images[0]?.url}
                      alt=""
                      className="w-[40px] h-[40px] rounded object-cover"
                    />
                    <p className="text-sm">{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Seller / Dashboard Button */}
          <div className={`${styles.button}`}>
            <Link to={isSeller ? "/dashboard" : "/shop-create"}>
              <h1 className="text-white flex items-center">
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
        } hidden lg:flex items-center justify-between w-full bg-[#3321c8] h-[70px] transition-all duration-300`}
      >
        <div className={`${styles.section} flex justify-between items-center`}>
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropDown((prev) => !prev)}
              className="flex items-center justify-between w-[270px] bg-white h-[60px] px-4 rounded-t-md font-medium"
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
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenWishlist(true)}
            >
              <AiOutlineHeart size={28} color="#fff" />
              {wishlist?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#3bc177] text-white text-[12px] w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={28} color="#fff" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#3bc177] text-white text-[12px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Profile */}
            {isAuthenticated ? (
              <Link to="/profile">
                <img
                  src={user?.avatar?.url}
                  alt="Profile"
                  className="w-[35px] h-[35px] rounded-full border-2 border-white object-cover"
                />
              </Link>
            ) : (
              <Link to="/login">
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
        } lg:hidden w-full bg-white h-[60px] flex items-center justify-between px-4`}
      >
        <BiMenuAltLeft
          size={35}
          className="cursor-pointer"
          onClick={() => setOpenSidebar(true)}
        />
        <Link to="/">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt="logo"
            className="h-[35px]"
          />
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => setOpenCart(true)}
        >
          <AiOutlineShoppingCart size={28} />
          {cart?.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#3bc177] text-white text-[12px] w-4 h-4 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* -------- Sidebar for Mobile -------- */}
      {openSidebar && (
        <div className="fixed inset-0 bg-[#00000060] z-30">
          <div className="fixed bg-white w-[75%] h-full p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div
                className="relative cursor-pointer"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={28} />
                {wishlist?.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#3bc177] text-white text-[12px] w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <RxCross1
                size={28}
                className="cursor-pointer"
                onClick={() => setOpenSidebar(false)}
              />
            </div>

            {/* Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-[40px] w-full border-2 border-[#3957db] rounded-md px-2"
              />
              {searchData.length > 0 && (
                <div className="bg-white shadow-md w-full mt-1 rounded-md max-h-[200px] overflow-y-auto">
                  {searchData.map((item, i) => (
                    <Link
                      key={i}
                      to={`/product/${item._id}`}
                      onClick={() => {
                        setSearchData([]);
                        setOpenSidebar(false);
                      }}
                      className="flex items-center gap-3 p-2 hover:bg-gray-100"
                    >
                      <img
                        src={item.images[0]?.url}
                        alt=""
                        className="w-[40px] h-[40px] rounded object-cover"
                      />
                      <p className="text-sm">{item.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Navbar active={activeHeading} />
            <div className={`${styles.button} mt-4`}>
              <Link to="/shop-create" onClick={() => setOpenSidebar(false)}>
                <h1 className="text-white flex items-center">
                  Become Seller <IoIosArrowForward className="ml-1" />
                </h1>
              </Link>
            </div>

            <div className="flex justify-center mt-6">
              {isAuthenticated ? (
                <Link to="/profile" onClick={() => setOpenSidebar(false)}>
                  <img
                    src={user?.avatar?.url}
                    alt=""
                    className="w-[60px] h-[60px] rounded-full border-2 border-[#3bc177] object-cover"
                  />
                </Link>
              ) : (
                <div className="flex gap-2 text-lg text-gray-700">
                  <Link to="/login">Login</Link>/<Link to="/sign-up">Sign Up</Link>
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
