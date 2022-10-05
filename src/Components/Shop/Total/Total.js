import React from 'react';
import './Total.css';
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Total() {
  const { total } = useSelector((store) => store.cart);
  const taxPrice =total *0.14;
  const totalPrice =total + taxPrice;
  
  return (
    <div className='Total'> 
       <Card className='CardTotal'>
    <Card.Content>
      <Card.Meta>
        <span className='date'>CART SUMMARY</span>
      </Card.Meta>
      <Card.Description >
        Items Price : {total.toFixed(2)}<br/>
        Tax Price : {taxPrice.toFixed(2)}<br />
        <b>SubTotal</b>: Ksh {totalPrice.toFixed(2)}<br />
         </Card.Description>
      
      
      <Link to='/checkout' className='specific-total'>
      <Card.Description className='checkout'>
        <a>Checkout</a>
      </Card.Description>
      </Link>
     
    </Card.Content>
  </Card>


    </div>

  )
}

export default Total