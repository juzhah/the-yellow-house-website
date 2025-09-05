"use client";
import apartmentsData, { Apartment } from "@/assets/apartments-data";
import {
  Bath,
  BedDouble,
  BedSingle,
  ChevronLeft,
  ChevronRight,
  MapPinned,
  Scaling,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const ApartmentCarousel = ({
  images,
  apartmentName,
}: {
  images: StaticImageData[];
  apartmentName: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-video overflow-hidden">
      <Image
        fill
        src={images[currentImageIndex]}
        alt={`${apartmentName} - Image `}
        sizes="(max-width: 640px) 100vw, 25vw"
        className="object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="hover:cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="hover:cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
          >
            <ChevronRight />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex
                    ? "bg-[var(--primary-color)]"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </>
      )}
      <button
        onClick={() => scrollToSection("booking")}
        className="hover:cursor-pointer bg-[var(--primary-color)] absolute flex gap-2 items-center top-4 left-4  text-white px-3 py-1 rounded-full text-sm font-medium"
      >
        Check Availability
        <ChevronRight />
      </button>
    </div>
  );
};

function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      {/* Card Image */}
      <div className="relative">
        <ApartmentCarousel
          images={apartment.images}
          apartmentName={apartment.name}
        />
      </div>
      {/* Card Content */}
      <div className="p-5">
        <a
          href={apartment.maps_location}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--text-light)] flex items-center gap-2 mb-4 hover:underline w-fit"
        >
          <MapPinned size={14} color="var(--primary-color)" />{" "}
          {apartment.name_location}
        </a>
        <h3 className="text-xl font-bold text-[var(--text-dark)]">
          {apartment.name}
        </h3>

        <p className="text-[var(--text-light)] mt-2 mb-4">
          {apartment.description}
        </p>

        {/* Specifications */}
        <div className="flex gap-6 text-[var(--text-light)]">
          <div className="flex items-center gap-2">
            <Scaling size={16} color="var(--primary-color)" />{" "}
            {apartment.specs.area}
          </div>
          <div className="flex items-center gap-2">
            {apartment.specs.bedrooms! > 1 ? (
              <BedDouble size={16} color="var(--primary-color)" />
            ) : (
              <BedSingle size={16} color="var(--primary-color)" />
            )}
            {apartment.specs.bedrooms}
          </div>
          <div className="flex items-center gap-2">
            <Bath size={16} color="var(--primary-color)" />
            {apartment.specs.bathrooms}
          </div>
        </div>
      </div>
    </div>
  );
}

function Apartments() {
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
            Choose Your Perfect Stay
          </h2>
          <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
            All apartments feature private kitchen, bathroom, hot water, fast
            internet, and TV. Feel at home while exploring beautiful Boquete.
          </p>
        </div>

        <Link href="/apartments" className="md:min-w-fit btn-primary h-fit">
          View All
        </Link>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <ApartmentCard
          apartment={apartmentsData.find((apt) => apt.slug === "apartment-1")!}
        />
        <ApartmentCard
          apartment={apartmentsData.find((apt) => apt.slug === "yellow-house")!}
        />
        <ApartmentCard
          apartment={apartmentsData.find((apt) => apt.slug === "cabin")!}
        />
      </div>
    </section>
  );
}

export { ApartmentCard, Apartments };
