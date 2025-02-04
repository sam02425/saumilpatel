#!/bin/bash

# Portfolio Project Setup Script

echo "🚀 Starting Portfolio Project Setup..."

# Create root directory
mkdir -p portfolio-project
cd portfolio-project

# Initialize npm project
echo "📦 Initializing npm project..."
npm init -y

# Install dependencies
echo "📚 Installing dependencies..."
npm install react react-dom @heroicons/react lucide-react tailwindcss postcss autoprefixer

# Create project structure
echo "🏗️ Creating project structure..."

# Create directory structure
mkdir -p src/components/{layout,shared,experience,research,publications,datasets,education}
mkdir -p src/styles
mkdir -p src/utils

# Root configuration files
echo "⚙️ Creating configuration files..."

# Create index.html
cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saumil Patel - Portfolio</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
EOF

# Create tailwind.config.js
cat > tailwind.config.js << 'EOF'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

echo "📁 Creating source files..."

# Create Layout Components
cat > src/components/layout/Header.jsx << 'EOF'
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactButton, SocialButton } from '../shared/ContactButton';

const Header = () => {
  return (
    <header className="text-center mb-16">
      <div className="inline-block mb-6 p-2 bg-blue-50 rounded-full">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          SP
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Saumil Patel</h1>
      <p className="text-xl text-gray-600 mb-8">Computer Vision Engineer & AI Researcher</p>
      <div className="flex flex-wrap justify-center gap-4">
        <ContactButton icon={<Mail />} text="saumilp9091@gmail.com" href="mailto:saumilp9091@gmail.com" />
        <ContactButton icon={<Phone />} text="(936)-587-9020" />
        <SocialButton icon={<Github />} href="https://github.com/sam02425" />
        <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/saumil-patel-2a58ab166/" />
      </div>
    </header>
  );
};

export default Header;
EOF

cat > src/components/layout/Section.jsx << 'EOF'
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Section = ({ title, icon, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          <span className="text-blue-600">{icon}</span>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <span className="text-gray-500">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      {isExpanded && (
        <div className="p-6 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
};

export default Section;
EOF

# Continue with other components...
EOF

# Create Shared Components
cat > src/components/shared/ContactButton.jsx << 'EOF'
import React from 'react';

export const ContactButton = ({ icon, text, href }) => (
  <a href={href} className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300">
    <span className="text-blue-600 mr-2">{icon}</span>
    <span className="text-gray-700">{text}</span>
  </a>
);

export const SocialButton = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
     className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300">
    <span className="text-gray-700 hover:text-blue-600">{icon}</span>
  </a>
);
EOF

cat > src/components/shared/TechBadge.jsx << 'EOF'
import React from 'react';

export const TechBadge = ({ text }) => (
  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">
    {text}
  </span>
);
EOF

# Create Experience Components
cat > src/components/experience/ExperienceCard.jsx << 'EOF'
import React from 'react';

const ExperienceCard = ({ company, location, role, period, points }) => (
  <div className="mb-8 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="text-xl font-semibold text-gray-800">{company}</h4>
        <p className="text-gray-600">{location}</p>
      </div>
      <div className="text-right">
        <p className="text-blue-600 font-medium">{role}</p>
        <p className="text-gray-500 text-sm">{period}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {points.map((point, idx) => (
        <li key={idx} className="text-gray-700 flex items-start">
          <span className="text-blue-600 mr-2">•</span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
EOF

cat > src/components/experience/ExperienceSection.jsx << 'EOF'
import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from '../layout/Section';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../utils/constants';

const ExperienceSection = () => (
  <Section title="Professional Experience" icon={<Briefcase className="w-6 h-6" />} defaultExpanded={true}>
    {experienceData.map((exp, idx) => (
      <ExperienceCard key={idx} {...exp} />
    ))}
  </Section>
);

export default ExperienceSection;
EOF

# Create Research Components...
EOF

# Create Research Components
cat > src/components/research/ResearchHighlight.jsx << 'EOF'
import React from 'react';

const ResearchHighlight = ({ title, metrics, description }) => (
  <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm mb-6 hover:shadow-md transition-all duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="grid md:grid-cols-2 gap-4 mb-4">
      {metrics.map((metric, idx) => (
        <div key={idx} className="p-3 bg-white rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">{metric.label}</div>
          <div className="text-lg font-semibold text-blue-600">{metric.value}</div>
        </div>
      ))}
    </div>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default ResearchHighlight;
EOF

cat > src/components/research/ResearchSection.jsx << 'EOF'
import React from 'react';
import { Award } from 'lucide-react';
import Section from '../layout/Section';
import ResearchHighlight from './ResearchHighlight';
import { researchData } from '../../utils/constants';

const ResearchSection = () => (
  <Section title="Research Highlights" icon={<Award className="w-6 h-6" />} defaultExpanded={true}>
    <div className="grid md:grid-cols-2 gap-6">
      {researchData.map((research, idx) => (
        <ResearchHighlight key={idx} {...research} />
      ))}
    </div>
  </Section>
);

export default ResearchSection;
EOF

# Create Publications Components
cat > src/components/publications/Publication.jsx << 'EOF'
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Publication = ({ title, type, status, doi, published, authors, journal, conference, link }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm mb-6 hover:shadow-md transition-all duration-300">
    <h5 className="text-lg font-semibold text-gray-800 mb-3">{title}</h5>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <p className="text-sm"><span className="font-medium text-gray-700">Type:</span> {type}</p>
        <p className="text-sm"><span className="font-medium text-gray-700">Status:</span> {status}</p>
        <p className="text-sm"><span className="font-medium text-gray-700">Published:</span> {published}</p>
      </div>
      <div className="space-y-2">
        {journal && <p className="text-sm"><span className="font-medium text-gray-700">Journal:</span> {journal}</p>}
        {conference && <p className="text-sm"><span className="font-medium text-gray-700">Conference:</span> {conference}</p>}
        <p className="text-sm"><span className="font-medium text-gray-700">Author(s):</span> {authors}</p>
      </div>
    </div>
    {doi && (
      <a href={link} target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 transition-colors">
        <span className="mr-2">View Publication</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    )}
  </div>
);

export default Publication;
EOF

cat > src/components/publications/PublicationsSection.jsx << 'EOF'
import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../layout/Section';
import Publication from './Publication';
import { publicationsData } from '../../utils/constants';

const PublicationsSection = () => (
  <Section title="Publications" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
    <div className="space-y-6">
      {publicationsData.map((pub, idx) => (
        <Publication key={idx} {...pub} />
      ))}
    </div>
  </Section>
);

export default PublicationsSection;
EOF

# Create Datasets Components...
EOF

# Create Datasets Components
cat > src/components/datasets/DatasetLink.jsx << 'EOF'
import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const DatasetLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
     className="block p-4 mb-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-blue-600">
    <div className="flex items-center">
      <BookOpen className="w-5 h-5 mr-3" />
      {children}
      <ExternalLink className="w-4 h-4 ml-auto" />
    </div>
  </a>
);

export default DatasetLink;
EOF

cat > src/components/datasets/DatasetsSection.jsx << 'EOF'
import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../layout/Section';
import DatasetLink from './DatasetLink';
import { datasetsData } from '../../utils/constants';

const DatasetsSection = () => (
  <Section title="Datasets" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
    <div className="space-y-4">
      {datasetsData.map((dataset, idx) => (
        <DatasetLink key={idx} href={dataset.href}>
          {dataset.title}
        </DatasetLink>
      ))}
    </div>
  </Section>
);

export default DatasetsSection;
EOF

# Create Education Components
cat > src/components/education/EducationItem.jsx << 'EOF'
import React from 'react';

const EducationItem = ({ degree, institution, period }) => (
  <div className="mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-semibold text-gray-800">{degree}</h4>
    <p className="text-gray-600">{institution}</p>
    <p className="text-sm text-gray-500">{period}</p>
  </div>
);

export default EducationItem;
EOF

cat > src/components/education/EducationSection.jsx << 'EOF'
import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../layout/Section';
import EducationItem from './EducationItem';
import { educationData } from '../../utils/constants';

const EducationSection = () => (
  <Section title="Education" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
    <div className="space-y-4">
      {educationData.map((edu, idx) => (
        <EducationItem key={idx} {...edu} />
      ))}
    </div>
  </Section>
);

export default EducationSection;
EOF

# Create Constants File
cat > src/utils/constants.js << 'EOF'
export const experienceData = [
  {
    company: "Lamar University",
    location: "Beaumont, TX",
    role: "Computer Vision Researcher",
    period: "June 2023 - Dec 2024",
    points: [
      "Developed multi-sensor fusion systems integrating camera, LiDAR, radar, and RFID data for customer behavior analysis",
      "Engineered production ML systems with 98.9% accuracy and optimized inference time by 15% using Pinecone and FAISS",
      "Designed optimal camera placement strategies, implemented calibration pipelines, and automated drift detection",
      "Created innovative retail analytics solutions using computer vision and deep learning techniques"
    ]
  },
  {
    company: "Medtronic",
    location: "Santa Rosa, CA",
    role: "Sr. ML Software Engineer",
    period: "Oct 2022 - June 2023",
    points: [
      "Led development of TMVR product line through advanced computer vision applications",
      "Implemented deep learning models for medical imagery analysis using TensorFlow and PyTorch",
      "Optimized algorithms for real-time performance on embedded systems",
      "Developed automated quality control systems for medical-grade imaging"
    ]
  },
  {
    company: "Stryker",
    location: "Mahwah, NJ",
    role: "Software Engineer",
    period: "Jun 2020 - Sep 2022",
    points: [
      "Developed computer vision algorithms improving manufacturing quality inspection accuracy by 30%",
      "Implemented automated camera calibration procedures for inspection systems",
      "Created comprehensive technical documentation and specifications",
      "Utilized Google Cloud Platform for large-scale medical dataset processing"
    ]
  }
];

export const researchData = [
  {
    title: "Multi-View Deep Learning for Retail Object Detection",
    metrics: [
      { label: 'mAP Accuracy', value: '98.9%' },
      { label: 'FPS', value: '45-55' },
      { label: 'Product Classes', value: '538' },
      { label: 'Inference Time Reduction', value: '15%' }
    ],
    description: "Developed a novel approach to object detection combining YOLO and vector databases for retail inventory management."
  },
  {
    title: "Smart Sustainable Cooling System",
    metrics: [
      { label: 'Energy Reduction', value: '80%' },
      { label: 'Prediction Accuracy', value: '94%' },
      { label: 'Temp Reduction', value: '12-15°C' },
      { label: 'System Uptime', value: '95%' }
    ],
    description: "Designed a sustainable cooling system leveraging deep learning for efficient temperature control."
  }
];

export const publicationsData = [
  {
    title: "Multi-Modal Product Recognition in Retail Environments",
    type: "Article",
    status: "Full-text available",
    doi: "10.30574/wjarr.2025.25.1.0122",
    published: "January 2025",
    authors: "Saumil Patel",
    journal: "World Journal of Advanced Research and Reviews",
    link: "https://doi.org/10.30574/wjarr.2025.25.1.0122"
  },
  {
    title: "MultiModal Product Classification Using YOLO and OCR Fusion",
    type: "Preprint",
    status: "File available",
    doi: "10.13140/RG.2.2.16650.38089",
    published: "December 2024",
    authors: "Saumil Patel",
    link: "https://doi.org/10.13140/RG.2.2.16650.38089"
  }
];

export const datasetsData = [
  {
    title: "Grocery Dataset",
    href: "https://universe.roboflow.com/lamar-university-venef/grocery-rfn8l"
  },
  {
    title: "Liquor Dataset",
    href: "https://universe.roboflow.com/lamar-university-venef/liquor-data"
  },
  {
    title: "Retail Products Dataset",
    href: "https://universe.roboflow.com/lamar-university-venef/retail-products-vem9o"
  },
  {
    title: "Key Detection Dataset",
    href: "https://universe.roboflow.com/lamar-university-venef/key-detection-v33ru"
  }
];

export const educationData = [
  {
    degree: "Doctor of Engineering in Industrial and Systems Engineering",
    institution: "Lamar University, Beaumont TX",
    period: "Aug 2021 – Dec 2024"
  },
  {
    degree: "Master of Engineering Science in Industrial and Systems Engineering",
    institution: "Lamar University, Beaumont TX",
    period: "Jan 2017 – Aug 2021"
  },
  {
    degree: "Master of Business Administration in Project Management",
    institution: "Northwestern Polytechnic University, Fremont, CA",
    period: "Aug 2014 – Dec 2015"
  },
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    institution: "Gujarat Technological University, Ahmedabad, India",
    period: "Sep 2009 – Aug 2013"
  }
];
EOF

# Create Global Styles
cat > src/styles/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #2563eb;
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
}

body {
  @apply antialiased text-gray-800;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full hover:bg-gray-400 transition-colors;
}

:focus {
  @apply outline-none ring-2 ring-blue-500 ring-offset-2;
}

.transition-all {
  @apply duration-300 ease-in-out;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-sans;
}

a {
  @apply transition-colors duration-200;
}

.container {
  @apply px-4 mx-auto;
  max-width: 1280px;
}
EOF

# Create main App file
cat > src/App.jsx << 'EOF'
import React from 'react';
import Header from './components/layout/Header';
import ExperienceSection from './components/experience/ExperienceSection';
import ResearchSection from './components/research/ResearchSection';
import PublicationsSection from './components/publications/PublicationsSection';
import DatasetsSection from './components/datasets/DatasetsSection';
import EducationSection from './components/education/EducationSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Header />
        <main className="space-y-8">
          <ExperienceSection />
          <ResearchSection />
          <PublicationsSection />
          <DatasetsSection />
          <EducationSection />
        </main>
      </div>
    </div>
  );
};

export default App;
EOF

# Create index.js
cat > src/index.js << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

echo "✅ Setup completed successfully!"
echo "To start the development server, run:"
echo "npm start"
EOF