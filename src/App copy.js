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

  const ResearchHighlight = ({ title, metrics, description }) => (
    <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="mb-3">
        {metrics.map((metric, idx) => (
          <div key={idx} className="text-sm text-gray-700 mb-1">
            <strong>{metric.label}:</strong> {metric.value}
          </div>
        ))}
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );


  // Publication Component
  const Publication = ({ title, type, status, doi, published, authors, journal, conference, link }) => (
    <div className="publication">
      <h5 className="publication-title">{title}</h5>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Published:</strong> {published}</p>
      {journal && <p><strong>Journal:</strong> {journal}</p>}
      {conference && <p><strong>Conference:</strong> {conference}</p>}
      <p><strong>DOI:</strong> <a href={link} target="_blank" rel="noopener noreferrer" className="doi-link">{doi}</a></p>
      <p><strong>Author(s):</strong> {authors}</p>
    </div>
  );

  return (
    <div className="portfolio-container max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="header text-center mb-12">
        <h1 className="header-title">Saumil Patel</h1>
        <p className="header-subtitle">Computer Vision Engineer & AI Researcher</p>
        <div className="social-links">
          <a href="mailto:saumilp9091@gmail.com" className="social-link">
            <Mail className="icon w-4 h-4 mr-2" />
            saumilp9091@gmail.com
          </a>
          <span className="social-link flex items-center">
            <Phone className="icon w-4 h-4 mr-2" />
            (936)-587-9020
          </span>
          <a href="https://github.com/sam02425" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github className="icon w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/saumil-patel-2a58ab166/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin className="icon" />
          </a>
        </div>
      </header>

      {/* About Me */}
      <Section title="About Me" icon={<Code className="icon" />} defaultExpanded={true}>
        <p>
          I am a skilled Computer Vision Engineer with over 8 years of experience working with cutting-edge technologies in various industries, including retail, medical devices, manufacturing, and fintech. I specialize in deep learning, sensor fusion, real-time analytics, human-machine interaction, and AI-driven solutions.
        </p>
      </Section>

      {/* Technical Expertise */}
      <Section title="Technical Expertise" icon={<Code className="w-6 h-6" />} defaultExpanded={true}>
        <TechStack
          title="Computer Vision & ML"
          items={[
            "YOLO", "TensorFlow", "PyTorch", "OpenCV",
            "Sensor Fusion", "Camera Calibration", "Object Detection",
            "Image Segmentation"
          ]}
        />
        <TechStack
          title="Edge Computing & Deployment"
          items={[
            "NVIDIA Jetson", "TensorRT", "Model Optimization",
            "FAISS", "Vector Databases", "Real-time Processing"
          ]}
        />
        <TechStack
          title="Development & DevOps"
          items={[
            "Python", "C++", "JavaScript", "React",
            "Docker", "Kubernetes", "CI/CD", "MLOps"
          ]}
        />
      </Section>

      {/* Professional Experience */}
      <Section title="Professional Experience" icon={<Star className="icon" />} defaultExpanded={true}>
        <h4 className="experience-title">Lamar University – Beaumont, TX</h4>
        <p><strong>Computer Vision Researcher</strong> | June 2023 - Dec 2024</p>
        <ul>
          <li>Developed multi-sensor fusion systems integrating camera, LiDAR, radar, and RFID data for customer behavior analysis.</li>
          <li>Engineered production ML systems with 98.9% accuracy and optimized inference time by 15% using Pinecone and FAISS.</li>
          <li>Designed optimal camera placement strategies, implemented calibration pipelines, and automated drift detection.</li>
        </ul>

        <h4 className="experience-title">Medtronic - Santa Rosa, CA</h4>
        <p><strong>Sr. Mfg Engineer</strong> | Oct 2022 - June 2023</p>
        <ul>
          <li>Led product development and process optimization for the TMVR product, ensuring compliance with ISO 13485 and IEC 62304</li>
          <li>Applied computer vision techniques for feature extraction and pattern analysis in medical imagery data.</li>
          <li>Optimized algorithms for real-time performance on embedded systems and GPU-accelerated hardware.</li>
          <li>Developed deep learning models for intelligent analysis and automated quality control for medical-grade imaging systems.</li>
        </ul>

        <h4 className="experience-title">Stryker - Mahwah, NJ</h4>
        <p><strong>Software Engineer</strong> | Jun 2020 - Sep 2022</p>
        <ul>
          <li>Supported design control and compliance activities, including technical file remediation and CAPA processes.</li>
          <li>Utilized machine learning to optimize product testing, predictive maintenance, and improve real-time inspection systems.</li>
          <li>Developed computer vision algorithms for real-time quality inspection in manufacturing, improving accuracy by 30%.</li>
          <li>Designed and deployed camera layouts for manufacturing inspection and automated calibration procedures.</li>
        </ul>
      </Section>


      {/* Research Highlights Section */}
      <Section title="Research Highlights" icon={<BarChart className="w-6 h-6" />} defaultExpanded={true}>
        <ResearchHighlight
          title="Multi-View Deep Learning for Retail Object Detection"
          metrics={[
            { label: 'mAP Accuracy', value: '98.9%' },
            { label: 'FPS', value: '45-55' },
            { label: 'Product Classes', value: '538' },
            { label: 'Inference Time Reduction', value: '15%' },
          ]}
          description="Developed a novel approach to object detection combining YOLO and vector databases for retail inventory management."
        />
        <ResearchHighlight
          title="Smart Sustainable Cooling System"
          metrics={[
            { label: 'Energy Reduction', value: '80%' },
            { label: 'Prediction Accuracy', value: '94%' },
            { label: 'Temp Reduction', value: '12-15°C' },
            { label: 'System Uptime', value: '95%' },
          ]}
          description="Designed a sustainable cooling system leveraging deep learning for efficient temperature control."
        />
        <ResearchHighlight
          title="Advanced Computer Vision-Based Retail Analytics"
          metrics={[
            { label: 'Person Detection Accuracy', value: '89%' },
            { label: 'Product Detection Accuracy', value: '85%' },
            { label: 'Processing Speed', value: '25 FPS' },
            { label: 'Tracking Accuracy', value: '93%' },
          ]}
          description="An innovative system for tracking customer behavior and product movement, offering insights for store layout optimization and inventory management."
        />
        <ResearchHighlight
          title="MultiModal Product Classification Using YOLO and OCR Fusion"
          metrics={[
            { label: 'Product Classification Accuracy', value: '98.9%' },
            { label: 'Real-time FPS', value: '45-55 FPS' },
            { label: 'OCR Accuracy', value: '94.1%' },
            { label: 'Edge Device Memory Usage', value: '450 MB' },
          ]}
          description="A novel approach to product classification and automated retail inventory management with YOLO-NAS models and OCR integration."
        />
      </Section>

      {/* Publications Section */}
      <Section title="Publications" icon={<BookOpen className="icon" />} defaultExpanded={true}>
        <Publication
          title="Multi-Modal Product Recognition in Retail Environments: Enhancing Accuracy Through Integrated Vision and OCR Approaches"
          type="Article"
          status="Full-text available"
          doi="10.30574/wjarr.2025.25.1.0122"
          published="January 2025"
          authors="Saumil Patel"
          journal="World Journal of Advanced Research and Reviews"
          link="https://doi.org/10.30574/wjarr.2025.25.1.0122"
        />
        <Publication
          title="MultiModal Product Classification Using YOLO and OCR Fusion: A Novel Approach to Automated Retail Inventory Management"
          type="Preprint"
          status="File available"
          doi="10.13140/RG.2.2.16650.38089"
          published="December 2024"
          authors="Saumil Patel"
          link="https://doi.org/10.13140/RG.2.2.16650.38089"
        />
        <Publication
          title="Role of Computer Vision in Retail Stores"
          type="Thesis"
          status="Full-text available"
          doi="10.13140/RG.2.2.33928.94729"
          published="December 2024"
          authors="Saumil Patel"
          link="https://doi.org/10.13140/RG.2.2.33928.94729"
        />
        <Publication
          title="Human Interaction with Autonomous Delivery Robots: Navigating the Intersection of Psychological Acceptance and Societal Integration"
          type="Conference Paper"
          status="Full-text available"
          doi="10.54941/ahfe1005649"
          published="December 2024"
          authors="Saumil Patel"
          conference="2024 AHFE International Conference on Human Factors in Design, Engineering, and Computing (AHFE 2024 Hawaii Edition)"
          link="https://doi.org/10.54941/ahfe1005649"
        />
        <Publication
          title="Inspection of In-Vehicle Touchscreen Infotainment Display for Different Screen Locations, Menu Types, and Positions"
          type="Chapter"
          status="Full-text available"
          doi="10.1007/978-3-031-04987-3_18"
          published="June 2022"
          authors="Saumil Patel, Yi Liu, Ruobing Zhao, Yueqing Li"
          journal="Lecture Notes in Computer Science"
          link="https://doi.org/10.1007/978-3-031-04987-3_18"
        />
        <Publication
          title="Human Factor and Ergonomics Evaluation of In-Vehicle Touchscreen Infotainment Display"
          type="Thesis"
          status="Full-text available"
          published="August 2021"
          authors="Saumil Patel"
          link=""
        />
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
