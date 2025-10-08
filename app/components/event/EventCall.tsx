'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import DotPattern from '../DotPattern';
import { db, sendEmail } from '../../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

// --- Main EventCall Component ---
const EventCall = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {  amount: 0.2 });

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const containerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Basic email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            // Save email to Firestore
            await addDoc(collection(db, "streamers"), {
                email: email,
                timestamp: new Date(),
            });

            // Send confirmation email
            await sendEmail(
                email,
                'Registration Confirmation',
                '<h1>Thank you for registering!</h1><p>You will receive a link to the event when it starts.</p>'
            );

            setStatus('success');
            setMessage('Thank you for registering! You will receive an email shortly.');
            setEmail('');
        } catch (error) {
            console.error('Error processing registration: ', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <div ref={ref} className="relative w-full bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className='w-full h-[2px] bg-black/10 absolute top-0'></div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8"
            >
                <div className='flex flex-col items-center justify-center relative z-10'>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#4A2E22]">
                        The design, engineering, art, and science of programming
                    </h1>
                    <div className='p-8'>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Join us for smart-toilet Collaborative: Virtual and live Sessions on October 2025
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4 mt-4 ">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-6 py-4 rounded-full border-none bg-black/10 backdrop-blur-sm shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            required
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full sm:w-auto flex-shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-[#4A2E22]/45 to-[#4A2E22] text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {status === 'loading' ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                    {message && (
                        <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                            {message}
                        </p>
                    )}
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
