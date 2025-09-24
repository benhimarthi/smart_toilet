// components/LastEventsSection.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentData, Language, Event } from '../types';

interface LastEventsSectionProps {
  content: ContentData;
  language: Language;
}

const LastEventsSection: React.FC<LastEventsSectionProps> = ({ content, language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const t = content[language];

  // Données des événements précédents
  const lastEvents: Event[] = [
    { id: 1, year: '2024', location: 'Dubai', image: '/api/placeholder/300/200' },
    { id: 2, year: '2023', location: 'Casablanca', image: '/api/placeholder/300/200' },
    { id: 3, year: '2022', location: 'Lagos', image: '/api/placeholder/300/200' },
    { id: 4, year: '2021', location: 'Cape Town', image: '/api/placeholder/300/200' },
  ];

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % lastEvents.length);
  }, [lastEvents.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + lastEvents.length) % lastEvents.length);
  }, [lastEvents.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  // Auto-rotation pour les images
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section className="py-20 bg-amber-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4 drop-shadow-md">
            {t.lastEvents.title}
          </h2>
          <p className="text-xl text-amber-800 font-medium">
            {t.lastEvents.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-amber-300">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {lastEvents.map((event) => (
                <div key={event.id} className="w-full flex-shrink-0">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 drop-shadow-lg">📸</div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        {event.year} - {event.location}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-100/90 hover:bg-amber-100 p-3 rounded-full shadow-xl transition-all border border-amber-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-amber-800" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-100/90 hover:bg-amber-100 p-3 rounded-full shadow-xl transition-all border border-amber-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-amber-800" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {lastEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors border-2 ${
                  currentImageIndex === index 
                    ? 'bg-amber-600 border-amber-600' 
                    : 'bg-amber-200 border-amber-400 hover:bg-amber-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastEventsSection;