import React from 'react';

export const TechBadge = ({ text }) => (
  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">
    {text}
  </span>
);
