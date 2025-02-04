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
      <div className="section-container mb-8 bg-white p-4 rounded-lg shadow-md">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          {icon}
          <h2 className="text-xl font-semibold ml-2 text-gray-900">{title}</h2>
          {isExpanded ? <ChevronUp className="ml-auto" /> : <ChevronDown className="ml-auto" />}
        </button>
        {isExpanded && <div className="mt-4 px-4 text-gray-700">{children}</div>}
      </div>
    );
  };

  const TechStack = ({ title, items }) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3 text-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm shadow-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Saumil Patel</h1>
        <p className="text-xl text-gray-600 mb-6">Computer Vision Engineer & ML Expert</p>
        <div className="flex justify-center gap-6 text-gray-600">
          <a href="mailto:saumilp9091@gmail.com" className="flex items-center hover:text-gray-900">
            <Mail className="w-5 h-5 mr-2" />
            saumilp9091@gmail.com
          </a>
          <span className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
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

      {/* About Me Section */}
      <Section title="About Me" icon={<Code className="w-6 h-6" />} defaultExpanded={true}>
        <p>
          I am a skilled **Computer Vision Engineer** with over 8 years of experience working with cutting-edge technologies in various industries, including **retail**, **medical devices**, **manufacturing**, and **fintech**. I specialize in **deep learning**, **sensor fusion**, **real-time analytics**, **human-machine interaction**, and **AI-driven solutions**.
        </p>
      </Section>

      {/* Skills Section */}
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
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Multi-View Deep Learning for Retail Object Detection</h4>
          <ul className="list-disc pl-5">
            <li>mAP Accuracy: 98.9%</li>
            <li>FPS: 45-55</li>
            <li>Product Classes: 538</li>
            <li>Inference Time Reduction: 15%</li>
          </ul>
          <p>A novel approach to object detection combining YOLO and vector databases for retail inventory management.</p>
        </div>
      </Section>

      {/* Datasets */}
      <Section title="Datasets" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
        <ul className="space-y-2">
          <li><a href="https://universe.roboflow.com/lamar-university-venef/grocery-rfn8l" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Grocery Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/liquor-data" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Liquor Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/retail-products-vem9o" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Retail Products Dataset</a></li>
          <li><a href="https://universe.roboflow.com/lamar-university-venef/key-detection-v33ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Key Detection Dataset</a></li>
        </ul>
      </Section>

      {/* Education Section */}
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
