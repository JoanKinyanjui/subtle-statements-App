import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className='another1'>

      <div className='another'>
           
        </div>
        <div className='Footer'>
        <div className='column1'>
            
            <ul className='column2'>
                <li className='column3'><FaFacebook /></li>
                <li className='column3'><FaInstagram /></li>
                <li className='column3'><FaTwitter /></li>
                <li className='column3'><FaTiktok /></li>
            </ul>
        </div>
        <div className='column1'>
            
            <ul className='column2'>
                <li className='column3'>Services</li>
                <li className='column3'>Terms And Conditions</li>
                <li className='column3'>Privacy Policy</li>
                <li className='column3'>Help Centre</li>
            </ul>
        </div>
            <div className='column1'>
               
                <ul className='column2'>
                <li className='column3'>CONTACT US</li>
                    <li className='column3'>(+254) 727 688 225</li>
                    <li className='column3'>jsapp@gmail.com</li>
                    <li className='column3'>jscareers@gmail.com</li>
                    <li className='column3'>Online Based Shop </li>
                    <li className='column3'>Mon-Fri 7:00am -8:00pm</li>
                </ul>
            </div>
            <div className='column1'>
               
               <ul className='column2'>
                   <li className='column3'>CATALOG</li>
                   <li className='column3'>earrings</li>
                   <li className='column3'>necklaces </li>
                   <li className='column3'>bracelets</li>
                   <li className='column3'>rings</li>
                   <li className='column3'>jewellery box</li>
               </ul>
           </div>

   
        </div>
            
        <div className='hr'>
 &copy;{new Date().getFullYear()}|Me2UCourier|All rights preserved|Terms of Service|Privacy
            </div>
        
    </div>
  )
}

export default Footer