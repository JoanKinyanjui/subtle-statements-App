import React from 'react'
import EmailSubscribing from '../Home/EmailSubscribing/EmailSubscribing';
import AboutMain from './AboutMain/AboutMain'
import Extra from '../About/Extra/Extra';
import Services from './Other Services/Services';
import Testimonials from '../Home/Testimonials/Testimonials';
import Footer from '../Home/Footer/Footer';
import'./About.css'
import Topjewellers from './TopJewellers/Topjewellers';
import Nav from '../Home/Nav/Nav';
import Topbar from '../Home/TopBar/Topbar';

function About() {
  return (
    <div>
   <div className='AboutMain-main'>
   <Topbar />
        <Nav />
<AboutMain />
   </div>
   <Topjewellers />
   <Extra />
   <Services />
   <Testimonials />
<EmailSubscribing />
<Footer />
    </div>
  )
}

export default About