import React from 'react';
import { Link, useParams } from "react-router-dom";
import "../styles/navbar.css";
//import logo from "../assets/main_logo.png";//

function Navbar() {
  const { id } = useParams(); // Access the route parameters

  return (
    <div className='navbar'>
      {/*
      <div className='logo'>
          <img src={logo} alt='Logo' />
          <h2>CYP</h2>
      </div>
      */}

      <div className="toggleButton"></div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        
        {/* Only show "Create Your Own" button if no id is present in the URL */}
        {!id && (
          <Link to="/create-your-own">
            <button className="button">Create Your Own</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
