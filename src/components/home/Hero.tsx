import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GradientLink } from "@/components/ui/GradientButton";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[40rem] items-center overflow-hidden lg:h-[49.625rem]"
    >
      <Image
        src="/images/hero.jpg"
        alt="Wooden boat on a turquoise alpine lake surrounded by mountains"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="container-page relative pt-28 pb-16 lg:pt-[7.25rem]">
        <div className="flex max-w-[51.4375rem] flex-col gap-8">
          <div className="flex flex-col gap-4">
            {/* The blue gradient spans the whole heading (as in Figma), so the
                highlighted words darken from top line to bottom line */}
            <h1 className="text-gradient-blue font-display text-[2.5rem] leading-[1.26] font-bold sm:text-6xl lg:text-[5rem]">
              <span className="text-white">Beyond The Map: </span>
              Journeys
              <span className="text-white"> Designed Specifically </span>
              For You
            </h1>
            <p className="text-base leading-[1.625rem] font-medium text-white capitalize lg:text-lg">
              Since 2013, Purpleworldtours has been crafting seamless travel
              experiences that bridge the gap between imagination and reality.
              Where do you want to go next?
            </p>
          </div>
          <GradientLink href="#packages" className="self-start">
            Explore
            <ArrowUpRight className="size-7 lg:size-8" strokeWidth={2} />
          </GradientLink>
        </div>
      </div>
    </section>
  );
}
