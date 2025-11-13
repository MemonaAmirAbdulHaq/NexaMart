// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { server } from "../server";

// const SellerActivationPage = () => {
//   const { activation_token } = useParams();
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (activation_token) {
//       const sendRequest = async () => {
//         await axios
//           .post(`${server}/shop/activation`, {
//             activation_token,
//           })
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {
//             setError(true);
//           });
//       };
//       sendRequest();
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {error ? (
//         <p>Your token is expired!</p>
//       ) : (
//         <p>Your account has been created suceessfully!</p>
//       )}
//     </div>
//   );
// };

// export default SellerActivationPage;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); // "loading", "success", "error"

  useEffect(() => {
    if (!activation_token) return;

    const activateSeller = async () => {
      try {
        const res = await axios.post(`${server}/shop/activation`, { activation_token });
        console.log(res.data);
        setStatus("success");

        // Redirect after 3 seconds
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    activateSeller();
  }, [activation_token, navigate]);

  const renderMessage = () => {
    switch (status) {
      case "loading":
        return <p className="text-lg sm:text-xl md:text-2xl text-center">Activating your account...</p>;
      case "success":
        return <p className="text-lg sm:text-xl md:text-2xl text-center text-green-600">Your account has been created successfully! Redirecting...</p>;
      case "error":
        return <p className="text-lg sm:text-xl md:text-2xl text-center text-red-600">Your token is expired or invalid!</p>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 flex justify-center items-center">
        {renderMessage()}
      </div>
    </div>
  );
};

export default SellerActivationPage;
