import strapiQuery from "@/lib/strapi";
import { FeaturedSection } from "@/types/home-sections";
import { Property } from "@/types/property-types";

import ApartmentCard from "./ApartmentCard";
import Link from "next/link";

export default async function Apartments({ data }: { data: FeaturedSection }) {
  const params = `populate[homeSections][on][sections.featured][populate][properties][populate][0]=images`;

  const { heading } = data;

  // Call an external API endpoint to get posts
  const res = await strapiQuery("home", params);

  const { properties } = res.data.homeSections[0];

  const featuredProperties: Property[] = properties;

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
        {featuredProperties.map((featured) => (
          <ApartmentCard key={featured.id} apartment={featured} />
        ))}
      </div>
    </section>
  );
}
