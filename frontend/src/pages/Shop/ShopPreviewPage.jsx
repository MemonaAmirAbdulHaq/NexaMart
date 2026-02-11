
import React from 'react';
import styles from '../../styles/styles';
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopPreviewPage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5] min-h-screen`}>
      <div className="w-full flex flex-col 800px:flex-row py-10 justify-between">
        
        {/* Sidebar - Shop Info */}
        <div className="w-full 800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-auto 800px:h-[90vh] 800px:sticky top-10 left-0 z-10 mb-5 800px:mb-0 p-4">
          <ShopInfo isOwner={false} />
        </div>
        
        {/* Main content - Shop Profile Data */}
        <div className="w-full 800px:w-[72%] rounded-[4px]">
          <ShopProfileData isOwner={false} />
        </div>
        
      </div>
    </div>
  )
}

export default ShopPreviewPage;