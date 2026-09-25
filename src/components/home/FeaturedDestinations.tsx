import Image from "next/image";
import { destinations } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="section-y scroll-mt-20">
      <div className="container-page flex flex-col gap-12 lg:gap-14">
        <SectionHeader
          title="Featured Destinations"
          subtitle="Our catalog is updated seasonally to reflect the best travel windows and exclusive partnerships."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {destinations.map((destination) => (
            <article key={destination.title} className="group flex flex-col gap-4">
              <div className="relative aspect-[482/556] overflow-hidden rounded-3xl bg-[#d9d9d9]">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 px-2">
                <h3 className="text-2xl font-medium text-heading lg:text-[2rem] lg:leading-[2.4375rem]">
                  {destination.title}
                </h3>
                <p className="text-base leading-[1.625rem] text-body lg:text-lg">{destination.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
