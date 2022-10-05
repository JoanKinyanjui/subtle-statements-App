import React from 'react';
import Topbar from '../Topbar/Topbar';
import './Write.css';

function Write() {
  return (
    
  <div>
    <div className='write'>
        <img  src='/images/me.jpg' className='writeImage'/> 
    <form className='writeForm'>
        <div className='writeFormGroup'>
            <label htmlFor='fileInput' > <b>+</b></label>
            <input type='file' id='fileInput' style={{display:'none'}} />
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className='writeFormGroup'>
        <textarea type='text' placeholder='Tell your story' className='writeInput writeText' autoFocus={true}>
        </textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
    </form>
    </div>
   </div>
  )
}

export default Write