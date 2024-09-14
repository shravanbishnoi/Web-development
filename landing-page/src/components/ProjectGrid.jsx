import React from 'react';
import '../styles/ProjectGrid.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is the description for project one.',
    image: 'path-to-image1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the description for project two.',
    image: 'path-to-image2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the description for project three.',
    image: 'path-to-image3.jpg',
    link: '#',
  },
];

const ProjectGrid = () => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="project-content">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="visit-button">Visit</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
