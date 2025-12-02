
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/user";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${server}/user/delete-user/${id}`, { withCredentials: true });
      toast.success(res.data.message);
      dispatch(getAllUsers());
      setOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 130, flex: 0.7 },
    { field: "email", headerName: "Email", minWidth: 130, flex: 0.7 },
    { field: "role", headerName: "User Role", minWidth: 130, flex: 0.7 },
    { field: "joinedAt", headerName: "Joined At", minWidth: 130, flex: 0.8 },
    {
      field: "delete",
      headerName: "Delete User",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <div
          className="cursor-pointer flex items-center justify-center w-full h-full"
          onClick={() => {
            setUserId(params.id);
            setOpen(true);
          }}
        >
          <AiOutlineDelete size={20} />
        </div>
      ),
    },
  ];

  const rows = users?.map((item) => ({
    id: item._id,
    name: item.name,
    email: item.email,
    role: item.role,
    joinedAt: new Date(item.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2">All Users</h3>
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
                Are you sure you want to delete this user?
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
                  onClick={() => handleDelete(userId)}
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

export default AllUsers;
