import Image from "next/image";
import { ArrowUpRight, Check, Clock, MapPin, MoveRight } from "lucide-react";
import { formatDuration, formatPrice, mediaUrl, type TourPackage } from "@/lib/api";

const MAX_INCLUSIONS = 4;

export function TourPackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <article
      id={pkg.slug}
      className="group relative flex w-full scroll-mt-32 flex-col overflow-hidden rounded-3xl border border-form-border bg-white shadow-card transition duration-300 ease-out hover:z-10 hover:-translate-y-3 hover:scale-[1.04] hover:border-gold hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-navy">
        {pkg.coverImage ? (
          <Image
            src={mediaUrl(pkg.coverImage)}
            alt={pkg.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-115"
          />
        ) : (
          <div className="flex size-full items-center justify-center p-10">
            <Image src="/logo-purpleworld.png" alt="" width={1332} height={884} className="h-auto w-40" />
          </div>
        )}
        <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-silver backdrop-blur">
          <MapPin className="size-3.5 text-gold" />
          {pkg.destination}
        </span>
        {pkg.featured && (
          <span className="absolute top-4 right-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="flex items-center gap-1.5 text-sm font-medium text-body">
          <Clock className="size-4 text-gold" />
          {formatDuration(pkg)}
        </p>
        <h3 className="font-display text-xl font-semibold text-navy lg:text-2xl">{pkg.title}</h3>
        {pkg.route.length > 0 && (
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-ink">
            {pkg.route.map((stop, i) => (
              <span key={`${stop.place}-${i}`} className="flex items-center gap-1.5">
                {i > 0 && <MoveRight className="size-3.5 text-gold" aria-hidden />}
                {stop.place}
              </span>
            ))}
          </p>
        )}
        <p className="leading-[1.625rem] text-body">{pkg.summary}</p>
        {pkg.inclusions.length > 0 && (
          <ul className="flex flex-col gap-1.5 text-sm text-body">
            {pkg.inclusions.slice(0, MAX_INCLUSIONS).map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-form-border pt-4">
          <p className="font-semibold text-navy">
            {formatPrice(pkg.price)}
            {pkg.price > 0 && <span className="text-sm font-normal text-body"> per person</span>}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:shadow-lg hover:brightness-110 focus-visible:translate-y-0 focus-visible:opacity-100 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          >
            Enquire Now
            <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </article>
  );
}
