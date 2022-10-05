import React from 'react';
import './CartItem.css';
import { Card,Image } from 'semantic-ui-react'
import { Button } from '@mui/material';
import { FaAd, FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {increase,decrease,removeItem} from '../../../app/features/cartSlice';

function CartItem({name,price,quantity,image, id}) {

  const dispatch = useDispatch();
  return (
    <div className='CartItem'>

<Card>
    <Image  src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        <span className='date'>{name}</span>
      </Card.Meta>
      <Card.Description >
        ksh {price}
      </Card.Description>
      <Card.Description className='cart' >
      
      <Button style={{color:'sandybrown'}} onClick={()=>{dispatch(increase({id}))}}>+</Button >
    {quantity}
    <Button style={{color:'sandybrown'}}    onClick={()=>{
        if(quantity===1){
            dispatch(removeItem(id))
            return;
        }
       dispatch(decrease({id}))}
    }>-</Button> 

      </Card.Description>
      <Card.Description className='remove'>
      <Button style={{color:'sandybrown'}}   onClick={()=>{dispatch(removeItem(id))}}>remove</Button> 
       </Card.Description>
    </Card.Content>
  </Card>
    </div>
  )
}

export default CartItem;