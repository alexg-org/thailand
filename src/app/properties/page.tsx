'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { useSearchParams } from 'next/navigation';

export default function PropertiesPage() {
  const { lang } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  
  const searchParams = useSearchParams();
  const statusFilter = searchParams.get('status');
  
  useEffect(() => {
    // Filter properties based on URL parameters
    let filtered = properties;
    
    if (statusFilter === 'sale' || statusFilter === 'rent') {
      filtered = properties.filter(property => property.status === statusFilter);
    }
    
    setFilteredProperties(filtered);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [statusFilter]);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-3xl font-bold text-gray-900 mb-8"
          dir={lang === "he" ? "rtl" : "ltr"}
        >
          {statusFilter === 'sale' 
            ? (lang === "he" ? "נכסים למכירה" : "Properties for Sale")
            : statusFilter === 'rent'
              ? (lang === "he" ? "נכסים להשכרה" : "Properties for Rent")
              : (lang === "he" ? "כל הנכסים" : "All Properties")
          }
        </h1>
        
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
          <>
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl text-gray-600">
                  {lang === "he" 
                    ? "לא נמצאו נכסים התואמים את החיפוש שלך" 
                    : "No properties found matching your search"
                  }
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
