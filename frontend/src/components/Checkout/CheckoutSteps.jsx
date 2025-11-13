// import React from 'react'
// import styles from '../../styles/styles'

// const CheckoutSteps = ({active}) => {
//     console.log(active);
//   return (
//     <div className='w-full flex justify-center'>
//         <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap">
//                <div className={`${styles.noramlFlex}`}>
//                 <div className={`${styles.cart_button}`}>
//                        <span className={`${styles.cart_button_text}`}>1.Shipping</span>
//                 </div>
//                 <div className={`${
//                     active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
//                     : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
//                 }`} />
//                </div>

//                <div className={`${styles.noramlFlex}`}>
//                 <div className={`${active > 1 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#FDE1E6]`}`}>
//                     <span className={`${active > 1 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#f63b60]`}`}>
//                         2.Payment
//                     </span>
//                 </div>
//                </div>

//                <div className={`${styles.noramlFlex}`}>
//                <div className={`${
//                     active > 3 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
//                     : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
//                 }`} />
//                 <div className={`${active > 2 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#FDE1E6]`}`}>
//                     <span className={`${active > 2 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#f63b60]`}`}>
//                         3.Success
//                     </span>
//                 </div>
//                </div>
//         </div>
//     </div>
//   )
// }

// export default CheckoutSteps
import React from "react";
import styles from "../../styles/styles";

const CheckoutSteps = ({ active }) => {
  return (
    <div className="w-full flex justify-center my-6 px-2">
      <div className="w-full max-w-[800px] flex items-center flex-wrap justify-between gap-4">
        {/* Step 1 */}
        <div className="flex items-center flex-1 min-w-[80px]">
          <div
            className={`${styles.cart_button} ${
              active >= 1 ? "" : "!bg-[#FDE1E6]"
            }`}
          >
            <span
              className={`${styles.cart_button_text} ${
                active >= 1 ? "" : "!text-[#f63b60]"
              }`}
            >
              1. Shipping
            </span>
          </div>
          <div
            className={`flex-1 h-[4px] mx-2 rounded ${
              active > 1 ? "bg-[#f63b60]" : "bg-[#FDE1E6]"
            }`}
          />
        </div>

        {/* Step 2 */}
        <div className="flex items-center flex-1 min-w-[80px]">
          <div
            className={`${styles.cart_button} ${
              active > 1 ? "" : "!bg-[#FDE1E6]"
            }`}
          >
            <span
              className={`${styles.cart_button_text} ${
                active > 1 ? "" : "!text-[#f63b60]"
              }`}
            >
              2. Payment
            </span>
          </div>
          <div
            className={`flex-1 h-[4px] mx-2 rounded ${
              active > 2 ? "bg-[#f63b60]" : "bg-[#FDE1E6]"
            }`}
          />
        </div>

        {/* Step 3 */}
        <div className="flex items-center flex-1 min-w-[80px]">
          <div
            className={`${styles.cart_button} ${
              active > 2 ? "" : "!bg-[#FDE1E6]"
            }`}
          >
            <span
              className={`${styles.cart_button_text} ${
                active > 2 ? "" : "!text-[#f63b60]"
              }`}
            >
              3. Success
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
