'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface PropertyFeaturesProps {
  bedrooms: number;
  bathrooms: number;
  area: number;
  additionalFeatures?: string[];
  additionalFeaturesHe?: string[];
}

export default function PropertyFeatures({
  bedrooms,
  bathrooms,
  area,
  additionalFeatures = [],
  additionalFeaturesHe = []
}: PropertyFeaturesProps) {
  const { lang } = useLanguage();

  // Define standard features
  const standardFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: `${bedrooms} ${lang === "he" ? "חדרים" : "bedrooms"}`
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: `${bathrooms} ${lang === "he" ? "חדרי רחצה" : "bathrooms"}`
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      ),
      label: `${area} ${lang === "he" ? "מ״ר" : "sqm"}`
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        {lang === "he" ? "מאפיינים" : "Features"}
      </h2>
      
      {/* Standard features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {standardFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            {feature.icon}
            <span className="text-gray-700 font-medium">{feature.label}</span>
          </div>
        ))}
      </div>
      
      {/* Additional features */}
      {(additionalFeatures.length > 0 || additionalFeaturesHe.length > 0) && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {lang === "he" ? "מאפיינים נוספים" : "Additional Features"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {lang === "he" 
              ? additionalFeaturesHe.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))
              : additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))
            }
          </div>
        </div>
      )}
    </div>
  );
}
