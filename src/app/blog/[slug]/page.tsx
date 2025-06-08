import BlogPostClient from './BlogPostClient';

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const blogPosts = {
    'why-thailand-is-great-investment-2025': {
      id: 1,
      title: 'Why Thailand is a Great Investment in 2025',
      titleHe: 'למה תאילנד היא השקעה נהדרת ב-2025',
      excerpt: 'Discover why Thailand continues to be one of the most attractive investment destinations in Southeast Asia.',
      excerptHe: 'גלה למה תאילנד ממשיכה להיות אחד מיעדי ההשקעה האטרקטיביים ביותר בדרום-מזרח אסיה.',
      content: 'Thailand continues to be one of the most attractive investment destinations in Southeast Asia in 2025.',
      contentHe: 'תאילנד ממשיכה להיות אחד מיעדי ההשקעה האטרקטיביים ביותר בדרום-מזרח אסיה ב-2025.',
      imageUrl: '/images/Thailand-Business-Properties.jpg',
      date: 'June 1, 2025',
      dateHe: '1 ביוני, 2025',
      author: 'Michael Johnson',
      authorHe: 'מיכאל ג\'ונסון'
    },
    'best-areas-invest-bangkok-2025': {
      id: 2,
      title: 'The Best Areas to Invest in Bangkok in 2025',
      titleHe: 'האזורים הטובים ביותר להשקעה בבנגקוק ב-2025',
      excerpt: 'Explore the most promising neighborhoods for real estate investment in Thailand\'s capital.',
      excerptHe: 'חקור את השכונות המבטיחות ביותר להשקעה בנדל"ן בבירת תאילנד.',
      content: 'Bangkok offers diverse investment opportunities across its many districts.',
      contentHe: 'בנגקוק מציעה הזדמנויות השקעה מגוונות בכל רחבי המחוזות שלה.',
      imageUrl: '/images/bangkok-skyline.jpg',
      date: 'June 5, 2025',
      dateHe: '5 ביוני, 2025',
      author: 'Sarah Chen',
      authorHe: 'שרה צ\'ן'
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts] || {
    id: 1,
    title: "Blog Post Not Found",
    titleHe: "פוסט הבלוג לא נמצא",
    excerpt: "The requested blog post could not be found.",
    excerptHe: "פוסט הבלוג המבוקש לא נמצא.",
    content: "Sorry, the blog post you're looking for doesn't exist.",
    contentHe: "פוסט הבלוג המבוקש לא קיים.",
    imageUrl: "/images/property-1.jpg",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    dateHe: new Date().toLocaleDateString('he-IL'),
    author: "Admin",
    authorHe: "מנהל"
  };
  
  return <BlogPostClient post={post} />;
}
