
import React from 'react';

interface EnterpriseDetailsProps {
  companyName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  companyNameError?: string;
}

const EnterpriseDetails: React.FC<EnterpriseDetailsProps> = ({ companyName, handleChange, companyNameError }) => {
  return (
    <div>
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
  );
};

export default EnterpriseDetails;
