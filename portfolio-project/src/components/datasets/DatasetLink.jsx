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
