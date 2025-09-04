"use client";
import { Home, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* TODO: Fix duplicated Code */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className="bg-white shadow-sm fixed w-full top-0 z-50"
      data-name="header"
      data-file="components/Header.js"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
              <Home className=" text-xl text-white"></Home>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--text-dark)]">
                The Yellow House
              </h1>
              <p className="text-sm text-[var(--text-light)]">Boquete</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("apartments")}
              className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors"
            >
              Apartments
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className=" text-xl text-[var(--text-dark)]"></Menu>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-[var(--text-dark)] hover:text-[var(--primary-color)]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("apartments")}
                className="text-left text-[var(--text-dark)] hover:text-[var(--primary-color)]"
              >
                Apartments
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-[var(--text-dark)] hover:text-[var(--primary-color)]"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="text-left text-[var(--text-dark)] hover:text-[var(--primary-color)]"
              >
                Book Now
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-[var(--text-dark)] hover:text-[var(--primary-color)]"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
