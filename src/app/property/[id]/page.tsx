import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';
import PropertyDetailClient from './PropertyDetailClient';

// This is a server component
export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Parse the ID parameter on the server side
  const { id } = await params;
  const propertyId = parseInt(id);
  
  // Find the property data on the server
  const property = properties.find(p => p.id === propertyId);
  
  if (!property) {
    notFound();
  }
  
  // Pass the property data to the client component

  // Pass the property data to the client component
  return <PropertyDetailClient property={property} />;
}