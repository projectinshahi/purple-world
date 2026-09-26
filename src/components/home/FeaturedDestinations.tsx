import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations as fallbackDestinations } from "@/data/site";
import { getDestinations, mediaUrl } from "@/lib/api";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Card = { key: string; title: string; text: string; image?: string; href?: string };

async function loadCards(): Promise<Card[]> {
  const fromApi = await getDestinations();
  if (fromApi) {
    return fromApi.map((d) => ({
      key: d._id,
      title: d.title,
      text: d.text,
      image: d.image ? mediaUrl(d.image) : undefined,
      href: d.link || undefined,
    }));
  }
  // Backend down: show the built-in cards rather than an empty section
  return fallbackDestinations.map((d) => ({ key: d.title, ...d }));
}

function CardBody({ card }: { card: Card }) {
  return (
    <>
      <div className="relative aspect-[482/556] overflow-hidden rounded-3xl bg-[#d9d9d9]">
        {card.image ? (
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-navy p-10 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo-purpleworld.png"
              alt=""
              width={1332}
              height={884}
              className="h-auto w-full max-w-72"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 px-2">
        <h3 className="flex items-center gap-2 text-2xl font-medium text-heading lg:text-[2rem] lg:leading-[2.4375rem]">
          {card.title}
          {card.href && (
            <ArrowUpRight className="size-6 shrink-0 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 lg:size-8" />
          )}
        </h3>
        <p className="text-base leading-[1.625rem] text-body lg:text-lg">{card.text}</p>
      </div>
    </>
  );
}

export async function FeaturedDestinations() {
  const cards = await loadCards();
  if (cards.length === 0) return null;

  return (
    <section id="destinations" className="section-y scroll-mt-20">
      <div className="container-page flex flex-col gap-12 lg:gap-14">
        <SectionHeader
          title="Featured Destinations"
          subtitle="Our catalog is updated seasonally to reflect the best travel windows and exclusive partnerships."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {cards.map((card) =>
            card.href ? (
              <Link key={card.key} href={card.href} className="group flex flex-col gap-4">
                <CardBody card={card} />
              </Link>
            ) : (
              <article key={card.key} className="group flex flex-col gap-4">
                <CardBody card={card} />
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
