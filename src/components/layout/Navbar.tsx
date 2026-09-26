"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page, highlight the link of the section currently in view
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = navLinks
      .map((link) => link.href.split("#")[1])
      .map((id) => (id ? document.getElementById(id) : null))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`/#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  // Elsewhere, highlight the link whose page we're on (e.g. /kerala/munnar)
  const active =
    pathname === "/"
      ? activeSection
      : navLinks.find((link) => !link.href.includes("#") && pathname.startsWith(link.href))?.href;

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-linear-to-b from-navy/95 to-indigo/90 shadow-lg backdrop-blur-md"
          : "bg-linear-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-8 lg:h-[6.375rem]">
        <Link href="/" aria-label="Purpleworld home" className="shrink-0">
          <Image
            src="/logo-purpleworld.png"
            alt="Purpleworld Tours"
            width={1332}
            height={884}
            className="h-16 w-auto lg:h-[5.875rem]"
            loading="eager"
          />
        </Link>

        <ul className="hidden items-center gap-6 rounded-full lg:gap-10 border border-white/40 bg-white/10 px-8 py-4 shadow-[inset_0_1px_0.5rem_rgb(255_255_255/0.15)] backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg transition-colors hover:text-nav-active ${
                  active === link.href
                    ? "font-medium text-nav-active"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-white transition-colors hover:text-nav-active"
          >
            <Search className="size-6" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="container-page flex flex-col gap-1 pb-6 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-lg ${
                  active === link.href
                    ? "bg-white/10 font-medium text-nav-active"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
