export interface Property {
  id: number;
  title: string;
  titleHe: string;
  description: string;
  descriptionHe: string;
  price: number;
  location: string;
  locationHe: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  status: 'sale' | 'rent';
  statusHe: string;
}
