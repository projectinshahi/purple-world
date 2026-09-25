import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const blocks = [
  {
    title: "Our History",
    text: "Established in 2013, Purpleworldtours began with a simple mission: to make world-class travel accessible and personalized. Over the last decade, we have grown our agency into a globally recognized tour operator, navigating the evolving landscape of travel with resilience and innovation.",
    image: "/images/about-history.jpg",
    alt: "Hand tracing a route on a city map beside coloured pencils",
  },
  {
    title: "Our Philosophy",
    text: "We believe that travel is the only thing you buy that makes you richer. This philosophy drives our commitment to ethical tourism, supporting local communities, and ensuring that every Purpleworld traveler returns home with a transformed perspective.",
    image: "/images/about-philosophy.jpg",
    alt: "Two travellers holding up their passports in a city square",
  },
];

export function AboutUs() {
  return (
    <section id="about" className="section-y scroll-mt-20">
      <div className="container-page flex flex-col gap-12 lg:gap-14">
        <SectionHeader
          title={
            <>
              <span className="text-gradient-gold">About Us:</span> A Legacy of Excellence
            </>
          }
        />

        <div className="flex flex-col gap-10 lg:gap-8">
          {blocks.map((block, i) => (
            <div
              key={block.title}
              className={`flex flex-col gap-6 lg:items-center lg:gap-14 ${
                i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex flex-col gap-4 lg:flex-1">
                <h3 className="text-2xl font-semibold text-heading lg:text-[2rem] lg:leading-[2.4375rem]">
                  {block.title}
                </h3>
                <p className="text-base leading-7 text-body lg:text-lg">{block.text}</p>
              </div>
              <div className="relative aspect-[826/339] overflow-hidden rounded-3xl bg-[#d9d9d9] lg:w-[55%] lg:shrink-0">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
