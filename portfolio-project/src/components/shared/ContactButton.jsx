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
