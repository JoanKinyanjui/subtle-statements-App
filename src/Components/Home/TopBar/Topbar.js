import React from 'react';
import './Topbar.css';
import {FaSearch} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa'
import {FaWeightHanging} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {Badge} from '@mui/material';
import {useSelector} from 'react-redux';


function Topbar( ) {
  const { quantity,cartItems } = useSelector((store) => store.cart);
  const { likedQuantity } = useSelector((store) => store.likes);
  console.log(cartItems.length)

  return (
    <div className='Topbar'>
      <div className='Topbar-center'>
 
  <h3 className='js-name'><i>Subtle Statements</i></h3>
  <br />
        
        <ul className='ul'>
            <li><Link to='/likes' className='specific'><Badge  badgeContent={likedQuantity} color='primary' ><FaHeart /></Badge></Link></li>
            <li><Link to='/cart' className='specific'><Badge  badgeContent={cartItems.length} color='primary' ><FaWeightHanging /></Badge></Link></li>
            {/* <li><Link to='/' className='specific'><FaUser /></Link></li> */}
        </ul>
        <form className='form-search'>
          <FaSearch style={{color:'sandybrown',fontSize:'10px'}} />
            <input className='Topbar-search' name='search' placeholder='search....'/>
        </form>
        </div>
    </div>
  )
}

export default Topbar