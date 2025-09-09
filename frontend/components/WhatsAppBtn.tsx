import WSLogo from "@/images/logos/whatsapp-logo.svg";
import { strapiQuery } from "@/lib/strapi";
import { ContactEntry } from "@/types/contact";
import { StrapiResponse } from "@/types/strapi-api";

import Image from "next/image";

export default async function WhatsAppBtn() {
  const resource = "contacts/u6qpgl8ekpf9a5dyn9fodwkt";
  const res = await strapiQuery(resource);
  const { value } = res.data;
  return (
    <div className="fixed right-5 bottom-20 bg-amber-50 rounded-full p-3 z-99 border-2 border-[#25D366]">
      <a href={`https://wa.me/${value}`}>
        <Image
          src={WSLogo}
          alt={"Whatsapp contact link"}
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}
