
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import DotPattern from '../DotPattern';
import RegistrationForm from '../RegistrationForm';

const EventHome = () => {
    //  Dummy countdown state
    const [timeLeft, setTimeLeft] = useState({
        days: '05',
        hours: '23',
        minutes: '15',
        seconds: '06',
    });

    return (
        <div id="home" className="h-screen w-full" >
            <div className="flex flex-col items-center justify-center h-full bg-black/30 backdrop-blur-sm text-white">

                <div className='w-full h-4/5 lg:pl-40 flex flex-col md:flex-row lg:flex-row lg:items-center justify-start md:justify-around rounded-lg p-4 z-10 relative'>
                    <div className="relative z-10">
                        <h1 className="text-2xl lg:text-7xl font-bold mb-4 text-white">
                            Conferance on <br/> Smart toilet</h1>
                        <p className="mb-8 text-[#4A2E22] text-xl lg:text-3xl">
                            Join us for the First 2025 smart toilet Event <br />
                            Live event on September 2025
                        </p>
                        <RegistrationForm/>
                    </div>
                    
                    <motion.div 
                        className="text-[208px] font-bold text-white/45 top-1/2 left-[75px] -translate-x-1/2 -translate-y-1/2"
                        animate={{ x: [-20, 20] }}
                        transition={{
                            ease: "linear",
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        <div className='w-[320px] lg:w-[350px] h-[300px] lg:h-[300px] rounded-full flex items-center justify-center'>
                            <img src="images/smart_toilet_image.png" alt="img" className='w-full h-full object-cover'/>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="text-4xl md:text-8xl lg:text-[150px] font-bold text-white/30 absolute top-[200px] md:top-1/2 left-[75px] -translate-x-1/2 -translate-y-1/2"
                        animate={{ x: [-20, 20] }}
                        transition={{
                            ease: "linear",
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        CONF-2025
                    </motion.div>
                    <motion.div 
                        className="text-[208px] font-bold text-white/45 absolute top-[400px] md:top-[250px] left-0 lg:left-[700px] -translate-x-1/2 -translate-y-1/2"
                        animate={{ x: [-80, 80] }}
                        transition={{
                            ease: "linear",
                            duration: 18,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        <DotPattern height='170px' dotRadius={1} dotColor='rgba(255, 255, 255, 0.82)'/>
                    </motion.div>
                    <motion.div 
                        className="text-[208px] font-bold text-white/45 absolute top-[50px] left-[75px] -translate-x-1/2 -translate-y-1/2"
                        animate={{ x: [-80, 80] }}
                        transition={{
                            ease: "linear",
                            duration: 18,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        <DotPattern width='180px' dotRadius={1} dotColor='white'/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EventHome;
// shadow-[0px_0px_40px_45px_rgba(120,60,1,0.25)]