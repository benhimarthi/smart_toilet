
"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import PressDetails from './PressDetails';
import AttendeeDetails from './AttendeeDetails';
import ExhibitorDetails from './ExhibitorDetails';
import EnterpriseDetails from './EnterpriseDetails';
import { db } from '../../lib/firebase';
import { collection, addDoc } from "firebase/firestore";
import TermsAndConditions from './TermsAndConditions';
import RegistrationSuccess from './RegistrationSuccess';
import QRCode from 'qrcode';

// Define the structure for form data and errors
interface FormData {
  whoAreYou: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postCode: string;
  city: string;
  phone: string;
  email: string;
  mediaOutlet: string;
  jobTitle: string;
  interests: string[];
  companyName: string;
  companyWebsite: string;
  boothSize: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData = {
  whoAreYou: 'Regular intender',
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  postCode: '',
  city: '',
  phone: '',
  email: '',
  mediaOutlet: '',
  jobTitle: '',
  interests: [],
  companyName: '',
  companyWebsite: '',
  boothSize: 'Small Booth',
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const [registrationId, setRegistrationId] = useState('');

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.address1) newErrors.address1 = 'Street address is required.';
    if (!formData.postCode) newErrors.postCode = 'Post code is required.';
    if (!formData.city) newErrors.city = 'City is required.';
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only numbers.';
    }

    if (!formData.email) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }

    if(formData.whoAreYou === 'Exhibitor' || formData.whoAreYou === 'Enterprise') {
      if (!formData.companyName) newErrors.companyName = 'Company name is required.';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: newInterests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsTermsOpen(true);
    } else {
      console.log('Validation failed:', validationErrors);
    }
  };

  const handleAgreeAndSubmit = async () => {
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
      const newRegistrationId = docRef.id;
      console.log("Document written with ID: ", newRegistrationId);

      const qrCodeUrl = await QRCode.toDataURL(newRegistrationId);
      setQrCodeDataUrl(qrCodeUrl);
      setRegistrationId(newRegistrationId);
      setIsSuccessOpen(true);

      // Send email with QR code
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          registrationId: newRegistrationId,
          qrCodeDataUrl: qrCodeUrl,
        }),
      });

    } catch (error) {
      console.error("Error during registration or email sending: ", error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
      setIsTermsOpen(false);
    }
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
    setFormData(initialFormData);
    setErrors({});
  };


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#5F0030] hover:bg-[#3E1C21] text-white font-bold py-3 px-8 rounded-lg">Register for the next event 2025</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-full rounded-xl shadow-2xl grid md:grid-cols-5 overflow-hidden bg-white backdrop-blur-sm p-0" style={{
          backgroundImage: `url("/images/homepage.jpg")`,
        }}>
          <div className="md:col-span-2 p-8 space-y-4 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-[#5F0030]">REGISTER TO PARTICIPATE</h2>
            <p className="text-white">
              Fill in the form to receive your badge and take part in the event.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-white/65 p-8">
            <div>
              <h3 className="text-md font-bold text-[#5F0030] mb-4">YOUR PERSONAL DETAILS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="md:col-span-1">
                  <label htmlFor="whoAreYou" className="block text-sm font-medium text-[#5F5300]">Who are you</label>
                  <select id="whoAreYou" name="whoAreYou" value={formData.whoAreYou} onChange={handleChange} className="mt-1 block w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Regular intender</option>
                    <option>Enterprise</option>
                    <option>Exhibitor</option>
                    <option>Press</option>
                  </select>
                </div>
                <div className="md:col-span-1 w-10 h-10 b-green">
                </div>
                <div className="md:col-span-1">
                  <input type="text" id="firstName" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} className={`mt-1 block w-full p-4 border-2 rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}/>
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div className="md:col-span-1">
                  <input type="text" id="lastName" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} className={`mt-1 block w-full p-4 border-2 rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}/>
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-md font-bold text-[#5F0030] mb-4">YOUR RESIDENTIAL ADDRESS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="md:col-span-2">
                  <input type="text" id="address1" name="address1" placeholder="Street address" value={formData.address1} onChange={handleChange} className={`p-4 border-2 w-full rounded-lg ${errors.address1 ? 'border-red-500' : 'border-gray-300'}`}/>
                  {errors.address1 && <p className="text-red-500 text-xs mt-1">{errors.address1}</p>}
                </div>
                <div className="md:col-span-2">
                  <input type="text" id="address2" name="address2" placeholder="Street address (optional)" value={formData.address2} onChange={handleChange} className="p-4 w-full border-2 border-gray-300 rounded-lg"/>
                </div>
                <div>
                  <input type="text" id="postCode" name="postCode" placeholder="Post code" value={formData.postCode} onChange={handleChange} className={`p-4 border-2 w-full rounded-lg ${errors.postCode ? 'border-red-500' : 'border-gray-300'}`}/>
                  {errors.postCode && <p className="text-red-500 text-xs mt-1">{errors.postCode}</p>}
                </div>
                <div>
                  <input type="text" id="city" name="city" placeholder="City" value={formData.city} onChange={handleChange} className={`p-4 border-2 w-full rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}/>
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-md font-bold text-[#5F0030] mb-4">CONTACT DETAILS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                      <input type="text" id="phone" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} className={`p-4 border-2 w-full rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                      <input type="email" id="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} className={`p-4 border-2 w-full rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}/>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
              </div>
            </div>

            {formData.whoAreYou === 'Regular intender' && (
              <div>
                  <h3 className="text-md font-bold text-[#5F0030] mb-4">AREAS OF INTEREST</h3>
                  <AttendeeDetails interests={formData.interests} handleInterestChange={handleInterestChange} />
              </div>
            )}
            {formData.whoAreYou === 'Enterprise' && (
              <div>
                <h3 className="text-md font-bold text-[#5F0030] mb-4">ENTERPRISE DETAILS</h3>
                <EnterpriseDetails 
                  companyName={formData.companyName}
                  handleChange={handleChange}
                  companyNameError={errors.companyName}
                />
              </div>
            )}
            {formData.whoAreYou === 'Press' && (
              <div>
                <h3 className="text-md font-bold text-[#5F0030] mb-4">OTHER DETAILS</h3>
                <PressDetails 
                  mediaOutlet={formData.mediaOutlet}
                  jobTitle={formData.jobTitle}
                  handleChange={handleChange}
                />
              </div>
            )}

            {formData.whoAreYou === 'Exhibitor' && (
              <div>
                <h3 className="text-md font-bold text-[#5F0030] mb-4">EXHIBITOR DETAILS</h3>
                <ExhibitorDetails 
                  companyName={formData.companyName}
                  companyWebsite={formData.companyWebsite}
                  boothSize={formData.boothSize}
                  handleChange={handleChange}
                  companyNameError={errors.companyName}
                />
              </div>
            )}

            <div className="flex justify-end mt-4">
              <Button type="submit" className="bg-[#5F0030] hover:bg-[#3E1C21] text-white font-bold py-3 px-8 rounded-lg">Submit</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <TermsAndConditions 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        onAgree={handleAgreeAndSubmit} 
        isSubmitting={isSubmitting} 
      />
      <RegistrationSuccess 
        isOpen={isSuccessOpen} 
        onClose={handleCloseSuccess} 
        qrCodeDataUrl={qrCodeDataUrl} 
        registrationId={registrationId} 
      />
    </>
  );
};

export default RegistrationForm;
