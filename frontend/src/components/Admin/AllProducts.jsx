
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../../server";
import { toast } from "react-toastify";
import Loader from "../Layout/Loader";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${server}/product/admin-all-products`, { withCredentials: true });
      setData(res.data.products);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${server}/product/delete/${id}`, { withCredentials: true });
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 180, flex: 1.4 },
    { field: "price", headerName: "Price", minWidth: 100, flex: 0.6 },
    { field: "stock", headerName: "Stock", type: "number", minWidth: 80, flex: 0.5 },
    { field: "sold", headerName: "Sold Out", type: "number", minWidth: 130, flex: 0.6 },
    {
      field: "preview",
      headerName: "Preview",
      minWidth: 100,
      flex: 0.8,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/product/${params.id}`}>
          <Button title="View Product">
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      minWidth: 100,
      flex: 0.8,
      sortable: false,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.id)}>
          <AiOutlineDelete size={20} color="red" />
        </Button>
      ),
    },
  ];

  const rows = data?.map((item) => ({
    id: item._id,
    name: item.name,
    price: "US$ " + item.discountPrice,
    stock: item.stock,
    sold: item?.sold_out || 0,
  }));

  if (loading) return <Loader />;

  return (
    <div className="w-full mx-8 pt-1 mt-10 bg-white">
      <DataGrid rows={rows} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
    </div>
  );
};

export default AllProducts;
