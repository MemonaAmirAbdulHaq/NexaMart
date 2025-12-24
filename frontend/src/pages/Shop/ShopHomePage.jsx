

// import React from "react";
// import styles from "../../styles/styles";

// // Assuming these components exist
// import ShopInfo from "../../components/Shop/ShopInfo";
// import ShopProfileData from "../../components/Shop/ShopProfileData";

// const ShopHomePage = () => {
//   return (
//     <div className={`${styles.section} bg-[#f5f5f5]`}>
//       <div className="w-full flex py-10 justify-between">
//         {/* Sidebar */}
//         <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
//           <ShopInfo isOwner={true} />
//         </div>

//         {/* Main Content */}
//         <div className="w-[72%] rounded-[4px]">
//           <ShopProfileData isOwner={true} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopHomePage;
import React from "react";
import styles from "../../styles/styles";
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5] min-h-screen`}>
      <div className="w-full flex py-10 justify-between flex-col 800px:flex-row">
        
        {/* Sidebar - Shop Info */}
        <div className="w-full 800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-auto 800px:h-[90vh] 800px:sticky top-10 left-0 z-10 p-3">
          <ShopInfo isOwner={true} />
        </div>

        {/* Main Content - Shop Profile Data */}
        <div className="w-full 800px:w-[72%] mt-5 800px:mt-0 rounded-[4px]">
          <ShopProfileData isOwner={true} />
        </div>
        
      </div>
    </div>
  );
};

export default ShopHomePage;