import { MapPinned, Scaling, BedDouble, BedSingle, Bath } from "lucide-react";
import ApartmentCarousel from "./ApartmentCarousel";
import { Property } from "@/types/featured";

export default function ApartmentCard({ apartment }: { apartment: Property }) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      {/* Card Image */}
      <div className="relative">
        <ApartmentCarousel images={apartment.images} />
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
            <Scaling size={16} color="var(--primary-color)" /> {apartment.area}
          </div>
          <div className="flex items-center gap-2">
            {apartment.rooms! > 1 ? (
              <BedDouble size={16} color="var(--primary-color)" />
            ) : (
              <BedSingle size={16} color="var(--primary-color)" />
            )}
            {apartment.rooms}
          </div>
          <div className="flex items-center gap-2">
            <Bath size={16} color="var(--primary-color)" />
            {apartment.bathrooms}
          </div>
        </div>
      </div>
    </div>
  );
}
