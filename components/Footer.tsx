"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Logo from "@/images/logos/the-yellow-house-logo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--text-dark)] text-white section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={Logo}
                alt="The Yellow House Logo"
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">The Yellow House</h3>
                <p className="text-gray-300">Boquete</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A clean, safe and cozy place to stay and visit beautiful Boquete,
              Panama. Experience the comfort of home while exploring this
              amazing destination.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+50763059632"
                className="text-gray-300 hover:text-[var(--primary-color)] transition-colors"
              >
                <Phone className="text-xl"></Phone>
              </a>
              <a
                href="mailto:theyellowhouseboquete@gmail.com"
                className="text-gray-300 hover:text-[var(--primary-color)] transition-colors"
              >
                <Mail className="text-xl"></Mail>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("apartments")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Apartments
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Book Now
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>+507 6305 9632</p>
              <p>theyellowhouseboquete@gmail.com</p>
              <p>Boquete, Chiriquí, Panama</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 The Yellow House Boquete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
