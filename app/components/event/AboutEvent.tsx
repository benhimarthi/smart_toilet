'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import DotPattern from '../DotPattern';
import RegistrationForm from '../RegistrationForm';

// --- SVG for the Play Icon ---
const PlayIcon = () => (
    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 14L0.5 27.7224L0.5 0.277568L23 14Z" fill="#4A2E22"/>
    </svg>
);

// --- Main AboutEvent Component ---
const AboutEvent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openPopup = (url: string) => {
        setVideoUrl(url);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setVideoUrl('');
    };

    const DUMMY_VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    return (
        <section id="about" className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-white to-pink-100"></div>

            {/* Decorative Dots */}
            <motion.div 
                className="text-[208px] font-bold text-white/45 absolute top-[10px] left-[600px] -translate-x-1/2 -translate-y-1/2"
                animate={{ x: [-30, 30] }}
                transition={{
                    ease: "linear",
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <DotPattern height='180px' dotRadius={2} dotColor='rgba(183, 118, 58, 0.51)'/>
            </motion.div>
            <motion.div 
                className="text-[208px] font-bold text-white/45 absolute top-[450px] left-[1360px] -translate-x-1/2 -translate-y-1/2"
                animate={{ x: [-30, 30] }}
                transition={{
                    ease: "linear",
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <DotPattern width='190px' dotRadius={2} dotColor='rgba(183, 118, 58, 0.51)'/>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column: Images */}
                <div className="bg-red/55 brelative flex justify-center items-center lg:h-[500px]">
                    <div className="relative w-[70%] lg:w-full h-auto">
                        <img 
                            src="/images/speaker.jpg" // Main speaker image
                            alt="Expert speaker at a conference"
                            height={350}
                            width={350}
                            className="rounded-3xl shadow-2xl object-cover animate-float"
                        />
                        <div className="absolute -bottom-10 -right-10 w-[60%] h-[220px] bg-black rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                            <img 
                                src="/images/conf.jpg" // Video thumbnail image
                                alt="Conference session in progress"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <button 
                                    onClick={() => openPopup(DUMMY_VIDEO_URL)}
                                    className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform" aria-label="Play video">
                                    <PlayIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="flex flex-col space-y-8 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2E22] leading-tight">
                        Be inspired by expert speakers in design, video, and more
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Plan your week to make the most of all the sessions and labs, Community Smart toilet activities, and fun ways to connect with other creatives.
                    </p>

                    <div className="flex justify-center lg:justify-start space-x-12 pt-4">
                        <div className="text-start px-10">
                            <p className="text-5xl font-bold text-[#f67c09]">07</p>
                            <p className="text-gray-800 font-bold text-2xl">Days Event</p>
                        </div>
                        <div className="text-start px-10">
                            <p className="text-5xl font-bold text-[#f67c09]">20+</p>
                            <p className="text-gray-800 font-bold text-2xl">Speakers</p>
                        </div>
                    </div>

                    <div className="pt-6 flex justify-center lg:justify-start">
                        <RegistrationForm />
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    <div className="relative w-full max-w-4xl h-full max-h-[500px] bg-black">
                        <button
                            onClick={closePopup}
                            className="absolute -top-10 right-0 text-white text-3xl font-bold z-10"
                        >
                            &times;
                        </button>
                        {/* YouTube video iframe will go here */}
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutEvent;
