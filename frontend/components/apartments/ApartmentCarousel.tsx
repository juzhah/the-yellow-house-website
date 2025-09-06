"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { PUBLIC_STRAPI_DOMAIN, scrollToSection } from "@/lib/utils";
import { useState } from "react";
import { PropertyImage } from "../../types/property-types";

const ApartmentCarousel = ({ images }: { images: PropertyImage[] }) => {
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
        src={
          PUBLIC_STRAPI_DOMAIN + images[currentImageIndex].formats.medium?.url
        }
        alt={`${PUBLIC_STRAPI_DOMAIN} - Image `}
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
export default ApartmentCarousel;
