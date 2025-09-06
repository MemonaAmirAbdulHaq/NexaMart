
// import React, { useState } from 'react';
// import styles from '../../styles/styles';
// import { useNavigate } from 'react-router-dom';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

// const ProductDetails = ({ data }) => {
//   const [count, setCount] = useState(1);
//   const [click, setClick] = useState(false);
//   const [select, setSelect] = useState(0);
//   const navigate = useNavigate();
//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   const decrementCount = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };
// const handleMessageSubmit = () => {
//     // Handle message submission logic here
//     navigate('/inbox?conversation=507ebjver884ehfdjeriv84'); 
//   };  

//   return (
//     <div className="bg-white">
//       {data ? (
//         <div className={`${styles.section} w-[90%] 800px:w-[80%]  `}>
//           <div className="w-full py-5">
//             <div className="block w-full 800px:flex ">
//               <div className="w-full 800px:w-[50%]  flex flex-col ">
//                 <img
//                   src={data.image_Url[select]?.url}
//                   alt=""
//                   className="w-full max-w-[400px] max-h-[500px] object-contain"
//                 />
//                 <div className="w-full flex  gap-2 mt-4">
//                   <div
//                     className={`cursor-pointer ${ select === 0 ? 'border' : 'null' }`} >
//                     <img
//                       src={data?.image_Url[0]?.url}
//                       alt=""
//                       className="w-[100px] h-[100px] object-cover"
//                     onClick={() => setSelect(0)}
//                     />   
//                   </div>
//                    <div
//                     className={`cursor-pointer ${ select === 1 ? 'border' : 'null' }`} >
//                     <img
//                       src={data?.image_Url[1]?.url}
//                       alt=""
//                       className="w-[100px] h-[100px] object-cover"
//                     onClick={() => setSelect(1)}
//                     />   
//                   </div>
//                 </div>
                

//               </div>
//               <div className="w-full 800px:w-[50%] pt-5 ">
//                 <h1 className={`${styles.productTitle}`}>
//                   {data.name}
//                 </h1>
//                 <p>{data.description}</p>
//                 <div className="flex pt-3">
//                   <h4 className={`${styles.productDiscountPrice}`}>
//                     {data.discount_price}$
//                   </h4>
//                   <h3 className={`${styles.price}`} >
//                     {data.price ? data.price + "$": null}
//                   </h3>
//                 </div>
//                 <div className="flex justify-between items-center mt-12 pr-3">
//                                  <div>
//                                    <button
//                                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                                      onClick={decrementCount}
//                                    >
//                                      -
//                                    </button>
//                                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
//                                      {count}
//                                    </span>
//                                    <button
//                                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                                      onClick={incrementCount}
//                                    >
//                                      +
//                                    </button>
//                                  </div>
//                                  <div>
//                                    {click ? (
//                                      <AiFillHeart
//                                        size={30}
//                                        className="cursor-pointer "
//                                        onClick={() => setClick(!click)}
//                                        color="red"
//                                        title="Remove from wishlist"
//                                      />
//                                    ) : (
//                                      <AiOutlineHeart
//                                        size={30}
//                                        className="cursor-pointer "
//                                        onClick={() => setClick(!click)}
//                                        color="#333"
//                                        title="Add to wishlist"
//                                      />
//                                    )}
//                                  </div>
//                                </div>

//                </div>
//             </div>
            
//           </div>
//         </div>
//       ) : null
//       }
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from 'react';
import styles from '../../styles/styles';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleMessageSubmit = () => {
    navigate('/inbox?conversation=507ebjver884ehfdjeriv84');
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%] `}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex gap-8">

              <div className="w-full 800px:w-[50%] flex flex-col">
                <img
                  src={data.image_Url[select]?.url}
                  alt=""
                  className="w-full max-w-[400px] max-h-[500px] object-contain"
                />
                <div className="w-full flex gap-2 mt-4">
                  {data.image_Url.map((img, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer ${select === index ? 'border' : ''}`}
                      onClick={() => setSelect(index)}
                    >
                      <img
                        src={img?.url}
                        alt=""
                        className="w-[100px] h-[100px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>

                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  {data.price && (
                    <h3 className={`${styles.price}`}>{data.price}$</h3>
                  )}
                </div>

                <div className="flex justify-between items-center mt-12 pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color="red"
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color="#333"
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                
                <div className={`${styles.button} mt-6 rounded h-11 flex items-center`}>
                  <span className='text-[#fff] flex items-center'>
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                
                <div className="flex items-center pt-8">
                  <img src={data.shop.shop_avatar} alt=""
                  className='w-[50px] h-[50px] rounded-full mr-2' />
                  <div className='pr-8'>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className='pb-3 text-[15px]'>
                      ({data.shop.ratings})Ratings
                    </h5>
                  </div>
                  <div className={`${styles.button} bg-[#6443d1] mt-4 !rounded  !h-11`}
                  onClick={handleMessageSubmit}>
                    <span className='text-white flex items-center'>
                      SendMessages <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};


const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-4 800px:px-10 py-4 rounded-md w-full">
      {/* Tabs */}
      <div className="w-full flex flex-wrap justify-between border-b pt-6 pb-3">
        {['Product Details', 'Product Reviews', 'Seller Information'].map((label, index) => (
          <div key={index} className="relative mb-2 800px:mb-0">
            <h5
              className="text-[#000] text-[16px] 800px:text-[20px] px-1 font-[600] cursor-pointer"
              onClick={() => setActive(index + 1)}
            >
              {label}
            </h5>
            {active === index + 1 && (
              <div className={`${styles.active_indicator}`} />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      {active === 1 && (
        <div className="pt-4">
          <p className="text-[16px] leading-7 whitespace-pre-line pb-4">
            product wertyuio sdfghj dberty rtyui cv ertyuikjhgfcvbn
          </p>
          <p className="text-[16px] leading-7 whitespace-pre-line pb-4">
            review etc......Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae eaque fuga expedita saepe atque, voluptatem illum quisquam consequatur, nam rerum est omnis, molestias cupiditate necessitatibus quis ab sed magni.
          </p>
          <p className="text-[16px] leading-7 whitespace-pre-line pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae eaque fuga expedita saepe atque, voluptatem illum quisquam consequatur, nam rerum est omnis, molestias cupiditate necessitatibus quis ab sed magni.
          </p>
        </div>
      )}

      {active === 2 && (
        <div className="w-full flex justify-center items-center min-h-[30vh]">
          <p className="text-gray-600 text-center text-[16px]">No reviews yet!</p>
        </div>
      )}

      {active === 3 && (
        <div className="w-full flex flex-col 800px:flex-row gap-6 p-4">
          {/* Seller Info */}
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shopAvatar.url}
                className="w-[50px] h-[50px] rounded-full object-cover"
                alt="Seller Avatar"
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="text-[15px] text-gray-700">
                  ({data.shop.ratings}) Ratings
                </h5>
              </div>
            </div>
            <p className="pt-4 text-[15px] text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam eius voluptate illum, laudantium culpa nihil nam placeat eaque accusantium molestias dolorem minus vel dolorum delectus iste soluta? Rem, assumenda.
            </p>
          </div>

          {/* Seller Stats */}
          <div className="w-full 800px:w-[50%] flex flex-col justify-start mt-2 800px:mt-0">
            <h5 className="font-[600] mb-1">
              Joined on: <span className="font-[500]">21 July, 2025</span>
            </h5>
            <h5 className="font-[600] mb-1">
              Total Products: <span className="font-[500]">1,234</span>
            </h5>
            <h5 className="font-[600] mb-2">
              Total Reviews: <span className="font-[500]">566</span>
            </h5>
            <Link to="/" className="mt-3">
              <div className={`${styles.button} !rounded-[4px] !h-[39.5px]`}>
                <h4 className="text-white text-[15px]">Visit Shop</h4>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};




export default ProductDetails;