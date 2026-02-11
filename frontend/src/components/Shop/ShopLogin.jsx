


import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
//import styles from "../../styles/styles";

const ShopLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${server}/shop/login-shop`,
        { email, password },
        { withCredentials: true }
      );
      toast.success("Login Success!");
      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Card */}
      <div className="w-full max-w-[600px] bg-white shadow-2xl rounded-2xl p-12">
        
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Shop Login
        </h2>

        <form className="space-y-7" onSubmit={handleSubmit}>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cdaa80] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cdaa80] focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2">
                {visible ? (
                  <AiOutlineEye
                    className="cursor-pointer text-gray-500"
                    size={20}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="cursor-pointer text-gray-500"
                    size={20}
                    onClick={() => setVisible(true)}
                  />
                )}
              </span>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-[#cdaa80]" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-[#cdaa80] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#213a56] text-white text-base font-semibold hover:bg-[#0f1e3f] transition"
          >
            Login
          </button>

          {/* Signup */}
          <div className="text-center text-sm text-gray-600 pt-4">
            Don’t have an account?
            <Link
              to="/shop-create"
            className="text-[#cdaa80] font-medium pl-1 hover:underline"
            >
              Sign Up
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ShopLogin;
