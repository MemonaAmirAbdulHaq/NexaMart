
import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineSearch ,AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";
import { categoriesData, productData } from "../../static/data";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown"
import Navbar from "./Navbar"
import {CgProfile} from 'react-icons/cg'
import { useSelector } from "react-redux";
import { backend_url } from "../../../server";
import Cart from "../cart/Cart.jsx"; // Importing Cart component
import Wishlist from "../Wishlist/Wishlist"; // Importing Wishlist component
const Header = ({activeHeading}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false); // Fixed typo: dropDowm -> dropDown
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);


  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts =
      // productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (

       <>
      <div className={`${styles.section}`}>
        <div className="flex items-center justify-between h-[60px] my-[20px] 800px:h-[60px] 800px:my-[20px]">
          <div>
            <Link to="/">
              <div className="flex items-center">
                <h1 className="text-4xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
                  NexMart
                </h1>
              </div>
              {/* <img src="img" alt="NexMart" /> */}
            </Link>
          </div>

          {/* Search Box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#008080] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute bg-white shadow-xl z-[9] p-4 rounded-lg border border-teal-200 mt-1 max-h-[60vh] overflow-y-auto w-full">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`} key={index}>
                        <div className="w-full flex items-start py-3"> {/* Fixed: items-start-py-3 -> items-start py-3 */}
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
            <Link to="/seller">
              <h1 className="text-white flex items-center font-semibold">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition 800px:flex items-center justify-between w-full bg-[#008080] h-[70px]`}>
        <div className={`${styles.section} relative ${styles.noramlFlex} justify-between`}>
          {/* categories */}
          <div onClick={()=>setDropDown(!dropDown)}>
          <div className="relative h-[60px] mt-[10px] w-[270px]">
            <BiMenuAltLeft
              size={30}
              className="absolute top-3 left-2 text-teal-600"
            />
            <button className="h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md">
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)} // Fixed variable name
            />
            {dropDown ? ( // Fixed variable name
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          </div>
          {/* navbar */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}>
                 <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                0
                </span>

              </div>
            </div>
             <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}>
                 <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                1
                </span>

              </div>
            </div>
             <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                 {isAuthenticated ? (
                   <Link to='/profile'>
                  <img src={`${backend_url}${user.avatar}`} 
                  className="w-[35px] h-[35px] rounded-full "
                  alt="" />
                 </Link>
                 ):( 
                 <Link to='/login'>
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                 </Link>

                 )}
                
               

              </div>
            </div>
            {/*cart */}
                 {
                  openCart ?(
                    <Cart  setOpenCart={setOpenCart} />
                  ):null
                 }
                  {/*wishlist popup */}
                 {
                  openWishlist ?(
                    <Wishlist  setOpenWishlist={setOpenWishlist} />
                  ):null
                 }
          </div>

        </div>
      </div>
    </>
    )
   };
  


export default Header;

