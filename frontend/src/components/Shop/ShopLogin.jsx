
// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../server";
// import { toast } from "react-toastify";
// import styles from "../../styles/styles";

// const ShopLogin = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [visible, setVisible] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `${server}/shop/login-shop`,
//         { email, password },
//         { withCredentials: true }
//       );
//       toast.success("Login Success!");
//       navigate("/dashboard");
//       window.location.reload(); // reloads to update shop state
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Login to your shop
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   type={visible ? "text" : "password"}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//                 {visible ? (
//                   <AiOutlineEye
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(false)}
//                   />
//                 ) : (
//                   <AiOutlineEyeInvisible
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(true)}
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className={`${styles.noramlFlex} justify-between`}>
//               <div className={`${styles.noramlFlex}`}>
//                 <input
//                   type="checkbox"
//                   id="remember-me"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <a
//                   href=".forgot-password"
//                   className="font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>
//             </div>

//             {/* Submit */}
//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>

//             {/* Signup Link */}
//             <div className={`${styles.noramlFlex} w-full`}>
//               <h4>Not have an account?</h4>
//               <Link to="/shop-create" className="text-blue-600 pl-2">
//                 Sign Up
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopLogin;
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
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
              <input type="checkbox" className="accent-teal-600" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-teal-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-teal-600 text-white text-base font-semibold hover:bg-teal-700 transition"
          >
            Login
          </button>

          {/* Signup */}
          <div className="text-center text-sm text-gray-600 pt-4">
            Don’t have an account?
            <Link
              to="/shop-create"
              className="text-teal-600 font-medium pl-1 hover:underline"
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
