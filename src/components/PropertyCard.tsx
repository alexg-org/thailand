'use client';

import { Property } from '@/types/property';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

// Define currency types and conversion rates
type Currency = 'THB' | 'ILS' | 'USD' | 'EUR';

// Exchange rates (as of June 7, 2025)
const EXCHANGE_RATES = {
  THB: 1,       // Base currency (Thai Baht)
  ILS: 0.105,   // Israeli Shekel rate to THB
  USD: 0.029,   // US Dollar rate to THB
  EUR: 0.026,   // Euro rate to THB
};

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { lang } = useLanguage();
  const [currency, setCurrency] = useState<Currency>('THB');
  
  // Function to convert price to selected currency
  const convertPrice = (price: number, targetCurrency: Currency): string => {
    const convertedPrice = price * EXCHANGE_RATES[targetCurrency];
    
    // Format the price according to currency
    if (targetCurrency === 'THB') {
      return `${convertedPrice.toLocaleString()} ฿`;
    } else if (targetCurrency === 'ILS') {
      return `${convertedPrice.toLocaleString()} ₪`;
    } else if (targetCurrency === 'USD') {
      return `$${convertedPrice.toLocaleString()}`;
    } else {
      return `€${convertedPrice.toLocaleString()}`;
    }
  };
  
  return (
    <a
      href={`/property/${property.id}`}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col border border-blue-50 hover:border-blue-200 focus:outline-blue-700 focus:ring-2 focus:ring-blue-300 w-full h-full"
      tabIndex={0}
      aria-label={lang === "he" ? property.titleHe : property.title}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={property.imageUrl || '/images/property-placeholder.jpg'}
          alt={lang === "he" ? property.titleHe : property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {lang === "he" ? property.statusHe : property.status === 'sale' ? 'For Sale' : 'For Rent'}
        </div>
        
        {/* הוספת תגית זמינות - באתר המקורי יש "AVAILABLE NOW" */}
        <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {lang === "he" ? "זמין עכשיו" : "Available Now"}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col" dir={lang === "he" ? "rtl" : "ltr"}>
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {lang === "he" ? property.titleHe : property.title}
        </h3>
        <p className="text-gray-600 mb-2">
          {lang === "he" ? property.locationHe : property.location}
        </p>
        
        {/* תגיות מאפיינים נוספים */}
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {lang === "he" ? "נכס איכותי" : "Premium"}
          </span>
          {property.location.includes('Bangkok') && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {lang === "he" ? "מרכז העיר" : "City Center"}
            </span>
          )}
          {property.bedrooms >= 3 && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {lang === "he" ? "משפחתי" : "Family"}
            </span>
          )}
        </div>
        
        <div className="flex gap-3 mb-3">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm text-gray-500">{property.bedrooms} {lang === "he" ? "חדרים" : "beds"}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-500">{property.bathrooms} {lang === "he" ? "חדרי רחצה" : "baths"}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span className="text-sm text-gray-500">{property.area} {lang === "he" ? "מ״ר" : "sqm"}</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="space-y-2">
            <p className="text-xl font-bold text-blue-600">
              {property.status === 'rent' 
                ? `${convertPrice(property.price, currency)} ${lang === "he" ? "/חודש" : "/month"}`
                : convertPrice(property.price, currency)
              }
            </p>
            
            {/* Mini currency selector */}
            <div className="flex flex-wrap gap-1">
              {(['THB', 'ILS', 'USD', 'EUR'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigating to detail page
                    setCurrency(curr);
                  }}
                  className={`px-2 py-0.5 text-xs rounded transition-colors ${
                    currency === curr 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {curr === 'THB' ? '฿' : 
                   curr === 'ILS' ? '₪' : 
                   curr === 'USD' ? '$' : 
                   '€'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
