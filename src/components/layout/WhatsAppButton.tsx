import Image from "next/image";
import { contact } from "@/data/site";

// Fixed in the bottom-right corner of the screen
export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-6 z-40 lg:right-8 lg:bottom-8"
    >
      <span className="block rounded-full shadow-lg">
        <Image
          src="/icons/whatsapp.svg"
          alt=""
          width={44}
          height={44}
          className="size-11 transition-transform group-hover:scale-110"
        />
      </span>
    </a>
  );
}
