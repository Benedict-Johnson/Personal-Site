import React from 'react';
import './Publications.css';

const Publications = () => {
  return (
    <section className="section publications" id="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="pub-card">
          <h3>Enhancing Semiconductor Wafer Defect Detection using Hybrid CNN-ViT with Denoising Autoencoders</h3>
          <p className="pub-desc">
            Developed a hybrid CNN–Vision Transformer model for defect detection, combining local feature extraction with global context to improve model performance on complex visual patterns.
          </p>
          <a href="https://ieeexplore.ieee.org/document/11398920" target="_blank" rel="noreferrer" className="btn btn-outline pub-btn">
            View on IEEE Xplore
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
