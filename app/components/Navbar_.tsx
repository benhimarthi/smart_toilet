'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MapPin, Camera, Film, Users, Phone, Home, Tag, DollarSign, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  name: string;
  path: string;
  desc: string;
}

interface NavLink {
  name: string;
  path: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const ModernDreamakerNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Incentive", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Locations", path: "/locations", icon: <Tag className="w-4 h-4" /> },
    { name: "Filmed in morocco", path: "/filmed-in-morocco", icon: <Camera className="w-4 h-4" /> },
    { name: "Clients", path: "/clients", icon: <Users className="w-4 h-4" /> }
  ];

  const handleScroll = useCallback((): void => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleDropdownEnter = useCallback((index: number) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const handleDropdownClick = useCallback((index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  }, [activeDropdown]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, [handleScroll, handleMouseMove]);

  return (
    <>
      {/* Gradient Background Overlay */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none z-40" />
      
      <nav 
        ref={navRef}
        className={`
          fixed top-0 w-full z-50 transition-all duration-700 ease-out
          ${isScrolled 
            ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/20' 
            : 'bg-gradient-to-b from-black/90 to-black/50 backdrop-blur-sm'
          }
        `}
      >
        {/* Ambient light effect */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.1), transparent 40%)`
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <motion.div 
              className="flex items-center relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex-shrink-0 relative group">
                <Link href="/">
                  <div className="relative">
                    {/* Glow effect behind logo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image 
                      src="/images/logo.png" 
                      alt="Dreamaker Logo" 
                      width={170} 
                      height={120} 
                      className="h-10 w-auto cursor-pointer relative z-10 filter brightness-110"
                    />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-10">
              <div className="relative">
                {/* Background glass effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10" />
                
                <div className="relative flex items-center space-x-2 px-6 py-3">
                  {navLinks.map((link, index) => (
                    <div key={link.name} className="relative">
                      {link.hasDropdown ? (
                        <motion.button
                          whileHover={{ y: -3, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            relative flex items-center space-x-2 px-5 py-3 text-sm font-medium transition-all duration-500 rounded-xl group
                            ${pathname === link.path 
                              ? 'text-teal-400 bg-teal-500/10 shadow-lg shadow-teal-500/20' 
                              : 'text-slate-300 hover:text-white hover:bg-white/10'
                            }
                          `}
                          onMouseEnter={() => handleDropdownEnter(index)}
                          onMouseLeave={handleDropdownLeave}
                          onClick={() => handleDropdownClick(index)}
                        >
                          {/* Active indicator */}
                          {pathname === link.path && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl"
                              initial={false}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          <span className="relative z-10">{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-all duration-300 relative z-10 ${activeDropdown === index ? 'rotate-180 text-teal-400' : 'group-hover:text-teal-400'}`} />
                          
                          {/* Hover glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                        </motion.button>
                      ) : (
                        <Link href={link.path}>
                          <motion.div
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                              relative flex items-center space-x-2 px-5 py-3 text-sm font-medium transition-all duration-500 rounded-xl cursor-pointer group
                              ${pathname === link.path 
                                ? 'text-teal-400 bg-teal-500/10 shadow-lg shadow-teal-500/20' 
                                : 'text-slate-300 hover:text-white hover:bg-white/10'
                              }
                            `}
                          >
                            {/* Active indicator */}
                            {pathname === link.path && (
                              <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl"
                                initial={false}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                            
                            <span className="relative z-10">{link.name}</span>
                            
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                          </motion.div>
                        </Link>
                      )}
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {link.hasDropdown && activeDropdown === index && (
                          <motion.div 
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 z-50"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onMouseEnter={() => handleDropdownEnter(index)}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="relative">
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
                              
                              <div className="relative bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                                <div className="p-3">
                                  {link.dropdownItems?.map((item, itemIndex) => (
                                    <Link
                                      key={item.name}
                                      href={item.path}
                                      className="group flex items-start p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <motion.div 
                                        className="flex-1"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <div className="text-sm font-medium text-slate-200 group-hover:text-teal-400 transition-colors duration-200">
                                          {item.name}
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1 group-hover:text-slate-400 transition-colors duration-200">
                                          {item.desc}
                                        </div>
                                      </motion.div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link href="/contact">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-3 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 cursor-pointer group overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="absolute top-2 right-2 w-3 h-3 text-white/50" />
                  </motion.div>
                  
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Contact</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
                <div className="px-6 py-6 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {link.hasDropdown ? (
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleDropdownClick(index)}
                          className={`
                            w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-300 group
                            ${pathname === link.path 
                              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30' 
                              : 'text-slate-300 hover:text-white hover:bg-white/10'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-white/10 rounded-lg">
                              {link.icon}
                            </div>
                            <span className="text-sm font-medium">{link.name}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                        </motion.button>
                      ) : (
                        <Link href={link.path}>
                          <motion.div
                            whileTap={{ scale: 0.98 }}
                            onClick={closeMenu}
                            className={`
                              w-full flex items-center p-4 rounded-2xl transition-all duration-300 cursor-pointer group
                              ${pathname === link.path 
                                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30' 
                                : 'text-slate-300 hover:text-white hover:bg-white/10'
                              }
                            `}
                          >
                            <div className="flex items-center space-x-4">
                              <div className="p-2 bg-white/10 rounded-lg">
                                {link.icon}
                              </div>
                              <span className="text-sm font-medium">{link.name}</span>
                            </div>
                          </motion.div>
                        </Link>
                      )}
                      
                      {link.hasDropdown && activeDropdown === index && (
                        <motion.div 
                          className="mt-3 ml-8 space-y-2 border-l-2 border-teal-500/30 pl-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              className="block p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                              onClick={closeMenu}
                            >
                              <div className="text-sm font-medium">{item.name}</div>
                              <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Mobile Contact Button */}
                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  >
                    <Link href="/contact">
                      <motion.div 
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-teal-500/30 cursor-pointer"
                        onClick={closeMenu}
                      >
                        <Phone className="w-5 h-5" />
                        <span>Contact</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default ModernDreamakerNavbar;