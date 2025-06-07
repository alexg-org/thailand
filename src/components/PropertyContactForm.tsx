'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PropertyContactFormProps {
  propertyTitle: string;
  propertyTitleHe?: string;
}

export default function PropertyContactForm({
  propertyTitle,
  propertyTitleHe
}: PropertyContactFormProps) {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: lang === 'he' 
      ? `מעוניין לקבל מידע נוסף על "${propertyTitleHe || propertyTitle}"`
      : `I am interested in getting more information about "${propertyTitle}"`
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: lang === 'he' 
            ? `מעוניין לקבל מידע נוסף על "${propertyTitleHe || propertyTitle}"`
            : `I am interested in getting more information about "${propertyTitle}"`
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className="bg-blue-50 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {lang === "he" ? "מעוניין בנכס זה?" : "Interested in this property?"}
      </h2>
      
      {isSubmitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg">
          {lang === "he"
            ? "תודה! פנייתך התקבלה ונציג יצור איתך קשר בהקדם."
            : "Thank you! Your inquiry has been received and a representative will contact you soon."
          }
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" dir={lang === "he" ? "rtl" : "ltr"}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {lang === "he" ? "שם מלא" : "Full Name"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {lang === "he" ? "אימייל" : "Email"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {lang === "he" ? "טלפון" : "Phone"}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {lang === "he" ? "הודעה" : "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:bg-blue-400"
          >
            {isSubmitting
              ? (lang === "he" ? "שולח..." : "Sending...")
              : (lang === "he" ? "שליחת פנייה" : "Send Inquiry")
            }
          </button>
        </form>
      )}
    </div>
  );
}
