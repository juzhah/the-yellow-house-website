type Section = "home" | "apartments" | "features" | "booking" | "contact";

const scrollToSection = (section: Section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export { scrollToSection };
