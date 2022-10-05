import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return(
      <div className='Services-all'>
      <div className='Services'>
          <p className='test' style={{color:'black'}}>TESTIMONIALS</p>
      </div>
      <div className='Services-display'>
<div className='display' >
   
    <h5>"Amazing piece of History"</h5>
    <p>A good review includes enough detail to give others a feel for what happened. Explain which factors contributed
</p>
<img className='testimony-img' src='/images/testimony.jpg'/>
</div>

<div className='display' >
    
    <h5>"Stunning Design"</h5>
    <p>A good review includes enough detail to give others a feel for what happened. Explain which factors contributed
</p>
<img className='testimony-img' src='/images/testimony.jpg'/>
</div>


<div className='display' >

    <h5>"Best Piece"</h5>
    <p>A good review includes enough detail to give others a feel for what happened. Explain which factors contributed</p>
    <img className='testimony-img' src='/images/testimony.jpg'/>
</div>
</div>
      </div>
  )
}

export default Testimonials;
