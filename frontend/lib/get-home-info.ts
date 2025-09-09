import { strapiQuery } from "./strapi";

export async function getHomeInfo() {
  const params = "populate[homeSections][populate]=*";

  try {
    const res = await strapiQuery("home", params);

    //Reduce array of ojects to object
    const sections = res.data.homeSections.reduce(
      (acc: { [key: string]: any }, currentSection: any) => {
        const { __component, ...data } = currentSection;
        const sectionName = __component.split(".").pop();
        acc[sectionName] = data;
        return acc;
      },
      {}
    );
    return sections;
  } catch {
    return {};
  }
}
