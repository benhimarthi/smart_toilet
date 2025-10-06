'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/w_conf.jpg',
    alt: 'Woman working on a laptop at the conference',
  },
  {
    src: '/images/conferencial.jpg',
    alt: 'Speaker presenting on stage with a chart',
  },
  {
    src: '/images/s_conf.jpg',
    alt: 'Attendees applauding at the event',
  },
];

const EventSouvenirs = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#4A2E22]/55 text-white font-semibold py-2 px-6 rounded-full text-sm mb-6 shadow-sm"
        >
          Visit Our Latest Events Gallery
        </motion.button>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2E22] mb-12 max-w-3xl mx-auto">
          Relive the best moments from the Conference 2022 through video and photos in our gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg h-80"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default EventSouvenirs;
