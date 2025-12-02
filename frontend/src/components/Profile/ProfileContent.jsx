
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../server";
import styles from "../../styles/styles";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineCamera, AiOutlineDelete, AiOutlineArrowRight } from "react-icons/ai";
import { MdTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Country, State } from "country-state-city";

import {
  updateUserInformation,
  loadUser,
  updatUserAddress,
  deleteUserAddress,
} from "../../redux/actions/user";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const ProfileContent = ({ active }) => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "clearMessages" });
    }
  }, [error, successMessage, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInformation(name, email, phoneNumber, password));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size should be less than 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        axios
          .put(`${server}/user/update-avatar`, { avatar: reader.result }, { withCredentials: true })
          .then(() => {
            dispatch(loadUser());
            toast.success("Avatar updated successfully!");
          })
          .catch((err) => toast.error(err.response?.data?.message || err.message));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full">
      {active === 1 && <ProfileForm user={user} handleSubmit={handleSubmit} handleImage={handleImage} name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} password={password} setPassword={setPassword} avatar={avatar} />}
      {active === 2 && <AllOrders user={user} />}
      {active === 3 && <AllRefundOrders user={user} />}
      {active === 5 && <TrackOrder user={user} />}
      {active === 6 && <ChangePassword />}
      {active === 7 && <Address user={user} />}
    </div>
  );
};

// ----------- Sub-components ------------

const ProfileForm = ({ user, handleSubmit, handleImage, name, setName, email, setEmail, phoneNumber, setPhoneNumber, password, setPassword, avatar }) => (
  <div className="w-full px-5">
    <div className="flex justify-center w-full">
      <div className="relative">
        <img
          src={avatar || user?.avatar?.url}
          className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
          alt="avatar"
        />
        <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
          <input type="file" id="image" className="hidden" onChange={handleImage} />
          <label htmlFor="image">
            <AiOutlineCamera />
          </label>
        </div>
      </div>
    </div>
    <form onSubmit={handleSubmit} className="w-full mt-8">
      <div className="flex flex-col 800px:flex-row gap-4">
        <div className="flex-1">
          <label>Full Name</label>
          <input type="text" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="flex-1">
          <label>Email</label>
          <input type="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>
      <div className="flex flex-col 800px:flex-row gap-4 mt-4">
        <div className="flex-1">
          <label>Phone Number</label>
          <input type="number" className={styles.input} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="flex-1">
          <label>Password</label>
          <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <input type="submit" value="Update" className={`${styles.input} mt-4 cursor-pointer text-center`} />
    </form>
  </div>
);

// ----------- Orders -----------

const OrdersTable = ({ orders, track = false }) => {
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => params.value === "Delivered" ? "greenColor" : "redColor",
    },
    { field: "itemsQty", headerName: "Items Qty", type: "number", minWidth: 130, flex: 0.7 },
    { field: "total", headerName: "Total", type: "number", minWidth: 130, flex: 0.8 },
    {
      field: "action",
      headerName: "",
      minWidth: 150,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Link to={track ? `/user/track/order/${params.id}` : `/user/order/${params.id}`}>
          <Button>{track ? <MdTrackChanges size={20} /> : <AiOutlineArrowRight size={20} />}</Button>
        </Link>
      ),
    },
  ];

  const rows = orders?.map((item) => ({
    id: item._id,
    itemsQty: item.cart.length,
    total: "US$ " + item.totalPrice,
    status: item.status,
  }));

  return <DataGrid rows={rows || []} columns={columns} pageSize={10} autoHeight disableSelectionOnClick />;
};

const AllOrders = ({ user }) => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user?._id) dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch, user?._id]);

  return <div className="pl-8 pt-1"><OrdersTable orders={orders} /></div>;
};

const AllRefundOrders = ({ user }) => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user?._id) dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch, user?._id]);

  const eligibleOrders = orders?.filter((item) => item.status === "Processing refund");

  return <div className="pl-8 pt-1"><OrdersTable orders={eligibleOrders} /></div>;
};

const TrackOrder = ({ user }) => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user?._id) dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch, user?._id]);

  return <div className="pl-8 pt-1"><OrdersTable orders={orders} track={true} /></div>;
};

// ----------- Change Password -----------

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if(newPassword !== confirmPassword){
      toast.error("New password and confirm password do not match!");
      return;
    }
    try {
      const res = await axios.put(`${server}/user/update-user-password`, { oldPassword, newPassword, confirmPassword }, { withCredentials: true });
      toast.success(res.data.success);
      setOldPassword(""); setNewPassword(""); setConfirmPassword("");
    } catch(err){
      toast.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="w-full px-5">
      <h1 className="text-center text-[25px] font-[600] pb-2">Change Password</h1>
      <form onSubmit={handleChangePassword} className="flex flex-col items-center gap-4">
        <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className={styles.input} required />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={styles.input} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={styles.input} required />
        <input type="submit" value="Update" className={`${styles.input} cursor-pointer text-center`} />
      </form>
    </div>
  );
};

// ----------- Address -----------

const Address = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");
  const dispatch = useDispatch();

  const addressTypes = ["Default", "Home", "Office"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!country || !city || !addressType){
      toast.error("Please fill all fields!");
      return;
    }
    dispatch(updatUserAddress(country, city, address1, address2, zipCode, addressType));
    setOpen(false);
    setCountry(""); setCity(""); setAddress1(""); setAddress2(""); setZipCode(""); setAddressType("");
  };

  const handleDelete = (id) => dispatch(deleteUserAddress(id));

  return (
    <div className="w-full px-5">
      {open && (
        <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center">
          <div className="w-[35%] h-[80vh] bg-white rounded shadow relative overflow-y-scroll p-4">
            <div className="flex justify-end"><RxCross1 size={30} className="cursor-pointer" onClick={() => setOpen(false)} /></div>
            <h1 className="text-center text-[25px] font-[600]">Add New Address</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
              <select value={country} onChange={(e) => setCountry(e.target.value)} className={styles.input}>
                <option value="">Choose Country</option>
                {Country.getAllCountries().map(c => <option key={c.isoCode} value={c.isoCode}>{c.name}</option>)}
              </select>
              <select value={city} onChange={(e) => setCity(e.target.value)} className={styles.input}>
                <option value="">Choose City</option>
                {State.getStatesOfCountry(country).map(s => <option key={s.isoCode} value={s.isoCode}>{s.name}</option>)}
              </select>
              <input type="text" placeholder="Address 1" value={address1} onChange={(e) => setAddress1(e.target.value)} className={styles.input} required />
              <input type="text" placeholder="Address 2" value={address2} onChange={(e) => setAddress2(e.target.value)} className={styles.input} required />
              <input type="number" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className={styles.input} />
              <select value={addressType} onChange={(e) => setAddressType(e.target.value)} className={styles.input}>
                <option value="">Address Type</option>
                {addressTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <input type="submit" value="Save" className={`${styles.input} cursor-pointer`} />
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[25px] font-[600] text-[#000000ba]">My Addresses</h1>
        <div className={`${styles.button} !rounded-md`} onClick={() => setOpen(true)}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>

      {user?.addresses.length ? user.addresses.map((addr) => (
        <div key={addr._id} className="flex justify-between items-center bg-white rounded shadow p-3 mb-3">
          <div>
            <h5 className="font-[600]">{addr.addressType}</h5>
            <h6>{addr.address1}, {addr.address2}, {addr.city}, {addr.country}</h6>
          </div>
          <div className="flex items-center gap-2">
            <h6>{user.phoneNumber}</h6>
            <AiOutlineDelete size={25} className="cursor-pointer" onClick={() => handleDelete(addr._id)} />
          </div>
        </div>
      )) : <h5 className="text-center pt-8 text-[18px]">You have no saved address!</h5>}
    </div>
  );
};

export default ProfileContent;
