import React, { useState } from 'react';
import '../styles/Form.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from './firebase-config.js'; // Ensure Firebase configuration is correct

const Form = () => {
    // Form fields as a single state object
    const [formData, setFormData] = useState({
        name: '', skills: '', certifications: '', languages: '',
        linkedin: '', gmail: '', github: '', schooling: '',
        intermediate: '', bachelors: '', experience1: '',
        experience2: '', experience3: '', project1: '', 
        project2: '', project3: ''
    });
    const [shareableUrl, setShareableUrl] = useState(null); // URL to be displayed after submission

    // Reference to Firebase Firestore collection
    const dataOfUsers = collection(db, "messages");

    // Generic change handler for all input fields
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(dataOfUsers, formData);
            const url = `https://cywp.vercel.app/portfolio/${docRef.id}`;
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
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label>Skills:</label>
                    <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Ex: Full-Stack Web Development, DSA, Cloud Services, DBMS" />
                </div>
                <div className="form-group">
                    <label>Certifications:</label>
                    <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} placeholder="Ex: AWS Cloud Practitioner, AWS Solutions Architect Associate" />
                </div>
                <div className="form-group">
                    <label>Languages:</label>
                    <input type="text" name="languages" value={formData.languages} onChange={handleChange} placeholder="Ex: English, Telugu, Hindi, French" />
                </div>
                <div className="form-group">
                    <label>LinkedIn:</label>
                    <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="Ex: https://www.linkedin.com/in/sambav-jetty-819962180/" />
                </div>
                <div className="form-group">
                    <label>Gmail:</label>
                    <input type="text" name="gmail" value={formData.gmail} onChange={handleChange} placeholder="Ex: sambavjetty@gmail.com" />
                </div>
                <div className="form-group">
                    <label>GitHub:</label>
                    <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="Ex: https://github.com/SambavJetty" />
                </div>
                <div className="form-group">
                    <label>Schooling:</label>
                    <input type="text" name="schooling" value={formData.schooling} onChange={handleChange} placeholder="Ex: Sri Chaitanya Techno School" />
                </div>
                <div className="form-group">
                    <label>Intermediate:</label>
                    <input type="text" name="intermediate" value={formData.intermediate} onChange={handleChange} placeholder="Ex: Sri Chaitanya Junior College" />
                </div>
                <div className="form-group">
                    <label>Bachelor's Degree:</label>
                    <input type="text" name="bachelors" value={formData.bachelors} onChange={handleChange} placeholder="Ex: VIT-AP University" />
                </div>
                <div className="form-group">
                    <label>Experience 1:</label>
                    <input type="text" name="experience1" value={formData.experience1} onChange={handleChange} placeholder="Ex: IET Club" />
                </div>
                <div className="form-group">
                    <label>Experience 2:</label>
                    <input type="text" name="experience2" value={formData.experience2} onChange={handleChange} placeholder="Ex: YBI Foundation" />
                </div>
                <div className="form-group">
                    <label>Experience 3:</label>
                    <input type="text" name="experience3" value={formData.experience3} onChange={handleChange} placeholder="Ex: Goldman Sachs" />
                </div>
                <div className="form-group">
                    <label>Project 1:</label>
                    <input type="text" name="project1" value={formData.project1} onChange={handleChange} placeholder="Project 1 Link" />
                </div>
                <div className="form-group">
                    <label>Project 2:</label>
                    <input type="text" name="project2" value={formData.project2} onChange={handleChange} placeholder="Project 2 Link" />
                </div>
                <div className="form-group">
                    <label>Project 3:</label>
                    <input type="text" name="project3" value={formData.project3} onChange={handleChange} placeholder="Project 3 Link" />
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
