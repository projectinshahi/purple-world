import Link from "next/link";
import { ChevronDown, Clock, MoveRight } from "lucide-react";
import type { KeralaPackage } from "@/data/kerala";

export function PackageCard({ pkg }: { pkg: KeralaPackage }) {
  return (
    <article
      id={pkg.slug}
      className="flex scroll-mt-28 flex-col gap-5 rounded-3xl border border-form-border bg-white p-6 shadow-card lg:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold text-heading lg:text-[1.75rem]">{pkg.name}</h3>
        <span className="flex items-center gap-1.5 rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-silver">
          <Clock className="size-4 text-gold" />
          {pkg.duration}
        </span>
      </div>

      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-base font-medium text-ink">
        {pkg.route.map((stop, i) => (
          <li key={stop.place} className="flex items-center gap-2">
            {i > 0 && <MoveRight className="size-4 text-gold" aria-hidden />}
            <span>
              {stop.place}
              {stop.nights && <span className="ml-1 text-body">({stop.nights}N)</span>}
            </span>
          </li>
        ))}
      </ol>

      <p className="leading-[1.625rem] text-body">{pkg.summary}</p>

      <details className="group rounded-2xl bg-sky px-5 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
          Day-by-day itinerary
          <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
        </summary>
        <ol className="mt-4 flex flex-col gap-4">
          {pkg.days.map((day, i) => (
            <li key={day.title} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-heading">{day.title}</p>
                <p className="text-sm leading-6 text-body lg:text-base">{day.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </details>

      <Link
        href="/#contact"
        className="mt-auto self-start font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
      >
        Enquire about this package
      </Link>
    </article>
  );
}
