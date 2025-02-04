import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from '../layout/Section';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../utils/constants';

const ExperienceSection = () => (
  <Section title="Professional Experience" icon={<Briefcase className="w-6 h-6" />} defaultExpanded={true}>
    {experienceData.map((exp, idx) => (
      <ExperienceCard key={idx} {...exp} />
    ))}
  </Section>
);

export default ExperienceSection;
