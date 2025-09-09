import { Icon } from "./image";
import { Heading, Locale } from "./strapi-api";

export interface FeaturesAmenities {
  __component: string;
  id: number;
  heading: Heading;
  features?: Feature[];
  amenities?: Amenity[];
}

export interface Amenity {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: Locale;
  name: string;
}

export interface Feature {
  id: number;
  documentId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: Locale;
  description: string;
  icon: Icon;
}
