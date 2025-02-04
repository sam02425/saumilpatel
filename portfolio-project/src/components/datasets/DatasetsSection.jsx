import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../layout/Section';
import DatasetLink from './DatasetLink';
import { datasetsData } from '../../utils/constants';

const DatasetsSection = () => (
  <Section title="Datasets" icon={<BookOpen className="w-6 h-6" />} defaultExpanded={true}>
    <div className="space-y-4">
      {datasetsData.map((dataset, idx) => (
        <DatasetLink key={idx} href={dataset.href}>
          {dataset.title}
        </DatasetLink>
      ))}
    </div>
  </Section>
);

export default DatasetsSection;
