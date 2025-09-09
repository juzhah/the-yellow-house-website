import { BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageType } from "./image";

/* export interface HomePage {
  hero: HeroSection;
  featured: FeaturedSection;
  features: FeaturesSection;
  amenities: AmenitiesSection;
  contact: ContactSection;
  "c2-a": C2ASection;
} */

export interface HeroSection {
  title: BlocksContent;
  description: BlocksContent;
  primaryBtn: Button;
  secondaryBtn: Button;
  cover: ImageType;
}

export interface Button {
  id: number;
  text: string;
}

export interface Description {
  type: string;
  children: DescriptionChild[];
}

export interface DescriptionChild {
  type: string;
  text: string;
}

export interface Property {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  name: string;
  description: string;
  available: boolean;
  slug: string;
  rooms: number;
  bathrooms: number;
  guests: number;
  name_location: null;
  area: number | null;
  maps_location: null;
  featured: boolean;
}

export interface Title {
  type: string;
  children: TitleChild[];
}

export interface TitleChild {
  text: string;
  type: string;
  bold?: boolean;
}

export interface Cover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Amenities {
  id: number;
  name: string;
}
