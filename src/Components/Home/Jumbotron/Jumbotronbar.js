import React from 'react'
import './Jumbotronbar.css';
import {FaRetweet} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa';


function Jumbotronbar() {
  return (
    <div className='Jumbotronbar'>
    <ul>
        <li> <FaRetweet /> EASY EXCHANGE RETURNS</li>
        <li><FaClock /> 24/7 FREE SUPPORT</li>
    </ul>
    </div>
  )
}

export default Jumbotronbar