// import React from 'react'
// import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
// import WithdrawMoney from "../../components/Shop/WithdrawMoney";
// import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';

// const ShopWithDrawMoneyPage = () => {
//   return (
//     <div>
//     <DashboardHeader />
//     <div className="flex items-start justify-between w-full">
//       <div className="w-[80px] 800px:w-[330px]">
//         <DashboardSideBar active={7} />
//       </div>
//        <WithdrawMoney />
//     </div>
//   </div>
//   )
// }

// export default ShopWithDrawMoneyPage
import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import WithdrawMoney from "../../components/Shop/WithdrawMoney";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';

const ShopWithDrawMoneyPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col 800px:flex-row items-start justify-between w-full">
        {/* Sidebar */}
        <div className="w-full 800px:w-[330px] mb-5 800px:mb-0">
          <DashboardSideBar active={7} />
        </div>

        {/* Main content */}
        <div className="w-full">
          <WithdrawMoney />
        </div>
      </div>
    </div>
  )
}

export default ShopWithDrawMoneyPage;
