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
