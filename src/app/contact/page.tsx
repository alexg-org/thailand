'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function ContactPage() {
  const { lang } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setFormSubmitted(true);
  };
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
          dir={lang === "he" ? "rtl" : "ltr"}
        >
          {lang === "he" ? "צור קשר" : "Contact Us"}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-md p-6" dir={lang === "he" ? "rtl" : "ltr"}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {lang === "he" ? "שלח לנו הודעה" : "Send Us a Message"}
            </h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>{lang === "he" ? "תודה! קיבלנו את הודעתך ונחזור אליך בהקדם." : "Thank you! We've received your message and will get back to you soon."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {lang === "he" ? "שם מלא" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {lang === "he" ? "אימייל" : "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    {lang === "he" ? "טלפון" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {lang === "he" ? "הודעה" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors w-full"
                >
                  {lang === "he" ? "שלח הודעה" : "Send Message"}
                </button>
              </form>
            )}
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6" dir={lang === "he" ? "rtl" : "ltr"}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {lang === "he" ? "פרטי התקשרות" : "Contact Information"}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{lang === "he" ? "כתובת" : "Address"}</h3>
                  <p className="text-gray-600">
                    {lang === "he" ? "סוקומוויט 55, בנגקוק, תאילנד" : "Sukhumvit 55, Bangkok, Thailand"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{lang === "he" ? "אימייל" : "Email"}</h3>
                  <p className="text-gray-600">info@thailand-estates.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{lang === "he" ? "טלפון" : "Phone"}</h3>
                  <p className="text-gray-600">+66 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{lang === "he" ? "שעות פעילות" : "Business Hours"}</h3>
                  <p className="text-gray-600">
                    {lang === "he" ? "ראשון - שישי: 9:00 - 18:00" : "Monday - Friday: 9:00 AM - 6:00 PM"}
                    <br />
                    {lang === "he" ? "שבת: 10:00 - 16:00" : "Saturday: 10:00 AM - 4:00 PM"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
