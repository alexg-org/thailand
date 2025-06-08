'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function PropertyLocationGrid() {
  const { lang } = useLanguage();
  
  const locations = [
    {
      name: lang === 'he' ? 'בנגקוק' : 'Bangkok',
      image: '/images/pexels-pixabay-415708.jpg',
      properties: 24,
      slug: 'Bangkok'
    },
    {
      name: lang === 'he' ? 'פוקט' : 'Phuket',
      image: '/images/pexels-mikhail-nilov-8299707.jpg',
      properties: 16,
      slug: 'Phuket'
    },
    {
      name: lang === 'he' ? 'קו סמוי' : 'Koh Samui',
      image: '/images/pexels-mikhail-nilov-8299711.jpg',
      properties: 12,
      slug: 'Koh Samui'
    },
    {
      name: lang === 'he' ? 'צ\'יאנג מאי' : 'Chiang Mai',
      image: '/images/pexels-dutumong-2331028.jpg',
      properties: 8,
      slug: 'Chiang Mai'
    }
  ];
  
  return (
    <div>
      <h2 
        className="text-3xl font-bold text-gray-900 mb-8 text-center"
        dir={lang === "he" ? "rtl" : "ltr"}
      >
        {lang === "he" ? "מיקומים פופולריים" : "Popular Locations"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location) => (
          <Link
            key={location.slug}
            href={`/properties?location=${encodeURIComponent(location.slug)}`}
            className="group relative rounded-xl overflow-hidden shadow-md h-72"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
            <img 
              src={location.image} 
              alt={location.name} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
              <h3 className="text-xl font-bold mb-1">{location.name}</h3>
              <p>
                {lang === "he" 
                  ? `${location.properties} נכסים`
                  : `${location.properties} Properties`
                }
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
