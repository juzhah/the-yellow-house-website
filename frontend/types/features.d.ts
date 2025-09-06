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

export interface Icon {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: null;
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

export enum Locale {
  En = "en",
}

export interface Heading {
  id: number;
  title: string;
  description: null | string;
}

export interface Meta {}
