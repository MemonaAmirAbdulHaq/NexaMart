// import React from 'react'
// import { Link } from 'react-router-dom'
// import { navItems } from '../../static/data'
// import styles from '../../styles/styles'

// const Navbar = ({active}) => {
//   return (
//     <div className={`block 800px:${styles.noramlFlex}`}>
//          {
//             navItems && navItems.map((i,index) => (
//                 <div className="flex" key={i.url || i.title || index}>
//                     <Link to={i.url}
//                     className={`${active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer`}
//                     >
//                     {i.title}
//                     </Link>
//                 </div>
//             ))
//          }
//     </div>
//   )
// }

// export default Navbar
import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`flex flex-col md:flex-row ${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex" key={item.url || item.title || index}>
            <Link
              to={item.url}
              className={`pb-2 md:pb-0 px-4 md:px-6 font-medium cursor-pointer transition-colors duration-200
                ${
                  active === index + 1
                    ? "text-green-500"
                    : "text-black md:text-white hover:text-green-500"
                }`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
