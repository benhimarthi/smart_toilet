// components/SponsorsSection.tsx
import React from 'react';
import { ContentData, Language, Sponsor } from '../types';

interface SponsorsSectionProps {
  content: ContentData;
  language: Language;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ content, language }) => {
  const t = content[language];

  // Données des sponsors
  const sponsors: Sponsor[] = [
    { id: 1, name: 'Partner 1', logo: 'LOGO' },
    { id: 2, name: 'Partner 2', logo: 'LOGO' },
    { id: 3, name: 'Partner 3', logo: 'LOGO' },
    { id: 4, name: 'Partner 4', logo: 'LOGO' },
    { id: 5, name: 'Partner 5', logo: 'LOGO' },
    { id: 6, name: 'Partner 6', logo: 'LOGO' },
  ];

  return (
    <section className="py-20 bg-amber-50/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4 drop-shadow-md">
            {t.sponsors.title}
          </h2>
          <p className="text-xl text-amber-800 font-medium">
            {t.sponsors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-xl transition-all hover:scale-105 border border-amber-200 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Sponsor: ${sponsor.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // Handle sponsor click
                  console.log(`Clicked on ${sponsor.name}`);
                }
              }}
            >
              <div className="text-2xl font-bold text-amber-600 drop-shadow-sm">
                {sponsor.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;