import ContactCard from "./ContactCard";

import { strapiQuery } from "@/lib/strapi";
import { ContactEntry, ContactResponse } from "@/types/contact";

export default async function Contact() {
  const params =
    "populate[homeSections][on][sections.contact][populate][heading][populate]=*&populate[homeSections][on][sections.contact][populate][contacts][populate]=icon&populate[homeSections][on][sections.c2-a][populate]=*";

  try {
    const res = await strapiQuery("home", params);

    const { heading, contacts }: ContactResponse = res.data.homeSections[0];
    const c2a = res.data.homeSections[1];

    const contactCards = contacts.map((contact: ContactEntry) => (
      <ContactCard key={contact.id} contact={contact} />
    ));
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
              {heading.title}
            </h2>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              {heading.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">{contactCards}</div>

          <div className="bg-[var(--background-light)] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
              {c2a.heading.title}
            </h3>
            <p className="text-[var(--text-light)] mb-6 max-w-2xl mx-auto">
              {c2a.heading.description}
            </p>
            <button
              /* onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} */
              className="btn-primary"
            >
              {c2a.button.text}
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <div>Nothing to show</div>;
  }
}
