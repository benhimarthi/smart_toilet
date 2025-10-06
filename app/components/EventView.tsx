
import React from 'react';

const EventView = () => {
  return (
    <div className="bg-[#F9F3E8] py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4A2E22]">
            An environment where participants and experts can exchange ideas and experiences
          </h2>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-[#4A2E22] text-white px-6 py-2 rounded-full">Day 01</button>
            <button className="bg-white text-[#4A2E22] px-6 py-2 rounded-full">Day 02</button>
            <button className="bg-white text-[#4A2E22] px-6 py-2 rounded-full">Day 03</button>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src="/images/speaker1.png" alt="Speaker 1" className="w-24 h-24 rounded-full mr-6" />
            <div>
              <p className="text-sm text-gray-500">October 01, 2024 | 09:00-10:30</p>
              <h3 className="text-xl font-bold text-[#4A2E22]">Presentation and Keynote</h3>
              <p className="text-gray-600 mt-2">Discover the latest trends in smart toilets and get inspired by creative leaders. Read more</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src="/images/speaker2.png" alt="Speaker 2" className="w-24 h-24 rounded-full mr-6" />
            <div>
              <p className="text-sm text-gray-500">October 01, 2024 | 11:00-12:00</p>
              <h3 className="text-xl font-bold text-[#4A2E22]">Presentation and Keynote</h3>
              <p className="text-gray-600 mt-2">Discover the latest trends in smart toilets and get inspired by creative leaders. Read more</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src="/images/speaker3.png" alt="Speaker 3" className="w-24 h-24 rounded-full mr-6" />
            <div>
              <p className="text-sm text-gray-500">October 01, 2024 | 12:00-12:45</p>
              <h3 className="text-xl font-bold text-[#4A2E22]">Presentation and Keynote</h3>
              <p className="text-gray-600 mt-2">Discover the latest trends in smart toilets and get inspired by creative leaders. Read more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventView;
