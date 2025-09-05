import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-2xl text-[var(--primary-color)]" />,
      title: "Phone",
      value: "+507 6305 9632",
      link: "tel:+50763059632",
    },
    {
      icon: <Mail className="text-2xl text-[var(--primary-color)]" />,
      title: "Email",
      value: "theyellowhouseboquete@gmail.com",
      link: "mailto:theyellowhouseboquete@gmail.com",
    },
    {
      icon: <MapPin className="text-2xl text-[var(--primary-color)]" />,
      title: "Location",
      value: "Boquete, Chiriquí, Panama",
      link: "https://maps.google.com/?q=Boquete,Panama",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white section-padding"
      data-name="contact"
      data-file="components/Contact.js"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
            Have questions about your stay? We're here to help make your visit
            to Boquete unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">
                {contact.title}
              </h3>
              <a
                href={contact.link}
                className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[var(--background-light)] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
            Ready to Experience Boquete?
          </h3>
          <p className="text-[var(--text-light)] mb-6 max-w-2xl mx-auto">
            Book your stay at The Yellow House and discover why Boquete is one
            of Panama's most beautiful destinations. We're committed to making
            your visit comfortable and memorable.
          </p>
          <button
            /* onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} */
            className="btn-primary"
          >
            Book Your Stay Now
          </button>
        </div>
      </div>
    </section>
  );
}
