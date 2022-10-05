import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import {useDispatch ,useSelector} from 'react-redux';
import { clearCart } from '../../../app/features/cartSlice';
 import Total from '../Total/Total';
import Topbar from '../../Home/TopBar/Topbar';


function Cart() {
  const dispatch =useDispatch();
  const {cartItems} = useSelector((store)=>
                       store.cart
                       )
  if(cartItems === 0){
    return(
      <>
      <Topbar />
      <div className='stick'> <br/>
      <Link to="/shop"><button className='back'>Back</button></Link></div>
     <div className='Cart-big'>
    
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
      <hr />
      <i>The cart Is Empty!!!</i>
      </div>
      </>
    )
  }else{

    return (
      <>
      <Topbar />
      <div className='stick'> <br/>
      <Link to="/shop"><button className='back'>Back</button></Link></div>
     <div className='Cart-big'>
    
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
      <Total  cartItems={cartItems}/>
      <hr />
      <div className='cartDiv'> 
        {cartItems.map((item)=>(
                <CartItem className='cartItem' key={item.id} {...item} />
        ))}
   
    </div>
    <button style={{backgroundColor:'navajowhite' ,marginTop:'1rem',marginLeft:'25%',borderRadius:'5%',border:'none'}} onClick={()=>{
            dispatch(clearCart())}}>
                Empty Cart
            </button>
      <div className='Cart'>
   
      </div>
      </div>
      </>
    
   )
  }

  
 }

export default Cart;