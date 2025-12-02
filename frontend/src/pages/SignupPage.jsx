
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Signup from "../components/Signup/Signup";

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
