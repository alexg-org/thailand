'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PropertyFilter() {
  const { lang } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  
  const locations = [
    { value: 'Bangkok', label: lang === 'he' ? 'בנגקוק' : 'Bangkok' },
    { value: 'Phuket', label: lang === 'he' ? 'פוקט' : 'Phuket' },
    { value: 'Koh Samui', label: lang === 'he' ? 'קו סמוי' : 'Koh Samui' },
    { value: 'Chiang Mai', label: lang === 'he' ? 'צ\'יאנג מאי' : 'Chiang Mai' },
    { value: 'Hua Hin', label: lang === 'he' ? 'הוא הין' : 'Hua Hin' },
    { value: 'Krabi', label: lang === 'he' ? 'קראבי' : 'Krabi' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (bedrooms) params.append('bedrooms', bedrooms);
    if (location) params.append('location', location);
    
    router.push(`/properties?${params.toString()}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8" dir={lang === "he" ? "rtl" : "ltr"}>
      <h2 className="text-xl font-bold mb-4">{lang === "he" ? "חיפוש נכסים" : "Property Search"}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {lang === "he" ? "סטטוס" : "Status"}
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{lang === "he" ? "כל הנכסים" : "All Properties"}</option>
              <option value="sale">{lang === "he" ? "למכירה" : "For Sale"}</option>
              <option value="rent">{lang === "he" ? "להשכרה" : "For Rent"}</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {lang === "he" ? "מיקום" : "Location"}
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{lang === "he" ? "כל המיקומים" : "All Locations"}</option>
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {lang === "he" ? "חדרי שינה" : "Bedrooms"}
            </label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{lang === "he" ? "הכל" : "Any"}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {lang === "he" ? "מחיר מינימלי" : "Min Price"}
            </label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={lang === "he" ? "מינימום" : "Minimum"}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {lang === "he" ? "מחיר מקסימלי" : "Max Price"}
            </label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={lang === "he" ? "מקסימום" : "Maximum"}
            />
          </div>
          
          <div className="mb-4 flex items-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition w-full"
            >
              {lang === "he" ? "חיפוש" : "Search"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
