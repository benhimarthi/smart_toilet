
import React from 'react';

interface ExhibitorDetailsProps {
  companyName: string;
  companyWebsite: string;
  boothSize: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  companyNameError?: string;
}

const ExhibitorDetails: React.FC<ExhibitorDetailsProps> = ({ companyName, companyWebsite, boothSize, handleChange, companyNameError }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      <div className="md:col-span-2">
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Company Name"
          value={companyName}
          onChange={handleChange}
          className={`p-4 w-full border-2 rounded-lg ${companyNameError ? 'border-red-500' : 'border-gray-300'}`}
        />
        {companyNameError && <p className="text-red-500 text-xs mt-1">{companyNameError}</p>}
      </div>
      <input
        type="text"
        id="companyWebsite"
        name="companyWebsite"
        placeholder="Company Website (optional)"
        value={companyWebsite}
        onChange={handleChange}
        className="p-4 border-2 border-gray-300 rounded-lg"
      />
      <select
        id="boothSize"
        name="boothSize"
        value={boothSize}
        onChange={handleChange}
        className="p-4 border-2 border-gray-300 rounded-lg"
      >
        <option>Small Booth</option>
        <option>Medium Booth</option>
        <option>Large Booth</option>
      </select>
    </div>
  );
};

export default ExhibitorDetails;
