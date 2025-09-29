
import React from 'react';

interface PressDetailsProps {
  mediaOutlet: string;
  jobTitle: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PressDetails: React.FC<PressDetailsProps> = ({ mediaOutlet, jobTitle, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      <input
        type="text"
        id="mediaOutlet"
        name="mediaOutlet"
        placeholder="Media Outlet / Company"
        value={mediaOutlet}
        onChange={handleChange}
        className="p-4 border-2 border-gray-300 rounded-lg"
      />
      <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        placeholder="Job Title / Role"
        value={jobTitle}
        onChange={handleChange}
        className="p-4 border-2 border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default PressDetails;
