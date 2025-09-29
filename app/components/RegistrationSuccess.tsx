
"use client";
import React from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "./ui/dialog";

interface RegistrationSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeDataUrl: string;
  registrationId: string;
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ isOpen, onClose, qrCodeDataUrl, registrationId }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#5F0030]">Registration Successful!</DialogTitle>
          <DialogDescription className="text-center text-gray-600 py-2">
            Thank you for registering. Here is your QR code for the event.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center my-4">
          {qrCodeDataUrl && <img src={qrCodeDataUrl} alt="QR Code" className="w-48 h-48" />}
          <p className="text-sm text-gray-500 mt-2">Registration ID: {registrationId}</p>
        </div>
        <DialogFooter className="sm:justify-center pt-4">
          <Button
            type="button"
            onClick={onClose}
            className="bg-[#5F0030] hover:bg-[#3E1C21] text-white font-bold py-3 px-8 rounded-full"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationSuccess;
