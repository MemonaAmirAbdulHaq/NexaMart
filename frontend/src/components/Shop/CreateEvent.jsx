// import React, { useEffect, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { categoriesData } from "../../static/data";
// import { toast } from "react-toastify";
// import { createevent } from "../../redux/actions/event";

// const CreateEvent = () => {
//   const { seller } = useSelector((state) => state.seller);
//   const { success, error } = useSelector((state) => state.events);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [images, setImages] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState("");
//   const [originalPrice, setOriginalPrice] = useState();
//   const [discountPrice, setDiscountPrice] = useState();
//   const [stock, setStock] = useState();
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleStartDateChange = (e) => {
//     const startDate = new Date(e.target.value);
//     const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
//     setStartDate(startDate);
//     setEndDate(null);
//     document.getElementById("end-date").min = minEndDate.toISOString.slice(
//       0,
//       10
//     );
//   };

//   const handleEndDateChange = (e) => {
//     const endDate = new Date(e.target.value);
//     setEndDate(endDate);
//   };

//   const today = new Date().toISOString().slice(0, 10);

//   const minEndDate = startDate
//     ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
//         .toISOString()
//         .slice(0, 10)
//     : "";

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//     if (success) {
//       toast.success("Event created successfully!");
//       navigate("/dashboard-events");
//       window.location.reload();
//     }
//   }, [dispatch, error, success]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImages((old) => [...old, reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newForm = new FormData();

//     images.forEach((image) => {
//       newForm.append("images", image);
//     });
//     const data = {
//       name,
//       description,
//       category,
//       tags,
//       originalPrice,
//       discountPrice,
//       stock,
//       images,
//       shopId: seller._id,
//       start_Date: startDate?.toISOString(),
//       Finish_Date: endDate?.toISOString(),
//     };
//     dispatch(createevent(data));
//   };

//   return (
//     <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
//       <h5 className="text-[30px] font-Poppins text-center">Create Event</h5>
//       {/* create event form */}
//       <form onSubmit={handleSubmit}>
//         <br />
//         <div>
//           <label className="pb-2">
//             Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your event product name..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             cols="30"
//             required
//             rows="8"
//             type="text"
//             name="description"
//             value={description}
//             className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter your event product description..."
//           ></textarea>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="Choose a category">Choose a category</option>
//             {categoriesData &&
//               categoriesData.map((i) => (
//                 <option value={i.title} key={i.title}>
//                   {i.title}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">Tags</label>
//           <input
//             type="text"
//             name="tags"
//             value={tags}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setTags(e.target.value)}
//             placeholder="Enter your event product tags..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">Original Price</label>
//           <input
//             type="number"
//             name="price"
//             value={originalPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setOriginalPrice(e.target.value)}
//             placeholder="Enter your event product price..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Price (With Discount) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={discountPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDiscountPrice(e.target.value)}
//             placeholder="Enter your event product price with discount..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Product Stock <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={stock}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setStock(e.target.value)}
//             placeholder="Enter your event product stock..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Event Start Date <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="date"
//             name="price"
//             id="start-date"
//             value={startDate ? startDate.toISOString().slice(0, 10) : ""}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={handleStartDateChange}
//             min={today}
//             placeholder="Enter your event product stock..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Event End Date <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="date"
//             name="price"
//             id="start-date"
//             value={endDate ? endDate.toISOString().slice(0, 10) : ""}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={handleEndDateChange}
//             min={minEndDate}
//             placeholder="Enter your event product stock..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Upload Images <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             name=""
//             id="upload"
//             className="hidden"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className="w-full flex items-center flex-wrap">
//             <label htmlFor="upload">
//               <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
//             </label>
//             {images &&
//               images.map((i) => (
//                 <img
//                   src={i}
//                   key={i}
//                   alt=""
//                   className="h-[120px] w-[120px] object-cover m-2"
//                 />
//               ))}
//           </div>
//           <br />
//           <div>
//             <input
//               type="submit"
//               value="Create"
//               className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import { createevent } from "../../redux/actions/event";

const CreateEvent = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.events);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const today = new Date().toISOString().slice(0, 10);
  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : "";

  const handleStartDateChange = (e) => {
    const date = new Date(e.target.value);
    setStartDate(date);
    setEndDate(null);
  };

  const handleEndDateChange = (e) => {
    const date = new Date(e.target.value);
    setEndDate(date);
  };

  useEffect(() => {
    if (error) toast.error(error);
    if (success) {
      toast.success("Event created successfully!");
      navigate("/dashboard-events");
      window.location.reload();
    }
  }, [dispatch, error, success, navigate]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !category || !discountPrice || !stock) {
      toast.error("Please fill all required fields!");
      return;
    }

    const data = {
      name,
      description,
      category,
      tags,
      originalPrice,
      discountPrice,
      stock,
      images,
      shopId: seller._id,
      start_Date: startDate?.toISOString(),
      Finish_Date: endDate?.toISOString(),
    };
    dispatch(createevent(data));
  };

  return (
    <div className="w-[95%] md:w-[70%] lg:w-[50%] mx-auto bg-white shadow-md rounded-lg p-5 sm:p-8 mt-5 overflow-y-auto max-h-[85vh]">
      <h5 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
        Create Event
      </h5>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter event name..."
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter event description..."
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Choose a category</option>
            {categoriesData.map((i) => (
              <option key={i.title} value={i.title}>
                {i.title}
              </option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-700 font-medium">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter event tags..."
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Prices */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Original Price
            </label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="Original price"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Discount Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              placeholder="Discounted price"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="block text-gray-700 font-medium">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter available stock"
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Dates */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Event Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={startDate ? startDate.toISOString().slice(0, 10) : ""}
              onChange={handleStartDateChange}
              min={today}
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Event End Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={endDate ? endDate.toISOString().slice(0, 10) : ""}
              onChange={handleEndDateChange}
              min={minEndDate}
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Upload Images */}
        <div>
          <label className="block text-gray-700 font-medium">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="upload"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <label htmlFor="upload" className="cursor-pointer">
              <AiOutlinePlusCircle size={32} color="#555" />
            </label>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Event"
                className="w-24 h-24 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-all"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
