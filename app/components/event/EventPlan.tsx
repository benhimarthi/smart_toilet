'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import DotPattern from '../DotPattern';

// --- Data Section ---
interface Speaker {
  name: string;
  title: string;
  image: string;
  socials?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

const speakers: Speaker[] = [
  {
    name: 'Stella Smith',
    title: 'smart toilet',
    image: '/images/goku_ghibli.jpg',
    socials: {
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
    }
  },
  {
    name: 'Andrew Johnson',
    title: 'smart toilet',
    image: '/images/c17_ghibli.jpg',
    socials: {
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
    }
  },
  {
    name: 'Nounou Caren',
    title: 'smart toilet',
    image: '/images/inc_ghibli.jpg',
    socials: {
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
    }
  },
];

// --- Icon Components ---
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
        </path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);


// --- Animated Speaker Card Sub-Component ---
const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const overlayVariants: Variants = {
        rest: { opacity: 0, y: "100%" },
        hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center space-y-4"
        >
            <motion.div
                className="relative w-64 h-80 bg-gray-200 rounded-3xl shadow-lg overflow-hidden"
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                <div className="relative w-full h-full">
                    <Image
                        src={speaker.image}
                        alt={`Photo of ${speaker.name}`}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                
                <motion.div
                    variants={overlayVariants}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm"
                    style={{ height: '30%' }}
                >
                    <div className="flex justify-evenly items-center h-full">
                        {speaker.socials?.linkedin && (
                            <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                                <LinkedInIcon />
                            </a>
                        )}
                        {speaker.socials?.facebook && (
                            <a href={speaker.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                                <FacebookIcon />
                            </a>
                        )}
                        {speaker.socials?.instagram && (
                            <a href={speaker.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                                <InstagramIcon />
                            </a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
            
            <h3 className="text-xl font-bold text-[#4A2E22]">{speaker.name}</h3>
            <p className="text-md text-gray-600">{speaker.title}</p>
        </motion.div>
    );
};


// --- Main EventPlan Component ---
const EventPlan = () => {
  return (
    <div id="speakers" className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
            className="absolute inset-0 bg-repeat bg-center opacity-30"
            style={{ backgroundImage: "url('/images/bg-pattern-circles.png')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center space-y-16">
            
            <div className="text-center space-y-12">
                <span className="bg-[#4A2E22]/55 text-white text-sm font-semibold py-2 px-5 rounded-full">
                    Meet Our Experts, and Speakers
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E22] max-w-4xl mx-auto leading-tight filter">
                    Meet our fantastic speakers from around the and join in with live debates & events
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full relative z-10">
                {speakers.map((speaker, index) => (
                    <SpeakerCard key={index} speaker={speaker} />
                ))}
            </div>
            <motion.div 
                className="text-[208px] font-bold text-white/45 absolute top-[300px] md:top-[150px] md:left-[1150px] -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [-50, 50] }}
                transition={{
                    ease: "linear",
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <DotPattern height='180px' dotRadius={2} dotColor='rgba(183, 118, 58, 0.51)'/>
            </motion.div>
        </div>
    </div>
  );
};

export default EventPlan;
