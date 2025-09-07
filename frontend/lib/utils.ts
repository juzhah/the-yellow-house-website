type Section = "home" | "apartments" | "features" | "booking" | "contact";

const scrollToSection = (section: Section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const STRAPI_DOMAIN = process.env.STRAPI_DOMAIN;
const PUBLIC_STRAPI_DOMAIN = process.env.NEXT_PUBLIC_STRAPI_DOMAIN!;

export { scrollToSection, STRAPI_DOMAIN, PUBLIC_STRAPI_DOMAIN };
