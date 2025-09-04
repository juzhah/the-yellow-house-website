"use client";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ApartmentCarousel = ({
  images,
  apartmentName,
}: {
  images: string[];
  apartmentName: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt={`${apartmentName} - Image ${currentImageIndex + 1}`}
        className="w-full h-64 object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
          >
            <ChevronRight />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentImageIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </>
      )}
      <div className="absolute top-4 left-4 bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm font-medium">
        Available Now
      </div>
    </div>
  );
};

function Apartments() {
  const apartments = [
    {
      id: 1,
      name: "Apartment 1",
      description:
        "Comfortable apartment with modern amenities and cozy atmosphere",
      images: [
        "https://lh4.googleusercontent.com/2cgPava3h9XNVqePlJ9x2s26YfkRnxcx3EtctnZIYIRANlSUc3oAzss3YalMSXSry-MjJ6HoqUk_IrFS5TUUL8SjLFC9cV7sq9p9YJHBSHIcftzB82mpC-6gALRi_RPjtqwYxFWmFC27WIXwxkMiY-uKfOVex-uiTmqSUpHR2KYWwfotJHYuhA=w800",
        "https://lh4.googleusercontent.com/PlI8R7xIuPtvPSSjyK-RG2YMaZMbTJZKhGOYCdRx1A0YBNBPqOeWVPISgHzR8mdbIn7rEQGqVq8Fmm9Z6ESTwCZgjroECJXJEaR9QFhuYvvEC_SnXmRhf8P92zXh0d5RwFoGDu34NBqOIK5HJIhXMciDr-pAyik_zNejMikQNNd-AQ-QU0ddvA=w800",
        "https://lh3.googleusercontent.com/N_YGE-xMYgFLdFeYHg9Y1pZ57_VTgkbxusl7hTCXKV2KYnbIQ_oB17Fwh1G7Kfkoa4dcWWEqyk30pkozT1zSqRZ0ZjnUk-3BGfywLH9NWsb44mfeqXZuZaMsORvwnIJw-4Dr_mVv1vwkywX9VrKWNddgX8xQ7_rBUsADwbuaTElcF_jNR_5RMA=w800",
      ],
      features: [
        "Private Kitchen",
        "Full Bathroom",
        "Hot Water",
        "Fast WiFi",
        "TV",
        "Air Conditioning",
      ],
    },
    {
      id: 2,
      name: "Apartment 2",
      description:
        "Spacious and bright apartment perfect for couples or solo travelers",
      images: [
        "https://lh6.googleusercontent.com/I_UU2oEjPHztVeEqvhmnWleNL0xLdfH4EvcosEJiGXDIQUoRujbkAewgKGbMAjtMJMoxSGs3BYmzJyWtHM01F3lSCoqZRRKvWvdDximGmxkw-RRDkSSEFVeS5wAcUFZCSibxBBaCWGdXJ2TTW0Muo5mz6YpmlC8DuLfLd7h3Dm_6cVh7fyy87w=w800",
        "https://lh3.googleusercontent.com/jyb8JC2EAjf7NQQJxtgrN08B5j0AUBo9RmFhMoj2UXy_hNb1R7Eis55hjpg1TXPP4QLrm6Tqy9pgv_rZHFwNrfeiWXY6IqGhpPpUWYz6yMpdi7Yg10a3yxx1gA1MbkC5HO-Q-TR0TN6JMgOURggpsFBLqNG5NK-rwSel8p5OV_3GU8LgOgeSdg=w800",
        "https://lh6.googleusercontent.com/HCV56K8JSHiPCyeva777hRUOdQegIF849n-CpZQA-vMopwv3asVmhjQDyzisetVblTl1-3v0CafXMzeXm6YNStyB9yhP68qRegMXFTGSHyi9ZddpJ2VYsvtlsxg_-hhteHFVgXIXqIKWUywmiX8E6UEJNtcKENYLd6ub0gxQ2bA5LfbEEWkWYQ=w800",
      ],
      features: [
        "Private Kitchen",
        "Full Bathroom",
        "Hot Water",
        "Fast WiFi",
        "TV",
        "Balcony",
      ],
    },
    {
      id: 3,
      name: "Apartment 3 (Loft)",
      description:
        "Unique loft-style apartment with extra space and modern design",
      images: [
        "https://lh6.googleusercontent.com/4QMSWMLRLXU_oh-4uJHJuVwVcKOnKDlT91DZ8t19Ju5T-OIEKgdn7j8R4aAJLytvz_80RcSxtZhGn0MZDaHy7Al8Jh5mtieRuj0QfNtWAR3eGgAxfBSMvKsASSD6IKdygsLGu5rI4ebUeRTt680gCSqzN9iEju93bER_o_If_px62l-PlsnXmQ=w800",
        "https://lh5.googleusercontent.com/SLO2DAe33Eu2dulSZ5mpF-g3SsMV82wp7dyXhPgkO8C4Sys5Xd6soqSFOJyAmqu84AA7vRCVCs99s-Gv7AFLw-dUQqy1jPboj6qaSVhwwoP2XImcLenSneJgZG3s0HT6KKk2PFOxM7g=w800",
        "https://lh6.googleusercontent.com/nO3JgCiDWhjY_M_u_ah4SfT_AQMsxJCFMOTzb7vEhv7GLH5ecnw78LWl9_t1Wpt4OvT4di9PLCyzcj8Qe_BzA8Fo0PT4A2N5qRzX72kB6qB2zJRsoEEk-gKaP-U2R34pmF44G-msz18qx=w800",
      ],
      features: [
        "Loft Design",
        "Private Kitchen",
        "Full Bathroom",
        "Hot Water",
        "Fast WiFi",
        "TV",
      ],
    },
  ];

  return (
    <section
      id="apartments"
      className="bg-gray-50 section-padding"
      data-name="apartments"
      data-file="components/Apartments.js"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Choose Your Perfect Stay
          </h2>
          <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
            All apartments feature private kitchen, bathroom, hot water, fast
            internet, and TV. Feel at home while exploring beautiful Boquete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <ApartmentCarousel
                images={apartment.images}
                apartmentName={apartment.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">
                  {apartment.name}
                </h3>
                <p className="text-[var(--text-light)] mb-4">
                  {apartment.description}
                </p>
                <div className="space-y-2 mb-6">
                  {apartment.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div></div>
                      <Check className="text-sm text-[var(--primary-color)]" />
                      <span className="text-sm text-[var(--text-dark)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  /* onClick={() =>
                      document
                        .getElementById("booking")
                        .scrollIntoView({ behavior: "smooth" })
                    } */
                  className="w-full btn-primary"
                >
                  Book This Apartment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Apartments;
