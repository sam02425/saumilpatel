import React from 'react';

const EducationItem = ({ degree, institution, period }) => (
  <div className="mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
    <h4 className="text-lg font-semibold text-gray-800">{degree}</h4>
    <p className="text-gray-600">{institution}</p>
    <p className="text-sm text-gray-500">{period}</p>
  </div>
);

export default EducationItem;
