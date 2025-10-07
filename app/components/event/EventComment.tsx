'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DotPattern from '../DotPattern';
import EventFooter from './EventFooter';

const testimonials = [
  {
    quote: "Thank you for running the event so smoothly - I had a great time, not only presenting, but also watching other sessions and interacting with attendees.",
    name: "Stella Smith",
    title: "Eventor Live Max",
    image: "/images/c17_ghibli.jpg",
    rating: 5,
  },
  {
    quote: "Thank you for running the event so smoothly - I had a great time, not only presenting, but also watching other sessions and interacting with attendees.",
    name: "John Doe",
    title: "Eventor Live Max",
    image: "/images/goku_ghibli.jpg",
    rating: 5,
  },
  {
    quote: "Thank you for running the event so smoothly - I had a great time, not only presenting, but also watching other sessions and interacting with attendees.",
    name: "Jane Roe",
    title: "Eventor Live Max",
    image: "/images/inc_ghibli.jpg",
    rating: 5,
  },
    {
    quote: "A must-attend event for anyone in the industry. The quality of speakers and the overall experience was top-notch. Highly recommended.",
    name: "Peter Jones",
    title: "Innovate Corp",
    image: "/images/speaker.jpg",
    rating: 5,
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
  </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-transparent rounded-2xl shadow-lg mx-4 flex-shrink-0 w-[350px] flex flex-col items-center" style={{
        backgroundImage: `url("/images/smart_toilet_bg.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div className='bg-white p-2 rounded-t-lg'>
            <p className="text-gray-600 text-base  h-32 text-start">
                "{testimonial.quote}"
            </p>
        </div>
        <div className='bg-white/30 backdrop-blur-lg border-b border-white/20 w-full rounded-b-lg p-4'>
            <div className="flex items-center mt-4">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div className='flex flex-col justify-start'>
                    <p className="font-bold text-md text-gray-800 text-start">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm text-start">{testimonial.title}</p>
                </div>
            </div>
            <div className="mt-6 flex items-center">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                    ))}
                </div>
                <p className="ml-3 text-gray-600 text-sm">5/5 Rating</p>
            </div>
        </div>
    </div>
);


const EventComments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsInView = 3;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - cardsInView + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - cardsInView + 1)) % (testimonials.length - cardsInView + 1));
    };
    
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

  return (
    <motion.section 
        className="relative w-full py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#ffdb9a] via-[#ffeeca] to-[#ca7600]"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className="absolute bottom-0 left-0">
            <DotPattern width='200px' height='200px' dotRadius={1.5} dotColor='rgba(109, 40, 217, 0.2)'/>
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2E22] mb-4 text-start">
                Join 3,500+ developers, engineers,<br /> designers and executives
            </h2>
            <div className='flex justify-end mb-8 mr-8'>
                <button
                    onClick={handlePrev}
                    className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 text-gray-600 hover:bg-white transition-all shadow-md"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 text-gray-600 hover:bg-white transition-all ml-3 shadow-md"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
            
            <div className="w-full overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: `-${currentIndex * (350 + 32)}px` }} // Card width (350) + margin (32)
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-12">
                {Array.from({length: testimonials.length - cardsInView + 1}).map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-all duration-300 ${
                    currentIndex === index ? 'bg-[#4A2E22] w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                ></button>
                ))}
            </div>
      </div>
      
    </motion.section>
  );
};

export default EventComments;
