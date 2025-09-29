
"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "./ui/dialog";

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
  isSubmitting: boolean;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose, onAgree, isSubmitting }) => {
  const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
    if (agreed) {
      onAgree();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#5F0030]">TERM AND CONDITIONS</DialogTitle>
          <DialogDescription className="text-center text-[#5F5300] py-2">
            before filling in the formular we will need you to read and agree upon our terms and conditions, in order to be eligible to partake to the events.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 h-48 bg-gray-100 border rounded-lg p-4 overflow-y-auto">
          {/* Placeholder for terms and conditions text */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and agreed with the terms and conditions
          </label>
        </div>
        <DialogFooter className="sm:justify-center pt-4">
          <Button
            type="button"
            onClick={handleNext}
            disabled={!agreed || isSubmitting}
            className="bg-[#5F0030] hover:bg-[#3E1C21] text-white font-bold py-3 px-8 rounded-full"
          >
            {isSubmitting ? 'Submitting...' : 'Next'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditions;
