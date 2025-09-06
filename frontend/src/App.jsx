import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,SignupPage,ActivationPage,HomePage,ProductsPage,BestSellingPage,
   EventsPage,FAQPage,CheckoutPage ,PaymentPage,
   OrderSuccessPage,
ProductDetailsPage,ProfilePage} from './Routes.js'
import { ToastContainer} from 'react-toastify';

import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js';
import { useSelector } from 'react-redux';
const App = () => {
const{loading}=useSelector((state) => state.user);

  useEffect(()=>{
  
     Store.dispatch(loadUser());
  },[])
  return (
   <>
   {
      loading? null:(< BrowserRouter>
   <Routes>
       <Route path='/' element={<HomePage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/sign-up' element={<SignupPage/>}></Route>
    <Route path='/activation/:activation_token' element={<ActivationPage/>}></Route>
   <Route path="/products" element={<ProductsPage/>}/>
   <Route path="/product/:name" element={<ProductDetailsPage/>}/>

   <Route path="/best-selling" element={<BestSellingPage/>}/>
   <Route path="/events" element={<EventsPage/>}/>
   <Route path="/faq" element={<FAQPage/>}/>
   <Route path="/checkout" element={<CheckoutPage/>}/>
   <Route path="/payment" element={<PaymentPage/>}/>
   <Route path="/order/success/:id" element={<OrderSuccessPage/>}/>
   <Route path="/profile" element={<ProfilePage/>}/>




   
   </Routes>
   <ToastContainer
  position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

/>
   </BrowserRouter>
         
      )
   }
   </>
  )
}

export default App
