

import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from '../components/Products/ProductDetails'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SuggestedProduct from '../components/Products/SuggestedProduct'
import Loader from '../components/Layout/Loader'

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isEvent = searchParams.get('isEvent') === 'true';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchedIdRef = useRef(null);

  const { allProducts, isLoading: productsLoading } = useSelector((state) => state.products);
  const { allEvents, isLoading: eventsLoading } = useSelector((state) => state.events);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setData(null);
      searchedIdRef.current = null;
      return;
    }

    // Determine which data source to use
    const isLoading = isEvent ? eventsLoading : productsLoading;
    const dataArray = isEvent ? allEvents : allProducts;

    // Create a unique key for this search (id + isEvent)
    const searchKey = `${id}-${isEvent}`;
    const hasSearched = searchedIdRef.current === searchKey;

    // Reset when id or isEvent changes
    if (!hasSearched) {
      setLoading(true);
      setData(null);
      searchedIdRef.current = searchKey;
    }

    // Wait for data to load
    if (isLoading || !Array.isArray(dataArray)) {
      return;
    }

    // Only search if we haven't searched for this key yet
    if (!hasSearched) {
      const found = dataArray.find((item) => item?._id === id) || null;
      setData(found);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isEvent, productsLoading, eventsLoading]);

  return (
    <div>
      <Header />

      {loading ? (
        <Loader />
      ) : !data ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">
            {isEvent ? 'Event not found!' : 'Product not found!'}
          </p>
        </div>
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
