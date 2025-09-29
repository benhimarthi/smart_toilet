// components/Header.tsx 
import React from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ContentData, Language } from '../types';
import RegistrationForm from './RegistrationForm';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  content: ContentData;
  setActiveView: (view: 'exhibition' | 'activities' | 'about') => void;

}

const Header: React.FC<HeaderProps> = ({ 
  language, 
  setLanguage, 
  isMenuOpen, 
  setIsMenuOpen, 
  content, 
  setActiveView
}) => {
  const t = content[language];

  return (
    <header className="sticky top-0 z-50  w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-between justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/images/smart_toilet_title.png" alt="Smart Toilet" width={550} height={400} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
          <RegistrationForm />
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-amber-100 hover:text-amber-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-xl shadow-lg mt-2 w-56 flex flex-col p-3">
                <DropdownMenuItem onClick={() => setActiveView('activities')} className="cursor-pointer">
                  Activités
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveView('exhibition')} className="cursor-pointer">
                  Exhibition et Stand
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveView('about')} className="cursor-pointer">
                  À Propos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-amber-100 hover:text-amber-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-amber-600">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.home}</a>
              <a href="#about" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.about}</a>
              <a href="#speakers" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.speakers}</a>
              <a href="#contact" className="text-amber-100 hover:text-amber-300 font-medium">{t.nav.contact}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;