import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
  <a href="https://www.instagram.com/sambav_jetty/"><InstagramIcon /></a>
  <a href="https://twitter.com/sambavjetty"><TwitterIcon /></a>
  <a href="https://www.linkedin.com/in/sambav-jetty-819962180/" ><LinkedInIcon /></a>
        </div>

        <p>&copy; 2024 SamPortfolio.com</p>
      
    </div>
  )
}

export default Footer
