"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import WompiLogo from "@/images/logos/Wompi_LogoPrincipal.svg";
import { scrollToSection } from "@/lib/utils";
import { ImageType } from "@/types/image";
import { useState } from "react";

const ApartmentCarousel = ({
  images,
  paymentUrl,
}: {
  images: ImageType[];
  paymentUrl?: string | null;
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
        src={images[currentImageIndex].formats.medium?.url}
        alt={images[currentImageIndex].alternativeText}
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
      <a
        href={paymentUrl ? paymentUrl : "#"}
        onClick={() => scrollToSection("booking")}
        className="text-[#000] hover:cursor-pointer bg-[#fff] absolute flex gap-2 items-center top-4 left-4  px-3 py-1 rounded-full text-sm font-medium"
      >
        Pay with
        <Image src={WompiLogo} alt="Wompi Logo" width={64} height={64} />
      </a>
    </div>
  );
};
export default ApartmentCarousel;
