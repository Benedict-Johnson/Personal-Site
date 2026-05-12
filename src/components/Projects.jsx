import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Mini-PaaS',
    description: 'A lightweight Platform-as-a-Service built for deploying applications using containers.',
    tech: ['Go', 'Docker', 'Kubernetes'],
    link: 'https://github.com/Benedict-Johnson/Mini-PaaS'
  },
  {
    title: 'Customer Support Bot',
    description: 'An AI-driven customer support chatbot system integrating LLMs for automated query resolution.',
    tech: ['Python', 'OpenAI API', 'React'],
    link: 'https://github.com/Benedict-Johnson/Customer_Support'
  },
  {
    title: 'Model Evaluation Framework',
    description: 'A comprehensive evaluation framework for testing and comparing machine learning models.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/Benedict-Johnson/Model-Evaluation'
  },
  {
    title: 'GNN Fraud Detection',
    description: 'A Graph Neural Network model designed to detect fraudulent transactions in financial networks.',
    tech: ['PyTorch', 'NetworkX'],
    link: 'https://github.com/Benedict-Johnson/GNN-Fraud'
  },
  {
    title: 'Pet Monitoring System',
    description: 'A computer vision-based IoT solution for real-time pet tracking and behavior analysis.',
    tech: ['OpenCV', 'Python', 'IoT'],
    link: 'https://github.com/Benedict-Johnson/Pet-Monitoring'
  },
  {
    title: 'RFID Tool Retainer',
    description: 'An automated inventory management system utilizing RFID technology for tracking tools.',
    tech: ['C++', 'Arduino', 'RFID'],
    link: 'https://github.com/Benedict-Johnson/RFID-Tool-Retainer'
  },
  {
    title: 'Bus Transit Tracker',
    description: 'A real-time public transit tracking application with route optimization.',
    tech: ['Node.js', 'React', 'Google Maps API'],
    link: 'https://github.com/Benedict-Johnson/Bus-Transit'
  }
];

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
