import React from 'react'
import { Container } from 'react-bootstrap';
import './ImageAndCaption.css';

function ImageAndCaptions() {
  return (
    <div className='ImageAndCaptions'>

<Container className='ImageAndCaptions-container'>

  <img className='Actual-Image' src='/images/face1.jpg'/>
  <div className='Caption'>
  Brighten up your look with vibrant gemstone jewelry.
  <br/><br />
  <button className='Submit'>Shop Now</button>
  </div>

</Container>
<Container className='ImageAndCaptions-container'>
  <div className='Caption'>
  Brighten up your look with vibrant gemstone jewelry.
  <br/><br />
  <button className='Submit'>Shop Now</button>
  </div>

  <img className='Actual-Image' src='/images/jewellery19.jpg'/>

</Container>
<Container className='ImageAndCaptions-container'>

<img className='Actual-Image' src='/images/jewellery22.jpg'/>

<div className='Caption'>
  Brighten up your look with vibrant gemstone jewelry.
  <br/><br />
  <button className='Submit'>Shop Now</button>
  </div>

</Container>
    </div>
  )
}

export default ImageAndCaptions