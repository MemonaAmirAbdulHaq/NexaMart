// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
// import ProductDetails from "../components/Products/ProductDetails";
// import SuggestedProduct from "../components/Products/SuggestedProduct";
// import { useSelector } from "react-redux";

// const ProductDetailsPage = () => {
//   const { allProducts } = useSelector((state) => state.products);
//   const { allEvents } = useSelector((state) => state.events);
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [searchParams] = useSearchParams();
//   const eventData = searchParams.get("isEvent");

//   useEffect(() => {
//     if (eventData !== null) {
//       const data = allEvents && allEvents.find((i) => i._id === id);
//       setData(data);
//     } else {
//       const data = allProducts && allProducts.find((i) => i._id === id);
//       setData(data);
//     }
//   }, [allProducts, allEvents]);

//   return (
//     <div>
//       <Header />
//       <ProductDetails data={data} />
//         {
//           !eventData && (
//             <>
//             {data && <SuggestedProduct data={data} />}
//             </>
//           )
//         }
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const eventItem = allEvents?.find((i) => i._id === id);
      setData(eventItem);
    } else {
      const productItem = allProducts?.find((i) => i._id === id);
      setData(productItem);
    }
  }, [allProducts, allEvents, id, eventData]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-10">
        {data ? (
          <>
            <ProductDetails data={data} />
            {!eventData && <SuggestedProduct data={data} />}
          </>
        ) : (
          <p className="text-center text-gray-500">Loading product...</p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
