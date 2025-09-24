// components/Footer.tsx
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ContentData, Language, SocialLink, ContactInfo, QuickLink } from '../types';

interface FooterProps {
  content: ContentData;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ content, language }) => {
  const t = content[language];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  const contactInfo: ContactInfo[] = [
    { icon: Mail, text: 'info@toilettech.com' },
    { icon: Phone, text: '+212 5 22 XX XX XX' },
    { icon: MapPin, text: 'Casablanca, Morocco' },
  ];

  const quickLinks: QuickLink[] = [
    { href: '#home', text: t.nav.home },
    { href: '#about', text: t.nav.about },
    { href: '#speakers', text: t.nav.speakers },
    { href: '#contact', text: t.nav.contact },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold">{t.hero.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index} className="flex items-center gap-3 text-gray-400">
                    <IconComponent className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{contact.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">
              {t.footer.follow}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 The World of Toilet Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;