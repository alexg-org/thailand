'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useLanguage();
  
  return (
    <footer className="bg-gray-800 text-white" dir={lang === "he" ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About the Initiative */}
          <div>
            <h3 className="text-lg font-bold mb-4">{lang === "he" ? "על היוזמה" : "About the Initiative"}</h3>
            <div className="text-gray-300 text-sm space-y-3">
              <p>
                {lang === "he" 
                  ? "Thailand Estates היא יוזמה חדשנית המתמחה בהשקעות נדל\"ן בתאילנד. אנו מביאים את הזדמנויות ההשקעה הטובות ביותר למשקיעים ישראלים."
                  : "Thailand Estates is an innovative initiative specializing in real estate investments in Thailand. We bring the best investment opportunities to Israeli investors."
                }
              </p>
              <p>
                {lang === "he"
                  ? "הצוות שלנו מורכב מאנשי מקצוע מנוסים הפועלים הן בישראל והן בתאילנד, ומספקים שירות מקצועי ואמין לכל לקוח."
                  : "Our team consists of experienced professionals operating both in Israel and Thailand, providing professional and reliable service to every client."
                }
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{lang === "he" ? "קישורים מהירים" : "Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "בית" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "אודות" : "About"}
                </Link>
              </li>
              <li>
                <Link href="/properties?status=sale" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "נכסים למכירה" : "Properties for Sale"}
                </Link>
              </li>
              <li>
                <Link href="/properties?status=rent" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "נכסים להשכרה" : "Properties for Rent"}
                </Link>
              </li>
              <li>
                <Link href="/why-invest" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "למה להשקיע" : "Why Invest"}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "בלוג" : "Blog"}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition">
                  {lang === "he" ? "צור קשר" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">{lang === "he" ? "פרטי התקשרות" : "Contact Information"}</h3>
            <div className="space-y-6">
              {/* Tel Aviv Office */}
              <div>
                <h4 className="text-base font-semibold text-white mb-1">{lang === "he" ? "משרד תל אביב" : "Tel Aviv Office"}</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>
                    <span className="font-medium">{lang === "he" ? "כתובת: " : "Address: "}</span>
                    {lang === "he" ? "דיזנגוף 100, תל אביב, ישראל" : "Dizengoff 100, Tel Aviv, Israel"}
                  </li>
                  <li>
                    <span className="font-medium">{lang === "he" ? "טלפון: " : "Phone: "}</span>
                    +972 3 555 1234
                  </li>
                  <li>
                    <span className="font-medium">{lang === "he" ? "דוא\"ל: " : "Email: "}</span>
                    telaviv@thailand-estates.com
                  </li>
                </ul>
              </div>
              {/* Phuket Office */}
              <div>
                <h4 className="text-base font-semibold text-white mb-1">{lang === "he" ? "משרד פוקט" : "Phuket Office"}</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>
                    <span className="font-medium">{lang === "he" ? "כתובת: " : "Address: "}</span>
                    {lang === "he" ? "456 טלנג רואד, פאטונג, פוקט 83150" : "456 Thalang Road, Patong, Phuket 83150"}
                  </li>
                  <li>
                    <span className="font-medium">{lang === "he" ? "טלפון: " : "Phone: "}</span>
                    +66 76 123 4567
                  </li>
                  <li>
                    <span className="font-medium">{lang === "he" ? "דוא\"ל: " : "Email: "}</span>
                    phuket@thailandestates.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Thailand Estates. {lang === "he" ? "כל הזכויות שמורות." : "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}
