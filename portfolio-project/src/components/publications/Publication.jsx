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
