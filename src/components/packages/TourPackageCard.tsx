import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, MoveRight } from "lucide-react";
import { formatDuration, formatPrice, mediaUrl, type TourPackage } from "@/lib/api";

export function TourPackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-form-border bg-white shadow-card transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-navy">
        {pkg.coverImage ? (
          <Image
            src={mediaUrl(pkg.coverImage)}
            alt={pkg.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
        <h3 className="flex items-start justify-between gap-3 font-display text-xl font-semibold text-navy lg:text-2xl">
          {pkg.title}
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-gold transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h3>
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
        <p className="line-clamp-3 leading-[1.625rem] text-body">{pkg.summary}</p>
        <p className="mt-auto border-t border-form-border pt-4 font-semibold text-navy">
          {formatPrice(pkg.price)}
          {pkg.price > 0 && <span className="text-sm font-normal text-body"> per person</span>}
        </p>
      </div>
    </Link>
  );
}
