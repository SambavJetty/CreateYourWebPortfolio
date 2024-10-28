import React, { useState } from 'react';
import '../styles/Form.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from './firebase-config.js'; // Make sure this file is correctly configured for Firebase

const Form = () => {
    // Form fields as state variables
    const [name, setName] = useState('');
    const [skills, setSkills] = useState('');
    const [certifications, setCertifications] = useState('');
    const [languages, setLanguages] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [gmail, setGmail] = useState('');
    const [github, setGithub] = useState('');
    const [schooling, setSchooling] = useState('');
    const [intermediate, setIntermediate] = useState('');
    const [bachelors, setBachelors] = useState('');
    const [experience1, setExperience1] = useState('');
    const [experience2, setExperience2] = useState('');
    const [experience3, setExperience3] = useState('');
    const [project1, setProject1] = useState('');
    const [project2, setProject2] = useState('');
    const [project3, setProject3] = useState('');
    const [shareableUrl, setShareableUrl] = useState(null); // URL to be displayed after submission

    // Reference to Firebase Firestore collection
    const dataOfUsers = collection(db, "messages");

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Object containing all form data
        const formData = { 
            name, skills, certifications, languages, linkedin, gmail, github, 
            schooling, intermediate, bachelors, experience1, experience2, 
            experience3, project1, project2, project3 
        };
        
        try {
            // Add form data to Firestore and get the document reference
            const docRef = await addDoc(dataOfUsers, formData);
            // Generate a URL using the document ID
            const url = `https://CYP.vercel.app/portfolio/${docRef.id}`;

            setShareableUrl(url); // Set the generated URL in state
        } catch (error) {
            console.error("Error creating document: ", error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Your Name'
                    />
                </div>
                <div className="form-group">
                    <label>Skills:</label>
                    <input 
                        type="text" 
                        value={skills} 
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder='Ex: Full-Stack Web Development, DSA, Cloud Services, DBMS' 
                    />
                </div>
                <div className="form-group">
                    <label>Certifications:</label>
                    <input 
                        type="text" 
                        value={certifications} 
                        onChange={(e) => setCertifications(e.target.value)}
                        placeholder='Ex: AWS Cloud Practitioner, AWS Solutions Architect Associate' 
                    />
                </div>
                <div className="form-group">
                    <label>Languages:</label>
                    <input 
                        type="text" 
                        value={languages} 
                        onChange={(e) => setLanguages(e.target.value)}
                        placeholder='Ex: English, Telugu, Hindi, French' 
                    />
                </div>
                <div className="form-group">
                    <label>LinkedIn:</label>
                    <input 
                        type="text" 
                        value={linkedin} 
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder='Ex: https://www.linkedin.com/in/sambav-jetty-819962180/' 
                    />
                </div>
                <div className="form-group">
                    <label>Gmail:</label>
                    <input 
                        type="text" 
                        value={gmail} 
                        onChange={(e) => setGmail(e.target.value)}
                        placeholder='Ex: sambavjetty@gmail.com ' 
                    />
                </div>
                <div className="form-group">
                    <label>GitHub:</label>
                    <input 
                        type="text" 
                        value={github} 
                        onChange={(e) => setGithub(e.target.value)}
                        placeholder='Ex: https://github.com/SambavJetty ' 
                    />
                </div>
                <div className="form-group">
                    <label>Schooling:</label>
                    <input 
                        type="text" 
                        value={schooling} 
                        onChange={(e) => setSchooling(e.target.value)}
                        placeholder='Ex: Sri Chaitanya Techno School' 
                    />
                </div>
                <div className="form-group">
                    <label>Intermediate:</label>
                    <input 
                        type="text" 
                        value={intermediate} 
                        onChange={(e) => setIntermediate(e.target.value)}
                        placeholder='Ex: Sri Chaitanya Junior College ' 
                    />
                </div>
                <div className="form-group">
                    <label>Bachelor's Degree:</label>
                    <input 
                        type="text" 
                        value={bachelors} 
                        onChange={(e) => setBachelors(e.target.value)}
                        placeholder='Ex: VIT-AP University ' 
                    />
                </div>
                <div className="form-group">
                    <label>Experience 1:</label>
                    <input 
                        type="text" 
                        value={experience1} 
                        onChange={(e) => setExperience1(e.target.value)}
                        placeholder='Ex: IET Club ' 
                    />
                </div>
                <div className="form-group">
                    <label>Experience 2:</label>
                    <input 
                        type="text" 
                        value={experience2} 
                        onChange={(e) => setExperience2(e.target.value)}
                        placeholder='Ex: YBI Foundation ' 
                    />
                </div>
                <div className="form-group">
                    <label>Experience 3:</label>
                    <input 
                        type="text" 
                        value={experience3} 
                        onChange={(e) => setExperience3(e.target.value)}
                        placeholder='Ex: Goldman Sachs ' 
                    />
                </div>
                <div className="form-group">
                    <label>Project 1:</label>
                    <input 
                        type="text" 
                        value={project1} 
                        onChange={(e) => setProject1(e.target.value)}
                        placeholder='Ex: Project 1 Link (Deployed)' 
                    />
                </div>
                <div className="form-group">
                    <label>Project 2:</label>
                    <input 
                        type="text" 
                        value={project2} 
                        onChange={(e) => setProject2(e.target.value)}
                        placeholder='Ex: Project 2 Link (Deployed)' 
                    />
                </div>
                <div className="form-group">
                    <label>Project 3:</label>
                    <input 
                        type="text" 
                        value={project3} 
                        onChange={(e) => setProject3(e.target.value)}
                        placeholder='Ex: Project 3 Link (Deployed)' 
                    />
                </div>
                
                <button type="submit">Submit</button>
            </form>

            {/* Display the shareable URL if it exists */}
            {shareableUrl && (
                <div className="shareable-url">
                    <p>Your portfolio link: <a href={shareableUrl} target="_blank" rel="noopener noreferrer">{shareableUrl}</a></p>
                    <button onClick={() => navigator.clipboard.writeText(shareableUrl)}>
                        Copy Link
                    </button>
                </div>
            )}
        </div>
    );
};

export default Form;
