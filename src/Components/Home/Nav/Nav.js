import React from 'react'
import { navItems } from '../Nav/navitems';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import './nav.css';

function Nav() {
  return (
    <div className='total-area'>
            <div className='Nav'>
      <Navbar className='navbar' >
         
          <ul className='nav-items'>
                    {navItems.map((item,id)=>{
                        return(
            
                  <li key={item.id} ><Link className={item.cName} to={item.path} >{item.title}</Link></li> 
             
                          
                        )
                        }
                    )}
 
         </ul>
         </Navbar>
         </div>


    </div>
  )
}

export default Nav