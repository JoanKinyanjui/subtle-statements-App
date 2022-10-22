// import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import BlogLayout from './Components/Blog/BlogLayout';
import Single from './Components/Blog/SinglePost/Single';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Shop/Cart/Cart';
import Likes from './Components/Shop/Likes/Likes';
import Payment from './Components/Shop/Payment/Payment';
import Checkout from './Components/Shop/Checkout/Checkout';
import React,{useEffect } from 'react';
import Account from './Components/Account/Account';
import SignUp from './Components/Account/SignUp';
import Login from './Components/Account/Login';
import{useDispatch,useSelector} from 'react-redux';
import {calculateTotals} from './app/features/cartSlice';
import CheckoutSummary from './Components/Shop/CheckoutSummary/checkoutSummary';

function App() {
const {cartItems} = useSelector((store)=>store.cart)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(calculateTotals());
}, [cartItems]);

  return (
    <>
     <Router>
<div className='App'>

  <Routes>
    <Route exact path='/account'  element={<Account />}/>


    <Route exact path='/login'  element={<Login />}/>


    <Route exact path='/'  element={<Home />}/>
   


    <Route exact path='/signup'  element={<SignUp />}/>


    <Route exact path='/about'  element={<About />}/>
   

   <Route exact path='/shop'  element={<Shop />}/> 

        
   
   <Route exact path='/cart'  element={<Cart />}/> 


   <Route exact path='/likes'  element={<Likes />}/>
   

   <Route exact path='/payment'  element={<Payment />}/>


   <Route exact path='/checkout'  element={<Checkout />}/>


   <Route exact path='/checkoutSummary'  element={<CheckoutSummary />}/>

      
    
    {/* <Route exact path='/blog'  element={<BlogLayout />}/> */}
    {/* <Route exact path='/Single'  element={<Single />}/>  */}
   
  </Routes>

</div>
</Router>


    </>
  
  );
}

export default App;
