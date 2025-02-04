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
