// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";

// const BestDeals = () => {
//   const [data, setData] = useState([]);
//   const { allProducts } = useSelector((state) => state.products);
//   useEffect(() => {
//     const allProductsData = allProducts ? [...allProducts] : [];
//     const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
//     const firstFive = sortedData && sortedData.slice(0, 5);
//     setData(firstFive);
//   }, [allProducts]);
  

//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Best Deals</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//            {
//             data && data.length !== 0 &&(
//               <>
//                {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//               </>
//             )
//            }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestDeals;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts) {
      const sortedData = [...allProducts].sort((a, b) => b.sold_out - a.sold_out);
      setData(sortedData.slice(0, 5));
    }
  }, [allProducts]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} mb-6`}>
          <h1 className="text-2xl font-semibold">Best Deals</h1>
        </div>
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {data.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No best deals available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default BestDeals;
