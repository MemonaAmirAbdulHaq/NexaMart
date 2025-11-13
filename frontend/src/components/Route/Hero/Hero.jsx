// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";

// const Hero = () => {
//   return (
//     <div
//       className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
//       style={{
//         backgroundImage:
//           "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
//       }}
//     >
//       <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
//         <h1
//           className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
//         >
//           Best Collection for <br /> home Decoration
//         </h1>
//         <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
//           assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
//           quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
//           <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
//         </p>
//         <Link to="/products" className="inline-block">
//             <div className={`${styles.button} mt-5`}>
//                  <span className="text-[#fff] font-[Poppins] text-[18px]">
//                     Shop Now
//                  </span>
//             </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] sm:min-h-[80vh] w-full bg-no-repeat bg-cover bg-center ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] sm:w-[70%] lg:w-[60%]`}>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-semibold text-[#3d3a3a] capitalize"
        >
          Best Collection for <br /> Home Decoration
        </h1>
        <p className="pt-5 text-sm sm:text-base md:text-lg font-[Poppins] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
          asperiores, laudantium temporibus soluta optio consequatur aliquam
          deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block mt-5">
          <div className={`${styles.button}`}>
            <span className="text-white font-[Poppins] text-base sm:text-lg">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
