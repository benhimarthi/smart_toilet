
import React from 'react';

interface AttendeeDetailsProps {
  interests: string[];
  handleInterestChange: (interest: string) => void;
}

const interestsList = [
  'Venture & Founders',
  'Smart Toilet Technology',
  'AI & Automation',
  'Sanitation & Hygiene Innovation',
  'Investment Opportunities',
];

const AttendeeDetails: React.FC<AttendeeDetailsProps> = ({ interests, handleInterestChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">What topics are you interested in? (optional)</h4>
      <div className="grid grid-cols-2 gap-2">
        {interestsList.map(interest => (
          <label key={interest} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={interests.includes(interest)}
              onChange={() => handleInterestChange(interest)}
              className="rounded"
            />
            <span className="text-sm text-gray-600">{interest}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AttendeeDetails;
