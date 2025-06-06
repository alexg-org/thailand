'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { lang } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/hero.jpg"
          alt="Thailand Real Estate"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            {lang === "he" 
              ? "נכסי יוקרה בתאילנד" 
              : "Luxury Real Estate in Thailand"
            }
          </h1>
          <p 
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            {lang === "he"
              ? "מצא את נכס החלומות שלך בתאילנד - דירות יוקרה, וילות ובתים למכירה ולהשכרה במיקומים הטובים ביותר"
              : "Find your dream property in Thailand - luxury condos, villas, and homes for sale and rent in the best locations"
            }
          </p>
          <div className="flex flex-wrap gap-4" dir={lang === "he" ? "rtl" : "ltr"}>
            <Link
              href="/properties?status=sale"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              {lang === "he" ? "נכסים למכירה" : "Properties for Sale"}
            </Link>
            <Link
              href="/properties?status=rent"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              {lang === "he" ? "נכסים להשכרה" : "Properties for Rent"}
            </Link>
          </div>
        </div>
      </section>

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
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors"
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
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
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
          <div className="flex flex-col md:flex-row md:items-center md:space-x-12" dir={lang === "he" ? "rtl" : "ltr"}>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "he" ? "למה להשקיע בנדל\"ן בתאילנד?" : "Why Invest in Thailand Real Estate?"}
              </h2>
              <p className="text-gray-600 mb-6">
                {lang === "he" 
                  ? "תאילנד מציעה הזדמנויות השקעה יוצאות דופן עם עלייה של 18% במחירי הנדל\"ן בעשור האחרון. מסף כניסה נמוך, תיירות שנתית ערה, והטבות מס אטרקטיביות הופכים את תאילנד ליעד אידיאלי למשקיעי נדל\"ן." 
                  : "Thailand offers exceptional investment opportunities with an 18% increase in property prices over the last decade. Low entry threshold, year-round tourism, and attractive tax benefits make Thailand an ideal destination for real estate investors."
                }
              </p>
              <Link
                href="/why-invest"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                {lang === "he" ? "גלה למה להשקיע בתאילנד" : "Discover Why Invest in Thailand"}
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/pexels-jimmy-teoh-294331-2402000.jpg"
                  alt="Thailand Investment Property"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Property Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            {lang === "he" ? "סוגי נכסים בתאילנד" : "Property Types in Thailand"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/Luxury-Condos.jpg"
                  alt={lang === "he" ? "דירות יוקרה" : "Luxury Condos"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? "דירות יוקרה" : "Luxury Condos"}
                </h3>
                <p className="text-gray-600" dir={lang === "he" ? "rtl" : "ltr"}>
                  {lang === "he"
                    ? "דירות יוקרה במגדלים מודרניים עם נוף מרהיב ומתקנים מפנקים"
                    : "Luxury apartments in modern towers with stunning views and premium amenities"
                  }
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/thailand-vila.jpg"
                  alt={lang === "he" ? "וילות חוף" : "Beach Villas"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? "וילות חוף" : "Beach Villas"}
                </h3>
                <p className="text-gray-600" dir={lang === "he" ? "rtl" : "ltr"}>
                  {lang === "he"
                    ? "וילות מפוארות לצד החוף עם גישה ישירה לים וגינות טרופיות"
                    : "Luxurious villas by the beach with direct sea access and tropical gardens"
                  }
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/Thailand-Business-Properties.jpg"
                  alt={lang === "he" ? "נכסים מסחריים" : "Commercial Properties"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? "נכסים מסחריים" : "Commercial Properties"}
                </h3>
                <p className="text-gray-600" dir={lang === "he" ? "rtl" : "ltr"}>
                  {lang === "he"
                    ? "משרדים, חנויות ומרכזי מסחר במיקומים אסטרטגיים ברחבי תאילנד"
                    : "Offices, shops, and commercial centers in strategic locations throughout Thailand"
                  }
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/properties"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              {lang === "he" ? "צפה בכל הנכסים" : "View All Properties"}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "he" ? "מוכנים למצוא את הנכס המושלם?" : "Ready to Find Your Perfect Property?"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {lang === "he"
              ? "צור קשר עוד היום כדי לקבל ייעוץ מהמומחים שלנו ולמצוא את נכס החלומות שלך בתאילנד"
              : "Contact us today to get expert advice and find your dream property in Thailand"
            }
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-lg transition-colors hover:bg-gray-100"
          >
            {lang === "he" ? "צור קשר עכשיו" : "Contact Us Now"}
          </Link>
        </div>
      </section>
    </div>
  );
}
