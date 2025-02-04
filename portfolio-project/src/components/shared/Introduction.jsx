import React from 'react';
import { Code, Brain, Database, Cloud } from 'lucide-react';

const TechPill = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mr-2 mb-2">
    {children}
  </span>
);

const SkillCard = ({ icon: Icon, title, skills }) => (
  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-center mb-3">
      <Icon className="w-5 h-5 text-blue-600 mr-2" />
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="flex flex-wrap">
      {skills.map((skill, idx) => (
        <TechPill key={idx}>{skill}</TechPill>
      ))}
    </div>
  </div>
);

const Introduction = () => {
  const coreSkills = {
    technologies: {
      icon: Code,
      title: "Technologies",
      skills: ["Python", "JavaScript", "React.js", "Node.js", "C++", "PHP"]
    },
    ml: {
      icon: Brain,
      title: "ML & CV",
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Neural Networks", "CNN", "RNN"]
    },
    ai: {
        icon: Brain,
        title: "AI & LLMs",
        skills: ["LangChain", "LangSmith", "RAG", "Hugging Face", "Vector DBs", "Agentic AI"]
      },
    data: {
      icon: Database,
      title: "Data Engineering",
      skills: ["SQL", "MongoDB", "PostgreSQL", "ETL", "Apache Airflow"]
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"]
    }
  };

  return (
    <div className="mb-12">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="space-y-4 text-gray-600">
          <p>
          I'm a Computer Vision Engineer and AI Researcher with over 8 years of experience across retail, medical device, manufacturing, and fintech industries. My expertise lies in developing and deploying sophisticated deep learning models for real-world applications, with a focus on Agentic AI systems and intelligent automation.
          </p>
          <p>
            My research focuses on multi-sensor fusion systems and computer vision applications, where I've achieved significant breakthroughs in retail analytics and medical imaging. I've consistently delivered high-performance solutions, including ML systems with 98.9% accuracy and optimized inference times.
          </p>
          <p>
            Currently, I'm working on advancing retail and restaurant analytics by combining computer vision with RAG-powered systems. This includes real-time inventory tracking through multi-sensor fusion, intelligent product recommendations using LLMs with contextual knowledge bases, and dynamic pricing optimization. The system integrates computer vision for physical tracking with RAG-enhanced conversational AI for personalized customer interactions and inventory insights.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {Object.values(coreSkills).map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Introduction;