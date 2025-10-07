
"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import DotPattern from '../DotPattern';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/app/components/ui/dialog";


// --- TypeScript Interfaces ---
interface Speaker {
    name: string;
    date: string;
    time: string;
    title: string;
    description: string;
    imageUrl: string;
}

interface DayTabProps {
    day: number;
    isActive: boolean;
    onClick: () => void;
}

interface SpeakerCardProps {
    speaker: Speaker;
    onSpeakerClick: (speaker: Speaker) => void;
}

interface SpeakerDetailsDialogProps {
    speaker: Speaker | null;
    onClose: () => void;
}

// --- Dummy Data ---
const speakerSchedule: Record<number, Speaker[]> = {
    1: [
        { name: 'Franck Frackline', date: 'October 01, 2025', time: '08:00 - 08:45', title: 'Presentation and Keynotes', description: 'Discover the latest trends in creativity and get inspired by creative leaders. This session will cover the future of AI in design, sustainable creativity, and how to foster a culture of innovation in your team.', imageUrl: '/images/goku_ghibli.jpg' },
        { name: 'Thomas Smith', date: 'October 01, 2025', time: '09:00 - 18:45', title: 'Presentation and Keynotes', description: 'A deep dive into the practical applications of creative technology. Learn from case studies and live demos on how to integrate new tech into your workflow for maximum impact.', imageUrl: '/images/c17_ghibli.jpg' },
        { name: 'Another Speaker', date: 'October 01, 2025', time: '12:00 - 13:05', title: 'Presentation and Keynotes', description: 'Join us for a fireside chat with industry pioneers. This interactive session will explore the challenges and triumphs of a creative career, with plenty of time for audience Q&A.', imageUrl: '/images/inc_ghibli.jpg' },
    ],
    2: [ // Add speakers for Day 2 here
    ],
    3: [],
    4: [],
    5: [],
};

const days = [1, 2, 3, 4, 5];

// --- DayTab Component ---
const DayTab: React.FC<DayTabProps> = ({ day, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-green-500' : 'text-gray-500 hover:text-gray-700'}`}>
        Day 0{day}
        {isActive && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></span>}
    </button>
);

// --- SpeakerCard Component ---
const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onSpeakerClick }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 transition-shadow duration-300 hover:shadow-[20px_20px_40px_rgba(120,60,1,0.25)] cursor-pointer"
            onClick={() => onSpeakerClick(speaker)}
        >
            <img src={speaker.imageUrl} alt={speaker.name} className="w-24 h-24 rounded-full object-cover border-4 border-white" />
            <div className="flex-grow text-center sm:text-left">
                <p className="text-gray-600 font-semibold">{speaker.name}</p>
                <p className="font-bold text-gray-800">{speaker.date}</p>
                <p className="text-gray-800">{speaker.time}</p>
            </div>
            <div className="flex-grow-[2] text-center sm:text-left">
                <p className="font-bold text-[#f67c09]">{speaker.title}</p>
                <p className="text-gray-600 text-sm">
                    {speaker.description.substring(0, 100)}... <span className="text-[#f67c09] font-semibold hover:underline">Read more</span>
                </p>
            </div>
        </motion.div>
    );
};

// --- SpeakerDetailsDialog Component ---
const SpeakerDetailsDialog: React.FC<SpeakerDetailsDialogProps> = ({ speaker, onClose }) => {
    if (!speaker) return null;

    return (
        <Dialog open={!!speaker} onOpenChange={onClose}>
            <DialogContent className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full mx-4 sm:mx-0">
                <DialogHeader>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <img src={speaker.imageUrl} alt={speaker.name} className="w-32 h-32 rounded-full object-cover border-4 border-white" />
                        <div className="text-center sm:text-left">
                            <DialogTitle className="text-2xl font-bold text-[#4A2E22]">{speaker.name}</DialogTitle>
                            <p className="text-gray-600">{speaker.date} at {speaker.time}</p>
                        </div>
                    </div>
                </DialogHeader>
                <div className="mt-6">
                    <h3 className="font-bold text-lg text-[#f67c09] mb-2">{speaker.title}</h3>
                    <DialogDescription className="text-gray-700 leading-relaxed">
                        {speaker.description}
                    </DialogDescription>
                </div>
            </DialogContent>
        </Dialog>
    );
};


// --- Main EventSpeaker Component ---
const EventSpeaker = () => {
    const [activeDay, setActiveDay] = useState(1);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const activeSpeakers = speakerSchedule[activeDay] || [];

    const handleSpeakerClick = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
    };

    const handleCloseDialog = () => {
        setSelectedSpeaker(null);
    };

    return (
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-repeat bg-center opacity-20"
                style={{ backgroundImage: "url('/images/bg-pattern-circles.png')" }}
            ></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto z-20">
                <div className="bg-[#6A3A25]/55 text-white text-xs rounded-full px-5 py-2 mb-8 shadow-md">
                    welcome to smart toilet event 2025
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E22] text-center leading-tight mb-8">
                    An environment where participants and experts can exchange ideas and experiences
                </h1>

                <div className='bg-white w-full flex flex-col items-center justify-center p-10 z-10 relative shadow-[20px_20px_40px_rgba(120,60,1,0.25)] rounded-lg'>
                    <div className="flex justify-center mb-12">
                        {days.map(day => (
                            <DayTab key={day} day={day} isActive={activeDay === day} onClick={() => setActiveDay(day)} />
                        ))}
                    </div>

                    <div className="w-full space-y-6">
                        {activeSpeakers.length > 0 ? (
                            activeSpeakers.map((speaker, index) => (
                                <SpeakerCard key={index} speaker={speaker} onSpeakerClick={handleSpeakerClick} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No speakers scheduled for this day.</p>
                        )}
                    </div>
                </div>
            </div>
            <motion.div
                className="text-[208px] font-bold text-white/45 absolute top-[760px] left-[1505px] -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{ x: [-50, 50] }}
                transition={{
                    ease: "linear",
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <DotPattern height='180px' dotRadius={1} dotColor='rgba(161, 128, 66, 0.82)' />
            </motion.div>

            <SpeakerDetailsDialog speaker={selectedSpeaker} onClose={handleCloseDialog} />

        </div>
    );
};

export default EventSpeaker;
