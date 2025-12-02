
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";

const SuggestedProduct = ({ data }) => {
  const { allProducts } = useSelector((state) => state.products);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (allProducts && data) {
      const filtered = allProducts.filter(
        (product) => product.category === data.category && product._id !== data._id
      );
      setRelatedProducts(filtered);
    }
  }, [allProducts, data]);

  if (!data || relatedProducts.length === 0) return null;

  return (
    <div className={`p-4 ${styles.section}`}>
      <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
        Related Products
      </h2>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {relatedProducts.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedProduct;
