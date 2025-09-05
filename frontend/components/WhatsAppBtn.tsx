import WSLogo from "@/images/logos/whatsapp-logo.svg";

import Image from "next/image";

export default function WhatsAppBtn() {
  return (
    <div className="fixed right-5 bottom-20 bg-amber-50 rounded-full p-3 z-99 border-2 border-[#25D366]">
      <a href="https://wa.me/63059632">
        <Image
          src={WSLogo}
          alt={"Whatsapp contact us"}
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}
