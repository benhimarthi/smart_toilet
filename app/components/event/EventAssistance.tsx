'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import DotPattern from '../DotPattern';

const EventAssistance = () => {
  return (
    <motion.section
      id="contact"
      className="relative w-full bg-white py-20 lg:py-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute top-0 left-0 -z-0">
          <DotPattern dotRadius={1.5} dotColor='rgba(109, 40, 217, 0.2)'/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.button
          
          className="bg-[#4A2E22]/55 text-white font-semibold py-2 px-6 rounded-full text-sm mb-6 shadow-sm"
        >
          Contact The Eventor Sales Team
        </motion.button>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2E22] mb-4">
          We are here when you need us.
        </h2>
        <p className="text-xl text-gray-800 mb-12">
          Need immediate assistance?
        </p>

        <div className="bg-white rounded-2xl shadow-[20px_20px_40px_rgba(120,60,1,0.25)] p-8 lg:p-12 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Info Panel */}
            <div className="lg:col-span-1 bg-gradient-to-br from-[#f67c09]/55 to-[#4A2E22] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f67c09]/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#f67c09]/30 rounded-full blur-2xl"></div>

                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="text-[#4A2E22] mb-8">Get in touch and let us know how we can help.</p>

                <div className="space-y-6">
                    <div className="flex items-center p-4 border border-white/20 rounded-lg">
                        <Mail className="w-6 h-6 text-[#4A2E22]/55 mr-4" />
                        <span>conference@smart.com</span>
                    </div>
                    <div className="flex items-center p-4 border border-white/20 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#4A2E22]/55 mr-4" />
                        <span>1000 S Eighth Ave, NYC.</span>
                    </div>
                     <div className="flex items-center p-4 border border-white/20 rounded-lg">
                        <Phone className="w-6 h-6 text-[#4A2E22]/55 mr-4" />
                        <span>+212 456-7890</span>
                    </div>
                </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-2">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 text-left mb-2">First Name</label>
                    <input type="text" id="first-name" placeholder="Your First Name" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4A2E22] focus:outline-none"/>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 text-left mb-2">Last Name</label>
                    <input type="text" id="last-name" placeholder="Your Last Name" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4A2E22] focus:outline-none"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mb-2">Email address</label>
                    <input type="email" id="email" placeholder="Enter Email" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4A2E22] focus:outline-none"/>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 text-left mb-2">Subject</label>
                    <input type="text" id="subject" placeholder="Your Subject" className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4A2E22] focus:outline-none"/>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 text-left mb-2">Comment</label>
                  <textarea id="comment" placeholder="Your Comment" rows={5} className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4A2E22] focus:outline-none"></textarea>
                </div>
                <div className="mt-8 text-right">
                   <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#4A2E22] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EventAssistance;
