
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 Pro Max 256GB ssd and",
      description: "test",
      price: 1200,
    },
    {
      name: "Iphone 14 Pro Max 256GB ssd and",
      description: "test",
      price: 1800,
    },
    {
      name: "Iphone 14 Pro Max 256GB ssd and",
      description: "test",
      price: 11200,
    },
  ];

  const [quantities, setQuantities] = useState(cartData.map(() => 1));

  const handleQuantityChange = (index, newQty) => {
    const updated = [...quantities];
    updated[index] = newQty;
    setQuantities(updated);
  };

 // const total = cartData.reduce((acc, item, idx) => acc + item.price * quantities[idx], 0);

  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-4">
            <RxCross1 size={30} className="cursor-pointer" onClick={() => setOpenWishlist(false)} />
          </div>
          {/* items length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className='pl-2 text-[20px] font-[500]'>
              {cartData.length} items
            </h5>
          </div>
          {/* cart items */}
          <br />
          <div className='w-full border-t'>
            {
              cartData.map((item, index) => (
                <CartSingle
                  key={index}
                  data={item}
                  value={quantities[index]}
                  setValue={(val) => handleQuantityChange(index, val)}
                />
              ))
            }
          </div>
        </div>
       
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
    const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className='cursor-pointer'/>
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          className='w-[80px] h-[80px] object-contain ml-2'
          alt=""
        />

        
        <div className='pl-[5px]'>
          <h1>{data.name}</h1>
          
          <h4 className='font-[600] text-[17px] text-[#d02222] pt-[3px] font-Roboto'>
            US${totalPrice.toFixed(2)}
          </h4>
        </div>
        <div>
            <BsCartPlus size={20} className='cursor-pointer' title='Add to Cart' />
        </div>
       
      </div>
    </div>
  );
};

export default Wishlist;

