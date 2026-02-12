"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '@/libs/AuthContext';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const { session,signOut } = useAuth();

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg  px-6 py-4 mx-auto max-w-7xl">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
         DocSense
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
         <Link 
            href="/#about" 
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/#contact" 
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* CTA Button */}
          {session? 
            <button 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300"
            onClick={signOut}
            >
            Log out
          </button>
           : 
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300">
            Get Started
          </button>}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-purple-600 focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col gap-4">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
            >
              Contact
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;