import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-silver">
      <div className="container-page flex flex-col gap-10 pt-14 lg:gap-4 lg:pt-[4.5rem]">
        <Image
          src="/logo-purpleworld.png"
          alt="Purpleworld Tours"
          width={1332}
          height={884}
          className="h-auto w-48 sm:w-60 lg:ml-auto lg:w-[18rem]"
        />

        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <address className="flex flex-col gap-4 not-italic">
            <p className="flex items-center gap-2 text-base lg:text-lg">
              <Phone className="size-6 shrink-0 text-nav-active" strokeWidth={1.5} />
              {contact.phones.map((phone, i) => (
                <span key={phone}>
                  {i > 0 && "/ "}
                  <a href={`tel:+91${phone}`} className="hover:text-nav-active">
                    {phone}
                  </a>
                </span>
              ))}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-6 shrink-0 text-nav-active" strokeWidth={1.5} />
              <a
                href={`mailto:${contact.email}`}
                className="border-b border-white text-lg font-medium hover:text-nav-active lg:text-xl"
              >
                {contact.email}
              </a>
            </p>
            <p className="flex items-start gap-2 text-base leading-[1.625rem] lg:text-lg">
              <MapPin className="size-6 shrink-0 text-nav-active" strokeWidth={1.5} />
              <span>
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
          </address>

          <ul className="flex flex-col gap-2 sm:pt-11">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-base text-white hover:text-nav-active lg:text-lg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-footer-line py-8 text-sm text-white sm:flex-row sm:justify-between lg:text-[1.0625rem]">
          <p>© {new Date().getFullYear()} Purpleworldtours. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-nav-active">Terms of Service</a>
            {" | "}
            <a href="#" className="hover:text-nav-active">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
