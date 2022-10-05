import React, {useState,useEffect} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './CardObject.css';
import {FaHeart} from 'react-icons/fa';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import products from '../../../app/features/products';
import { addToCart } from '../../../app/features/cartSlice';
import{like} from '../../../app/features/likedSlice';


function CardObject() {
  // const products = useSelector(state => state.products)
  // const [products,setProducts]=useState([]);
  const dispatch =useDispatch();

  //FETCHING DATA
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/products')
  //   .then((response)=>{
  //       console.log(response.data)
  //       setProducts(response.data)})
    
  //   .catch(err=>console.log(err))
  // },[])

  const handleAddToCartt =(product)=>{
  dispatch(addToCart(product))
  }
  const handleLikeClick=(product)=>{
    dispatch(like(product))
    console.log('I just liked');
  }

return (
    <div className='CardObject'> 
{products.map((product)=>(
          <Card key={product.id} className='Card'>
        <Image  src={product.image} wrapped ui={false} />
        <Card.Content>
          <Card.Meta>
            <span className='date'>{product.name}</span>
          </Card.Meta>
          <Card.Description >
           ksh{product.price}
          </Card.Description>
          <Card.Description className='cart' >
          <a >
           <button  className='cart-sub'  onClick={()=>handleLikeClick(product)}><FaHeart /></button>
           <button  className='cart-sub' onClick={()=>handleAddToCartt(product)}> <Icon  name='cart' /></button>
            
          </a>
          </Card.Description>
        </Card.Content>
       </Card>

))}
    </div>
  )
}

export default CardObject;