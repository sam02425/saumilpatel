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
