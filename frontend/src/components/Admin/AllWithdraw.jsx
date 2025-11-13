// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { server } from "../../server";
// // import { Link } from "react-router-dom";

// import { DataGrid } from "@mui/x-data-grid";


// import { BsPencil } from "react-icons/bs";
// import { RxCross1 } from "react-icons/rx";
// import styles from "../../styles/styles";
// import { toast } from "react-toastify";

// const AllWithdraw = () => {
//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [withdrawData, setWithdrawData] = useState();
//   const [withdrawStatus,setWithdrawStatus] = useState('Processing');

//   useEffect(() => {
//     axios
//       .get(`${server}/withdraw/get-all-withdraw-request`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setData(res.data.withdraws);
//       })
//       .catch((error) => {
//         console.log(error.response.data.message);
//       });
//   }, []);

//   const columns = [
//     { field: "id", headerName: "Withdraw Id", minWidth: 150, flex: 0.7 },
//     {
//       field: "name",
//       headerName: "Shop Name",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "shopId",
//       headerName: "Shop Id",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "amount",
//       headerName: "Amount",
//       minWidth: 100,
//       flex: 0.6,
//     },
//     {
//       field: "status",
//       headerName: "status",
//       type: "text",
//       minWidth: 80,
//       flex: 0.5,
//     },
//     {
//       field: "createdAt",
//       headerName: "Request given at",
//       type: "number",
//       minWidth: 130,
//       flex: 0.6,
//     },
//     {
//       field: " ",
//       headerName: "Update Status",
//       type: "number",
//       minWidth: 130,
//       flex: 0.6,
//       renderCell: (params) => {

//         return (
//           <BsPencil
//             size={20}
//             className={`${params.row.status !== "Processing" ? 'hidden' : '' } mr-5 cursor-pointer`}
//             onClick={() => setOpen(true) || setWithdrawData(params.row)}
//           />
//         );
//       },
//     },
//   ];

//   const handleSubmit = async () => {
//     await axios
//       .put(`${server}/withdraw/update-withdraw-request/${withdrawData.id}`,{
//         sellerId: withdrawData.shopId,
//       },{withCredentials: true})
//       .then((res) => {
//         toast.success("Withdraw request updated successfully!");
//         setData(res.data.withdraws);
//         setOpen(false);
//       });
//   };

//   const row = [];

//   data &&
//     data.forEach((item) => {
//       row.push({
//         id: item._id,
//         shopId: item.seller._id,
//         name: item.seller.name,
//         amount: "US$ " + item.amount,
//         status: item.status,
//         createdAt: item.createdAt.slice(0, 10),
//       });
//     });
//   return (
//     <div className="w-full flex items-center pt-5 justify-center">
//       <div className="w-[95%] bg-white">
//         <DataGrid
//           rows={row}
//           columns={columns}
//           pageSize={10}
//           disableSelectionOnClick
//           autoHeight
//         />
//       </div>
//       {open && (
//         <div className="w-full fixed h-screen top-0 left-0 bg-[#00000031] z-[9999] flex items-center justify-center">
//           <div className="w-[50%] min-h-[40vh] bg-white rounded shadow p-4">
//             <div className="flex justify-end w-full">
//               <RxCross1 size={25} onClick={() => setOpen(false)} />
//             </div>
//             <h1 className="text-[25px] text-center font-Poppins">
//               Update Withdraw status
//             </h1>
//             <br />
//             <select
//               name=""
//               id=""
//               onChange={(e) => setWithdrawStatus(e.target.value)}
//               className="w-[200px] h-[35px] border rounded"
//             >
//               <option value={withdrawStatus}>{withdrawData.status}</option>
//               <option value={withdrawStatus}>Succeed</option>
//             </select>
//             <button
//               type="submit"
//               className={`block ${styles.button} text-white !h-[42px] mt-4 text-[18px]`}
//               onClick={handleSubmit}
//             >
//               Update
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllWithdraw;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";
import { DataGrid } from "@mui/x-data-grid";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { toast } from "react-toastify";

const AllWithdraw = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [withdrawData, setWithdrawData] = useState();
  const [withdrawStatus, setWithdrawStatus] = useState("Processing");

  useEffect(() => {
    axios
      .get(`${server}/withdraw/get-all-withdraw-request`, { withCredentials: true })
      .then((res) => setData(res.data.withdraws))
      .catch((error) => console.log(error.response?.data?.message));
  }, []);

  const columns = [
    { field: "id", headerName: "Withdraw Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Shop Name", minWidth: 180, flex: 1.4 },
    { field: "shopId", headerName: "Shop Id", minWidth: 180, flex: 1.4 },
    { field: "amount", headerName: "Amount", minWidth: 100, flex: 0.6 },
    { field: "status", headerName: "Status", minWidth: 80, flex: 0.5 },
    { field: "createdAt", headerName: "Request Date", minWidth: 130, flex: 0.6 },
    {
      field: "update",
      headerName: "Update Status",
      minWidth: 130,
      flex: 0.6,
      renderCell: (params) => (
        <BsPencil
          size={20}
          className={`${params.row.status !== "Processing" ? "hidden" : ""} mr-5 cursor-pointer`}
          onClick={() => {
            setOpen(true);
            setWithdrawData(params.row);
            setWithdrawStatus(params.row.status);
          }}
        />
      ),
    },
  ];

  const handleSubmit = async () => {
    try {
      await axios.put(
        `${server}/withdraw/update-withdraw-request/${withdrawData.id}`,
        { sellerId: withdrawData.shopId, status: withdrawStatus },
        { withCredentials: true }
      );
      toast.success("Withdraw request updated successfully!");
      // Refresh data
      const res = await axios.get(`${server}/withdraw/get-all-withdraw-request`, { withCredentials: true });
      setData(res.data.withdraws);
      setOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const rows = data.map((item) => ({
    id: item._id,
    shopId: item.seller._id,
    name: item.seller.name,
    amount: "US$ " + item.amount,
    status: item.status,
    createdAt: new Date(item.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="w-full flex items-center justify-center pt-5">
      <div className="w-[95%] bg-white">
        <DataGrid rows={rows} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded shadow p-6 relative">
            <RxCross1
              size={25}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <h1 className="text-2xl text-center mb-4 font-semibold">Update Withdraw Status</h1>
            <select
              value={withdrawStatus}
              onChange={(e) => setWithdrawStatus(e.target.value)}
              className="w-full border rounded h-10 px-2 mb-4"
            >
              <option value="Processing">Processing</option>
              <option value="Succeed">Succeed</option>
              <option value="Failed">Failed</option>
            </select>
            <button
              onClick={handleSubmit}
              className={`${styles.button} w-full h-10 text-white text-lg`}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllWithdraw;
