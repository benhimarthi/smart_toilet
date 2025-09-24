// data/content.ts - Fichier de données TypeScript pour le contenu multilingue
import { ContentData } from '../types';

export const content: ContentData = {
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      speakers: 'Speakers',
      schedule: 'Schedule',
      sponsors: 'Sponsors',
      contact: 'Contact',
      register: 'Register for Next Event 2025',
      exhibitor: 'Become an Exhibitor'
    },
    hero: {
      title: 'The World of Toilet Technology',
      subtitle: 'Conferences & Exhibitions',
      tagline: 'Toilets: The Foundation of Effective Sanitation',
      description: 'Join us for the most innovative event dedicated to smart toilet technology and sanitation solutions',
      cta: 'Register Now',
      date: 'November 19-21, 2025',
      location: 'Mohammed VI Museum - Marrakech, Morocco'
    },
    about: {
      title: 'About The Event',
      description: 'The World of Toilet Technology brings together industry leaders, innovators, and visionaries to explore the future of sanitation and hygiene. Our mission is to revolutionize global sanitation through cutting-edge technology.',
      stats: [
        { number: '500+', label: 'Exhibitors' },
        { number: '50+', label: 'Countries' },
        { number: '100+', label: 'Speakers' },
        { number: '10,000+', label: 'Visitors' }
      ]
    },
    lastEvents: {
      title: 'Images of Last Events',
      subtitle: 'Discover our previous successful editions'
    },
    speakers: {
      title: 'Meet the Visionary Speakers',
      subtitle: 'Driving Africa\'s Tech Innovation'
    },
    sponsors: {
      title: 'Our Partners',
      subtitle: 'Leading organizations supporting innovation'
    },
    footer: {
      description: 'The premier event for toilet technology and sanitation innovation worldwide.',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      follow: 'Follow Us'
    }
  },
  FR: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      speakers: 'Intervenants',
      schedule: 'Programme',
      sponsors: 'Partenaires',
      contact: 'Contact',
      register: 'S\'inscrire pour l\'événement 2025',
      exhibitor: 'Devenir Exposant'
    },
    hero: {
      title: 'Le Monde de la Technologie des Toilettes',
      subtitle: 'Conférences & Expositions',
      tagline: 'Toilettes : La Base d\'un Assainissement Efficace',
      description: 'Rejoignez-nous pour l\'événement le plus innovant dédié à la technologie des toilettes intelligentes',
      cta: 'S\'inscrire Maintenant',
      date: '19-21 Novembre 2025',
      location: 'Musée Mohammed VI - Marrakech, Maroc'
    },
    about: {
      title: 'À Propos de l\'Événement',
      description: 'Le Monde de la Technologie des Toilettes réunit les leaders de l\'industrie, les innovateurs et les visionnaires pour explorer l\'avenir de l\'assainissement et de l\'hygiène.',
      stats: [
        { number: '500+', label: 'Exposants' },
        { number: '50+', label: 'Pays' },
        { number: '100+', label: 'Intervenants' },
        { number: '10 000+', label: 'Visiteurs' }
      ]
    },
    lastEvents: {
      title: 'Images des Derniers Événements',
      subtitle: 'Découvrez nos précédentes éditions réussies'
    },
    speakers: {
      title: 'Rencontrez les Intervenants Visionnaires',
      subtitle: 'Qui Stimulent l\'Innovation Technologique en Afrique'
    },
    sponsors: {
      title: 'Nos Partenaires',
      subtitle: 'Organisations leaders soutenant l\'innovation'
    },
    footer: {
      description: 'L\'événement de référence pour la technologie des toilettes et l\'innovation en assainissement.',
      quickLinks: 'Liens Rapides',
      contact: 'Informations de Contact',
      follow: 'Suivez-nous'
    }
  }
};