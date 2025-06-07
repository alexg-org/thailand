import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';
import PropertyDetailClient from './PropertyDetailClient';

// This is a server component
export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // Parse the ID parameter on the server side
  const propertyId = parseInt(params.id);
  
  // Find the property data on the server
  const property = properties.find(p => p.id === propertyId);
  
  if (!property) {
    notFound();
  }
  
  // Pass the property data to the client component

  // Pass the property data to the client component
  return <PropertyDetailClient property={property} />;
}