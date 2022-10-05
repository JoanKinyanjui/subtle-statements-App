import React from 'react';
import { FaGripfire, FaRegSmileWink, FaWallet } from 'react-icons/fa';
import './Services.css';

function Services() {
  return(
      <div>
      <div className='Services'>
          <div className='offer'> <h3>WE OFFER </h3></div>

<p><i style={{color:'sandybrown'}}>- To meet your needs -</i></p>
<p>We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.
Our goal is to provide our customers with the friendliest, most convenient hand car wash experience possible.
</p>
      </div>
      <div className='Services-display'>
<div className='display' >
    <p><FaGripfire  style={{fontSize:'larger', color:'sandybrown'}} /></p>
    <h4>Classy pieces</h4>
    <p>We use the most modern and up-to-date water reclamation modules as a part of our eco-friendly wash systems.
</p>
</div>

<div className='display' >
    <p><FaRegSmileWink style={{fontSize:'larger', color:'sandybrown'}}/></p>
    <h4>A Variety To Choose From</h4>
    <p>Our company was founded back in 2020by a team of experts with more then 10 years of professional car wash experience.
</p>
</div>


<div className='display' >
    <p><FaWallet style={{ color:'sandybrown'}}/></p>
    <h4>Safe Payments</h4>
    <p>We Offer most convenient means of payment. Either Cash /M-PESA</p>
</div>
</div>
      </div>
  )
}

export default Services;
