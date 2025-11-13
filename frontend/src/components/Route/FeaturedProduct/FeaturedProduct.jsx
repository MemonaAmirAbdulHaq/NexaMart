// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";

// const FeaturedProduct = () => {
//   const {allProducts} = useSelector((state) => state.products);
   
//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Featured Products</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//         {
//             allProducts && allProducts.length !== 0 &&(
//               <>
//                {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
//               </>
//             )
//            }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;
import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} mb-6`}>
          <h1 className="text-2xl font-semibold">Featured Products</h1>
        </div>
        {allProducts && allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {allProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No featured products available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
