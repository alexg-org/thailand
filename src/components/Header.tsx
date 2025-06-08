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
    <header className={`bg-warm-sand/95 backdrop-blur-md sticky top-0 z-10 transition-all duration-300 ${scrolled ? 'shadow-xl border-b border-primary-gold/20' : 'shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary-gold font-bold text-xl drop-shadow-sm">Thailand Estates</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" dir={lang === "he" ? "rtl" : "ltr"}>
            <Link
              href="/"
              className="text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {lang === "he" ? "בית" : "Home"}
            </Link>
            <Link
              href="/about"
              className="text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {lang === "he" ? "אודות" : "About"}
            </Link>
            <Link
              href="/properties?status=sale"
              className="text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {lang === "he" ? "נכסים למכירה" : "For Sale"}
            </Link>
            <Link
              href="/properties?status=rent"
              className="text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {lang === "he" ? "נכסים להשכרה" : "For Rent"}
            </Link>
            <Link
              href="/why-invest"
              className="text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {lang === "he" ? "למה להשקיע" : "Why Invest"}
            </Link>
            <Link
              href="/blog"
              className="text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {lang === "he" ? "בלוג" : "Blog"}
            </Link>
            <Link
              href="/#contact"
              className="text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {lang === "he" ? "צור קשר" : "Contact"}
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="bg-gradient-thailand text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
            >
              {lang === "he" ? "EN" : "עב"}
            </button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleLanguage}
              className="bg-gradient-thailand text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 mr-4"
              aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
            >
              {lang === "he" ? "EN" : "עב"}
            </button>
            
            <button
              onClick={toggleMenu}
              className="text-deep-ocean hover:text-primary-gold focus:outline-none transition-colors duration-200"
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
        <div className="px-4 py-2 space-y-1 bg-warm-sand/90 backdrop-blur-sm border-t border-primary-gold/20" dir={lang === "he" ? "rtl" : "ltr"}>
          <Link
            href="/"
            className="block text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "בית" : "Home"}
          </Link>
          <Link
            href="/about"
            className="block text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "אודות" : "About"}
          </Link>
          <Link
            href="/properties?status=sale"
            className="block text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "נכסים למכירה" : "For Sale"}
          </Link>
          <Link
            href="/properties?status=rent"
            className="block text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "נכסים להשכרה" : "For Rent"}
          </Link>
          <Link
            href="/why-invest"
            className="block text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "למה להשקיע" : "Why Invest"}
          </Link>
          <Link
            href="/blog"
            className="block text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "בלוג" : "Blog"}
          </Link>
          <Link
            href="/#contact"
            className="block text-deep-ocean hover:text-primary-gold px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {lang === "he" ? "צור קשר" : "Contact"}
          </Link>
        </div>
      </div>
    </header>
  );
}
