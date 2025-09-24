// components/SpeakersSection.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentData, Language, Speaker } from '../types';

interface SpeakersSectionProps {
  content: ContentData;
  language: Language;
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ content, language }) => {
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState<number>(0);
  const t = content[language];

  // Données des speakers
  const speakers: Speaker[] = [
    { id: 1, name: 'Dr. Amina Hassan', title: 'Smart Sanitation Expert', image: '/api/placeholder/150/150' },
    { id: 2, name: 'Prof. Jean Kouame', title: 'Water Tech Innovation', image: '/api/placeholder/150/150' },
    { id: 3, name: 'Sarah Mohamed', title: 'IoT Solutions Director', image: '/api/placeholder/150/150' },
    { id: 4, name: 'Omar El Fassi', title: 'Sustainability Advocate', image: '/api/placeholder/150/150' },
    { id: 5, name: 'Dr. Fatima Benali', title: 'Public Health Specialist', image: '/api/placeholder/150/150' },
    { id: 6, name: 'Ahmed Traore', title: 'Tech Entrepreneur', image: '/api/placeholder/150/150' },
  ];

  const speakersPerPage = 4;

  const nextSpeaker = useCallback(() => {
    setCurrentSpeakerIndex((prev) => (prev + speakersPerPage) % speakers.length);
  }, [speakers.length]);

  const prevSpeaker = useCallback(() => {
    setCurrentSpeakerIndex((prev) => (prev - speakersPerPage + speakers.length) % speakers.length);
  }, [speakers.length]);

  // Auto-rotation pour les speakers
  useEffect(() => {
    const timer = setInterval(() => {
      nextSpeaker();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSpeaker]);

  return (
    <section id="speakers" className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t.speakers.title}
          </h2>
          <p className="text-xl opacity-90">
            {t.speakers.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSpeakerIndex * (100/speakersPerPage)}%)` }}
            >
              {speakers.map((speaker) => (
                <div key={speaker.id} className="w-1/4 flex-shrink-0 px-4">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                        <span className="text-3xl" role="img" aria-label="Professional">👨‍💼</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{speaker.name}</h3>
                    <p className="text-sm opacity-75">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSpeaker}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
            aria-label="Previous speakers"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSpeaker}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
            aria-label="Next speakers"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;