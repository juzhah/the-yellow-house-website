export type Endpoint = "home" | "properties" | "featured" | string;
export interface StrapiResponse<T> {
  data: Data<T>;
  meta: Meta;
}

export interface Data<T> {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  homeSections: [T];
}

export interface Meta {}

export enum Locale {
  En = "en",
}

/* Components */

export interface Heading {
  id: number;
  title: string;
  description: string;
}
