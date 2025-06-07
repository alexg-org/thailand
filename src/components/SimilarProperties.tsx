'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Property } from '@/types/property';
import PropertyCard from './PropertyCard';

interface SimilarPropertiesProps {
  currentPropertyId: number;
  properties: Property[];
}

export default function SimilarProperties({ 
  currentPropertyId, 
  properties 
}: SimilarPropertiesProps) {
  const { lang } = useLanguage();

  // Filter out the current property and limit to 3 similar properties
  const similarProperties = properties
    .filter(p => p.id !== currentPropertyId)
    .slice(0, 3);

  if (similarProperties.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {lang === "he" ? "נכסים דומים" : "Similar Properties"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
