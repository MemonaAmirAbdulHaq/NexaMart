
import React, { useEffect } from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";

import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../redux/actions/order";

const AdminDashboardOrders = () => {
  const dispatch = useDispatch();

  const { adminOrders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 1 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) =>
        params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      minWidth: 120,
      flex: 0.6,
    },
    {
      field: "total",
      headerName: "Total",
      minWidth: 120,
      flex: 0.6,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      minWidth: 150,
      flex: 0.8,
    },
  ];

  const rows = [];
  adminOrders &&
    adminOrders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " $",
        status: item?.status,
        createdAt: item?.createdAt.slice(0, 10),
      });
    });

  return (
    <div className="w-full">
      <AdminHeader />

      <div className="flex flex-col 800px:flex-row w-full">
        
        {/* Sidebar */}
        <div className="w-full 800px:w-[330px]">
          <AdminSideBar active={2} />
        </div>

        {/* DataGrid Section */}
        <div className="w-full p-3">
          <div className="w-full overflow-x-auto bg-white rounded shadow">
            <div className="min-w-[600px]"> 
              {/* Ensures DataGrid fits small screens */}
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={4}
                disableSelectionOnClick
                autoHeight
                sx={{
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboardOrders;
