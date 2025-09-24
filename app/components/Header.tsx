// components/Header.tsx
import React from 'react';
import { Menu, X } from 'lucide-react';
import { ContentData, Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  content: ContentData;
}

const Header: React.FC<HeaderProps> = ({ 
  language, 
  setLanguage, 
  isMenuOpen, 
  setIsMenuOpen, 
  content 
}) => {
  const t = content[language];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md shadow-lg border-b-4 border-amber-600" 
            style={{ backgroundColor: 'rgba(139, 69, 19, 0.95)' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-100">{t.hero.title}</h1>
              <p className="text-sm text-amber-300 font-semibold">{t.hero.subtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">
              {t.nav.home}
            </a>
            <a href="#about" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">
              {t.nav.about}
            </a>
            <a href="#speakers" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">
              {t.nav.speakers}
            </a>
            <a href="#contact" className="text-amber-100 hover:text-amber-300 font-medium transition-colors border-b-2 border-transparent hover:border-amber-300">
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Switcher & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-amber-50 border border-amber-400 rounded-lg px-3 py-1 text-sm text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
            </select>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg">
              {t.nav.register}
            </button>
            <button className="border-2 border-amber-400 text-amber-100 bg-amber-800/30 px-6 py-2 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all">
              {t.nav.exhibitor}
            </button>
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
              <div className="pt-4 space-y-3">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="w-full bg-amber-50 border border-amber-400 rounded-lg px-3 py-2 text-sm text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="EN">English</option>
                  <option value="FR">Français</option>
                </select>
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-full font-semibold">
                  {t.nav.register}
                </button>
                <button className="w-full border-2 border-amber-400 text-amber-100 bg-amber-800/30 py-2 rounded-full font-semibold">
                  {t.nav.exhibitor}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;