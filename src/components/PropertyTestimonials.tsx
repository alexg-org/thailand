'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PropertyTestimonials() {
  const { lang } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      name: lang === 'he' ? 'דניאל שפירא' : 'Daniel Shapiro',
      location: lang === 'he' ? 'ניו יורק, ארה"ב' : 'New York, USA',
      text: lang === 'he' 
        ? 'השירות היה מעולה מההתחלה ועד הסוף. הצוות המקצועי עזר לנו למצוא את הוילה המושלמת בפוקט שעונה על כל הדרישות שלנו. התהליך היה חלק ופשוט.'
        : 'The service was excellent from start to finish. The professional team helped us find the perfect villa in Phuket that met all our requirements. The process was smooth and straightforward.',
      image: '/images/team-1.jpg'
    },
    {
      id: 2,
      name: lang === 'he' ? 'סופיה לינדגרן' : 'Sofia Lindgren',
      location: lang === 'he' ? 'שטוקהולם, שבדיה' : 'Stockholm, Sweden',
      text: lang === 'he'
        ? 'כמשקיעה, חיפשתי הזדמנויות נדל"ן אמינות בתאילנד. הסוכנות לא רק עזרה לי למצוא נכס מצוין בבנגקוק, אלא גם הנחתה אותי בכל ההיבטים המשפטיים.'
        : 'As an investor, I was looking for reliable real estate opportunities in Thailand. The agency not only helped me find an excellent property in Bangkok but also guided me through all the legal aspects.',
      image: '/images/team-2.jpg'
    },
    {
      id: 3,
      name: lang === 'he' ? 'ג\'יימס וונג' : 'James Wong',
      location: lang === 'he' ? 'סינגפור' : 'Singapore',
      text: lang === 'he'
        ? 'רכשתי דירת חוף בקו סמוי כהשקעה וכמקום לחופשות. ההחזר על ההשקעה היה מרשים, וצוות הניהול דואג לנכס כשאני לא שם. ממליץ בחום!'
        : 'I purchased a beach condo in Koh Samui as an investment and vacation spot. The return on investment has been impressive, and the management team takes care of the property when I\'m not there. Highly recommended!',
      image: '/images/team-3.jpg'
    }
  ];
  
  return (
    <div className="py-16">
      <h2 
        className="text-3xl font-bold text-gray-900 mb-12 text-center"
        dir={lang === "he" ? "rtl" : "ltr"}
      >
        {lang === "he" ? "מה הלקוחות שלנו אומרים" : "What Our Clients Say"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white rounded-xl shadow-md p-6"
            dir={lang === "he" ? "rtl" : "ltr"}
          >
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden mr-4 rtl:ml-4 rtl:mr-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
            <div className="mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
