'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-xl">Thailand Estates</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8" dir={lang === "he" ? "rtl" : "ltr"}>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {lang === "he" ? "בית" : "Home"}
            </Link>
            <Link
              href="/properties?status=sale"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {lang === "he" ? "נכסים למכירה" : "For Sale"}
            </Link>
            <Link
              href="/properties?status=rent"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {lang === "he" ? "נכסים להשכרה" : "For Rent"}
            </Link>
            <Link
              href="/why-invest"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {lang === "he" ? "למה להשקיע" : "Why Invest"}
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
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
        </div>
      </div>
    </header>
  );
}
