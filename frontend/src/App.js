import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Form from './pages/Form';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './pages/firebase-config.js';

function App() {
  const [formData, setFormData] = useState({
    name: 'Sambav',
    skills: 'Full-Stack Web Development, DSA, Cloud Computing, DBMS',
    certifications: 'AWS Cloud Practitioner, AWS Solutions Architect Associate',
    languages: 'English, Telugu, Hindi, French',
    linkedin: 'https://www.linkedin.com/in/sambav-jetty-819962180/',
    gmail: 'sambavjetty@gmail.com',
    github: 'https://github.com/SambavJetty'
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const fetchUserData = async (id) => {
    try {
      const docRef = doc(db, 'messages', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Static Route for Default Home */}
          <Route path="/" element={<Home formData={formData} />} />

          {/* Static Routes for Default Experience and Projects */}
          <Route path="/experience" element={<Experience formData={formData} />} />
          <Route path="/projects" element={<Projects formData={formData} />} />

          {/* Dynamic Routes for User-Specific Data */}
          <Route
            path="/portfolio/:id"
            element={<Home formData={formData} fetchUserData={fetchUserData} />}
          />
          <Route
            path="/experience/:id"
            element={<Experience formData={formData} fetchUserData={fetchUserData} />}
          />
          <Route
            path="/projects/:id"
            element={<Projects formData={formData} fetchUserData={fetchUserData} />}
          />

          {/* Other Routes */}
          <Route path="/create-your-own" element={<Form onSubmit={handleFormSubmit} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
