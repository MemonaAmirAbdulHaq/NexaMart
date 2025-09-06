
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiPlus, HiOutlineMinus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';

const Cart = ({ setOpenCart }) => {
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

  const total = cartData.reduce((acc, item, idx) => acc + item.price * quantities[idx], 0);

  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-4">
            <RxCross1 size={30} className="cursor-pointer" onClick={() => setOpenCart(false)} />
          </div>
          {/* items length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
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
        <div className='px-5 mb-3'>
          {/* checkout btn */}
          <Link to='/checkout'>
            <div className='h-[45px] flex bg-[#d02222] items-center justify-center rounded-[5px]'>
              <h1 className='text-[#fff] text-[18px] font-[600]'>Checkout Now (USD${total.toFixed(2)})</h1>
            </div>
          </Link>
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
        <div className='flex flex-col items-center justify-center mr-2 gap-1'>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={20} color="#fff" />
          </div>
          <span>{value}</span>
          <div
            className='bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer'
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          className='w-[80px] h-[80px] object-contain ml-2'
          alt=""
        />
        <div className='pl-[5px]'>
          <h1>{data.name}</h1>
          <h4 className='font-[400] text-[15px] text-[#00000082]'>${data.price} * {value}</h4>
          <h4 className='font-[600] text-[17px] text-[#d02222] pt-[3px] font-Roboto'>
            US${totalPrice.toFixed(2)}
          </h4>
        </div>
        <RxCross1 className='cursor-pointer ml-auto' />
      </div>
    </div>
  );
};

export default Cart;
