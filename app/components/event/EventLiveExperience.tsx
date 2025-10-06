"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import DotPattern from '../DotPattern';


// --- Data for the event cards ---
const events = [
    {
        date: 'October 01, 2025',
        title: 'Virtual Sessions. Live @youtube',
        imageUrl: '/images/img1.jpg', // Placeholder image
    },
    {
        date: 'October 02, 2025',
        title: 'Opening',
        imageUrl: '/images/img2.jpg', // Placeholder image
    },
    {
        date: 'October 03, 2025',
        title: 'Inspiration Art',
        imageUrl: '/images/img3.jpg', // Placeholder image
    },
];

// --- SVG for the Play Icon ---
const PlayIcon = () => (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 7L0.249999 13.9282L0.25 0.0717964L11.5 7Z" fill="white"/>
    </svg>
);

// --- Type definition for EventCard props ---
interface EventCardProps {
    date: string;
    title: string;
    imageUrl: string;
    index: number; // Index for animation delay
}

// --- Reusable Event Card Component ---
const EventCard: React.FC<EventCardProps> = ({ date, title, imageUrl, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            className="relative w-80 h-[400px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
        >
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="text-sm font-light">{date}</p>
                <p className="font-bold text-lg">{title}</p>
            </div>
            <div className="absolute bottom-5 right-5 bg-white/30 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:bg-white/50 transition-colors">
                <PlayIcon />
            </div>
        </motion.div>
    );
};


// --- Main Event Live Experience Component ---
const EventLiveExperience = () => {
    const [timeLeft, setTimeLeft] = useState({
            days: '05',
            hours: '23',
            minutes: '15',
            seconds: '06',
    });
    return (
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
            {/* Background pattern - replace with your actual pattern image */}
            <div 
                className="absolute inset-0 bg-repeat bg-center opacity-20"
                style={{ backgroundImage: "url('/images/bg-pattern-circles.png')" }}
            ></div>

            <div className="relative flex flex-col items-center z-20">
                <div className="bg-[#6A3A25]/70 text-white text-xs rounded-full px-5 py-2 mb-8 shadow-md">
                    welcome to smart toilet event 2025
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E22] text-center max-w-4xl leading-tight">
                    The conference on the smart toilet, and engineering is focused on programming topics
                </h1>

                <p className="mt-6 text-center text-[#4A2E22]/80 max-w-3xl mx-auto text-lg">
                    Eventor Collaborative, brought to you by IBM, Google and AWS, is where the most inventive and forward-thinking nonprofit leaders come together to discover emerging trends in fundraising and technology.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} index={index} />
                    ))}
                </div>
            </div>
            <motion.div 
                className="text-[208px] font-bold text-white/45 absolute top-[790px] left-[215px] -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{ x: [-50, 50] }}
                transition={{
                    ease: "linear",
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <DotPattern width='180px' dotRadius={2} dotColor='rgba(161, 128, 66, 0.37)'/>
            </motion.div>
        </div>
    );
};

export default EventLiveExperience;