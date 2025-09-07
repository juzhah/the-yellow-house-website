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
  location: string;
  slug: string;
  rooms: number;
  area: number;
  bathrooms: number;
  guests: number;
  images: PropertyImage[];
  localizations: any[];
  maps_location: string;
  name_location: string;
}

export interface PropertyImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
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

export interface Formats {
  thumbnail: Large;
  small: Large;
  medium?: Large;
  large?: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}
