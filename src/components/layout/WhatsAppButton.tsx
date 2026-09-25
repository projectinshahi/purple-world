import Image from "next/image";
import { contact } from "@/data/site";

// Fixed on screen at the spot the design places it (616px down, aligned to the
// right gutter), pulled up on short screens so it never drops out of view.
export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-6 z-40 rounded-full shadow-lg transition-transform hover:scale-110 lg:top-[min(38.5rem,calc(100vh-5rem))] lg:right-[max(6.875rem,calc((100vw-108rem)/2+6.875rem))] lg:bottom-auto"
    >
      <Image src="/icons/whatsapp.svg" alt="" width={44} height={44} className="size-11" />
    </a>
  );
}
