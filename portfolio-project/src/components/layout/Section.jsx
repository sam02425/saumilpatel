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
