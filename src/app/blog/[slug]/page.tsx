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
      titleHe: 'Why Thailand is a Great Investment in 2025',
      excerpt: 'Discover why Thailand continues to be one of the most attractive investment destinations in Southeast Asia.',
      excerptHe: 'Discover why Thailand continues to be one of the most attractive investment destinations in Southeast Asia.',
      content: 'Thailand continues to be one of the most attractive investment destinations in Southeast Asia in 2025.',
      contentHe: 'Thailand continues to be one of the most attractive investment destinations in Southeast Asia in 2025.',
      imageUrl: '/images/Thailand-Business-Properties.jpg',
      date: 'June 1, 2025',
      dateHe: 'June 1, 2025',
      author: 'Michael Johnson',
      authorHe: 'Michael Johnson'
    },
    'best-areas-invest-bangkok-2025': {
      id: 2,
      title: 'The Best Areas to Invest in Bangkok in 2025',
      titleHe: 'The Best Areas to Invest in Bangkok in 2025',
      excerpt: 'Explore the most promising neighborhoods for real estate investment in Thailand capital.',
      excerptHe: 'Explore the most promising neighborhoods for real estate investment in Thailand capital.',
      content: 'Bangkok offers diverse investment opportunities across its many districts.',
      contentHe: 'Bangkok offers diverse investment opportunities across its many districts.',
      imageUrl: '/images/bangkok-skyline.jpg',
      date: 'June 5, 2025',
      dateHe: 'June 5, 2025',
      author: 'Sarah Chen',
      authorHe: 'Sarah Chen'
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts] || {
    id: 1,
    title: "Blog Post Not Found",
    titleHe: "Blog Post Not Found",
    excerpt: "The requested blog post could not be found.",
    excerptHe: "The requested blog post could not be found.",
    content: "Sorry, the blog post you are looking for does not exist.",
    contentHe: "Sorry, the blog post you are looking for does not exist.",
    imageUrl: "/images/property-1.jpg",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    dateHe: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    author: "Admin",
    authorHe: "Admin"
  };
  
  return <BlogPostClient post={post} />;
}
