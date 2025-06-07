'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    
    // Handle scroll events to add shadow to header when scrolled
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);
  
  // Prevent closing when clicking the menu itself
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  // Toggle mobile menu
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className={`bg-white sticky top-0 z-10 transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-xl">Thailand Estates</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" dir={lang === "he" ? "rtl" : "ltr"}>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {lang === "he" ? "בית" : "Home"}
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {lang === "he" ? "אודות" : "About"}
            </Link>
            <Link
              href="/properties?status=sale"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {lang === "he" ? "נכסים למכירה" : "For Sale"}
            </Link>
            <Link
              href="/properties?status=rent"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {lang === "he" ? "נכסים להשכרה" : "For Rent"}
            </Link>
            <Link
              href="/why-invest"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {lang === "he" ? "למה להשקיע" : "Why Invest"}
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {lang === "he" ? "בלוג" : "Blog"}
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {lang === "he" ? "צור קשר" : "Contact"}
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
              aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
            >
              {lang === "he" ? "EN" : "עב"}
            </button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleLanguage}
              className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition mr-4"
              aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
            >
              {lang === "he" ? "EN" : "עב"}
            </button>
            
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={handleMenuClick}
      >
        <div className="px-4 py-2 space-y-1 bg-gray-50" dir={lang === "he" ? "rtl" : "ltr"}>
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "בית" : "Home"}
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "אודות" : "About"}
          </Link>
          <Link
            href="/properties?status=sale"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "נכסים למכירה" : "For Sale"}
          </Link>
          <Link
            href="/properties?status=rent"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "נכסים להשכרה" : "For Rent"}
          </Link>
          <Link
            href="/why-invest"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "למה להשקיע" : "Why Invest"}
          </Link>
          <Link
            href="/blog"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "בלוג" : "Blog"}
          </Link>
          <Link
            href="/#contact"
            className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "צור קשר" : "Contact"}
          </Link>
        </div>
      </div>
    </header>
  );
}
