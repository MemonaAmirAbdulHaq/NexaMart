// import React, { useEffect, useState } from "react";
// import styles from "../../styles/styles";
// import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
// import { MdBorderClear } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";

// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersOfAdmin } from "../../redux/actions/order";
// import Loader from "../Layout/Loader";
// import { getAllSellers } from "../../redux/actions/sellers";

// const AdminDashboardMain = () => {
//   const dispatch = useDispatch();

//   const { adminOrders,adminOrderLoading } = useSelector((state) => state.order);
//   const { sellers } = useSelector((state) => state.seller);

//   useEffect(() => {
//     dispatch(getAllOrdersOfAdmin());
//     dispatch(getAllSellers());
//   }, []);

//    const adminEarning = adminOrders && adminOrders.reduce((acc,item) => acc + item.totalPrice * .10, 0);


//    const adminBalance = adminEarning?.toFixed(2);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },

//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },
//     {
//       field: "createdAt",
//       headerName: "Order Date",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },
//   ];

//   const row = [];
//   adminOrders &&
//   adminOrders.forEach((item) => {
//       row.push({
//         id: item._id,
//         itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
//         total: item?.totalPrice + " $",
//         status: item?.status,
//         createdAt: item?.createdAt.slice(0,10),
//       });
//     });

//   return (
//    <>
//     {
//       adminOrderLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full p-4">
//         <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
//         <div className="w-full block 800px:flex items-center justify-between">
//           <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//             <div className="flex items-center">
//               <AiOutlineMoneyCollect
//                 size={30}
//                 className="mr-2"
//                 fill="#00000085"
//               />
//               <h3
//                 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//               >
//                 Total Earning
//               </h3>
//             </div>
//             <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">$ {adminBalance}</h5>
//           </div>
  
//           <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//             <div className="flex items-center">
//               <MdBorderClear size={30} className="mr-2" fill="#00000085" />
//               <h3
//                 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//               >
//                 All Sellers
//               </h3>
//             </div>
//             <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{sellers && sellers.length}</h5>
//             <Link to="/admin-sellers">
//               <h5 className="pt-4 pl-2 text-[#077f9c]">View Sellers</h5>
//             </Link>
//           </div>
  
//           <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//             <div className="flex items-center">
//               <AiOutlineMoneyCollect
//                 size={30}
//                 className="mr-2"
//                 fill="#00000085"
//               />
//               <h3
//                 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//               >
//                 All Orders
//               </h3>
//             </div>
//             <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{adminOrders && adminOrders.length}</h5>
//             <Link to="/admin-orders">
//               <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
//             </Link>
//           </div>
//         </div>
  
//         <br />
//         <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
//         <div className="w-full min-h-[45vh] bg-white rounded">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={4}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       </div>
//       )
//     }
//    </>
//   );
// };

// export default AdminDashboardMain;
import React, { useEffect } from "react";
import styles from "../../styles/styles";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
import { getAllSellers } from "../../redux/actions/sellers";
import Loader from "../Layout/Loader";

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders, adminOrderLoading } = useSelector((state) => state.order);
  const { sellers } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllSellers());
  }, [dispatch]);

  const adminEarning =
    adminOrders && adminOrders.reduce((acc, item) => acc + item.totalPrice * 0.1, 0);

  const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const rows =
    adminOrders &&
    adminOrders.map((item) => ({
      id: item._id,
      itemsQty: item?.cart?.reduce((acc, i) => acc + i.qty, 0),
      total: `${item?.totalPrice} $`,
      status: item?.status,
      createdAt: item?.createdAt.slice(0, 10),
    }));

  return (
    <>
      {adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-4 sm:p-6 bg-[#f8f9fa] min-h-screen">
          {/* Overview */}
          <h3 className="text-[22px] sm:text-[24px] font-Poppins pb-3 text-gray-800">
            Overview
          </h3>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Total Earnings */}
            <div className="bg-white shadow rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition">
              <div className="flex items-center">
                <AiOutlineMoneyCollect size={30} className="mr-2 text-gray-600" />
                <h3
                  className={`${styles.productTitle} text-[18px] font-[400] text-gray-600`}
                >
                  Total Earnings
                </h3>
              </div>
              <h5 className="pt-2 text-[22px] font-[600] text-gray-800">
                ${adminBalance}
              </h5>
            </div>

            {/* All Sellers */}
            <div className="bg-white shadow rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition">
              <div className="flex items-center">
                <MdBorderClear size={30} className="mr-2 text-gray-600" />
                <h3
                  className={`${styles.productTitle} text-[18px] font-[400] text-gray-600`}
                >
                  All Sellers
                </h3>
              </div>
              <h5 className="pt-2 text-[22px] font-[600] text-gray-800">
                {sellers?.length || 0}
              </h5>
              <Link to="/admin-sellers">
                <h5 className="pt-3 text-[#077f9c] hover:underline text-[15px]">
                  View Sellers
                </h5>
              </Link>
            </div>

            {/* All Orders */}
            <div className="bg-white shadow rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition">
              <div className="flex items-center">
                <AiOutlineMoneyCollect size={30} className="mr-2 text-gray-600" />
                <h3
                  className={`${styles.productTitle} text-[18px] font-[400] text-gray-600`}
                >
                  All Orders
                </h3>
              </div>
              <h5 className="pt-2 text-[22px] font-[600] text-gray-800">
                {adminOrders?.length || 0}
              </h5>
              <Link to="/admin-orders">
                <h5 className="pt-3 text-[#077f9c] hover:underline text-[15px]">
                  View Orders
                </h5>
              </Link>
            </div>
          </div>

          {/* Latest Orders */}
          <h3 className="text-[22px] sm:text-[24px] font-Poppins pb-3 text-gray-800">
            Latest Orders
          </h3>

          <div className="w-full bg-white shadow rounded-lg overflow-hidden">
            <DataGrid
              rows={rows || []}
              columns={columns}
              pageSize={4}
              disableSelectionOnClick
              autoHeight
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboardMain;
