
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopCreate from "../components/Shop/ShopCreate";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true && seller?._id) {
      navigate(`/shop/${seller._id}`);
    }
  }, [isSeller, seller, navigate]);

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-4 bg-gray-50">
      <div className="w-full max-w-3xl bg-gray-50 shadow-md rounded-lg p-6">
        <ShopCreate />
        
      </div>
    </div>
  );
};

export default ShopCreatePage;
