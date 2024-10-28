import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectItem from '../components/ProjectItem';
import uploading_image from '../assets/uploading_image.jpg';
import '../styles/project.css';

function Projects({ formData, fetchUserData }) {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchUserData(id); // Fetch data based on ID from Firebase
    }
  }, [id, fetchUserData]);

  const { project1 = '#', project2 = '#', project3 = '#' } = formData;

  return (
    <div className='projects'>
      <h2 className='projectTitle'>My Personal Projects</h2>
      <div className='projectList'>
        <a href={project1} style={{ color: 'black', textDecoration: 'none' }}>
          <ProjectItem className='projectItem' name="Project-1" image={uploading_image} />
        </a>
        <a href={project2} style={{ color: 'black', textDecoration: 'none' }}>
          <ProjectItem className='projectItem' name="Project-2" image={uploading_image} />
        </a>
        <a href={project3} style={{ color: 'black', textDecoration: 'none' }}>
          <ProjectItem className='projectItem' name="Project-3" image={uploading_image} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
