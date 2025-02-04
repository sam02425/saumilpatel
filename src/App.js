import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ChevronDown, ChevronUp, BarChart, Code, BookOpen, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({...prev, [id]: !prev[id]}));
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
        {isExpanded && (
          <div className="mt-4 px-4">{children}</div>
        )}
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
          <a href="mailto:saumilpatel9091@gmail.com" className="flex items-center hover:text-gray-900">
            <Mail className="w-4 h-4 mr-2" />
            saumilpatel9091@gmail.com
          </a>
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            (409) 710-6900
          </span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Research Highlights */}
      <Section title="Research Highlights" icon={<BarChart className="w-6 h-6" />} defaultExpanded={true}>
        {/* Your content */}
      </Section>

      {/* Other sections */}
    </div>
  );
};

export default Portfolio;
