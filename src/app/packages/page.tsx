import type { Metadata } from "next";
import Link from "next/link";
import { getPackages } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { TourPackageCard } from "@/components/packages/TourPackageCard";
import { EnquiryBand } from "@/components/ui/EnquiryBand";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse Purpleworld Tours holiday packages: Kerala circuits, backwater and wellness breaks, Asia and India itineraries. Every package can be customised.",
};

export default async function PackagesPage({ searchParams }: PageProps<"/packages">) {
  const { destination } = await searchParams;
  const selected = typeof destination === "string" ? destination : undefined;

  const all = await getPackages();
  const destinations = [...new Set(all?.map((p) => p.destination))].sort();
  const packages = selected ? all?.filter((p) => p.destination === selected) : all;

  const chip = (active: boolean) =>
    `rounded-full px-5 py-2.5 text-sm font-semibold transition lg:text-base ${
      active ? "bg-navy text-silver" : "border border-form-border text-navy hover:border-gold hover:text-gold"
    }`;

  return (
    <main>
      <PageHero
        eyebrow="Handpicked Journeys"
        title={
          <>
            Our Tour <span className="text-gradient-brand">Packages</span>
          </>
        }
        tagline="Tried-and-loved itineraries from our travel specialists. Pick one as it is, or use it as the starting point for your own custom trip."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Packages" }]}
      />

      <section className="section-y">
        <div className="container-page flex flex-col gap-10">
          {destinations.length > 1 && (
            <nav aria-label="Filter by destination" className="flex flex-wrap gap-3">
              <Link href="/packages" scroll={false} className={chip(!selected)}>
                All
              </Link>
              {destinations.map((d) => (
                <Link
                  key={d}
                  href={`/packages?destination=${encodeURIComponent(d)}`}
                  scroll={false}
                  className={chip(selected === d)}
                >
                  {d}
                </Link>
              ))}
            </nav>
          )}

          {packages === null || packages === undefined ? (
            <p className="rounded-3xl bg-sky p-10 text-center text-body lg:text-lg">
              Our packages are being updated. Please check back shortly, or{" "}
              <Link href="/#contact" className="font-semibold text-navy underline decoration-gold">
                send us an enquiry
              </Link>
              .
            </p>
          ) : packages.length === 0 ? (
            <p className="rounded-3xl bg-sky p-10 text-center text-body lg:text-lg">
              No packages here yet.{" "}
              <Link href="/packages" className="font-semibold text-navy underline decoration-gold">
                See all packages
              </Link>
            </p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {packages.map((pkg) => (
                <li key={pkg._id} className="flex">
                  <TourPackageCard pkg={pkg} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <EnquiryBand
        title="Want something different?"
        text="Every package can be tailored: change the pace, add destinations or upgrade your stays. Tell us what you have in mind."
      />
    </main>
  );
}
