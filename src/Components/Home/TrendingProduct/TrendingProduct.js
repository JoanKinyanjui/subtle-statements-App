import React from 'react';
import './TrendingProduct.css';
import {Grid} from '@mui/material'

function TrendingProduct() {
  return (
    <div className='TrendingProduct-title'>
      <p className='trending'>TRENDING PRODUCTS</p>
<div className='TrendingProduct'>
<div className='Trending-Image-div'>
  <img className='Trending-Image' src='/images/jewellery4.jpg'/>
  <p>Pretty necklace</p>
  <p>Ksh 400</p>
  </div>
<div className='Trending-Image-div'><img className='Trending-Image' src='/images/jewellery20.jpg'/>
<p>pretty earings</p>
<p>Ksh 400</p>
</div>
<div className='Trending-Image-div'><img className='Trending-Image' src='/images/jewelley2.jpg'/>
<p>pretty diamonds</p>
<p>Ksh 400</p>
</div>

</div>
    </div>
  )
}

export default TrendingProduct