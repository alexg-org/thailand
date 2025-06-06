'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useLanguage();
  
  return (
    <footer className="bg-gray-800 text-white" dir={lang === "he" ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{lang === "he" ? "Thailand Estates - תאילנד נכסים" : "Thailand Estates"}</h3>
            <p className="text-gray-300 mb-4">
              {lang === "he" 
                ? "המומחים המובילים בנכסי יוקרה בתאילנד. מציעים את ההזדמנויות הטובות ביותר לנכסים למכירה ולהשכרה ברחבי תאילנד."
                : "The leading experts in Thailand luxury properties. Offering the best opportunities for properties for sale and rent throughout Thailand."
              }
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{lang === "he" ? "קישורים מהירים" : "Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "בית" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/properties?status=sale" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "נכסים למכירה" : "Properties for Sale"}
                </Link>
              </li>
              <li>
                <Link href="/properties?status=rent" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "נכסים להשכרה" : "Properties for Rent"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "אודות" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "צור קשר" : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{lang === "he" ? "פרטי התקשרות" : "Contact Information"}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@thailand-estates.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+66 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{lang === "he" ? "סוקומוויט 55, בנגקוק, תאילנד" : "Sukhumvit 55, Bangkok, Thailand"}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Thailand Estates. {lang === "he" ? "כל הזכויות שמורות." : "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}
