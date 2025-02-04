import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ChevronDown, ChevronUp, BarChart, Code, BookOpen, Star } from 'lucide-react';
import './App.css';  // Import the CSS file

const Portfolio = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const Section = ({ title, icon, children, id, defaultExpanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    return (
      <div className="section-container">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="section-toggle"
        >
          {icon}
          <h2 className="section-title">{title}</h2>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isExpanded && <div className="section-content">{children}</div>}
      </div>
    );
  };

  const TechStack = ({ title, items }) => (
    <div className="tech-stack">
      <h3 className="tech-stack-title">{title}</h3>
      <div className="tech-stack-items">
        {items.map((item, idx) => (
          <span key={idx} className="tech-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Saumil Patel</h1>
        <p className="header-subtitle">Computer Vision Engineer & ML Expert</p>
        <div className="social-links">
          <a href="mailto:saumilp9091@gmail.com" className="social-link">
            <Mail className="icon" />
            saumilp9091@gmail.com
          </a>
          <span className="social-link">
            <Phone className="icon" />
            (936)-587-9020
          </span>
          <a href="https://github.com/sam02425" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/saumil-patel-2a58ab166/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin className="icon" />
          </a>
        </div>
      </header>

      {/* About Me */}
      <Section title="About Me" icon={<Code className="icon" />} defaultExpanded={true}>
        <p>
          I am a skilled **Computer Vision Engineer** with over 8 years of experience working with cutting-edge technologies in various industries, including **retail**, **medical devices**, **manufacturing**, and **fintech**. I specialize in **deep learning**, **sensor fusion**, **real-time analytics**, **human-machine interaction**, and **AI-driven solutions**.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Skills" icon={<Code className="icon" />} defaultExpanded={true}>
        <TechStack
          title="Core Skills"
          items={["Object Detection", "Image Segmentation", "Feature Extraction", "OpenCV", "PIL", "TensorFlow", "PyTorch", "Machine Learning", "Data Analytics"]}
        />
      </Section>

      {/* Professional Experience */}
      <Section title="Professional Experience" icon={<Star className="icon" />} defaultExpanded={true}>
        <p>
          I have worked in diverse industries such as medical devices, manufacturing, and retail, contributing to machine learning pipelines, product development, and process optimization. I have led teams to build real-time object detection systems and have a track record of optimizing systems for improved performance.
        </p>
      </Section>

      {/* Research Highlights */}
      <Section title="Research Highlights" icon={<BarChart className="icon" />} defaultExpanded={true}>
        <div className="highlight">
          <h4 className="highlight-title">Multi-View Deep Learning for Retail Object Detection</h4>
          <ul className="highlight-metrics">
            <li>mAP Accuracy: 98.9%</li>
            <li>FPS: 45-55</li>
            <li>Product Classes: 538</li>
            <li>Inference Time Reduction: 15%</li>
          </ul>
          <p>A novel approach to object detection combining YOLO and vector databases for retail inventory management.</p>
        </div>
      </Section>

      {/* Datasets */}
      <Section title="Datasets" icon={<BookOpen className="icon" />} defaultExpanded={true}>
        <ul className="datasets-list">
          <li><a href="https://universe.roboflow.com/lamar-university-venef/grocery-rfn8l" target="_blank" rel="noopener noreferrer" className="dataset-link">Grocery Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/liquor-data" target="_blank" rel="noopener noreferrer" className="dataset-link">Liquor Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/retail-products-vem9o" target="_blank" rel="noopener noreferrer" className="dataset-link">Retail Products Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/key-detection-v33ru" target="_blank" rel="noopener noreferrer" className="dataset-link">Key Detection Dataset</a></li>
        </ul>
      </Section>

      {/* Education */}
      <Section title="Education" icon={<BookOpen className="icon" />} defaultExpanded={true}>
        <p><strong>Doctor of Engineering in Industrial and Systems Engineering</strong> - Lamar University, Beaumont TX (Aug 2021 – Dec 2024)</p>
        <p><strong>Master of Engineering Science in Industrial and Systems Engineering</strong> - Lamar University, Beaumont TX (Jan 2017 – Aug 2021)</p>
        <p><strong>Master of Business Administration in Project Management</strong> - Northwestern Polytechnic University, Fremont, CA (Aug 2014 – Dec 2015)</p>
        <p><strong>Bachelor of Engineering in Mechanical Engineering</strong> - Gujarat Technological University, Ahmedabad, India (Sep 2009 – Aug 2013)</p>
      </Section>

    </div>
  );
};

export default Portfolio;
