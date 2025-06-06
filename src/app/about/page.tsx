'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function AboutPage() {
  const { lang } = useLanguage();
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
          dir={lang === "he" ? "rtl" : "ltr"}
        >
          {lang === "he" ? "אודות Thailand Estates" : "About Thailand Estates"}
        </h1>
        
        {/* Our Story Section */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <Image
                src="/images/about-company.jpg"
                alt="Thailand Estates Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8" dir={lang === "he" ? "rtl" : "ltr"}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === "he" ? "הסיפור שלנו" : "Our Story"}
              </h2>
              <p className="text-gray-700 mb-4">
                {lang === "he"
                  ? "Thailand Estates נוסדה בשנת 2010 מתוך תשוקה לנדל\"ן ואהבה לתאילנד. המייסדים שלנו, שהתאהבו בתרבות ובנופים המדהימים של תאילנד, זיהו את הפוטנציאל העצום של שוק הנדל\"ן המקומי."
                  : "Thailand Estates was founded in 2010 out of a passion for real estate and a love for Thailand. Our founders, who fell in love with the culture and stunning landscapes of Thailand, identified the immense potential of the local real estate market."
                }
              </p>
              <p className="text-gray-700 mb-4">
                {lang === "he"
                  ? "מאז הקמתה, החברה שלנו צמחה להיות אחת מסוכנויות הנדל\"ן המובילות המתמחות בנכסי יוקרה ברחבי תאילנד. אנו משרתים לקוחות מכל רחבי העולם, ומסייעים להם למצוא את הנכס המושלם בתאילנד, בין אם למגורים, השקעה או נופש."
                  : "Since its establishment, our company has grown to become one of the leading real estate agencies specializing in luxury properties throughout Thailand. We serve clients from all over the world, helping them find the perfect property in Thailand, whether for living, investment, or vacation."
                }
              </p>
              <p className="text-gray-700">
                {lang === "he"
                  ? "עם צוות של מומחי נדל\"ן מנוסים שמכירים היטב את השוק התאילנדי, אנו מחויבים לספק שירות מעולה ולמצוא את הנכסים הטובים ביותר עבור הלקוחות שלנו."
                  : "With a team of experienced real estate experts who know the Thai market well, we are committed to providing excellent service and finding the best properties for our clients."
                }
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team Section */}
        <div className="mb-12" dir={lang === "he" ? "rtl" : "ltr"}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {lang === "he" ? "הצוות שלנו" : "Our Team"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/team-1.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">John Smith</h3>
                <p className="text-blue-600 mb-3">{lang === "he" ? "מנכ\"ל ומייסד" : "CEO & Founder"}</p>
                <p className="text-gray-600">
                  {lang === "he"
                    ? "ג'ון הוא יזם ומומחה נדל\"ן עם למעלה מ-20 שנות ניסיון בשוק התאילנדי."
                    : "John is an entrepreneur and real estate expert with over 20 years of experience in the Thai market."
                  }
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/team-2.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 mb-3">{lang === "he" ? "מנהלת מכירות" : "Sales Director"}</p>
                <p className="text-gray-600">
                  {lang === "he"
                    ? "שרה מתמחה בנכסי יוקרה ובעלת רשת קשרים נרחבת בתעשיית הנדל\"ן התאילנדית."
                    : "Sarah specializes in luxury properties and has an extensive network in the Thai real estate industry."
                  }
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/team-3.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Chai Natakorn</h3>
                <p className="text-blue-600 mb-3">{lang === "he" ? "יועץ משפטי" : "Legal Advisor"}</p>
                <p className="text-gray-600">
                  {lang === "he"
                    ? "צ'אי הוא עורך דין תאילנדי מנוסה המתמחה בחוקי נדל\"ן ועסקאות בינלאומיות."
                    : "Chai is an experienced Thai lawyer specializing in real estate law and international transactions."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Thailand Experience Section */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8" dir={lang === "he" ? "rtl" : "ltr"}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === "he" ? "החוויה התאילנדית" : "The Thailand Experience"}
              </h2>
              <p className="text-gray-700 mb-4">
                {lang === "he"
                  ? "אנו מאמינים שהשקעה בנדל\"ן בתאילנד היא יותר מסתם עסקה כלכלית - זוהי הזדמנות להתחבר לתרבות עשירה, נופים מרהיבים וסגנון חיים ייחודי."
                  : "We believe that investing in Thai real estate is more than just a financial transaction - it's an opportunity to connect with a rich culture, stunning landscapes, and a unique lifestyle."
                }
              </p>
              <p className="text-gray-700 mb-4">
                {lang === "he"
                  ? "צוות המומחים שלנו לא רק מכיר את שוק הנדל\"ן, אלא גם את החיים בתאילנד - מהמסעדות הטובות ביותר ועד לחופים הנסתרים ולאטרקציות התרבותיות."
                  : "Our expert team knows not just the real estate market, but life in Thailand - from the best restaurants to hidden beaches and cultural attractions."
                }
              </p>
              <p className="text-gray-700">
                {lang === "he"
                  ? "אנו מזמינים אתכם לחוות את קסמה של תאילנד דרך הנכס המושלם."
                  : "We invite you to experience the magic of Thailand through the perfect property."
                }
              </p>
            </div>
            <div className="relative h-96 lg:h-auto">
              <Image
                src="/images/pexels-pixabay-415708.jpg"
                alt={lang === "he" ? "חוויית תאילנד" : "Thailand Experience"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="bg-white rounded-2xl shadow-md p-8" dir={lang === "he" ? "rtl" : "ltr"}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {lang === "he" ? "הערכים שלנו" : "Our Values"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-fit rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? "יושרה" : "Integrity"}
                </h3>
                <p className="text-gray-600">
                  {lang === "he"
                    ? "אנו פועלים בשקיפות מלאה ויושרה בכל עסקה. אנו מאמינים בבניית יחסי אמון ארוכי טווח עם הלקוחות שלנו."
                    : "We operate with complete transparency and integrity in every transaction. We believe in building long-term trust relationships with our clients."
                  }
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-fit rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? "מצוינות" : "Excellence"}
                </h3>
                <p className="text-gray-600">
                  {lang === "he"
                    ? "אנו שואפים למצוינות בכל היבט של עסקינו, החל מבחירת הנכסים ועד לשירות לקוחות."
                    : "We strive for excellence in every aspect of our business, from property selection to customer service."
                  }
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-fit rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? "ערך" : "Value"}
                </h3>
                <p className="text-gray-600">
                  {lang === "he"
                    ? "אנו מחויבים למצוא את הנכסים בעלי הערך הטוב ביותר עבור הלקוחות שלנו, בין אם למגורים או להשקעה."
                    : "We are committed to finding the best value properties for our clients, whether for living or investment."
                  }
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-fit rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? "שירות אישי" : "Personal Service"}
                </h3>
                <p className="text-gray-600">
                  {lang === "he"
                    ? "אנו מספקים שירות אישי ומותאם לכל לקוח, תוך הבנת הצרכים והרצונות הייחודיים שלהם."
                    : "We provide personalized service to each client, understanding their unique needs and desires."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mt-12" dir={lang === "he" ? "rtl" : "ltr"}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {lang === "he" ? "מה הלקוחות שלנו אומרים" : "What Our Clients Say"}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/pexels-dutumong-2331028.jpg"
                alt={lang === "he" ? "לקוחות מרוצים" : "Happy Clients"}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">David & Lisa Cohen</h3>
                </div>
                <p className="text-gray-600 italic">
                  {lang === "he"
                    ? "\"הצוות של Thailand Estates עזר לנו למצוא את בית החלומות שלנו בפוקט. הם טיפלו בכל ההיבטים המשפטיים והבירוקרטיים, מה שהפך את התהליך לקל ונטול דאגות.\""
                    : "\"The Thailand Estates team helped us find our dream home in Phuket. They handled all the legal and bureaucratic aspects, making the process easy and worry-free.\""
                  }
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">Michael Berg</h3>
                </div>
                <p className="text-gray-600 italic">
                  {lang === "he"
                    ? "\"כמשקיע נדל\"ן, עבדתי עם מספר סוכנויות בתאילנד, ו-Thailand Estates הייתה ללא ספק הטובה ביותר. המקצועיות והידע שלהם עזרו לי למקסם את התשואה על ההשקעות שלי.\""
                    : "\"As a real estate investor, I've worked with several agencies in Thailand, and Thailand Estates was by far the best. Their professionalism and knowledge helped me maximize my returns on investment.\""
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
