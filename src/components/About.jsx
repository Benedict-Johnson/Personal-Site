import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I’m a final-year Integrated M.Tech Software Engineering student with a strong interest in backend systems, AI, and scalable infrastructure. I enjoy building projects that combine real-world problem solving with modern technologies, especially in areas like Large Language Models, Kubernetes, and cloud-native systems.
          </p>
          <p>
            My work includes projects in domain-aware knowledge extraction using LLMs, hybrid deep learning models for semiconductor wafer defect detection, and DevOps-focused system design. I’m particularly interested in understanding how complex systems work under the hood rather than just using frameworks blindly.
          </p>
          <p>
            I’m constantly exploring backend architecture, distributed systems, and AI engineering while improving my problem-solving and development skills through hands-on projects and coding challenges. My goal is to grow into a software engineer who can design reliable, scalable, and intelligent systems from scratch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
