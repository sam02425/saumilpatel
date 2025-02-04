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
