import { StaticImageData } from "next/image";
import { images } from "./images";

export interface Specifications {
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  maxGuests?: number;
}
export interface Apartment {
  name: string;
  description: string;
  images: StaticImageData[];
  /* features: string[]; */
  maps_location: string;
  name_location: string;
  specs: Specifications;
  slug: string;
}

const data: Apartment[] = [
  {
    slug: "apartment-1",
    name: "Apartment 1",
    description:
      "Comfortable apartment with modern amenities and cozy atmosphere",
    images: images.apt1,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 2 },
  },
  {
    slug: "apartment-2",
    name: "Apartment 2",
    description:
      "Spacious and bright apartment perfect for couples or solo travelers",
    images: images.apt2,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 2 },
  },
  /*  {
    slug: "apartment-3",
    name: "Loft",
    description:
      "Unique loft-style apartment with extra space and modern design",
    images: images.apt3,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 2 },
  }, */
  {
    slug: "apartment-4",
    name: "Apartment 4",
    description:
      "Unique loft-style apartment with extra space and modern design",
    images: images.apt4,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 2 },
  },
  /* {
    slug: "apartment-5",
    name: "Apartment 4",
    description:
      "Unique loft-style apartment with extra space and modern design",
    images: images.apt3,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 2 },
  }, */
  {
    slug: "apartment-6",
    name: "Apartment 6",
    description:
      "Unique loft-style apartment with extra space and modern design",
    images: images.apt6,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 2 },
  },
  {
    slug: "apartment-7",
    name: "Apartment 7",
    description:
      "Unique loft-style apartment with extra space and modern design",
    images: images.apt7,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 2 },
  },
  {
    slug: "cabin",
    name: "Cabin ",
    description:
      "Unique loft-style apartment with extra space and modern design",
    images: images.cabin,
    name_location: "Bugaba, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 1, bathrooms: 1, area: "45ft", maxGuests: 4 },
  },
  {
    slug: "yellow-house",
    name: "The Yellow House",
    description:
      "Unique loft-style apartment with extra space and modern design",
    images: images.yellow_house,
    name_location: "Boquete, Chiriqui",
    maps_location: "https://maps.app.goo.gl/53B8e3gmbJfzPwSB9",
    specs: { bedrooms: 4, bathrooms: 1, area: "45ft", maxGuests: 8 },
  },
];

export default data;
