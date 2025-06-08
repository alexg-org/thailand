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
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-primary-gold/20 hover:border-primary-gold/40 focus:outline-primary-gold focus:ring-2 focus:ring-primary-gold/30 w-full h-full transform hover:-translate-y-1 hover:scale-[1.02]"
      tabIndex={0}
      aria-label={lang === "he" ? property.titleHe : property.title}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={property.imageUrl || '/images/property-placeholder.jpg'}
          alt={lang === "he" ? property.titleHe : property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {lang === "he" ? property.statusHe : property.status === 'sale' ? 'For Sale' : 'For Rent'}
        </div>
        
        {/* הוספת תגית זמינות - באתר המקורי יש "AVAILABLE NOW" */}
        <div className="absolute top-3 left-3 bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {lang === "he" ? "זמין עכשיו" : "Available Now"}
        </div>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-gold/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col" dir={lang === "he" ? "rtl" : "ltr"}>
        <h3 className="text-lg font-bold text-primary-gold mb-2">
          {lang === "he" ? property.titleHe : property.title}
        </h3>
        <p className="text-primary-gold/70 mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-gold mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {lang === "he" ? property.locationHe : property.location}
        </p>
        
        {/* תגיות מאפיינים נוספים */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-gradient-to-r from-primary-gold/20 to-sunset-orange/20 text-primary-gold text-xs px-3 py-1 rounded-full border border-primary-gold/30">
            {lang === "he" ? "נכס איכותי" : "Premium"}
          </span>
          {property.location.includes('Bangkok') && (
            <span className="inline-block bg-gradient-to-r from-primary-gold/20 to-primary-gold/30 text-primary-gold text-xs px-3 py-1 rounded-full border border-primary-gold/30">
              {lang === "he" ? "מרכז העיר" : "City Center"}
            </span>
          )}
          {property.bedrooms >= 3 && (
            <span className="inline-block bg-gradient-to-r from-primary-gold/20 to-primary-gold/30 text-primary-gold text-xs px-3 py-1 rounded-full border border-primary-gold/30">
              {lang === "he" ? "משפחתי" : "Family"}
            </span>
          )}
        </div>
        
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm text-primary-gold/70 font-medium">{property.bedrooms} {lang === "he" ? "חדרים" : "beds"}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-primary-gold/70 font-medium">{property.bathrooms} {lang === "he" ? "חדרי רחצה" : "baths"}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span className="text-sm text-primary-gold/70 font-medium">{property.area} {lang === "he" ? "מ״ר" : "sqm"}</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="space-y-3">
            <p className="text-xl font-bold text-primary-gold">
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
                  className={`px-3 py-1 text-xs rounded-lg transition-all duration-200 font-medium ${
                    currency === curr 
                      ? 'bg-gradient-thailand text-white shadow-md' 
                      : 'bg-warm-sand/30 text-primary-gold hover:bg-warm-sand/50 border border-primary-gold/20'
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
