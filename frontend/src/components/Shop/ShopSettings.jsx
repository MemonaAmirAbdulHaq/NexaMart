// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { backend_url, server } from "../../server";
// import { AiOutlineCamera } from "react-icons/ai";
// import styles from "../../styles/styles";
// import axios from "axios";
// import { loadSeller } from "../../redux/actions/user";
// import { toast } from "react-toastify";

// const ShopSettings = () => {
//   const { seller } = useSelector((state) => state.seller);
//   const [avatar, setAvatar] = useState();
//   const [name, setName] = useState(seller && seller.name);
//   const [description, setDescription] = useState(
//     seller && seller.description ? seller.description : ""
//   );
//   const [address, setAddress] = useState(seller && seller.address);
//   const [phoneNumber, setPhoneNumber] = useState(seller && seller.phoneNumber);
//   const [zipCode, setZipcode] = useState(seller && seller.zipCode);

//   const dispatch = useDispatch();

//   const handleImage = async (e) => {
//     const reader = new FileReader();

//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         setAvatar(reader.result);
//         axios
//           .put(
//             `${server}/shop/update-shop-avatar`,
//             { avatar: reader.result },
//             {
//               withCredentials: true,
//             }
//           )
//           .then((res) => {
//             dispatch(loadSeller());
//             toast.success("Avatar updated successfully!");
//           })
//           .catch((error) => {
//             toast.error(error.response.data.message);
//           });
//       }
//     };

//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const updateHandler = async (e) => {
//     e.preventDefault();

//     await axios
//       .put(
//         `${server}/shop/update-seller-info`,
//         {
//           name,
//           address,
//           zipCode,
//           phoneNumber,
//           description,
//         },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         toast.success("Shop info updated succesfully!");
//         dispatch(loadSeller());
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center">
//       <div className="flex w-full 800px:w-[80%] flex-col justify-center my-5">
//         <div className="w-full flex items-center justify-center">
//           <div className="relative">
//             <img
//               src={avatar ? avatar : `${seller.avatar?.url}`}
//               alt=""
//               className="w-[200px] h-[200px] rounded-full cursor-pointer"
//             />
//             <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[15px]">
//               <input
//                 type="file"
//                 id="image"
//                 className="hidden"
//                 onChange={handleImage}
//               />
//               <label htmlFor="image">
//                 <AiOutlineCamera />
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* shop info */}
//         <form
//           aria-aria-required={true}
//           className="flex flex-col items-center"
//           onSubmit={updateHandler}
//         >
//           <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//             <div className="w-full pl-[3%]">
//               <label className="block pb-2">Shop Name</label>
//             </div>
//             <input
//               type="name"
//               placeholder={`${seller.name}`}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//             />
//           </div>
//           <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//             <div className="w-full pl-[3%]">
//               <label className="block pb-2">Shop description</label>
//             </div>
//             <input
//               type="name"
//               placeholder={`${
//                 seller?.description
//                   ? seller.description
//                   : "Enter your shop description"
//               }`}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//             />
//           </div>
//           <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//             <div className="w-full pl-[3%]">
//               <label className="block pb-2">Shop Address</label>
//             </div>
//             <input
//               type="name"
//               placeholder={seller?.address}
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//             />
//           </div>

//           <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//             <div className="w-full pl-[3%]">
//               <label className="block pb-2">Shop Phone Number</label>
//             </div>
//             <input
//               type="number"
//               placeholder={seller?.phoneNumber}
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//             />
//           </div>

//           <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//             <div className="w-full pl-[3%]">
//               <label className="block pb-2">Shop Zip Code</label>
//             </div>
//             <input
//               type="number"
//               placeholder={seller?.zipCode}
//               value={zipCode}
//               onChange={(e) => setZipcode(e.target.value)}
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//             />
//           </div>

//           <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//             <input
//               type="submit"
//               value="Update Shop"
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//               readOnly
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ShopSettings;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCamera } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";
import styles from "../../styles/styles";
import { loadSeller } from "../../redux/actions/user";

const ShopSettings = () => {
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState(seller?.name || "");
  const [description, setDescription] = useState(seller?.description || "");
  const [address, setAddress] = useState(seller?.address || "");
  const [phoneNumber, setPhoneNumber] = useState(seller?.phoneNumber || "");
  const [zipCode, setZipCode] = useState(seller?.zipCode || "");

  // Handle avatar change
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        axios
          .put(
            `${server}/shop/update-shop-avatar`,
            { avatar: reader.result },
            { withCredentials: true }
          )
          .then(() => {
            dispatch(loadSeller());
            toast.success("Avatar updated successfully!");
          })
          .catch((error) => toast.error(error.response.data.message));
      }
    };
    reader.readAsDataURL(file);
  };

  // Update shop info
  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${server}/shop/update-seller-info`,
        { name, description, address, phoneNumber, zipCode },
        { withCredentials: true }
      );
      toast.success("Shop info updated successfully!");
      dispatch(loadSeller());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="flex w-full 800px:w-[80%] flex-col justify-center my-5">
        {/* Avatar */}
        <div className="w-full flex items-center justify-center mb-5">
          <div className="relative">
            <img
              src={avatar || seller?.avatar?.url}
              alt="Shop Avatar"
              className="w-[200px] h-[200px] rounded-full object-cover cursor-pointer"
            />
            <div className="absolute bottom-2 right-3 w-[35px] h-[35px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer">
              <input
                type="file"
                id="avatarInput"
                className="hidden"
                onChange={handleImage}
              />
              <label htmlFor="avatarInput">
                <AiOutlineCamera size={20} />
              </label>
            </div>
          </div>
        </div>

        {/* Shop Info Form */}
        <form
          className="flex flex-col items-center w-full"
          onSubmit={updateHandler}
        >
          {[
            { label: "Shop Name", value: name, setter: setName, type: "text" },
            {
              label: "Shop Description",
              value: description,
              setter: setDescription,
              type: "text",
            },
            { label: "Shop Address", value: address, setter: setAddress, type: "text" },
            { label: "Phone Number", value: phoneNumber, setter: setPhoneNumber, type: "number" },
            { label: "Zip Code", value: zipCode, setter: setZipCode, type: "number" },
          ].map((field, index) => (
            <div
              key={index}
              className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5"
            >
              <label className="w-full pl-[3%] block pb-2">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.value || field.label}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                className={`${styles.input} !w-[95%] mb-4`}
                required
              />
            </div>
          ))}

          <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
            <button
              type="submit"
              className={`${styles.input} !w-[95%] bg-blue-600 text-white cursor-pointer`}
            >
              Update Shop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopSettings;
