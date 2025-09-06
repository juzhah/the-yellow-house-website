export interface ContactResponse {
  __component: string;
  id: number;
  heading: Heading;
  contacts: Contact[];
}

export interface ContactEntry {
  id: number;
  documentId: string;
  title: string;
  value: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  icon: Icon;
}

export interface Icon {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
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

export interface Heading {
  id: number;
  title: string;
  description: string;
}

export interface Meta {}
