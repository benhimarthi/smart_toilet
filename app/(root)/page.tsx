'use client';
import React, { useState, useEffect, useRef } from 'react';
import Exhibition from '../components/Exhibition';
import ActivitiesSchedule from '../components/ActivitiesSchedule';
import About from '../components/About';
import Header from '../components/Header';
import { content } from '../data/content';
import { Language } from '../types';
import EventView from '../components/EventView';
import EventHome from '../components/event/EventHome';
import EventLiveExperience from '../components/event/EventLiveExperience';
import EventSpeaker from '../components/event/EventSpeaker';
import EventTimer from '../components/event/EventTimer';
import EventStands from '../components/event/EventStands';
import EventPlan from '../components/event/EventPlan';
import EventCall from '../components/event/EventCall';
import AboutEvent from '../components/event/AboutEvent';
import EventComment from '../components/event/EventComment';
import EventSouvenirs from '../components/event/EventSouvenirs';
import EventAssistance from '../components/event/EventAssistance';


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
      <Header 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen}
          />
      <div ref={scrollableContainerRef} className="w-full flex-grow overflow-y-auto flex flex-col items-center mx-auto p-0 relative">
        <div className='relative w-full'>
          <EventHome/>
          <EventTimer targetDate='2025-10-30T00:00:00'/>
          <EventLiveExperience/>
          <EventSpeaker/>
          <AboutEvent/>
        </div>
        
        <div className='bg-white w-full h-[1870px] bottom-0 absolute backdrop-blur-lg'>
          <div className='text-[70px] h-[150px] w-[150px] bg-[#EA9E3A] rounded-full absolute top-40 left-0'>
          </div>
          <img src='images/Vect3.png' alt='deco1' className="w-[300px] h-[350px] rounded-full object-cover border-4 border-white absolute bottom-[690px] right-0"/>
          <div className='bg-white/55 w-full h-[1870px] bottom-0 absolute backdrop-blur-[75px]'>
          </div>
        </div>
        <EventStands />
        <EventPlan />
        <EventCall />
        <EventSouvenirs />
        <EventAssistance />
        <EventComment />
      </div>
    </div>
  );
};

export default Page;

/**
 * <div className='lg:w-4/5 w-full mx-auto h-screen flex flex-col backdrop-blur-lg items-center ' 
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
 */