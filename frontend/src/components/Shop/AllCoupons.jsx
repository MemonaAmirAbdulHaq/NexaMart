// import { Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { RxCross1 } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "../../styles/styles";
// import Loader from "../Layout/Loader";
// import { server } from "../../server";
// import { toast } from "react-toastify";

// const AllCoupons = () => {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [coupouns,setCoupouns] = useState([]);
//   const [minAmount, setMinAmout] = useState(null);
//   const [maxAmount, setMaxAmount] = useState(null);
//   const [selectedProducts, setSelectedProducts] = useState(null);
//   const [value, setValue] = useState(null);
//   const { seller } = useSelector((state) => state.seller);
//   const { products } = useSelector((state) => state.products);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${server}/coupon/get-coupon/${seller._id}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setIsLoading(false);
//         setCoupouns(res.data.couponCodes);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//       });
//   }, [dispatch]);

//   const handleDelete = async (id) => {
//     axios.delete(`${server}/coupon/delete-coupon/${id}`,{withCredentials: true}).then((res) => {
//       toast.success("Coupon code deleted succesfully!")
//     })
//     window.location.reload();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await axios
//       .post(
//         `${server}/coupon/create-coupon-code`,
//         {
//           name,
//           minAmount,
//           maxAmount,
//           selectedProducts,
//           value,
//           shopId: seller._id,
//         },
//         { withCredentials: true }
//       )
//       .then((res) => {
//        toast.success("Coupon code created successfully!");
//        setOpen(false);
//        window.location.reload();
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   const columns = [
//     { field: "id", headerName: "Id", minWidth: 150, flex: 0.7 },
//     {
//       field: "name",
//       headerName: "Coupon Code",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "price",
//       headerName: "Value",
//       minWidth: 100,
//       flex: 0.6,
//     },
//     {
//       field: "Delete",
//       flex: 0.8,
//       minWidth: 120,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Button onClick={() => handleDelete(params.id)}>
//               <AiOutlineDelete size={20} />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   coupouns &&
//   coupouns.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: item.value + " %",
//         sold: 10,
//       });
//     });

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <div className="w-full flex justify-end">
//             <div
//               className={`${styles.button} !w-max !h-[45px] px-3 !rounded-[5px] mr-3 mb-3`}
//               onClick={() => setOpen(true)}
//             >
//               <span className="text-white">Create Coupon Code</span>
//             </div>
//           </div>
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//           {open && (
//             <div className="fixed top-0 left-0 w-full h-screen bg-[#00000062] z-[20000] flex items-center justify-center">
//               <div className="w-[90%] 800px:w-[40%] h-[80vh] bg-white rounded-md shadow p-4">
//                 <div className="w-full flex justify-end">
//                   <RxCross1
//                     size={30}
//                     className="cursor-pointer"
//                     onClick={() => setOpen(false)}
//                   />
//                 </div>
//                 <h5 className="text-[30px] font-Poppins text-center">
//                   Create Coupon code
//                 </h5>
//                 {/* create coupoun code */}
//                 <form onSubmit={handleSubmit} aria-required={true}>
//                   <br />
//                   <div>
//                     <label className="pb-2">
//                       Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       value={name}
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Enter your coupon code name..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">
//                       Discount Percentenge{" "}
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="value"
//                       value={value}
//                       required
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setValue(e.target.value)}
//                       placeholder="Enter your coupon code value..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">Min Amount</label>
//                     <input
//                       type="number"
//                       name="value"
//                       value={minAmount}
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setMinAmout(e.target.value)}
//                       placeholder="Enter your coupon code min amount..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">Max Amount</label>
//                     <input
//                       type="number"
//                       name="value"
//                       value={maxAmount}
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setMaxAmount(e.target.value)}
//                       placeholder="Enter your coupon code max amount..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">Selected Product</label>
//                     <select
//                       className="w-full mt-2 border h-[35px] rounded-[5px]"
//                       value={selectedProducts}
//                       onChange={(e) => setSelectedProducts(e.target.value)}
//                     >
//                       <option value="Choose your selected products">
//                         Choose a selected product
//                       </option>
//                       {products &&
//                         products.map((i) => (
//                           <option value={i.name} key={i.name}>
//                             {i.name}
//                           </option>
//                         ))}
//                     </select>
//                   </div>
//                   <br />
//                   <div>
//                     <input
//                       type="submit"
//                       value="Create"
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default AllCoupons;
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { server } from "../../server";
import { toast } from "react-toastify";

const AllCoupons = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [value, setValue] = useState("");
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchCoupons = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${server}/coupon/get-coupon/${seller._id}`, {
          withCredentials: true,
        });
        setCoupons(res.data.couponCodes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoupons();
  }, [seller]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${server}/coupon/delete-coupon/${id}`, {
        withCredentials: true,
      });
      toast.success("Coupon deleted successfully!");
      setCoupons((prev) => prev.filter((coupon) => coupon._id !== id));
    } catch (err) {
      toast.error("Failed to delete coupon");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${server}/coupon/create-coupon-code`,
        {
          name,
          minAmount,
          maxAmount,
          selectedProducts: selectedProduct,
          value,
          shopId: seller._id,
        },
        { withCredentials: true }
      );
      toast.success("Coupon created successfully!");
      setCoupons((prev) => [...prev, res.data.coupon]);
      setOpen(false);
      setName("");
      setMinAmount("");
      setMaxAmount("");
      setSelectedProduct("");
      setValue("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error creating coupon");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Coupon Code", minWidth: 180, flex: 1.2 },
    { field: "price", headerName: "Value", minWidth: 100, flex: 0.5 },
    {
      field: "Delete",
      headerName: "",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.id)}>
          <AiOutlineDelete size={20} color="red" />
        </Button>
      ),
    },
  ];

  const rows =
    coupons?.map((item) => ({
      id: item._id,
      name: item.name,
      price: `${item.value}%`,
    })) || [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full px-4 sm:px-8 pt-4 sm:pt-6 mt-8 bg-white rounded-md shadow-sm">
          <div className="flex justify-end mb-4">
            <button
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-md shadow-md hover:opacity-80 transition duration-200"
              onClick={() => setOpen(true)}
            >
              Create Coupon
            </button>
          </div>

          <div className="overflow-x-auto">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              autoHeight
              className="text-gray-700"
            />
          </div>

          {open && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[20000] flex items-center justify-center">
              <div className="w-[90%] sm:w-[500px] bg-white rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                >
                  <RxCross1 size={24} />
                </button>

                <h2 className="text-2xl font-semibold text-center mb-6">
                  Create Coupon Code
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4 text-gray-700"
                >
                  <div>
                    <label className="block mb-1 font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter coupon name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">
                      Discount Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required
                      placeholder="Enter discount %"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium">Min Amount</label>
                      <input
                        type="number"
                        value={minAmount}
                        onChange={(e) => setMinAmount(e.target.value)}
                        placeholder="Min amount"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Max Amount</label>
                      <input
                        type="number"
                        value={maxAmount}
                        onChange={(e) => setMaxAmount(e.target.value)}
                        placeholder="Max amount"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">
                      Select Product
                    </label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                    >
                      <option value="">Choose product</option>
                      {products?.map((i) => (
                        <option value={i.name} key={i._id}>
                          {i.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-md mt-4 hover:opacity-90 transition"
                  >
                    Create Coupon
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AllCoupons;
