
// import React from 'react'
// import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
// import WithdrawMoney from "../../components/Shop/WithdrawMoney";
// import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';

// const ShopWithDrawMoneyPage = () => {
//   return (
//     <div>
//       <DashboardHeader />
//       <div className="flex flex-col 800px:flex-row items-start justify-between w-full">
//         {/* Sidebar */}
//         <div className="w-full 800px:w-[330px] mb-5 800px:mb-0">
//           <DashboardSideBar active={7} />
//         </div>

//         {/* Main content */}
//         <div className="w-full">
//           <WithdrawMoney />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ShopWithDrawMoneyPage;
import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import WithdrawMoney from "../../components/Shop/WithdrawMoney";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';

const ShopWithDrawMoneyPage = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex w-full min-h-screen">
        
        {/* Sidebar - active set to 7 for Withdraw Money */}
        <DashboardSideBar active={7} />

        {/* Main content - Wrapped in flex-1 to fill remaining space */}
        <div className="flex-1 p-3 800px:p-6 bg-[#f5f5f5] flex justify-center">
           <div className="w-full bg-white rounded-md shadow-sm p-4">
              <WithdrawMoney />
           </div>
        </div>

      </div>
    </div>
  )
}

export default ShopWithDrawMoneyPage;