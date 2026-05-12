import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero animate-fade-in" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Benedict Johnson</span></h1>
          <h2>Software Engineer | Backend | AI</h2>
          <p>
            I build scalable infrastructure, backend systems, and intelligent solutions.
            Passionate about understanding how complex systems work under the hood.
          </p>
          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1-iy4XPvHlg65oY-4z3MX2R3Yevq2ktev/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">View Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.png" alt="Benedict Johnson" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
