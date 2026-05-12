import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Smart IoT Pet Monitoring System',
    description: 'An IoT-based wearable pet monitoring system that tracks a pet’s heart rate, environmental conditions, motion activity, and GPS location in real time with Node-RED dashboard alerts.',
    tech: ['Node-RED', 'MQTT', 'ESP32', 'Sensors', 'GPS'],
    link: 'https://github.com/Benedict-Johnson/Pet-Monitoring'
  },
  {
    title: 'RFID-Based Surgical Tool Tracking System',
    description: 'An RFID-powered monitoring system to reduce retained surgical item (RSI) risks by tracking tools in real time using FastAPIs and a Streamlit dashboard.',
    tech: ['Streamlit', 'FastAPI', 'Python', 'ESP32', 'RFID'],
    link: 'https://github.com/Benedict-Johnson/RFID-Tool-Retainer'
  },
  {
    title: 'Bus Transit App',
    description: 'An Android app for VIT Chennai students to view bus routes, track seat availability, and submit feedback via Google Maps integration.',
    tech: ['Android UI', 'Java', 'SQLite', 'Google Maps SDK'],
    link: 'https://github.com/Benedict-Johnson/Bus-Transit'
  },
  {
    title: 'Midas — Multi-Model AI Evaluation System',
    description: 'An AI platform that compares LLMs on factual grounding, detects hallucinations, and ranks models using NLI-based claim verification.',
    tech: ['React', 'FastAPI', 'Ollama', 'DeBERTa', 'Transformers'],
    link: 'https://github.com/Benedict-Johnson/Model-Evaluation'
  },
  {
    title: 'Graph Neural Network Fraud Detection',
    description: 'Combines GNNs with LLM-generated investigation summaries to identify suspicious transactions and provide explainable fraud analysis dashboards.',
    tech: ['PyTorch Geometric', 'NetworkX', 'Tableau', 'Groq API'],
    link: 'https://github.com/Benedict-Johnson/GNN-Fraud'
  },
  {
    title: 'Benny’s Eats — AI Customer Support Agent',
    description: 'AI-powered customer support integrated into a food delivery app using RAG pipelines and LLaMA 3.3 for policy-grounded responses and escalation.',
    tech: ['React', 'FastAPI', 'LLaMA 3.3', 'FAISS', 'Docker'],
    link: 'https://github.com/Benedict-Johnson/Customer_Support'
  },
  {
    title: 'Mini-PaaS',
    description: 'A Kubernetes-based local Platform-as-a-Service environment built on Minikube with automated CI/CD pipelines, autoscaling, and observability.',
    tech: ['Kubernetes', 'Docker', 'GitHub Actions', 'Prometheus'],
    link: 'https://github.com/Benedict-Johnson/Mini-PaaS'
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
