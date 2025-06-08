'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

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
}

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
  const { lang } = useLanguage();
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {lang === "he" ? post.titleHe : post.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <span className="mr-4">{lang === "he" ? post.dateHe : post.date}</span>
            <span>{lang === "he" ? post.authorHe : post.author}</span>
          </div>
        </header>
        
        <div className="prose lg:prose-xl max-w-none">
          <div className="mb-8 relative h-96 w-full">
            <Image
              src={post.imageUrl}
              alt={lang === "he" ? post.titleHe : post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="text-gray-800">
            {lang === "he" ? post.contentHe : post.content}
          </div>
        </div>
        
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← {lang === "he" ? "חזרה לבלוג" : "Back to Blog"}
          </Link>
        </footer>
      </article>
    </div>
  );
}
