import {
  Car,
  Check,
  DollarSign,
  Home,
  MapPin,
  ShieldCheck,
  Wifi,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Home className="text-2xl text-[var(--primary-color)]" />,
      title: "Feel at Home",
      description:
        "Familiar environment with all the comforts you need for a relaxing stay",
    },
    {
      icon: <MapPin className="text-2xl text-[var(--primary-color)]" />,
      title: "Prime Location",
      description:
        "Close to everything in Boquete - restaurants, shops, and attractions",
    },
    {
      icon: <ShieldCheck className="text-2xl text-[var(--primary-color)]" />,
      title: "Safe & Clean",
      description:
        "Thoroughly cleaned and sanitized apartments in a secure location",
    },
    {
      icon: <Wifi className="text-2xl text-[var(--primary-color)]" />,
      title: "Fast Internet",
      description:
        "High-speed WiFi perfect for work, streaming, or staying connected",
    },
    {
      icon: <Car className="text-2xl text-[var(--primary-color)]" />,
      title: "Easy Access",
      description: "Convenient parking and easy access to local transportation",
    },
    {
      icon: <DollarSign className="text-2xl text-[var(--primary-color)]" />,
      title: "Great Value",
      description:
        "Affordable rates without compromising on quality and comfort",
    },
  ];

  return (
    <section
      id="features"
      className="bg-white section-padding"
      data-name="features"
      data-file="components/Features.js"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Why Choose The Yellow House?
          </h2>
          <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
            We offer more than just accommodation - we provide a home away from
            home experience in the heart of beautiful Boquete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--text-light)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[var(--background-light)] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
            All Apartments Include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Hot Water",
              "Fast WiFi",
              "Private Kitchen",
              "Full Bathroom",
              "TV",
              "Air Conditioning",
              "Clean Linens",
              "24/7 Support",
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 justify-center"
              >
                <Check className="text-sm text-[var(--primary-color)]"></Check>
                <span className="text-sm font-medium text-[var(--text-dark)]">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
