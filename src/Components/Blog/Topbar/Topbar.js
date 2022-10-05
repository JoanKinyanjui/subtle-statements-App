import React from 'react';
import { FaEnvelope, FaGithub, FaTwitter, FaInstagram,FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Topbar.css';


function Topbar(props) {
  const navigate = useNavigate();


  return (
    <div className='Topbar-about'> 
  
    <div className='another-nav'>
     <ul className='another-nav-list'>
      
       <li className="socials-10 another"  ><a href="#"><FaGithub /></a></li> 
       <li className="socials-10 another"  ><a href="#"> <FaInstagram /></a></li>
       <li className="socials-10 another" ><a href="#"><FaLinkedin /></a></li>
       <li className="socials-10 another"  ><a href="#"><FaTwitter/></a></li>

     </ul>

    </div>
    <div className='goBack'>
        <button onClick={() => navigate(-1)} className='goback-button'> {props.title}</button>
    </div>
    </div>
  )
}

export default Topbar;
