"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const schedule = [
  {
    day: 'Day 01',
    date: 'Monday 16 October',
    events: [
      {
        time: '10:00 AM - 12:00 PM',
        fulldate: 'Monday 16 october, 2025',
        duration: '180 min',
        title: 'Venture & Founders Summit',
        tags: ['10x Stage', 'Smart toilet conference'],
        description: 'This hands-on workshop equips professionals with a Generative Al Expert certification, providing cutting-edge skills in Al-driven automation, generative content creation, and enterprise Al deployment. Participants will explore Al fundamentals, generative models, and DeepSeek technology, gaining insights into how Al accelerates development, enhances decision-making, and cuts costs. A live demo and interactive challenges will showcase Al agents transforming natural language into executable commands.',
        speaker: {
          name: 'Miles Johns',
          role: 'Experience designer',
          company: 'Smart toilet corporation',
          image: '/images/homepage.jpg',
        },
      },
    ],
  },
  {
    day: 'Day 02',
    date: 'Tuesday 17 October',
    events: [
      {
        time: '10:00 AM - 12:00 PM',
        fulldate: 'Tuesday 17 october, 2025',
        duration: '120 min',
        title: 'Another Event',
        tags: ['Main Stage'],
        description: 'Description for another event.',
        speaker: {
          name: 'Jane Doe',
          role: 'Software Engineer',
          company: 'Example Corp',
          image: '/images/homepage.jpg',
        },
      },
    ],
  },
  {
    day: 'Day 03',
    date: 'Monday 20 October',
    events: [
      {
        time: '10:00 AM - 12:00 PM',
        fulldate: 'Wednesday 18 october, 2025',
        duration: '90 min',
        title: 'Third Event',
        tags: ['Workshop'],
        description: 'Description for the third event.',
        speaker: {
          name: 'John Smith',
          role: 'Product Manager',
          company: 'Another Company',
          image: '/images/homepage.jpg',
        },
      },
    ],
  },
];

const ActivitiesSchedule = () => {
  const [activeDay, setActiveDay] = useState(schedule[0]);

  return (
    <section className="py-16 text-white w-full m-0">
      <div className="container mx-auto px-0">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-start text-[#5F0030] mb-4">CONFERENCE AGENDA</h2>
          <p className="text-start text-[#5F5300] mb-12 max-w-2xl ">
            Found down bellow the planning on the how gonna be the event, the different speakers, the dates, the time and the order of their passage.
          </p>
        </div>
        

        <div className='bg-[#2D2626] px-0'>
          <div className="flex justify-start mb-8 p-5 rounded-lg">
            {schedule.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-3 text-lg mx-2 font-semibold  transition-colors duration-300 ${
                  activeDay.day === day.day ? 'bg-[#5F0030] text-white' : 'bg-[#FFF1F1] text-[#5F5300]/45'
                }`}
              >
                <span className="font-bold">{day.day.toUpperCase()}</span> <span className='text-sm'>{day.date}</span>
              </button>
            ))}
          </div>

          <div className="bg-[#FFF1F1] shadow-lg overflow-hidden">
            {activeDay.events.map((event, index) => (
              <div key={index}>
                <div className="p-8">
                  <div className="flex justify-start items-center mb-4">
                    <div className="flex items-center gap-4">
                      <p className="text-lg text-[#5F5300]">{event.time}</p>
                      <p className="text-gray-400">{event.fulldate}</p>
                    </div>
                    <p className="bg-[#D4D4D4] px-4 py-1 text-[#5F0030] text-sm mx-4">{event.duration}</p>
                  </div>
                  <h3 className="text-2xl text-[#5F0030] font-bold mb-4">{event.title}</h3>
                  <div className="flex gap-4 mb-4">
                    {event.tags.map((tag) => (
                      <span key={tag} className="bg-black px-4 py-2  text-sm font-semibold">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8">{event.description}</p>
                </div>

                <div className="bg-[#5F0030] p-8">
                  <h4 className="text-xl font-bold mb-4">SPEAKER</h4>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image src={event.speaker.image} alt={event.speaker.name} width={96} height={96} className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{event.speaker.name}</p>
                      <p className="text-gray-400">{event.speaker.role}</p>
                      <p className="text-[#5F5300]">{event.speaker.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSchedule;