import { STRAPI_DOMAIN } from "@/lib/utils";
import { ContactEntry } from "@/types/contact";
import React from "react";

export default function ContactCard({ contact }: { contact: ContactEntry }) {
  return (
    <div
      key={contact.id}
      className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          width={contact.icon.width}
          height={contact.icon.height}
          className="text-2xl text-[var(--primary-color)]"
        >
          <image
            xlinkHref={STRAPI_DOMAIN + contact.icon.url}
            width={contact.icon.width}
            height={contact.icon.height}
          />
        </svg>
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
  );
}
