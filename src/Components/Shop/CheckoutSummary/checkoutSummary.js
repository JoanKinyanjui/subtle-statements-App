import React,{useState,useEffect} from 'react';
import '../CheckoutSummary/CheckoutSummary.css';
import {Button} from  '@mui/material';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


function CheckoutSummary() {
    const { total } = useSelector((store) => store.cart);
    const taxPrice =total *0.14;
    const totalPrice =total + taxPrice;
    const roundedTotal = totalPrice.toFixed(0)

//HANDLING INPUT ...
const[phoneNo,setPhoneNo]= useState('0790236990');
const[amount,setAmount]= useState("");

async function onHandlePayment(e){
        e.preventDefault();
        setPhoneNo('');
        setAmount('');

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
    <div className='CheckoutSummary'>
        <h4  style={{ fontSize:'18px',color:'sandybrown' , marginTop:'5rem',marginBottom:'2rem'}}>CHECKOUT SUMMARY</h4> 
        <Card className='CheckoutCard'>
      <Card.Body>
        <Card.Title>TOTAL : Ksh {totalPrice.toFixed(0)}</Card.Title>
        <Card.Text style={{fontFamily:'System' , fontSize:'12px'}}>
          PAY VIA MPESA <br /><br />
          <form onSubmit={onHandlePayment}>
            <input placeholder='07...' name='phone' type='tel' id='phoneNo' value={phoneNo}  onChange={(e)=>setPhoneNo(e.target.value)}/>
            <br />
            <br/>
           <input    placeholder='amount...' type='number' name='integer' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <br /><br />
            <input  type='submit' className='checkoutButton' value='Confirm Payment'/>
                     </form>
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Link to="/checkout"><button className='back'>Back</button></Link>
    </div>
  )
}

export default CheckoutSummary;