import { Property } from "@/types/property-types";

import { strapiQuery } from "@/lib/strapi";
import { Featured } from "@/types/featured";
import { StrapiResponse } from "@/types/strapi-api";
import Link from "next/link";
import ApartmentCard from "./ApartmentCard";

export default async function Apartments() {
  /* TODO: Refactor content fetching */

  /* const params = `populate[homeSections][on][sections.featured][populate][properties][populate][0]=images`; */
  const params =
    "populate[homeSections][on][sections.featured][populate][heading]=*&populate[homeSections][on][sections.featured][populate][properties][populate][0]=images";

  try {
    const res: StrapiResponse<Featured> = await strapiQuery("home", params);

    const { heading, properties } = res.data.homeSections[0];

    return (
      <section
        id="apartments"
        className=" section-padding max-w-7xl mx-auto"
        data-name="apartments"
        data-file="components/Apartments.js"
      >
        {/* Heading */}
        <div className="sm:flex justify-between mb-16 gap-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
              {heading.title}
            </h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              {heading.description}
            </p>
          </div>

          <Link href="/apartments" className="md:min-w-fit btn-primary h-fit">
            View All
          </Link>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {properties.map((featured) => (
            <ApartmentCard key={featured.id} apartment={featured} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    return <div>nothing to show</div>;
  }
}
