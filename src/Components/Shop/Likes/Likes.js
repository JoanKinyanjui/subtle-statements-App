import React ,{useState} from 'react';
import Nav from '../../Home/Nav/Nav';
import {FaHeart} from 'react-icons/fa';
import { Card, Icon, Image } from 'semantic-ui-react'
import './Likes.css';
import Topbar from '../../Home/TopBar/Topbar';
import { useDispatch,useSelector} from 'react-redux';
import {unlike} from '../../../app/features/likedSlice';
import { addToCart } from '../../../app/features/cartSlice';
import { clear} from '../../../app/features/likedSlice';

function Likes() {
  const {likedItems,likedQuantity} = useSelector((store)=>store.likes);
  // const {style,setStyle}= useState('unliked')
  const dispatch =useDispatch();

  const handleAddToCartt =(product)=>{
        dispatch(addToCart(product))
  }

  const handleUnLikeClick=(product)=>{
    dispatch(unlike(product))
    console.log('I just unliked');
  }


  if(likedItems.length <1){
    return(
      <>
      <Topbar />
      <Nav />
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>Your have 0 Favourites!! <FaHeart /></h5>
      <div className='Likes'></div>
      </>
    )
  }else{
    return (
      <div style={{textAlign:'center'}}>
        <Topbar />
        <Nav />
        <h4 style={{color:'sandybrown',fontFamily:'System'}}>Your {likedQuantity} Favourites!! <FaHeart /></h4>
        <br />
        <div className='Likes'>
     
      {likedItems.map((product)=>(
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
           <button  className='liked'  onClick={()=>handleUnLikeClick(product)}><FaHeart /></button>
           <button  className='unliked' onClick={()=>handleAddToCartt(product)}> <Icon  name='cart' /></button>
            
          </a>
          </Card.Description>
        </Card.Content>
       </Card>

))}
    
        </div>
  
        <button style={{backgroundColor:'navajowhite' ,marginTop:'1rem',marginLeft:'25%',borderRadius:'5%',border:'none'}} onClick={()=>{
            dispatch(clear())}}>
                Empty Cart
            </button>
    </div>
    )
  }
  
}

export default Likes