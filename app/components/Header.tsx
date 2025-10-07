'use client';

import React from 'react';
import { Menu, X, Moon } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

// The navigation links from the new design.
const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Schedule', href: '#schedule' },
    { title: 'Video', href: '#videos' },
    { title: 'Speakers', href: '#speakers' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Contact', href: '#contact' },
];

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const EventorLogo = () => (
        <div className="flex items-center space-x-2">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              <img src="/images/smart_toilet_title.png" alt="logo" width={350}/>
            </a>
        </div>
    );

    return (
        <header className="absolute top-0 z-50 w-full bg-white/30 backdrop-blur-lg border-b border-white/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <EventorLogo />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.title} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-700 hover:text-black transition-colors">
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    {/* Right-side controls for desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-200/50 transition-colors" aria-label="Toggle dark mode">
                            <Moon size={22} />
                        </button>
                        <RegistrationForm/>
                        <button className="py-2 px-8 border border-[#4A2E22] rounded-lg text-[#4A2E22] font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                            Register For 2026
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-black"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-6 pb-4">
                        <nav className="flex flex-col items-center space-y-5">
                            {navLinks.map((link) => (
                                <a key={link.title} href={link.href} onClick={(e) => {handleNavClick(e, link.href); setIsMenuOpen(false); }} className="text-gray-700 hover:text-black">
                                    {link.title}
                                </a>
                            ))}
                            <button className="w-full max-w-xs mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#f67c09]/55 to-[#4A2E22] text-white font-semibold">
                                Register For 2025
                            </button>
                            <button className="px-6 py-2.5 border border-[#4A2E22] rounded-lg text-[#4A2E22] font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                                Register For 2026
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
