"use client";

import { MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import yellowHouseImage from "@/images/yellow-house-1.jpeg";

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-[var(--background-light)] to-white"
      data-name="hero"
      data-file="components/Hero.js"
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-dark)] mb-6">
              Welcome to{" "}
              <span className="text-[var(--primary-color)]">
                The Yellow House
              </span>
            </h1>
            <p className="text-xl text-[var(--text-light)] mb-8 leading-relaxed">
              A clean, safe and cozy place to stay and visit beautiful Boquete,
              Panama. Private apartments with kitchen and bathroom, close to
              everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToBooking} className="btn-primary">
                Book Your Stay
              </button>
              <button
                /* onClick={() =>
                  document
                    .getElementById("apartments")
                    .scrollIntoView({ behavior: "smooth" })
                } */
                className="btn-secondary"
              >
                View Apartments
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="text-lg text-[var(--primary-color)]"></Star>
                <span className="text-[var(--text-dark)] font-medium">
                  5.0 Rating
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-lg text-[var(--primary-color)]"></Users>
                <span className="text-[var(--text-dark)] font-medium">
                  100+ Happy Guests
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={yellowHouseImage}
              alt="The Yellow House Boquete exterior"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                  <MapPin className=" text-xl text-white"></MapPin>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-dark)]">
                    Boquete, Panama
                  </p>
                  <p className="text-sm text-[var(--text-light)]">
                    Prime Location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
