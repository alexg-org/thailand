'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function NotFound() {
  const { lang } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        {lang === "he" ? "העמוד לא נמצא" : "Page Not Found"}
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        {lang === "he" 
          ? "מצטערים, אבל העמוד שחיפשת אינו קיים. ייתכן שהכתובת הוקלדה בצורה שגויה או שהעמוד הוסר."
          : "Sorry, but the page you were looking for doesn't exist. It might have been typed incorrectly or removed."
        }
      </p>
      <Link
        href="/"
        className="bg-primary-gold hover:bg-primary-gold/80 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors"
      >
        {lang === "he" ? "חזרה לדף הבית" : "Back to Homepage"}
      </Link>
    </div>
  );
}
