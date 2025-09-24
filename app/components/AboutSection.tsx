// components/AboutSection.tsx
import React from 'react';
import { ContentData, Language } from '../types';

interface AboutSectionProps {
  content: ContentData;
  language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ content, language }) => {
  const t = content[language];

  return (
    <section id="about" className="py-20 bg-amber-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6 drop-shadow-md">
            {t.about.title}
          </h2>
          <p className="text-xl text-amber-800 leading-relaxed font-medium">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.about.stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-amber-50/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-amber-200"
            >
              <div className="text-4xl font-bold text-amber-700 mb-2 drop-shadow-sm">
                {stat.number}
              </div>
              <div className="text-amber-800 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;