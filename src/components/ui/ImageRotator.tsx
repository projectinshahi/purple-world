"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: { src: string; alt: string }[];
  /** How long each image stays before fading to the next */
  intervalMs?: number;
  sizes: string;
  className?: string;
};

// Cross-fades through a list of images (Figma: "After delay 2s → Dissolve 0.5s")
export function ImageRotator({ images, intervalMs = 2500, sizes, className = "" }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          aria-hidden={i !== active}
          fill
          sizes={sizes}
          className={`object-cover transition-opacity duration-500 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
