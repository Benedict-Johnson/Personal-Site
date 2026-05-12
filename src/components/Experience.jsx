import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>AI / ML Engineering Intern</h3>
              <h4>CGI Inc</h4>
              <span className="date">June 2025 – July 2025</span>
              <ul>
                <li>Designed and implemented a log processing pipeline using Python and OpenSearch, handling over 100K system logs for indexing, querying, and real-time system monitoring.</li>
                <li>Built automated data ingestion and transformation workflows, improving query latency by 30% and increasing processing throughput by 80%.</li>
                <li>Integrated LLM-based semantic analysis into the pipeline to enhance log classification, anomaly detection, and root-cause analysis.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
