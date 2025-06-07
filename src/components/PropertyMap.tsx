'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface PropertyMapProps {
  location: string;
  locationHe?: string;
}

export default function PropertyMap({ location, locationHe }: PropertyMapProps) {
  const { lang } = useLanguage();
  
  // We'll use a placeholder iframe for the map
  // In a production app, you would use a proper maps API like Google Maps or Mapbox
  
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-gray-900">
        {lang === "he" ? "מיקום" : "Location"}
      </h2>
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="text-gray-600">
        {lang === "he" ? locationHe : location}
      </p>
    </div>
  );
}
