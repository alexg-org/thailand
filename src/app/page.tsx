'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyCard from '@/components/PropertyCard';
import HeroSearch from '@/components/HeroSearch';
import PropertyTestimonials from '@/components/PropertyTestimonials';
import { properties } from '@/data/properties';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { lang } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+972');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const countryCodes = [
    { code: '+972', country: 'IL', flag: '🇮🇱', name: lang === "he" ? "ישראל" : "Israel" },
    { code: '+66', country: 'TH', flag: '🇹🇭', name: lang === "he" ? "תאילנד" : "Thailand" },
    { code: '+1', country: 'US', flag: '🇺🇸', name: lang === "he" ? "ארצות הברית" : "USA" },
    { code: '+44', country: 'GB', flag: '🇬🇧', name: lang === "he" ? "בריטניה" : "UK" },
    { code: '+33', country: 'FR', flag: '🇫🇷', name: lang === "he" ? "צרפת" : "France" },
    { code: '+49', country: 'DE', flag: '🇩🇪', name: lang === "he" ? "גרמניה" : "Germany" },
  ];
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image
          src="/images/Cursor_and_תכירו_את_המלון_הכי_מפנק_בפוקט_-_למטייל.png"
          alt="Thailand Real Estate"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
          <div className="bg-black/30 px-5 py-3 rounded-lg">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center drop-shadow-lg"
              dir={lang === "he" ? "rtl" : "ltr"}
            >
              {lang === "he" 
                ? "נכסי יוקרה בתאילנד" 
                : "Luxury Real Estate in Thailand"
              }
            </h1>
            <p 
              className="text-xl md:text-2xl text-white mb-2 max-w-2xl mx-auto text-center drop-shadow-lg"
              dir={lang === "he" ? "rtl" : "ltr"}
            >
              {lang === "he"
                ? "מצא את נכס החלומות שלך בתאילנד - דירות יוקרה, וילות ובתים למכירה ולהשכרה במיקומים הטובים ביותר"
                : "Find your dream property in Thailand - luxury condos, villas, and homes for sale and rent in the best locations"
              }
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center" dir={lang === "he" ? "rtl" : "ltr"}>
            <Link
              href="/properties?status=sale"
              className="bg-warm-sand/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-gold/20 hover:border-primary-gold/40 focus:outline-primary-gold focus:ring-2 focus:ring-primary-gold/30 transform hover:-translate-y-1 hover:scale-[1.02] text-primary-gold px-6 py-3 font-medium text-lg"
            >
              {lang === "he" ? "נכסים למכירה" : "Properties for Sale"}
            </Link>
            <Link
              href="/properties?status=rent"
              className="bg-warm-sand/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-gold/20 hover:border-primary-gold/40 focus:outline-primary-gold focus:ring-2 focus:ring-primary-gold/30 transform hover:-translate-y-1 hover:scale-[1.02] text-primary-gold px-6 py-3 font-medium text-lg"
            >
              {lang === "he" ? "נכסים להשכרה" : "Properties for Rent"}
            </Link>
          </div>
        </div>
      </section>



      {/* Hero Search Section */}
      <HeroSearch />

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            {lang === "he" ? "נכסים מובילים" : "Featured Properties"}
          </h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-4 h-80 animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.slice(0, 6).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Link
              href="/properties"
              className="inline-block bg-warm-sand/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-gold/20 hover:border-primary-gold/40 focus:outline-primary-gold focus:ring-2 focus:ring-primary-gold/30 transform hover:-translate-y-1 hover:scale-[1.02] text-primary-gold px-6 py-3 font-medium text-lg"
            >
              {lang === "he" ? "צפה בכל הנכסים" : "View All Properties"}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            {lang === "he" ? "למה לבחור בנו" : "Why Choose Us"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="bg-primary-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === "he" ? "מומחיות מקומית" : "Local Expertise"}
              </h3>
              <p className="text-gray-600" dir={lang === "he" ? "rtl" : "ltr"}>
                {lang === "he"
                  ? "הצוות שלנו חי ועובד בתאילנד, ויש לנו ידע מעמיק על שוק הנדל\"ן המקומי"
                  : "Our team lives and works in Thailand, with deep knowledge of the local real estate market"
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="bg-primary-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === "he" ? "בטחון משפטי" : "Legal Security"}
              </h3>
              <p className="text-gray-600" dir={lang === "he" ? "rtl" : "ltr"}>
                {lang === "he"
                  ? "אנו מסייעים לכם לנווט בין החוקים המורכבים של רכישת נדל\"ן בתאילנד, תוך הבטחת ביטחון משפטי מלא"
                  : "We help you navigate the complex laws of buying property in Thailand, ensuring full legal security"
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="bg-primary-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === "he" ? "השקעות ברווחיות גבוהה" : "High ROI Investments"}
              </h3>
              <p className="text-gray-600" dir={lang === "he" ? "rtl" : "ltr"}>
                {lang === "he"
                  ? "אנו מתמחים באיתור נכסים עם פוטנציאל צמיחה גבוה והחזר השקעה מרשים"
                  : "We specialize in finding properties with high growth potential and impressive return on investment"
                }
              </p>
              <Link 
                href="/why-invest" 
                className="mt-4 inline-block bg-warm-sand/95 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-primary-gold/20 hover:border-primary-gold/40 focus:outline-primary-gold focus:ring-1 focus:ring-primary-gold/30 transform hover:-translate-y-0.5 hover:scale-[1.01] text-primary-gold px-4 py-2 font-medium text-sm"
              >
                {lang === "he" ? "למד עוד על השקעות בתאילנד" : "Learn more about investing in Thailand"}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investment Opportunities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            {lang === "he" ? "למה להשקיע בנדל\"ן בתאילנד?" : "Why Invest in Thailand Real Estate?"}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div dir={lang === "he" ? "rtl" : "ltr"}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === "he" ? "הזדמנויות השקעה עם תשואות גבוהות" : "Investment Opportunities with High Returns"}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {lang === "he"
                  ? "תאילנד מציעה שילוב ייחודי של מחירים תחרותיים, צמיחה כלכלית יציבה ושוק תיירות משגשג, מה שהופך אותה ליעד אטרקטיבי למשקיעי נדל\"ן."
                  : "Thailand offers a unique combination of competitive prices, stable economic growth, and a thriving tourism market, making it an attractive destination for real estate investors."
                }
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    {lang === "he" ? "תשואות שכירות של 5-8% בממוצע" : "Rental yields averaging 5-8%"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    {lang === "he" ? "צמיחת ערך הנכסים בשיעור של 3-6% בשנה" : "Property value appreciation of 3-6% annually"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    {lang === "he" ? "עלויות תחזוקה נמוכות יחסית" : "Relatively low maintenance costs"}
                  </p>
                </div>
              </div>
              <Link
                href="/why-invest"
                className="inline-block bg-warm-sand/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-gold/20 hover:border-primary-gold/40 focus:outline-primary-gold focus:ring-2 focus:ring-primary-gold/30 transform hover:-translate-y-1 hover:scale-[1.02] text-primary-gold px-6 py-3 font-medium"
              >
                {lang === "he" ? "מידע נוסף על השקעות בתאילנד" : "Learn More About Thailand Investments"}
              </Link>
            </div>
            
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/pexels-jimmy-teoh-294331-2402000.jpg"
                alt={lang === "he" ? "השקעות נדל\"ן בתאילנד" : "Thailand Real Estate Investments"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyTestimonials />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            {lang === "he" ? "שאלות נפוצות" : "Frequently Asked Questions"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir={lang === "he" ? "rtl" : "ltr"}>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lang === "he" ? "האם זרים יכולים לרכוש נדל\"ן בתאילנד?" : "Can foreigners purchase real estate in Thailand?"}
              </h3>
              <p className="text-gray-700">
                {lang === "he"
                  ? "זרים יכולים לרכוש דירות בבעלות מלאה, אך לא יכולים לרכוש קרקע באופן ישיר. עבור בתים ווילות, קיימות מספר אפשרויות חוקיות כמו חכירה ארוכת טווח או הקמת חברה תאילנדית."
                  : "Foreigners can own condominiums outright, but cannot directly own land. For houses and villas, there are several legal options such as long-term leases or setting up a Thai company."
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lang === "he" ? "מהם המיסים הכרוכים ברכישת נדל\"ן בתאילנד?" : "What taxes are involved in purchasing property in Thailand?"}
              </h3>
              <p className="text-gray-700">
                {lang === "he"
                  ? "המיסים העיקריים כוללים מס העברה (2%), מס בולים (0.5%), מס עסקים ספציפי (3.3% אם נמכר תוך 5 שנים), ועמלות רישום (1%). בדרך כלל, המוכר והקונה מחלקים את העלויות הללו."
                  : "The main taxes include transfer tax (2%), stamp duty (0.5%), specific business tax (3.3% if sold within 5 years), and registration fees (1%). Typically, the seller and buyer split these costs."
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lang === "he" ? "האם אתם מציעים שירותי ניהול נכסים?" : "Do you offer property management services?"}
              </h3>
              <p className="text-gray-700">
                {lang === "he"
                  ? "כן, אנו מציעים שירותי ניהול נכסים מקיפים לבעלי נכסים שאינם מתגוררים בתאילנד. השירותים כוללים תחזוקה, טיפול בשוכרים, גביית שכר דירה, ודיווחים חודשיים."
                  : "Yes, we offer comprehensive property management services for owners who don't reside in Thailand. Services include maintenance, tenant handling, rent collection, and monthly reporting."
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lang === "he" ? "מהו תהליך הרכישה הטיפוסי בתאילנד?" : "What is the typical purchase process in Thailand?"}
              </h3>
              <p className="text-gray-700">
                {lang === "he"
                  ? "התהליך כולל מציאת נכס, משא ומתן, חתימה על הסכם הזמנה עם הפקדת מקדמה (בד\"כ 10%), בדיקת נאותות, חתימה על חוזה סופי, ותשלום יתרת הסכום בעת העברת הבעלות. התהליך בדרך כלל אורך 30-60 יום."
                  : "The process includes finding a property, negotiation, signing a reservation agreement with a deposit (usually 10%), due diligence, signing the final contract, and paying the balance upon transfer of ownership. The process typically takes 30-60 days."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-warm-sand/95 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            {lang === "he" ? "?מוכנים למצוא את הנכס המושלם" : "Ready to Find Your Perfect Property?"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
            {lang === "he"
              ? "צור קשר עוד היום כדי לקבל ייעוץ מהמומחים שלנו ולמצוא את נכס החלומות שלך בתאילנד"
              : "Contact us today to get expert advice and find your dream property in Thailand"
            }
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div dir={lang === "he" ? "rtl" : "ltr"}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {lang === "he" ? "צור קשר" : "Contact Us"}
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === "he" ? "שם מלא" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === "he" ? "דוא\"ל" : "Email"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-gray-50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === "he" ? "טלפון" : "Phone"}
                    </label>
                    <div className={`flex ${lang === "he" ? "flex-row-reverse" : ""}`}>
                      {/* Custom Country Code Dropdown */}
                      <div className="relative" style={{ minWidth: '140px' }}>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`w-full px-3 py-3 border border-gray-300 ${lang === "he" ? "rounded-r-md" : "rounded-l-md"} bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between h-[44px]`}
                          style={{ color: '#1f2937', backgroundColor: '#ffffff' }}
                        >
                          <span>
                            {countryCodes.find(c => c.code === selectedCountryCode)?.flag} {selectedCountryCode}
                          </span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                            {countryCodes.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountryCode(country.code);
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full px-3 py-2 text-left hover:bg-gray-100 text-gray-900 text-sm"
                              >
                                {country.flag} {country.code} ({country.name})
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={lang === "he" ? "מספר טלפון" : "Phone number"}
                        className={`flex-1 px-3 py-3 border border-gray-300 ${lang === "he" ? "border-r-0 rounded-l-md" : "border-l-0 rounded-r-md"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 h-[44px]`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === "he" ? "נושא" : "Subject"}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      required
                    >
                      <option value="">
                        {lang === "he" ? "בחר נושא" : "Select a subject"}
                      </option>
                      <option value="property-inquiry">
                        {lang === "he" ? "שאלה על נכס" : "Property Inquiry"}
                      </option>
                      <option value="investment">
                        {lang === "he" ? "ייעוץ השקעות" : "Investment Advice"}
                      </option>
                      <option value="viewing">
                        {lang === "he" ? "תיאום ביקור" : "Schedule Viewing"}
                      </option>
                      <option value="other">
                        {lang === "he" ? "אחר" : "Other"}
                      </option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === "he" ? "הודעה" : "Message"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-gold/20 hover:border-primary-gold/40 focus:outline-primary-gold focus:ring-2 focus:ring-primary-gold/30 transform hover:-translate-y-1 hover:scale-[1.02] text-primary-gold px-6 py-3 font-medium"
                  >
                    {lang === "he" ? "שלח הודעה" : "Send Message"}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div dir={lang === "he" ? "rtl" : "ltr"}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {lang === "he" ? "פרטי התקשרות" : "Contact Information"}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {lang === "he" ? "המשרד הראשי בבנגקוק" : "Bangkok Main Office"}
                    </h4>
                    <p className="text-gray-700 mb-1">
                      {lang === "he" ? "123 סוקומוויט רואד, ואטאנה, בנגקוק 10110" : "123 Sukhumvit Road, Watthana, Bangkok 10110"}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">{lang === "he" ? "טלפון: " : "Phone: "}</span>
                      +66 2 123 4567
                    </p>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">{lang === "he" ? "דוא\"ל: " : "Email: "}</span>
                      bangkok@thailandestates.com
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {lang === "he" ? "משרד פוקט" : "Phuket Office"}
                    </h4>
                    <p className="text-gray-700 mb-1">
                      {lang === "he" ? "456 טלנג רואד, פאטונג, פוקט 83150" : "456 Thaland Road, Patong, Phuket 83150"}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">{lang === "he" ? "טלפון: " : "Phone: "}</span>
                      +66 76 123 4567
                    </p>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">{lang === "he" ? "דוא\"ל: " : "Email: "}</span>
                      phuket@thailandestates.com
                    </p>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden h-48 mt-6">
                    <iframe 
                      src="https://maps.google.com/maps?q=sukhumvit+road+bangkok&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
