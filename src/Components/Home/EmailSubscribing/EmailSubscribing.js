import React from 'react';
import { Button } from 'react-bootstrap';
import './EmailSubscribing.css';

function EmailSubscribing() {
  return (
    <div className='EmailSubscribing'>


      
      <h5>LATEST FROM -JS</h5>
      <p>Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</p>

      <div>
        <form>
          <input className='Subscribing-Input' type='text' placeholder='email address....'/>
          <button className='Submit'>Submit</button>
        </form>
      </div>
     
    </div>

  )
}

export default EmailSubscribing