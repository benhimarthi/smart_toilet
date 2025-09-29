'use client';
import React, { useState, useEffect, useRef } from 'react';
import Exhibition from '../components/Exhibition';
import ActivitiesSchedule from '../components/ActivitiesSchedule';
import About from '../components/About';
import Header from '../components/Header';
import { content } from '../data/content';
import { Language } from '../types';

type View = 'exhibition' | 'activities' | 'about';

const Page: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<View>('exhibition');
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 2000);
    };

    const scrollableContainer = scrollableContainerRef.current;
    if (scrollableContainer) {
      scrollableContainer.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (scrollableContainer) {
        scrollableContainer.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(timeout);
    };
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case 'activities':
        return <ActivitiesSchedule />;
      case 'about':
        return <About />;
      case 'exhibition':
      default:
        return <Exhibition />;
    }
  };

  return (
    <div className='w-full h-screen' style={{
      backgroundImage: `url("/images/homepage.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div className='lg:w-4/5 w-full mx-auto h-screen flex flex-col backdrop-blur-lg items-center ' 
       style={{
      background: 'linear-gradient(to bottom,rgba(255, 255, 255, 0.2), #5F5300)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
        <Header 
            content={content} 
            language={language} 
            setLanguage={setLanguage} 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen}
            setActiveView={setActiveView}
          />
          <div ref={scrollableContainerRef} className="w-full flex-grow overflow-y-auto flex flex-col items-center mx-auto p-0">
            {renderContent()}
          </div>
      </div>
    </div>
  );
};

export default Page;