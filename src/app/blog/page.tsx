'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

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
  author: string;
  slug: string;
}

// Sample blog posts data
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
    author: 'Michael Johnson',
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
    author: 'Sarah Thompson',
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
    author: 'David Lee',
    slug: 'phuket-vs-koh-samui-investment-2025'
  }
];

export default function BlogPage() {
  const { lang } = useLanguage();
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === "he" ? "בלוג והשקעות בתאילנד" : "Blog & Thailand Investments"}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            {lang === "he" 
              ? "מידע, ניתוחים ותובנות על שוק הנדל\"ן בתאילנד" 
              : "Information, analysis and insights on Thailand's real estate market"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-52 w-full">
                <Image
                  src={post.imageUrl}
                  alt={lang === "he" ? post.titleHe : post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6" dir={lang === "he" ? "rtl" : "ltr"}>
                <div className="text-sm text-gray-500 mb-2">
                  {post.date} • {post.author}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {lang === "he" ? post.titleHe : post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {lang === "he" ? post.excerptHe : post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
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
        
        {/* Newsletter Signup */}
        <div className="bg-blue-600 text-white rounded-xl p-8 mt-16">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                {lang === "he" ? "הירשמו לניוזלטר שלנו" : "Subscribe to Our Newsletter"}
              </h2>
              <p>
                {lang === "he"
                  ? "קבלו עדכונים ותובנות על שוק הנדל\"ן בתאילנד ישירות לתיבת הדואר שלכם"
                  : "Get updates and insights about Thailand's real estate market delivered to your inbox"
                }
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder={lang === "he" ? "כתובת האימייל שלך" : "Your email address"}
                  className="flex-grow px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  {lang === "he" ? "הרשמה" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
