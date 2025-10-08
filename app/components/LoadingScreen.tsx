'use client';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#f67c09]"></div>
      <p className="text-2xl text-[#4A2E22] mt-4">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
