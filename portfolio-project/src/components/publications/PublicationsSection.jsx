import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../layout/Section';
import Publication from './Publication';
import { publicationsData } from '../../utils/constants';

const PublicationsSection = () => (
  <Section title="Publications" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
    <div className="space-y-6">
      {publicationsData.map((pub, idx) => (
        <Publication key={idx} {...pub} />
      ))}
    </div>
  </Section>
);

export default PublicationsSection;
