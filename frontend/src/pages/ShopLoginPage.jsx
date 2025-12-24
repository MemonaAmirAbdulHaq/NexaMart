
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from "../components/Shop/ShopLogin";
import Loader from "../components/Layout/Loader";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate("/dashboard");
    }
  }, [isSeller, navigate]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className=" w-full min-h-screen flex justify-center items-start p-4 bg-gray-50">
      <div className="w-full max-w-md bg-gray-50 shadow-md rounded-lg p-6">
        <ShopLogin />
      </div>
    </div>
  );
};

export default ShopLoginPage;
