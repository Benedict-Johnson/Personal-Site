import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:benejohnson20@gmail.com" className="btn contact-btn">Say Hello</a>
        </div>
        
        <div className="contact-links">
          <div className="link-group">
            <h4>Contact</h4>
            <a href="mailto:benejohnson20@gmail.com">benejohnson20@gmail.com</a>
            <a href="tel:+919148910903">+91 9148910903</a>
          </div>
          <div className="link-group">
            <h4>Socials</h4>
            <a href="https://www.linkedin.com/in/benedictjohnson20" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Benedict-Johnson" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://leetcode.com/u/Benedict-Johnson/" target="_blank" rel="noreferrer">LeetCode</a>
          </div>
          <div className="link-group">
            <h4>More</h4>
            <a href="https://drive.google.com/file/d/1-iy4XPvHlg65oY-4z3MX2R3Yevq2ktev/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </div>
      <div className="contact-bottom">
        <p>&copy; {new Date().getFullYear()} Benedict Johnson. Built with React & Vite.</p>
      </div>
    </footer>
  );
};

export default Contact;
