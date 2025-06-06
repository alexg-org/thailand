# Thailand Real Estate Website

A real estate website for showcasing properties in Thailand, with bilingual support for English and Hebrew.

## Features

- Property listings with details
- Bilingual support (English/Hebrew)
- Responsive design for all devices
- Contact form
- Property search by type (sale/rent)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/contexts` - React context providers
- `/src/data` - Mock data for properties
- `/src/types` - TypeScript type definitions
- `/public` - Static assets and images

## Adding Property Images

Property images should be placed in the `/public/images` directory:
- Main hero image: `/public/images/hero.jpg`
- Property images: `/public/images/property-1.jpg`, `/public/images/property-2.jpg`, etc.
- Team photos: `/public/images/team-1.jpg`, `/public/images/team-2.jpg`, etc.
- About page image: `/public/images/about-company.jpg`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
