// components/HeroSection.tsx
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { ContentData, Language } from '../types/';
interface HeroSectionProps {
  content: ContentData;
  language: Language;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content, language }) => {
  const t = content[language];

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-amber-800/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-amber-50 leading-tight drop-shadow-lg">
                {t.hero.tagline}
              </h2>
              <p className="text-xl text-amber-100 leading-relaxed drop-shadow-md">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 shadow-2xl">
                {t.hero.cta}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-amber-100">
              <div className="flex items-center gap-2 bg-amber-800/50 rounded-full px-4 py-2 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-amber-300" />
                <span className="font-semibold">{t.hero.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-800/50 rounded-full px-4 py-2 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="font-semibold">{t.hero.location}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400/90 to-amber-600/90 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform backdrop-blur-sm">
              <div className="bg-white/95 rounded-2xl p-6 text-center shadow-inner">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className="text-6xl drop-shadow-md">🚽</div>
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Smart Toilet 2025</h3>
                <p className="text-amber-700 font-medium">IoT Enabled • Eco-Friendly • Health Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;