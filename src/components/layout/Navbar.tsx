"use client";

import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-[#0a012c]/90 shadow-lg backdrop-blur-md"
          : "bg-linear-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-8 lg:h-[6.375rem]">
        <a href="#home" aria-label="Purpleworld home" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Purpleworld"
            width={158}
            height={30}
            className="h-6 w-auto lg:h-[1.875rem]"
            loading="eager"
          />
        </a>

        <ul className="hidden items-center gap-12 rounded-full border border-white/40 bg-white/10 px-8 py-4 shadow-[inset_0_1px_0.5rem_rgb(255_255_255/0.15)] backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-lg transition-colors hover:text-nav-active ${
                  active === link.href
                    ? "font-medium text-nav-active"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>
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
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-lg ${
                  active === link.href
                    ? "bg-white/10 font-medium text-nav-active"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
