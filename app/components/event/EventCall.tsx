'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import DotPattern from '../DotPattern';

// --- Main EventCall Component ---
const EventCall = () => {
    const ref = useRef(null);
    // Animate once when 20% of the component is in view
    const isInView = useInView(ref, {  amount: 0.2 });

    // Animation variants for the slide-in effect
    const containerVariants = {
        hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
        visible: { opacity: 1, x: 0 },    // Slide to final position
    };

    return (
        <div ref={ref} className="relative w-full bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            
            {/* Decorative Elements */}
            <div className='w-full h-[2px] bg-black/10 absolute top-0'>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8"
            >
                <div className='flex flex-col items-center justify-center relative z-10'>
                    {/* Main Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#4A2E22]">
                        The design, engineering, art, and science of programming
                    </h1>

                    {/* Subtitle */}
                    <div className='p-8'>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Join us for smart-toilet Collaborative: Virtual and live Sessions on October 2025
                        </p>
                    </div>

                    {/* Email Form */}
                    <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4 mt-4 ">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-6 py-4 rounded-full border-none bg-black/10 backdrop-blur-sm shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto flex-shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-[#4A2E22]/45 to-[#4A2E22] text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <motion.div 
                    className="text-[208px] font-bold text-white/45 absolute top-0 left-[900px] -translate-x-1/2 -translate-y-1/2"
                    animate={{ x: [-50, 50] }}
                    transition={{
                        ease: "linear",
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                >
                    <DotPattern width='180px' dotRadius={2} dotColor='rgba(183, 118, 58, 0.51)'/>
                </motion.div>
                <motion.div 
                    className="text-[208px] font-bold text-white/45 absolute top-0 left-[0px] -translate-x-1/2 -translate-y-1/2"
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
            </motion.div>
        </div>
    );
};

export default EventCall;
