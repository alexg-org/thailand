'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { properties } from '@/data/properties';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const { lang } = useLanguage();
  const propertyId = parseInt(params.id);
  
  const property = properties.find(p => p.id === propertyId);
  
  if (!property) {
    notFound();
  }    return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/properties"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {lang === "he" ? "חזרה לכל הנכסים" : "Back to all properties"}
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={property.imageUrl}
              alt={lang === "he" ? property.titleHe : property.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-md font-medium">
              {lang === "he" ? property.statusHe : property.status}
            </div>
          </div>                    <div className="p-6" dir={lang === "he" ? "rtl" : "ltr"}>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {lang === "he" ? property.titleHe : property.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {lang === "he" ? property.locationHe : property.location}
            </p>
            
            <div className="flex gap-8 mb-6">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-gray-700">{property.bedrooms} {lang === "he" ? "חדרים" : "bedrooms"}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">{property.bathrooms} {lang === "he" ? "חדרי רחצה" : "bathrooms"}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                <span className="text-gray-700">{property.area} {lang === "he" ? "מ״ר" : "sqm"}</span>
              </div>
            </div>                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {lang === "he" ? "תיאור" : "Description"}
            </h2>
            <p className="text-gray-700 mb-6">
              {lang === "he" ? property.descriptionHe : property.description}
            </p>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-600">
                    {property.status === 'rent' 
                      ? `${property.price.toLocaleString()} ${lang === "he" ? "฿/חודש" : "฿/month"}`
                      : `${property.price.toLocaleString()} ฿`
                    }
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {lang === "he" ? "מחיר" : "Price"}
                  </p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors"
                  >
                    {lang === "he" ? "יצירת קשר לגבי נכס זה" : "Contact About This Property"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}