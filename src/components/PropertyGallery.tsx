'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface PropertyGalleryProps {
  mainImage: string;
  additionalImages?: string[];
  title: string;
  titleHe?: string;
}

export default function PropertyGallery({ 
  mainImage, 
  additionalImages = [], 
  title,
  titleHe
}: PropertyGalleryProps) {
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const allImages = [mainImage, ...additionalImages];

  return (
    <div className="space-y-4">
      {/* Main large image */}
      <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
        <Image
          src={selectedImage}
          alt={lang === "he" ? titleHe || title : title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {allImages.map((img, index) => (
            <div 
              key={index}
              className={`relative h-24 cursor-pointer rounded-lg overflow-hidden border-2 ${
                selectedImage === img ? 'border-blue-600' : 'border-transparent'
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`${lang === "he" ? titleHe || title : title} - ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
