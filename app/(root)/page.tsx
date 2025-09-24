// App.tsx - Application Principale TypeScript
"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import LastEventsSection from '../components/LastEventsSection';
import SpeakersSection from '../components/SpeakersSection';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';
import { content } from '../data/content';
import { Language } from '../types';

const ToiletTechWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('EN');

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100"
     style={{
    backgroundImage: `url("/images/homepage.jpg")`,
  }}
    >
      <Header 
        language={language}
        setLanguage={setLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        content={content}
      />
      
      <HeroSection 
        content={content}
        language={language}
      />
      
      <AboutSection 
        content={content}
        language={language}
      />
      
      <LastEventsSection 
        content={content}
        language={language}
      />
      
      <SpeakersSection 
        content={content}
        language={language}
      />
      
      <SponsorsSection 
        content={content}
        language={language}
      />
      
      <Footer 
        content={content}
        language={language}
      />
    </div>
  );
};

export default ToiletTechWebsite;




// "use client" ;
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Award, Globe, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';

// const ToiletTechWebsite = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [language, setLanguage] = useState('EN');

//   // Données des événements précédents
//   const lastEvents = [
//     { id: 1, year: '2024', location: 'Dubai', image: '/api/placeholder/300/200' },
//     { id: 2, year: '2023', location: 'Casablanca', image: '/api/placeholder/300/200' },
//     { id: 3, year: '2022', location: 'Lagos', image: '/api/placeholder/300/200' },
//     { id: 4, year: '2021', location: 'Cape Town', image: '/api/placeholder/300/200' },
//   ];

//   // Données des speakers
//   const speakers = [
//     { id: 1, name: 'Dr. Amina Hassan', title: 'Smart Sanitation Expert', image: '/api/placeholder/150/150' },
//     { id: 2, name: 'Prof. Jean Kouame', title: 'Water Tech Innovation', image: '/api/placeholder/150/150' },
//     { id: 3, name: 'Sarah Mohamed', title: 'IoT Solutions Director', image: '/api/placeholder/150/150' },
//     { id: 4, name: 'Omar El Fassi', title: 'Sustainability Advocate', image: '/api/placeholder/150/150' },
//     { id: 5, name: 'Dr. Fatima Benali', title: 'Public Health Specialist', image: '/api/placeholder/150/150' },
//     { id: 6, name: 'Ahmed Traore', title: 'Tech Entrepreneur', image: '/api/placeholder/150/150' },
//   ];

//   // Contenu multilingue
//   const content = {
//     EN: {
//       nav: {
//         home: 'Home',
//         about: 'About',
//         speakers: 'Speakers',
//         schedule: 'Schedule',
//         sponsors: 'Sponsors',
//         contact: 'Contact',
//         register: 'Register for Next Event 2025',
//         exhibitor: 'Become an Exhibitor'
//       },
//       hero: {
//         title: 'The World of Toilet Technology',
//         subtitle: 'Conferences & Exhibitions',
//         tagline: 'Toilets: The Foundation of Effective Sanitation',
//         description: 'Join us for the most innovative event dedicated to smart toilet technology and sanitation solutions',
//         cta: 'Register Now',
//         date: 'November 19-21, 2025',
//         location: 'Mohammed VI Museum - Marrakech, Morocco'
//       },
//       about: {
//         title: 'About The Event',
//         description: 'The World of Toilet Technology brings together industry leaders, innovators, and visionaries to explore the future of sanitation and hygiene. Our mission is to revolutionize global sanitation through cutting-edge technology.',
//         stats: [
//           { number: '500+', label: 'Exhibitors' },
//           { number: '50+', label: 'Countries' },
//           { number: '100+', label: 'Speakers' },
//           { number: '10,000+', label: 'Visitors' }
//         ]
//       },
//       lastEvents: {
//         title: 'Images of Last Events',
//         subtitle: 'Discover our previous successful editions'
//       },
//       speakers: {
//         title: 'Meet the Visionary Speakers',
//         subtitle: 'Driving Africa\'s Tech Innovation'
//       },
//       sponsors: {
//         title: 'Our Partners',
//         subtitle: 'Leading organizations supporting innovation'
//       },
//       footer: {
//         description: 'The premier event for toilet technology and sanitation innovation worldwide.',
//         quickLinks: 'Quick Links',
//         contact: 'Contact Info',
//         follow: 'Follow Us'
//       }
//     },
//     FR: {
//       nav: {
//         home: 'Accueil',
//         about: 'À Propos',
//         speakers: 'Intervenants',
//         schedule: 'Programme',
//         sponsors: 'Partenaires',
//         contact: 'Contact',
//         register: 'S\'inscrire pour l\'événement 2025',
//         exhibitor: 'Devenir Exposant'
//       },
//       hero: {
//         title: 'Le Monde de la Technologie des Toilettes',
//         subtitle: 'Conférences & Expositions',
//         tagline: 'Toilettes : La Base d\'un Assainissement Efficace',
//         description: 'Rejoignez-nous pour l\'événement le plus innovant dédié à la technologie des toilettes intelligentes',
//         cta: 'S\'inscrire Maintenant',
//         date: '19-21 Novembre 2025',
//         location: 'Musée Mohammed VI - Marrakech, Maroc'
//       },
//       about: {
//         title: 'À Propos de l\'Événement',
//         description: 'Le Monde de la Technologie des Toilettes réunit les leaders de l\'industrie, les innovateurs et les visionnaires pour explorer l\'avenir de l\'assainissement et de l\'hygiène.',
//         stats: [
//           { number: '500+', label: 'Exposants' },
//           { number: '50+', label: 'Pays' },
//           { number: '100+', label: 'Intervenants' },
//           { number: '10 000+', label: 'Visiteurs' }
//         ]
//       },
//       lastEvents: {
//         title: 'Images des Derniers Événements',
//         subtitle: 'Découvrez nos précédentes éditions réussies'
//       },
//       speakers: {
//         title: 'Rencontrez les Intervenants Visionnaires',
//         subtitle: 'Qui Stimulent l\'Innovation Technologique en Afrique'
//       },
//       sponsors: {
//         title: 'Nos Partenaires',
//         subtitle: 'Organisations leaders soutenant l\'innovation'
//       },
//       footer: {
//         description: 'L\'événement de référence pour la technologie des toilettes et l\'innovation en assainissement.',
//         quickLinks: 'Liens Rapides',
//         contact: 'Informations de Contact',
//         follow: 'Suivez-nous'
//       }
//     }
//   };

//   const t = content[language];

//   // Auto-rotation pour les images
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % lastEvents.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   // Auto-rotation pour les speakers
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSpeakerIndex((prev) => (prev + 4) % speakers.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % lastEvents.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + lastEvents.length) % lastEvents.length);
//   };

//   const nextSpeaker = () => {
//     setCurrentSpeakerIndex((prev) => (prev + 4) % speakers.length);
//   };

//   const prevSpeaker = () => {
//     setCurrentSpeakerIndex((prev) => (prev - 4 + speakers.length) % speakers.length);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100"
//          style={{
//            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//          }}>
     
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-md shadow-lg border-b-4 border-amber-600" style={{ backgroundColor: 'rgba(139, 69, 19, 0.95)' }}>
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
//                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                   <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-amber-100">{t.hero.title}</h1>
//                 <p className="text-sm text-amber-300 font-semibold">{t.hero.subtitle}</p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               <a href="#home" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">{t.nav.home}</a>
//               <a href="#about" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">{t.nav.about}</a>
//               <a href="#speakers" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">{t.nav.speakers}</a>
//               <a href="#contact" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">{t.nav.contact}</a>
//             </nav>

//             {/* Language Switcher & CTA Buttons */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="bg-amber-50 border border-amber-400 rounded-lg px-3 py-1 text-sm text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
//               >
//                 <option value="EN">EN</option>
//                 <option value="FR">FR</option>
//               </select>
//               <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg">
//                 {t.nav.register}
//               </button>
//               <button className="border-2 border-amber-400 text-amber-100 bg-amber-800/30 px-6 py-2 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all">
//                 {t.nav.exhibitor}
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 text-amber-100 hover:text-amber-300"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="lg:hidden mt-4 py-4 border-t border-amber-600">
//               <nav className="flex flex-col space-y-4">
//                 <a href="#home" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.home}</a>
//                 <a href="#about" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.about}</a>
//                 <a href="#speakers" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.speakers}</a>
//                 <a href="#contact" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.contact}</a>
//                 <div className="pt-4 space-y-3">
//                   <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-full font-semibold">
//                     {t.nav.register}
//                   </button>
//                   <button className="w-full border-2 border-amber-400 text-amber-100 bg-amber-800/30 py-2 rounded-full font-semibold">
//                     {t.nav.exhibitor}
//                   </button>
//                 </div>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-amber-800/40"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h2 className="text-5xl lg:text-6xl font-bold text-amber-50 leading-tight drop-shadow-lg">
//                   {t.hero.tagline}
//                 </h2>
//                 <p className="text-xl text-amber-100 leading-relaxed drop-shadow-md">
//                   {t.hero.description}
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 shadow-2xl">
//                   {t.hero.cta}
//                 </button>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-6 text-amber-100">
//                 <div className="flex items-center gap-2 bg-amber-800/50 rounded-full px-4 py-2 backdrop-blur-sm">
//                   <Calendar className="w-5 h-5 text-amber-300" />
//                   <span className="font-semibold">{t.hero.date}</span>
//                 </div>
//                 <div className="flex items-center gap-2 bg-amber-800/50 rounded-full px-4 py-2 backdrop-blur-sm">
//                   <MapPin className="w-5 h-5 text-amber-300" />
//                   <span className="font-semibold">{t.hero.location}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-amber-400/90 to-amber-600/90 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform backdrop-blur-sm">
//                 <div className="bg-white/95 rounded-2xl p-6 text-center shadow-inner">
//                   <div className="w-32 h-32 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
//                     <div className="text-6xl drop-shadow-md">🚽</div>
//                   </div>
//                   <h3 className="text-2xl font-bold text-amber-800 mb-2">Smart Toilet 2025</h3>
//                   <p className="text-amber-700 font-medium">IoT Enabled • Eco-Friendly • Health Monitoring</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-amber-800/30 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6 drop-shadow-md">
//               {t.about.title}
//             </h2>
//             <p className="text-xl text-amber-800 leading-relaxed font-medium">
//               {t.about.description}
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {t.about.stats.map((stat, index) => (
//               <div key={index} className="text-center p-8 bg-amber-50/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-amber-200">
//                 <div className="text-4xl font-bold text-amber-700 mb-2 drop-shadow-sm">{stat.number}</div>
//                 <div className="text-amber-800 font-semibold">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Last Events Section */}
//       <section className="py-20 bg-amber-900/20 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4 drop-shadow-md">
//               {t.lastEvents.title}
//             </h2>
//             <p className="text-xl text-amber-800 font-medium">{t.lastEvents.subtitle}</p>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-amber-300">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
//               >
//                 {lastEvents.map((event, index) => (
//                   <div key={event.id} className="w-full flex-shrink-0">
//                     <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
//                       <div className="text-center">
//                         <div className="text-6xl mb-4 drop-shadow-lg">📸</div>
//                         <h3 className="text-2xl font-bold text-amber-800">{event.year} - {event.location}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-100/90 hover:bg-amber-100 p-3 rounded-full shadow-xl transition-all border border-amber-300"
//             >
//               <ChevronLeft className="w-6 h-6 text-amber-800" />
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-100/90 hover:bg-amber-100 p-3 rounded-full shadow-xl transition-all border border-amber-300"
//             >
//               <ChevronRight className="w-6 h-6 text-amber-800" />
//             </button>

//             <div className="flex justify-center mt-8 space-x-2">
//               {lastEvents.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`w-4 h-4 rounded-full transition-colors border-2 ${
//                     currentImageIndex === index ? 'bg-amber-600 border-amber-600' : 'bg-amber-200 border-amber-400 hover:bg-amber-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Speakers Section */}
//       <section id="speakers" className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               {t.speakers.title}
//             </h2>
//             <p className="text-xl opacity-90">{t.speakers.subtitle}</p>
//           </div>

//           <div className="relative">
//             <div className="overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSpeakerIndex * (100/4)}%)` }}
//               >
//                 {speakers.map((speaker, index) => (
//                   <div key={speaker.id} className="w-1/4 flex-shrink-0 px-4">
//                     <div className="text-center">
//                       <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
//                         <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
//                           <span className="text-3xl">👨‍💼</span>
//                         </div>
//                       </div>
//                       <h3 className="font-bold text-lg mb-2">{speaker.name}</h3>
//                       <p className="text-sm opacity-75">{speaker.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={prevSpeaker}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextSpeaker}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Sponsors Section */}
//       <section className="py-20 bg-amber-50/90 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4 drop-shadow-md">
//               {t.sponsors.title}
//             </h2>
//             <p className="text-xl text-amber-800 font-medium">{t.sponsors.subtitle}</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
//             {[1,2,3,4,5,6].map((i) => (
//               <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-xl transition-all hover:scale-105 border border-amber-200">
//                 <div className="text-2xl font-bold text-amber-600 drop-shadow-sm">LOGO</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer id="contact" className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
//                   <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//                     <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold">{t.hero.title}</h3>
//               </div>
//               <p className="text-gray-400">{t.footer.description}</p>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#home" className="hover:text-amber-400 transition-colors">{t.nav.home}</a></li>
//                 <li><a href="#about" className="hover:text-amber-400 transition-colors">{t.nav.about}</a></li>
//                 <li><a href="#speakers" className="hover:text-amber-400 transition-colors">{t.nav.speakers}</a></li>
//                 <li><a href="#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">{t.footer.contact}</h4>
//               <ul className="space-y-3 text-gray-400">
//                 <li className="flex items-center gap-2">
//                   <Mail className="w-4 h-4" />
//                   <span>info@toilettech.com</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Phone className="w-4 h-4" />
//                   <span>+212 5 22 XX XX XX</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   <span>Casablanca, Morocco</span>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">{t.footer.follow}</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
//                   <Instagram className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 The World of Toilet Technology. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ToiletTechWebsite;