import React from 'react';
import './StartedWithLove.css';
import {Link }from 'react-router-dom';
import {Grid} from '@mui/material'

function StartedWithLove() {
  return (
    <div className='started'>

<Grid container spacing={2}>
  <Grid item xs={7}>
  <div className='love'>
        <h6>It Started with Love</h6>
        <p>Behind our 15-year success is our panel of expert jewellers who have been scouring the entire globe in pursuit of the best and most stunning jewellery that can be offered at affordable price for you.
Visit our online catalogue and shop for the finest earrings, rings, bracelets, watches, silver, and the most luxurious gemstones.
</p>
<Link  to='/about '><button className='About-us-1'>About Us</button></Link>
    </div>
  </Grid>
  <Grid item xs={5}>
  <div className='love'>
        <img  className='love-img' src='/images/jewellery17.jpg'/>
    </div>
    
  </Grid>
  
</Grid>

</div>
  )
}

export default StartedWithLove