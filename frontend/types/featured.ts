import { ImageType } from "./image";
import { Heading } from "./strapi-api";

export interface Featured {
  __component: string;
  id: number;
  heading: Heading;
  properties: Property[];
}

export interface Property {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  available: boolean;
  name_location: string;
  rooms: number;
  bathrooms: number;
  guests: number;
  area: number;
  maps_location: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  payment_url: string | null;
  images: ImageType[];
}
