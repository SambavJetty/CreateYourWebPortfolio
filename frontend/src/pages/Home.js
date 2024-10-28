import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";

function Home({ formData, fetchUserData }) {
  const { id } = useParams(); // Get the ID from the URL

  useEffect(() => {
    if (id) {
      fetchUserData(id); // Fetch the data based on the ID
    }
  }, [id, fetchUserData]);

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is {formData.name}</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating.</p>
          <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${formData.gmail}`} target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href={formData.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <ul className='list'>
          <li className='item'>
            <h2>Skills</h2>
            <span>{formData.skills}</span>
          </li>
          <li className='item'>
            <h2>Certifications</h2>
            <span>{formData.certifications}</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>{formData.languages}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
