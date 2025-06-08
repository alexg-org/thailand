'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
  const { lang } = useLanguage();
  const router = useRouter();
  
  const [searchType, setSearchType] = useState<'sale' | 'rent'>('sale');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('status', searchType);
    if (location) params.append('location', location);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    
    router.push(`/properties?${params.toString()}`);
  };
  
  return (
    <div 
      className="bg-white rounded-lg shadow-lg py-4 px-4 md:px-6 max-w-7xl mx-auto -mt-20 relative z-30"
      dir={lang === "he" ? "rtl" : "ltr"}
    >
      <form onSubmit={handleSearch}>
        <div className="flex flex-col md:flex-row items-end gap-3 md:gap-3">
          {/* Search Type Toggle */}
          <div className="flex-shrink-0 w-full md:w-[220px]">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              {lang === "he" ? "סוג" : "Type"}
            </label>
            <div className="flex items-center bg-gray-100 rounded-md h-[38px]">
              <button
                type="button"
                className={`flex-1 py-0 px-5 rounded-md font-medium text-center transition-colors h-full flex items-center justify-center min-w-[100px] whitespace-nowrap ${
                  searchType === 'sale'
                    ? 'bg-primary-gold text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSearchType('sale')}
              >
                {lang === "he" ? "למכירה" : "For Sale"}
              </button>
              <button
                type="button"
                className={`flex-1 py-0 px-5 rounded-md font-medium text-center transition-colors h-full flex items-center justify-center min-w-[100px] whitespace-nowrap ${
                  searchType === 'rent'
                    ? 'bg-primary-gold text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSearchType('rent')}
              >
                {lang === "he" ? "להשכרה" : "For Rent"}
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="w-full md:w-60">
            <div className="relative">
              <label htmlFor="location" className="block text-sm font-medium text-gray-500 mb-1">
                {lang === "he" ? "מיקום" : "Location"}
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm h-[38px] text-ellipsis text-gray-900"
              >
                <option value="" className="whitespace-nowrap">{lang === "he" ? "כל המיקומים" : "All Locations"}</option>
                <option value="Bangkok" className="whitespace-nowrap">
                  {lang === "he" ? "בנגקוק" : "Bangkok"}
                </option>
                <option value="Phuket" className="whitespace-nowrap">
                  {lang === "he" ? "פוקט" : "Phuket"}
                </option>
                <option value="Koh Samui" className="whitespace-nowrap">
                  {lang === "he" ? "קו סמוי" : "Koh Samui"}
                </option>
                <option value="Chiang Mai" className="whitespace-nowrap">
                  {lang === "he" ? "צ'יאנג מאי" : "Chiang Mai"}
                </option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <div className="w-full md:w-44">
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-500 mb-1">
                {lang === "he" ? "מחיר מינימום" : "Min Price"}
              </label>
              <select
                id="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm h-[38px] text-ellipsis text-gray-900"
              >
                <option value="" className="whitespace-nowrap">{lang === "he" ? "מינימום" : "Min"}</option>
                <option value="100000" className="whitespace-nowrap">100,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="250000" className="whitespace-nowrap">250,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="500000" className="whitespace-nowrap">500,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="1000000" className="whitespace-nowrap">1,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="2000000" className="whitespace-nowrap">2,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="5000000" className="whitespace-nowrap">5,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
              </select>
            </div>
            <div className="w-full md:w-44">
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-500 mb-1">
                {lang === "he" ? "מחיר מקסימום" : "Max Price"}
              </label>
              <select
                id="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm h-[38px] text-ellipsis text-gray-900"
              >
                <option value="" className="whitespace-nowrap">{lang === "he" ? "מקסימום" : "Max"}</option>
                <option value="500000" className="whitespace-nowrap">500,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="1000000" className="whitespace-nowrap">1,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="2000000" className="whitespace-nowrap">2,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="5000000" className="whitespace-nowrap">5,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="10000000" className="whitespace-nowrap">10,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
                <option value="20000000" className="whitespace-nowrap">20,000,000 {searchType === 'rent' ? 'THB/mo' : 'THB'}</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              {lang === "he" ? "חיפוש" : "Search"}
            </label>
            <button
              type="submit"
              className="w-full md:w-auto bg-primary-gold hover:bg-primary-gold/80 text-white py-2 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2 text-sm h-[38px] whitespace-nowrap min-w-[100px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {lang === "he" ? "חיפוש" : "Search"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
