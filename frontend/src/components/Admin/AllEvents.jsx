
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { server } from "../../server";
import Loader from "../Layout/Loader";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${server}/event/admin-all-events`, { withCredentials: true });
        setEvents(res.data.events);
      } catch (error) {
        console.error(error.response?.data?.message || "Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const columns = [
    { field: "id", headerName: "Event Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 180, flex: 1.4 },
    { field: "price", headerName: "Price", minWidth: 100, flex: 0.6 },
    { field: "stock", headerName: "Stock", type: "number", minWidth: 80, flex: 0.5 },
    { field: "sold", headerName: "Sold Out", type: "number", minWidth: 130, flex: 0.6 },
    {
      field: "preview",
      headerName: "",
      minWidth: 100,
      flex: 0.8,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/product/${params.id}?isEvent=true`}>
          <Button title="View Event">
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      ),
    },
  ];

  const rows = events?.map((item) => ({
    id: item._id,
    name: item.name,
    price: "US$ " + (item?.discountPrice || 0),
    stock: item?.stock || 0,
    sold: item?.sold_out || 0,
  }));

  if (loading) return <Loader />;

  return (
    <div className="w-full mx-8 pt-1 mt-10 bg-white">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

export default AllEvents;
