'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Blog post type
interface BlogPost {
  id: number;
  title: string;
  titleHe: string;
  excerpt: string;
  excerptHe: string;
  content: string;
  contentHe: string;
  imageUrl: string;
  date: string;
  dateHe: string;
  author: string;
  authorHe: string;
  slug: string;
}

// Sample blog posts data (same as in blog/page.tsx)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Thailand Is a Great Investment Opportunity in 2025',
    titleHe: 'למה תאילנד היא הזדמנות השקעה מעולה ב-2025',
    excerpt: 'Discover the benefits of investing in Thailand\'s growing real estate market and economy.',
    excerptHe: 'גלה את היתרונות של השקעה בשוק הנדל"ן והכלכלה הצומחים של תאילנד.',
    content: `
      <p>Thailand continues to be one of Southeast Asia's most attractive investment destinations in 2025. With a resilient economy, growing tourism sector, and government initiatives to attract foreign investment, the Thai real estate market offers significant opportunities.</p>
      
      <h3>Strong Economic Growth</h3>
      <p>Thailand's economy has shown remarkable resilience in recent years. Despite global challenges, the country maintains steady GDP growth, supported by manufacturing, exports, and tourism. The government's Thailand 4.0 initiative aims to transform the country into a high-income nation through innovation and technology.</p>
      
      <h3>Tourism Recovery and Growth</h3>
      <p>Thailand's tourism industry has fully recovered from previous setbacks and is now reaching record numbers. With over 40 million tourists visiting annually, vacation rentals and hospitality-related real estate investments offer attractive returns.</p>
      
      <h3>Infrastructure Development</h3>
      <p>The Thai government continues to invest heavily in infrastructure projects, including high-speed rail networks, airport expansions, and highway improvements. These projects enhance connectivity and increase property values in developing areas.</p>
      
      <h3>Affordable Property Prices</h3>
      <p>Compared to many global cities, Thailand offers relatively affordable property prices with strong potential for appreciation. Whether you're looking for a luxury condo in Bangkok or a beachfront villa in Phuket, you'll find value that's hard to match elsewhere.</p>
      
      <h3>Rental Yields</h3>
      <p>Rental yields in Thailand typically range from 5-8%, depending on location and property type. Bangkok condos and tourist destination properties can provide particularly strong returns, especially when managed effectively.</p>
      
      <h3>Foreign Investment Regulations</h3>
      <p>While foreigners cannot directly own land in Thailand, there are various legal structures that make investment possible and secure. Condominiums can be purchased freehold, and long-term leases provide viable alternatives for villa investments.</p>
      
      <p>As with any investment, due diligence is essential. Working with reputable local experts can help navigate the market and ensure a successful investment in Thailand's promising real estate landscape.</p>
    `,
    contentHe: `
      <p>תאילנד ממשיכה להיות אחד מיעדי ההשקעה האטרקטיביים ביותר בדרום-מזרח אסיה ב-2025. עם כלכלה חסונה, מגזר תיירות צומח ויוזמות ממשלתיות למשיכת השקעות זרות, שוק הנדל"ן התאילנדי מציע הזדמנויות משמעותיות.</p>
      
      <h3>צמיחה כלכלית חזקה</h3>
      <p>הכלכלה של תאילנד הראתה עמידות מרשימה בשנים האחרונות. למרות אתגרים גלובליים, המדינה שומרת על צמיחת תמ"ג יציבה, הנתמכת על ידי ייצור, יצוא ותיירות. יוזמת תאילנד 4.0 של הממשלה מכוונת להפוך את המדינה לאומה בעלת הכנסה גבוהה באמצעות חדשנות וטכנולוגיה.</p>
      
      <h3>התאוששות וצמיחה בתיירות</h3>
      <p>תעשיית התיירות של תאילנד התאוששה לחלוטין מקשיים קודמים וכעת מגיעה למספרים שיא. עם יותר מ-40 מיליון תיירים המבקרים מדי שנה, השכרות חופשה והשקעות נדל"ן הקשורות לאירוח מציעות תשואות אטרקטיביות.</p>
      
      <h3>פיתוח תשתיות</h3>
      <p>ממשלת תאילנד ממשיכה להשקיע רבות בפרויקטים של תשתיות, כולל רשתות רכבות מהירות, הרחבות שדות תעופה ושיפורי כבישים מהירים. פרויקטים אלה מגבירים את הקישוריות ומעלים את ערכי הנכסים באזורים מתפתחים.</p>
      
      <h3>מחירי נדל"ן ברי השגה</h3>
      <p>בהשוואה לערים גלובליות רבות, תאילנד מציעה מחירי נדל"ן ברי השגה יחסית עם פוטנציאל חזק להתייקרות. בין אם אתה מחפש דירת יוקרה בבנגקוק או וילה על חוף הים בפוקט, תמצא ערך שקשה להתחרות בו במקומות אחרים.</p>
      
      <h3>תשואות שכירות</h3>
      <p>תשואות השכירות בתאילנד נעות בדרך כלל בין 5-8%, בהתאם למיקום וסוג הנכס. דירות בבנגקוק ונכסים ביעדי תיירות יכולים לספק תשואות חזקות במיוחד, במיוחד כאשר הם מנוהלים ביעילות.</p>
      
      <h3>תקנות השקעה זרה</h3>
      <p>בעוד שזרים אינם יכולים לרכוש קרקע ישירות בתאילנד, ישנם מבנים משפטיים שונים שהופכים את ההשקעה לאפשרית ומאובטחת. ניתן לרכוש קונדומיניומים בבעלות מלאה, וחכירות ארוכות טווח מספקות חלופות מעשיות להשקעות בווילות.</p>
      
      <p>כמו בכל השקעה, בדיקת נאותות היא חיונית. עבודה עם מומחים מקומיים בעלי מוניטין יכולה לעזור לנווט בשוק ולהבטיח השקעה מוצלחת בנוף הנדל"ן המבטיח של תאילנד.</p>
    `,
    imageUrl: '/images/Thailand-Business-Properties.jpg',
    date: 'June 1, 2025',
    dateHe: '1 ביוני, 2025',
    author: 'Michael Johnson',
    authorHe: 'מיכאל ג\'ונסון',
    slug: 'why-thailand-is-great-investment-2025'
  },
  {
    id: 2,
    title: 'The Best Areas to Invest in Bangkok in 2025',
    titleHe: 'האזורים הטובים ביותר להשקעה בבנגקוק ב-2025',
    excerpt: 'Explore the most promising neighborhoods for real estate investment in Thailand\'s capital.',
    excerptHe: 'חקור את השכונות המבטיחות ביותר להשקעה בנדל"ן בבירת תאילנד.',
    content: `
      <p>Bangkok, Thailand's vibrant capital, offers diverse investment opportunities across its many districts. In 2025, several areas stand out for their growth potential, amenities, and connectivity. Here's a guide to the best neighborhoods for real estate investment in Bangkok this year.</p>
      
      <h3>Sukhumvit</h3>
      <p>Sukhumvit remains Bangkok's premier expat and luxury residential area. With excellent BTS Skytrain access, international restaurants, shopping malls, and schools, it attracts both long-term residents and tourists. Properties in Sukhumvit, especially those near BTS stations like Thong Lo, Ekkamai, and Asoke, continue to appreciate and offer strong rental potential.</p>
      
      <h3>Sathorn and Silom</h3>
      <p>Bangkok's central business district continues to be a solid investment choice. The area benefits from excellent transportation, prestigious office buildings, and high-end residential developments. Properties here attract corporate executives, diplomats, and professionals working in the financial sector.</p>
      
      <h3>Ratchathewi and Phaya Thai</h3>
      <p>These centrally located areas are gaining popularity due to their convenient location between Sukhumvit and the old town. With major shopping centers, universities, and good BTS connections, these neighborhoods offer more affordable options than Sukhumvit while maintaining excellent investment potential.</p>
      
      <h3>Rama 9 and Ratchada</h3>
      <p>Once considered Bangkok's periphery, this area has transformed into a new CBD with the development of major shopping complexes, office towers, and residential projects. The completion of the MRT Orange Line will further enhance connectivity, making this area particularly attractive for growth-focused investors.</p>
      
      <h3>Thonburi (West Bangkok)</h3>
      <p>The west side of the Chao Phraya River offers excellent value with new mass transit extensions improving connectivity. Areas along the BTS Green Line extension to Bang Wa and the Gold Line to Iconsiam are seeing rapid development and appreciation.</p>
      
      <h3>Investment Considerations</h3>
      <p>When investing in Bangkok real estate, consider proximity to mass transit, neighborhood amenities, and upcoming infrastructure developments. Properties within 500 meters of MRT or BTS stations typically command premium prices and higher rental yields.</p>
      
      <p>As Bangkok continues to expand and develop, thoughtful investments in these key areas can provide both strong rental income and long-term capital appreciation.</p>
    `,
    contentHe: `
      <p>בנגקוק, בירתה התוססת של תאילנד, מציעה הזדמנויות השקעה מגוונות בכל רחבי המחוזות שלה. ב-2025, מספר אזורים בולטים בפוטנציאל הצמיחה, המתקנים והקישוריות שלהם. הנה מדריך לשכונות הטובות ביותר להשקעה בנדל"ן בבנגקוק השנה.</p>
      
      <h3>סוקומוויט</h3>
      <p>סוקומוויט נשארת אזור המגורים המוביל של תושבי חוץ ויוקרה בבנגקוק. עם גישה מצוינת לרכבת ה-BTS, מסעדות בינלאומיות, מרכזי קניות ובתי ספר, היא מושכת גם תושבים לטווח ארוך וגם תיירים. נכסים בסוקומוויט, במיוחד אלה הקרובים לתחנות BTS כמו תונג לו, אקאמאי ואסוק, ממשיכים להתייקר ומציעים פוטנציאל שכירות חזק.</p>
      
      <h3>סאתורן וסילום</h3>
      <p>מרכז העסקים של בנגקוק ממשיך להיות בחירת השקעה מוצקה. האזור נהנה מתחבורה מצוינת, בנייני משרדים יוקרתיים ופיתוחי מגורים יוקרתיים. נכסים כאן מושכים מנהלים בכירים, דיפלומטים ואנשי מקצוע העובדים במגזר הפיננסי.</p>
      
      <h3>ראצ'אתאווי ופאיה תאי</h3>
      <p>אזורים מרכזיים אלה צוברים פופולריות בשל מיקומם הנוח בין סוקומוויט לעיר העתיקה. עם מרכזי קניות גדולים, אוניברסיטאות וחיבורי BTS טובים, שכונות אלה מציעות אפשרויות בעלות נמוכה יותר מסוקומוויט תוך שמירה על פוטנציאל השקעה מצוין.</p>
      
      <h3>ראמה 9 וראצ'אדה</h3>
      <p>אזור שנחשב בעבר לשולי בנגקוק, התחום הזה הפך ל-CBD חדש עם פיתוח של מרכזי קניות גדולים, מגדלי משרדים ופרויקטים למגורים. השלמת קו המטרו הכתום תשפר עוד יותר את הקישוריות, מה שהופך את האזור הזה לאטרקטיבי במיוחד למשקיעים ממוקדי צמיחה.</p>
      
      <h3>תונבורי (מערב בנגקוק)</h3>
      <p>הצד המערבי של נהר צ'או פראיה מציע ערך מצוין עם הרחבות תחבורה המוניות חדשות המשפרות את הקישוריות. אזורים לאורך הרחבת הקו הירוק של ה-BTS לבאנג ווה והקו הזהוב לאייקונסיאם רואים פיתוח והתייקרות מהירים.</p>
      
      <h3>שיקולי השקעה</h3>
      <p>בעת השקעה בנדל"ן בבנגקוק, שקול קרבה לתחבורה המונית, מתקני שכונה ופיתוחי תשתית עתידיים. נכסים בטווח של 500 מטר מתחנות MRT או BTS בדרך כלל מקבלים מחירים פרמיום ותשואות שכירות גבוהות יותר.</p>
      
      <p>ככל שבנגקוק ממשיכה להתרחב ולהתפתח, השקעות מחושבות באזורי מפתח אלה יכולות לספק הן הכנסה משכירות חזקה והן הערכת הון לטווח ארוך.</p>
    `,
    imageUrl: '/images/Luxury-Condos.jpg',
    date: 'May 15, 2025',
    dateHe: '15 במאי, 2025',
    author: 'Sarah Thompson',
    authorHe: 'שרה תומפסון',
    slug: 'best-areas-to-invest-bangkok-2025'
  },
  {
    id: 3,
    title: 'Phuket vs. Koh Samui: Where to Invest in 2025',
    titleHe: 'פוקט לעומת קו סמוי: היכן להשקיע ב-2025',
    excerpt: 'Compare Thailand\'s two most popular island destinations for real estate investment.',
    excerptHe: 'השווה בין שני יעדי האיים הפופולריים ביותר של תאילנד להשקעה בנדל"ן.',
    content: `
      <p>Thailand's island paradises of Phuket and Koh Samui continue to attract real estate investors looking for tropical luxury properties with strong rental potential. In 2025, both islands offer compelling opportunities, but with different advantages and considerations.</p>
      
      <h3>Phuket: The Established Market</h3>
      <p>As Thailand's largest island, Phuket offers a mature real estate market with diverse property options, from luxury villas to affordable condominiums. The island benefits from excellent infrastructure, an international airport with numerous direct flights, world-class hospitals, international schools, and extensive shopping and dining options.</p>
      
      <p>Prime investment areas include:</p>
      <ul>
        <li><strong>West Coast Beaches</strong> (Kamala, Surin, Bang Tao) - Luxury villa market with premium prices and strong rental potential</li>
        <li><strong>Kata and Karon</strong> - Popular tourist areas with good mid-range investment options</li>
        <li><strong>Patong</strong> - High rental yields for smaller units catering to the tourist market</li>
        <li><strong>East Coast</strong> - Emerging areas with lower prices and growth potential</li>
      </ul>
      
      <h3>Koh Samui: Exclusive Charm</h3>
      <p>Smaller and more exclusive than Phuket, Koh Samui offers a laid-back atmosphere with beautiful beaches and a growing luxury market. The island has seen significant infrastructure improvements while maintaining its tropical island charm.</p>
      
      <p>Prime investment areas include:</p>
      <ul>
        <li><strong>Chaweng and Lamai</strong> - Popular tourist areas with strong rental potential</li>
        <li><strong>Bophut and Fisherman's Village</strong> - Charming area with upscale restaurants and boutiques</li>
        <li><strong>Cheong Mon and Plai Laem</strong> - Quieter areas with luxury villa developments</li>
        <li><strong>Lipa Noi and Taling Ngam</strong> - Secluded west coast areas with stunning sunset views</li>
      </ul>
      
      <h3>Investment Comparison</h3>
      
      <p><strong>Phuket advantages:</strong></p>
      <ul>
        <li>More developed market with greater liquidity</li>
        <li>Better infrastructure and amenities</li>
        <li>Larger selection of properties at various price points</li>
        <li>More consistent year-round tourism</li>
      </ul>
      
      <p><strong>Koh Samui advantages:</strong></p>
      <ul>
        <li>More exclusive atmosphere and less development</li>
        <li>Lower entry prices for beachfront properties</li>
        <li>Growing luxury market with appreciation potential</li>
        <li>More affordable land prices</li>
      </ul>
      
      <p>Both islands offer excellent lifestyle benefits and strong rental potential, especially for properties that cater to the luxury vacation market. Your choice between Phuket and Koh Samui should depend on your investment budget, risk tolerance, and personal preferences regarding atmosphere and amenities.</p>
    `,
    contentHe: `
      <p>גני העדן באיים של תאילנד, פוקט וקו סמוי, ממשיכים למשוך משקיעי נדל"ן המחפשים נכסי יוקרה טרופיים עם פוטנציאל שכירות חזק. ב-2025, שני האיים מציעים הזדמנויות מרשימות, אך עם יתרונות ושיקולים שונים.</p>
      
      <h3>פוקט: השוק המבוסס</h3>
      <p>כאי הגדול ביותר של תאילנד, פוקט מציע שוק נדל"ן בשל עם אפשרויות נכס מגוונות, מווילות יוקרה ועד קונדומיניומים במחירים סבירים. האי נהנה מתשתיות מצוינות, שדה תעופה בינלאומי עם טיסות ישירות רבות, בתי חולים ברמה עולמית, בתי ספר בינלאומיים, ואפשרויות קניות ואוכל נרחבות.</p>
      
      <p>אזורי השקעה עיקריים כוללים:</p>
      <ul>
        <li><strong>חופי החוף המערבי</strong> (קמאלה, סורין, באנג טאו) - שוק וילות יוקרה עם מחירים פרמיום ופוטנציאל שכירות חזק</li>
        <li><strong>קאטה וקארון</strong> - אזורי תיירות פופולריים עם אפשרויות השקעה טובות בטווח הביניים</li>
        <li><strong>פטונג</strong> - תשואות שכירות גבוהות ליחידות קטנות יותר המיועדות לשוק התיירותי</li>
        <li><strong>החוף המזרחי</strong> - אזורים מתפתחים עם מחירים נמוכים יותר ופוטנציאל צמיחה</li>
      </ul>
      
      <h3>קו סמוי: קסם בלעדי</h3>
      <p>קטן ויותר בלעדי מפוקט, קו סמוי מציע אווירה רגועה עם חופים יפים ושוק יוקרה צומח. האי ראה שיפורי תשתית משמעותיים תוך שמירה על קסם האי הטרופי שלו.</p>
      
      <p>אזורי השקעה עיקריים כוללים:</p>
      <ul>
        <li><strong>צ'אוונג ולאמאי</strong> - אזורי תיירות פופולריים עם פוטנציאל שכירות חזק</li>
        <li><strong>בופוט וכפר הדייגים</strong> - אזור מקסים עם מסעדות וחנויות בוטיק יוקרתיות</li>
        <li><strong>צ'יאונג מון ופלאי לאם</strong> - אזורים שקטים יותר עם פיתוחי וילות יוקרה</li>
        <li><strong>ליפה נוי וטאלינג נגאם</strong> - אזורי חוף מערביים מבודדים עם נוף שקיעה מדהים</li>
      </ul>
      
      <h3>השוואת השקעות</h3>
      
      <p><strong>יתרונות פוקט:</strong></p>
      <ul>
        <li>שוק מפותח יותר עם נזילות גדולה יותר</li>
        <li>תשתית ומתקנים טובים יותר</li>
        <li>מבחר גדול יותר של נכסים בנקודות מחיר שונות</li>
        <li>תיירות עקבית יותר לאורך כל השנה</li>
      </ul>
      
      <p><strong>יתרונות קו סמוי:</strong></p>
      <ul>
        <li>אווירה בלעדית יותר ופחות פיתוח</li>
        <li>מחירי כניסה נמוכים יותר לנכסים על חוף הים</li>
        <li>שוק יוקרה צומח עם פוטנציאל הערכה</li>
        <li>מחירי קרקע בעלות נמוכה יותר</li>
      </ul>
      
      <p>שני האיים מציעים יתרונות אורח חיים מצוינים ופוטנציאל שכירות חזק, במיוחד עבור נכסים המיועדים לשוק חופשות היוקרה. הבחירה שלך בין פוקט לקו סמוי צריכה להיות תלויה בתקציב ההשקעה שלך, סבילות לסיכון והעדפות אישיות לגבי אווירה ומתקנים.</p>
    `,
    imageUrl: '/images/thailand-vila.jpg',
    date: 'April 22, 2025',
    dateHe: '22 באפריל, 2025',
    author: 'David Lee',
    authorHe: 'דויד לי',
    slug: 'phuket-vs-koh-samui-investment-2025'
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { lang } = useLanguage();
  
  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {lang === "he" ? "חזרה לבלוג" : "Back to Blog"}
          </Link>
        </div>
        
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Featured image */}
          <div className="relative h-96 w-full">
            <Image
              src={post.imageUrl}
              alt={lang === "he" ? post.titleHe : post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="p-8" dir={lang === "he" ? "rtl" : "ltr"}>
            {/* Post metadata */}
            <div className="flex items-center gap-4 text-gray-500 mb-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {lang === "he" ? post.dateHe : post.date}
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {lang === "he" ? post.authorHe : post.author}
              </div>
            </div>
            
            {/* Post title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {lang === "he" ? post.titleHe : post.title}
            </h1>
            
            {/* Post content */}
            <div 
              className="prose prose-lg max-w-none prose-blue"
              dangerouslySetInnerHTML={{ 
                __html: lang === "he" ? post.contentHe : post.content 
              }}
            />
            
            {/* Social sharing */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <span className="mr-4 text-gray-700 font-medium">
                  {lang === "he" ? "שתף" : "Share"}:
                </span>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className="text-green-600 hover:text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" dir={lang === "he" ? "rtl" : "ltr"}>
              {lang === "he" ? "מאמרים קשורים" : "Related Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedPost.imageUrl}
                      alt={lang === "he" ? relatedPost.titleHe : relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6" dir={lang === "he" ? "rtl" : "ltr"}>
                    <div className="text-sm text-gray-500 mb-2">
                      {lang === "he" ? relatedPost.dateHe : relatedPost.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lang === "he" ? relatedPost.titleHe : relatedPost.title}
                    </h3>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      {lang === "he" ? "קרא עוד" : "Read more"}
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === "he" ? "mr-1 transform rotate-180" : "ml-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
