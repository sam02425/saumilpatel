import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ChevronDown, ChevronUp, BarChart, Code, BookOpen, Star } from 'lucide-react';

const Portfolio = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const Section = ({ title, icon, children, id, defaultExpanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    return (
      <div className="mb-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {icon}
          <h2 className="text-xl font-semibold ml-2 flex-1 text-left">{title}</h2>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
        {isExpanded && <div className="mt-4 px-4">{children}</div>}
      </div>
    );
  };

  const ResearchHighlight = ({ title, metrics, description }) => (
    <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
        {metrics.map((metric, idx) => (
          <div key={idx} className="text-center">
            <div className="text-xl font-bold text-blue-600">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  const TechStack = ({ title, items }) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Saumil Patel</h1>
        <p className="text-xl text-gray-600 mb-6">Computer Vision Engineer & ML Expert</p>
        <div className="flex justify-center gap-6 text-gray-600">
          <a href="mailto:saumilp9091@gmail.com" className="flex items-center hover:text-gray-900">
            <Mail className="w-4 h-4 mr-2" />
            saumilp9091@gmail.com
          </a>
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            (936)-587-9020
          </span>
          <a href="https://github.com/sam02425" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/saumil-patel-2a58ab166/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* About Me */}
      <Section title="About Me" icon={<Code className="w-6 h-6" />} defaultExpanded={true}>
        <p>
          I am a skilled **Computer Vision Engineer** with over 8 years of experience working with cutting-edge technologies in various industries, including **retail**, **medical devices**, **manufacturing**, and **fintech**. I specialize in **deep learning**, **sensor fusion**, **real-time analytics**, **human-machine interaction**, and **AI-driven solutions**.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Skills" icon={<Code className="w-6 h-6" />} defaultExpanded={true}>
        <TechStack
          title="Core Skills"
          items={["Object Detection", "Image Segmentation", "Feature Extraction", "OpenCV", "PIL", "TensorFlow", "PyTorch", "Machine Learning", "Data Analytics"]}
        />
      </Section>

      {/* Professional Experience */}
      <Section title="Professional Experience" icon={<Star className="w-6 h-6" />} defaultExpanded={true}>
        <p>
          I have worked in diverse industries such as medical devices, manufacturing, and retail, contributing to machine learning pipelines, product development, and process optimization. I have led teams to build real-time object detection systems and have a track record of optimizing systems for improved performance.
        </p>
      </Section>

      {/* Research Highlights */}
      <Section title="Research Highlights" icon={<BarChart className="w-6 h-6" />} defaultExpanded={true}>
        <ResearchHighlight
          title="Multi-View Deep Learning for Retail Object Detection"
          metrics={[
            { value: "98.9%", label: "mAP Accuracy" },
            { value: "45-55", label: "FPS" },
            { value: "538", label: "Product Classes" },
            { value: "15%", label: "Inference Time Reduction" }
          ]}
          description="A novel approach to object detection combining YOLO and vector databases for retail inventory management."
        />
      </Section>

      {/* Datasets */}
      <Section title="Datasets" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
        <p>
          For this study, we utilized several datasets from **Roboflow Universe** to train and evaluate our object detection models, including datasets like Grocery, Liquor, Retail Products, and Key Detection.
        </p>
        <ul>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/grocery-rfn8l" target="_blank" rel="noopener noreferrer">Grocery Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/liquor-data" target="_blank" rel="noopener noreferrer">Liquor Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/retail-products-vem9o" target="_blank" rel="noopener noreferrer">Retail Products Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/key-detection-v33ru" target="_blank" rel="noopener noreferrer">Key Detection Dataset</a></li>
        </ul>
      </Section>

      {/* Education */}
      <Section title="Education" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
        <p><strong>Doctor of Engineering in Industrial and Systems Engineering</strong> - Lamar University, Beaumont TX (Aug 2021 – Dec 2024)</p>
        <p><strong>Master of Engineering Science in Industrial and Systems Engineering</strong> - Lamar University, Beaumont TX (Jan 2017 – Aug 2021)</p>
        <p><strong>Master of Business Administration in Project Management</strong> - Northwestern Polytechnic University, Fremont, CA (Aug 2014 – Dec 2015)</p>
        <p><strong>Bachelor of Engineering in Mechanical Engineering</strong> - Gujarat Technological University, Ahmedabad, India (Sep 2009 – Aug 2013)</p>
      </Section>

    </div>
  );
};

export default Portfolio;
