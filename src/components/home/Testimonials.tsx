"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { testimonials } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Figma: after 2s delay, 0.5s ease-out slide
const AUTOPLAY_MS = 2500;
const count = testimonials.length;
// Three copies so the strip can loop without a visible jump
const slides = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const [index, setIndex] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next]);

  // Re-enable the transition after a silent jump back to the middle copy
  useEffect(() => {
    if (animate) return;
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  const handleTransitionEnd = () => {
    if (index >= count * 2 || index < count) {
      setAnimate(false);
      setIndex((i) => ((i % count) + count) % count + count);
    }
  };

  return (
    <section className="section-y overflow-hidden bg-sky">
      <div className="container-page flex flex-col gap-10 lg:gap-14">
        <SectionHeader
          title={
            <span className="font-bold">
              Testimonials &amp; Client
              <br className="hidden lg:block" /> Success
            </span>
          }
          subtitle="A Decade of Trust"
        />

        <div
          className="relative mx-auto h-[33.75rem] w-full sm:h-[27.5rem] max-w-[78.3125rem] overflow-hidden [--card-w:17.5rem] [--gap:1.25rem] sm:[--card-w:22.8125rem] sm:[--gap:3.5rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <ul
            onTransitionEnd={(e) => e.target === e.currentTarget && handleTransitionEnd()}
            className={`absolute top-0 left-1/2 flex h-full items-center gap-(--gap) ${
              animate ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={
              {
                transform: `translateX(calc(-1 * ${index} * (var(--card-w) + var(--gap)) - var(--card-w) / 2))`,
              } as CSSProperties
            }
          >
            {slides.map((t, i) => {
              const isActive = i === index;
              return (
                <li
                  key={i}
                  aria-hidden={!isActive}
                  onClick={() => {
                    setAnimate(true);
                    setIndex(i);
                  }}
                  className={`relative flex w-(--card-w) shrink-0 cursor-pointer flex-col items-center gap-[1.125rem] rounded-3xl bg-white px-8 py-12 text-center shadow-card sm:px-12 ${
                    animate ? "transition-transform duration-500 ease-out" : ""
                  } ${isActive ? "scale-[1.126]" : "scale-100"}`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-[6.75rem] left-[0.9375rem] font-quote text-[12.5rem] leading-none text-[#d9d9d9]/40 select-none"
                  >
                    &ldquo;
                  </span>
                  <Image
                    src={t.avatar}
                    alt=""
                    width={80}
                    height={80}
                    className="relative size-20 rounded-full bg-[#d9d9d9] object-cover"
                  />
                  <blockquote className="relative flex flex-col items-center gap-2">
                    <p className="text-base leading-[1.625rem] font-medium text-ink sm:text-lg">{t.quote}</p>
                    <footer className="flex items-center gap-2 text-body">
                      <span className="h-px w-6 bg-body" />
                      {t.name}
                    </footer>
                  </blockquote>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
