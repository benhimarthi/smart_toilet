'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DotPattern from '../DotPattern';

const EventStands = () => {
    return (
        <div 
            className="relative w-full  overflow-hidden"
            style={{
                backgroundImage: `url("/images/homepage.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
        >
            <div
                className="absolute inset-0 bg-repeat bg-center opacity-30 backdrop-blur-sm"
            ></div>

            <div className='w-full backdrop-blur-sm pt-8 relative'>
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:justify-start lg:gap-12 backdrop-blur-sm z-10">
                    
                    <div className="w-full md:w-5/12 flex-shrink-0 relative">
                        <Image
                            src="/images/std.png" 
                            alt="Illustration of a vendor stand for the event"
                            width={500}
                            height={500}
                            className="object-contain w-full drop-shadow-2xl"
                        />

                    </div>

                    <div className="w-full md:w-[950px] flex flex-col items-center md:items-start text-center md:text-left space-y-6 text-[#4A2E22]">
                        <h1 className="text-3xl lg:text-6xl font-bold filter text-[#4A2E22]">
                            Stand reservation
                        </h1>
                        <p className="text-lg max-w-lg filter text-gray-700">
                            Exposez vos produits devant un public ciblé. Choisissez un stand et réservez en quelques minutes.
                        </p>

                        <div className='flex flex-col lg:flex-row gap-8'>
                        <motion.div 
                            className=" gap-8 mb-16"
                            initial={{ opacity: 0, rotateY: -90 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full lg:w-[400px] w-[395px] ml-3 mr-3">
                                <div className="p-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-24 font-bold text-[#f67c09]">STAND STANDARD</h3>
                                        <p className="text-[#4A2E22] font-semibold">tarifs <span className="text-white bg-[#f67c09] px-4 py-1 rounded-full ml-2">MAD 200</span></p>
                                    </div>
                                    <p className="mt-4 text-black">inclus : 1 tables, 2 chaises, cloison arriere, eclairage basique</p>
                                </div>
                                <div className="bg-[#f67c09] text-white p-6 relative">
                                    <span className="absolute top-0 right-4 bg-white px-3 py-1 rounded-b-lg text-sm text-[#4A2E22] font-bold shadow-lg">3m x 3m</span>
                                    <h4 className="font-bold text-lg mb-2">Autre services inclus</h4>
                                    <ul className="list-disc list-inside">
                                        <li>2 badges exposants</li>
                                        <li>Mention dans le catalogue</li>
                                        <li>Accès conférences et ateliers</li>
                                        <li>Sécurité et nettoyage</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="gap-8 mb-16"
                            initial={{ opacity: 0, rotateY: -90 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="bg-white rounded-lg flex flex-col justify-between shadow-lg overflow-hidden w-full lg:w-[400px] w-[395px] ml-3 mr-3">
                                <div className="p-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-24 font-bold text-[#4A2E22]">STAND PREMIUM</h3>
                                        <p className="text-[#5F5300] font-semibold">tarifs <span className="text-white bg-[#4A2E22] px-4 py-1 rounded-full ml-2">MAD 500</span></p>
                                    </div>
                                    <p className="mt-4 text-black">inclus : mobilier, prise électrique, Wi-Fi, signalétique</p>
                                </div>
                                <div className="bg-[#4A2E22] text-white p-6 relative">
                                    <span className="absolute font-bold text-[#5F5300] top-0 right-4 bg-white px-3 py-1 rounded-b-lg text-sm shadow-lg">6m x 3m</span>
                                    <h4 className="font-bold text-lg mb-2">Autre services inclus</h4>
                                    <ul className="list-disc list-inside">
                                        <li>2 badges exposants</li>
                                        <li>Mention dans le catalogue</li>
                                        <li>Accès conférences et ateliers</li>
                                        <li>Sécurité et nettoyage</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        </div>
                        
                        <div className='pt-4 relative hidden'>
                            <button className="bg-[#4A2E22] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#38231a] transition-colors duration-300 tracking-wider">
                                RESERVE A STAND
                            </button>
                        </div>
                    </div>
                </div>
                <motion.div 
                    className="text-[208px] font-bold text-white/45 absolute top-[350px] left-[1700px] -translate-x-1/2 -translate-y-1/2"
                    animate={{ x: [-50, 50] }}
                    transition={{
                        ease: "linear",
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                >
                    <DotPattern width='180px' dotRadius={1} dotColor='rgba(255, 255, 255, 0.82)'/>
                </motion.div>
                <motion.div 
                    className="text-[208px] font-bold text-white/45 absolute top-[50px] left-[700px] -translate-x-1/2 -translate-y-1/2"
                    animate={{ x: [-50, 50] }}
                    transition={{
                        ease: "linear",
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                >
                    <DotPattern height='180px' dotRadius={1} dotColor='rgba(255, 255, 255, 0.82)'/>
                </motion.div>
            </div>
            
        </div>
    );
};

export default EventStands;