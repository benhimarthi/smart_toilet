"use client";
import React, { useState } from 'react';
import StandReservationForm from './StandReservationForm';

const Exhibition = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselItems = [
    {
      title: "NOS STANDS",
      description: "Found down bellow the planning on the how gonna be the event, the different speakers, the dates, the time and the order of their passage.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "NOS STANDS",
      description: "Found down bellow the planning on the how gonna be the event, the different speakers, the dates, the time and the order of their passage.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="w-full mx-auto p-2 md:p-0">
      {/* Réservation de stand */}
      <div className="text-start mb-12 md:m-2">
        <h2 className="text-3xl font-bold" style={{color: '#5F0030'}}>Réservation de stand — SMART TOILET EVENT</h2>
        <div className="inline-block bg-white rounded-full px-6 py-2 mt-4">
            <p className="text-lg text-[#5F0030]">November 19 - 21, 2025</p>
        </div>
        <p className="mt-4 text-[#5F5300]">Exposez vos produits devant un public ciblé.<br/>Choisissez un stand et réservez en quelques minutes.</p>
        <div className='m-4'>
          <StandReservationForm/>
        </div>
      </div>

      {/* Stand Options */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
        {/* Stand Standard */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-2/4 ml-3 mr-3">
          <div className="p-6">
            <div className="flex justify-between items-center">
                <h3 className="text-24 font-bold text-[#5F0030]">STAND STANDARD</h3>
                <p className="text-[#5F5300] font-semibold">tarifs <span className="text-white bg-[#5F0030] px-4 py-1 rounded-full ml-2">MAD 200</span></p>
            </div>
            <p className="mt-4 text-black">inclus : 1 tables, 2 chaises, cloison arriere, eclairage basique</p>
          </div>
          <div className="bg-[#5F0030] text-white p-6 relative">
            <span className="absolute top-0 right-4 bg-gray-400 px-3 py-1 rounded-b-lg text-sm text-[#5F5300] font-bold shadow-lg">3m x 3m</span>
            <h4 className="font-bold text-lg mb-2">Autre services inclus</h4>
            <ul className="list-disc list-inside">
              <li>2 badges exposants</li>
              <li>Mention dans le catalogue</li>
              <li>Accès conférences et ateliers</li>
              <li>Sécurité et nettoyage</li>
            </ul>
          </div>
        </div>

        {/* Stand Premium */}
        <div className="bg-white rounded-lg flex flex-col justify-between shadow-lg overflow-hidden w-full md:w-2/4 ml-3 mr-3">
          <div className="p-6">
            <div className="flex justify-between items-center">
                <h3 className="text-24 font-bold text-[#5F0030]">STAND PREMIUM</h3>
                <p className="text-[#5F5300] font-semibold">tarifs <span className="text-white bg-[#5F0030] px-4 py-1 rounded-full ml-2">MAD 500</span></p>
            </div>
            <p className="mt-4 text-black">inclus : mobilier, prise électrique, Wi-Fi, signalétique</p>
          </div>
          <div className="bg-[#5F0030] text-white p-6 relative">
            <span className="absolute font-bold text-[#5F5300] top-0 right-4 bg-gray-400 px-3 py-1 rounded-b-lg text-sm shadow-lg">6m x 3m</span>
            <h4 className="font-bold text-lg mb-2">Autre services inclus</h4>
            <ul className="list-disc list-inside">
              <li>2 badges exposants</li>
              <li>Mention dans le catalogue</li>
              <li>Accès conférences et ateliers</li>
              <li>Sécurité et nettoyage</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nos Stands Carousel */}
      <div className="bg-black text-white p-8 md:p-16 mb-16 relative overflow-hidden h-64 md:h-96" style={{backgroundImage: `url(${carouselItems[carouselIndex].image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10 text-start">
            <h3 className="text-3xl font-bold mb-4">{carouselItems[carouselIndex].title}</h3>
            <p className="max-w-xl  mb-8">{carouselItems[carouselIndex].description}</p>
            <button className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">More Details</button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
            {carouselItems.map((_, index) => (
              <span key={index} className={`h-2 w-2 rounded-full mx-1 ${index === carouselIndex ? 'bg-white' : 'bg-gray-600'}`}></span>
            ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 z-10">&#10094;</button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 z-10">&#10095;</button>
      </div>


      {/* Informations pratiques & Règlement */}
      <div className="bg-yellow-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-900 mb-4">Informations pratiques</h3>
        <p className="text-yellow-800 mb-6">Lieu : [adresse complète] — Accès livraison, parking exposants, restauration sur place.<br/>Montage : à partir de 7h le jour d'ouverture.</p>

        <h3 className="text-2xl font-bold text-yellow-900 mb-4">Règlement & conditions</h3>
        <p className="text-yellow-800">Réservation confirmée après acompte de XX%.<br/>Annulation possible jusqu'à [date] avec remboursement partiel.<br/>Assurance du matériel à la charge de l'exposant.</p>
      </div>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>© [Année] [Nom de l'événement] — Pour toute question : contact@exemple.com</p>
      </footer>
    </div>
  );
};

export default Exhibition;
