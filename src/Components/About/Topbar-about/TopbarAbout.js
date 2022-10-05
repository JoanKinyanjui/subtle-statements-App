import React from 'react';
import './TopbarAbout.css'
import {FaUser} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa'
import {FaWeightHanging} from 'react-icons/fa'

function TopbarAbout() {
  return (
    <div className='Topbar-about1'>
      <div className='Topbar-center-about'>
 
        
        <ul className='ul'>
            <li><FaUser /></li>
            <li><FaHeart /></li>
            <li><FaWeightHanging /></li>
            
        </ul>
       
        </div>
    </div>
  
  )
}

export default TopbarAbout;