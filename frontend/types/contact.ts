import { Icon } from "./image";
import { Heading } from "./strapi-api";

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
