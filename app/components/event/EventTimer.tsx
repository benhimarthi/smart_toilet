'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import DotPattern from '../DotPattern';

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const EventTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

    const contactRef = useRef(null);
    const isInView = useInView(contactRef, { amount: 0.3 });

    useEffect(() => {
        const calculateTimeLeft = (): TimeLeft => {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft: TimeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timerComponents = (
        <div className="flex space-x-2 md:space-x-4 md:space-x-8 lg:space-x-20 justify-center items-center">
            {Object.keys(timeLeft).length > 0 ? (
                <>
                    <div className="text-center bg-white rounded-lg p-4 w-20 md:w-32 lg:w-48 shadow-[20px_20px_40px_rgba(120,60,1,0.25)]">
                        <p className="text-4xl font-bold text-[#4A2E22]">{timeLeft.days}</p>
                        <p className="text-[#4A2E22]">Days</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4 w-20 md:w-32 lg:w-48 shadow-[20px_20px_40px_rgba(120,60,1,0.25)]">
                        <p className="text-4xl font-bold text-[#4A2E22]">{timeLeft.hours}</p>
                        <p className="text-[#4A2E22]">Hours</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4 w-20 md:w-32 lg:w-48 shadow-[20px_20px_40px_rgba(120,60,1,0.25)]">
                        <p className="text-4xl font-bold text-[#4A2E22]">{timeLeft.minutes}</p>
                        <p className="text-[#4A2E22]">Minutes</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4 w-20 md:w-32 lg:w-48 shadow-[20px_20px_40px_rgba(120,60,1,0.25)]">
                        <p className="text-4xl font-bold text-[#4A2E22]">{timeLeft.seconds}</p>
                        <p className="text-[#4A2E22]">Seconds</p>
                    </div>
                </>
            ) : (
                <p className="text-center text-lg text-[#4A2E22]">The event has started!</p>
            )}
        </div>
    );

    const contactVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='bg-white w-full flex flex-col items-center justify-center py-10 px-4 z-10 relative'>
            <motion.div 
                className="hidden lg:block text-[208px] font-bold text-white/45 absolute top-[30px] left-[1500px] -translate-x-1/2 -translate-y-1/2"
                animate={{ x: [-25, 25] }}
                transition={{
                    ease: "linear",
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <DotPattern height='80px' width='80px' dotRadius={1} dotColor='rgba(131, 89, 46, 0.4)'/>
            </motion.div>
            
            <div className="mb-12 z-10 absolute bottom-[220px] md:bottom-[110px]">
                {timerComponents}
            </div>

            <motion.div
                ref={contactRef}
                variants={contactVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative flex flex-col md:flex-row justify-around items-center w-full md:w-3/4 rounded-lg space-x-4 p-4 z-10 space-y-2 md:space-y-0"
            >
                <div className="flex items-center space-x-4 w-full  justify-center border border-[#4A2E22] w-[400px] rounded-lg p-4">
                    <span>
                        
                    </span>
                    <span>smart.toilet@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 w-full justify-center border border-[#4A2E22] w-[400px] rounded-lg p-4">
                    <span>
                        
                    </span>
                    <span>Av.arreda, agadir</span>
                </div>
                <div className="flex items-center space-x-4 w-full justify-center border border-[#4A2E22] w-[400px] rounded-lg p-4">
                    <span>
                        
                    </span>
                    <span>+212 625814623</span>
                </div>
            </motion.div>
        </div>
    );
};

export default EventTimer;
