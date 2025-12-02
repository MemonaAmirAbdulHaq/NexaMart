
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { getAllSellers } from "../../redux/actions/sellers";
import styles from "../../styles/styles";

const AllSellers = () => {
  const dispatch = useDispatch();
  const { sellers } = useSelector((state) => state.seller);
  const [open, setOpen] = useState(false);
  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    dispatch(getAllSellers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${server}/shop/delete-seller/${id}`, { withCredentials: true });
      toast.success(res.data.message);
      dispatch(getAllSellers());
      setOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const columns = [
    { field: "id", headerName: "Seller ID", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 130, flex: 0.7 },
    { field: "email", headerName: "Email", minWidth: 130, flex: 0.7 },
    { field: "address", headerName: "Seller Address", minWidth: 130, flex: 0.7 },
    { field: "joinedAt", headerName: "Joined At", minWidth: 130, flex: 0.8 },
    {
      field: "preview",
      headerName: "Preview Shop",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/shop/preview/${params.id}`}>
          <Button size="small">
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete Seller",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <Button
          size="small"
          onClick={() => {
            setSellerId(params.id);
            setOpen(true);
          }}
        >
          <AiOutlineDelete size={20} />
        </Button>
      ),
    },
  ];

  const rows = sellers?.map((seller) => ({
    id: seller._id,
    name: seller?.name,
    email: seller?.email,
    address: seller?.address,
    joinedAt: new Date(seller.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2">All Sellers</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid rows={rows} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
        </div>

        {open && (
          <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded shadow p-5 relative">
              <RxCross1
                size={25}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setOpen(false)}
              />
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                Are you sure you want to delete this seller?
              </h3>
              <div className="flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() => handleDelete(sellerId)}
                >
                  Confirm
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSellers;
