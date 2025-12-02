

import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from '../components/Products/ProductDetails'
import { useParams } from 'react-router-dom'
import { productData } from '../static/data'
import SuggestedProduct from '../components/Products/SuggestedProduct'

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!name) return; // Prevent crash when undefined

    const productName = name.replace(/-/g, " ");
    const found = productData.find((i) => i.name === productName);

    setData(found || null);
  }, [name]); // MUST depend on name

  return (
    <div>
      <Header />

      {!data ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <>
          <ProductDetails data={data} />
          <SuggestedProduct data={data} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
