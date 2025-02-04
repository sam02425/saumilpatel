import React from 'react';
import Header from './components/layout/Header';
import Introduction from './components/shared/Introduction';
import ExperienceSection from './components/experience/ExperienceSection';
import ResearchSection from './components/research/ResearchSection';
import PublicationsSection from './components/publications/PublicationsSection';
import DatasetsSection from './components/datasets/DatasetsSection';
import EducationSection from './components/education/EducationSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Header />
        <Introduction />
        <main className="space-y-8">
          <ExperienceSection />
          <ResearchSection />
          <PublicationsSection />
          <DatasetsSection />
          <EducationSection />
        </main>
      </div>
    </div>
  );
};

export default App;
