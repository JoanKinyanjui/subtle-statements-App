import React from 'react'
import Container2 from '../Container2';
import Topbar from '../Topbar/Topbar';
import './Single.css';
import SinglePost from './SinglePost';

function Single() {
  return (<>
  <Topbar title='Back' path='/BlogLayout' />
  <div className='Main-Single'>
    
     
    <div className='Single'>
       <SinglePost /> 
    </div>
    <div className='single-container2'>
        <Container2 />
    </div>
   
    </div>
    </>
  )
}

export default Single;