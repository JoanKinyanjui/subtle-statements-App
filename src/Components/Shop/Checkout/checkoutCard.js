import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import './Checkout.css';
import {Button} from  '@mui/material';
import { FaLocationArrow } from 'react-icons/fa';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import CheckoutSummary from '../CheckoutSummary/checkoutSummary';
import { clearCart } from '../../../app/features/cartSlice';
import { useDispatch } from 'react-redux';

function CheckoutCard() {
  const dispatch =useDispatch();
  const { total ,cartItems} = useSelector((store) => store.cart);
  const taxPrice =total *0.14;
  const totalPrice =total + taxPrice;
  const roundedTotal = totalPrice.toFixed(0)

  
  const[phoneNo,setPhoneNo]= useState('');
  const amount= roundedTotal;
  
  async function onHandlePayment(e){
          e.preventDefault();
          setPhoneNo('');
          dispatch(clearCart())
  const usersItems =[];
  const orders = usersItems.concat(cartItems,{'amount':amount,'phoneNo':phoneNo});
  console.log(orders)
  //post payment amount and number...
          const response =await fetch('http://localhost:3000/stk',{
           method:'POST',
           headers:{
             'Content-Type':'application/json'
           },
           body:JSON.stringify({
             phoneNo,
             amount
           }),
          })
    }
  


  return (
    <div className='checkoutCard'>
    <Card className='CheckoutCard'>
      <Card.Body>
        <Card.Title>PICKUP LOCATION <FaLocationArrow style={{fontSize:'12px' }} /> </Card.Title>
        <Card.Text style={{fontFamily:'System' , fontSize:'12px'}}>
          Pick Up Go Shop <br />
          Along Moi Avenue <br />
          Opposite Bazzarre
        </Card.Text>
        <Card.Title>TOTAL : Ksh {totalPrice.toFixed(0)}</Card.Title>
        <Card.Text style={{fontFamily:'System' , fontSize:'12px'}}>
          PAY VIA MPESA <br /><br />
          <form onSubmit={onHandlePayment}>
            <input placeholder='07...' name='phone' type='tel' id='phoneNo' value={phoneNo}  onChange={(e)=>setPhoneNo(e.target.value)}/>
            <br />
            <br/>
           <input  readOnly  placeholder='amount...' type='number' name='integer' value={amount} />
            <br /><br />
            <input  type='submit' className='checkoutButton' value='Confirm Payment'/>
                     </form>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
  )
}

export default CheckoutCard;



    