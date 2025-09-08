import BookingForm from "@/components/BookingForm";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import ApartmentCard from "@/components/apartments/ApartmentCard";
import strapiQuery from "@/lib/strapi";
import { Property } from "@/types/property-types";

export default async function Apartments() {
  const params = "populate=*";
  try {
    const res = await strapiQuery("properties", params);

    const properties: Property[] = res.data;

    return (
      <>
        <div className="bg-amber-300 py-20 mb-10 mx-auto ">
          <div className="max-w-7xl px-10 md:mx-auto">
            <Link href="/" className="relative hover:cursor-pointer">
              <div className="absolute top-[-35] flex items-center gap-2 mb-4 hover:border-b-1 w-fit ">
                <ArrowLeft size={18} color="var(--text-dark)" />

                <p className="text-[var(--text-dark)] ">Home</p>
              </div>
            </Link>
            <h1 className="text-5xl font-bold">Our Apartments</h1>
            <p className="mt-2">
              Find the perfect place for your stay in Boquete.
            </p>
          </div>
        </div>
        <section
          id="apartments"
          className="section-padding max-w-7xl mx-auto min-h-screen overflow-hidden"
          data-name="apartments"
          data-file="components/Apartments.js"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {properties.map((property: Property) => (
              <ApartmentCard key={property.id} apartment={property} />
            ))}
          </div>
        </section>
        <BookingForm />
      </>
    );
  } catch (error) {
    return <div>Nothing to show</div>;
  }
}
