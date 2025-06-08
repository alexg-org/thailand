'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Property } from '@/types/property';
import Link from 'next/link';
import PropertyGallery from '@/components/PropertyGallery';
import PropertyFeatures from '@/components/PropertyFeatures';
import PropertyMap from '@/components/PropertyMap';
import PropertyContactForm from '@/components/PropertyContactForm';
import SimilarProperties from '@/components/SimilarProperties';
import { properties } from '@/data/properties';
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

interface PropertyDetailClientProps {
  property: Property;
}

export default function PropertyDetailClient({ property }: PropertyDetailClientProps) {
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
  
  // Handle currency change
  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  };
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">            <Link
              href="/properties"
              className="text-primary-gold hover:underline flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {lang === "he" ? "חזרה לכל הנכסים" : "Back to all properties"}
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - 2/3 width on desktop */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property status badge */}
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                {lang === "he" ? property.titleHe : property.title}
              </h1>
              <div className="bg-primary-gold text-white px-4 py-2 rounded-full text-md font-medium">
                {lang === "he" ? property.statusHe : property.status}
              </div>
            </div>

            <p className="text-xl text-gray-600">
              {lang === "he" ? property.locationHe : property.location}
            </p>

            {/* Image Gallery */}
            <PropertyGallery
              mainImage={property.imageUrl}
              additionalImages={property.additionalImages}
              title={property.title}
              titleHe={property.titleHe}
            />

            {/* Features */}
            <PropertyFeatures
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              additionalFeatures={property.features}
              additionalFeaturesHe={property.featuresHe}
            />

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {lang === "he" ? "תיאור" : "Description"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {lang === "he" ? property.descriptionHe : property.description}
              </p>
            </div>

            {/* Map */}
            <PropertyMap 
              location={property.location}
              locationHe={property.locationHe}
            />
          </div>

          {/* Sidebar - 1/3 width on desktop */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-bold text-primary-gold mb-2">
                {property.status === 'rent' 
                  ? `${convertPrice(property.price, currency)} ${lang === "he" ? "/חודש" : "/month"}`
                  : convertPrice(property.price, currency)
                }
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {lang === "he" ? "מחיר" : "Price"}
              </p>
              
              {/* Currency Selector */}
              <div className="mt-3 mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  {lang === "he" ? "בחר מטבע:" : "Select currency:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(['THB', 'ILS', 'USD', 'EUR'] as Currency[]).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => handleCurrencyChange(curr)}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        currency === curr 
                          ? 'bg-primary-gold text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {curr === 'THB' ? '฿ THB' : 
                       curr === 'ILS' ? '₪ ILS' : 
                       curr === 'USD' ? '$ USD' : 
                       '€ EUR'}
                    </button>
                  ))}
                </div>
                
                {/* Show all currency equivalents */}
                {currency !== 'THB' && (
                  <div className="mt-3 text-sm text-gray-500">
                    <p>{`${property.price.toLocaleString()} ฿ = ${convertPrice(property.price, currency)}`}</p>
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full bg-primary-gold hover:bg-primary-gold/80 text-white text-center px-6 py-3 rounded-lg font-medium text-lg transition-colors"
                >
                  {lang === "he" ? "יצירת קשר" : "Contact Agent"}
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <PropertyContactForm
              propertyTitle={property.title}
              propertyTitleHe={property.titleHe}
            />
          </div>
        </div>

        {/* Similar Properties */}
        <SimilarProperties
          currentPropertyId={property.id}
          properties={properties}
        />
      </div>
    </div>
  );
}
