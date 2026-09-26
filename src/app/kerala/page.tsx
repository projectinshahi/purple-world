import type { Metadata } from "next";
import { ArrowDown, Lightbulb } from "lucide-react";
import Link from "next/link";
import { keralaDestinations, keralaPackages } from "@/data/kerala";
import { getPackages } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { PackageCard } from "@/components/kerala/PackageCard";
import { TourPackageCard } from "@/components/packages/TourPackageCard";
import { FaqList } from "@/components/kerala/FaqList";
import { EnquiryBand } from "@/components/ui/EnquiryBand";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Kerala Tour Packages: Munnar to Kovalam",
  description:
    "Kerala (Keralam) tour packages: Alleppey houseboats, backwaters, Munnar tea hills, Wayanad, Kovalam beaches and Sabarimala & Guruvayur pilgrimages. Custom itineraries by Purpleworld Tours.",
  openGraph: {
    title: "Kerala Tour Packages | Purpleworld Tours",
    description:
      "Hill stations, backwaters, beaches and temples: explore our Kerala itineraries from 3 to 7 nights.",
  },
};

// All FAQs on the page, exposed to search engines as one FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: keralaDestinations.flatMap((d) =>
    d.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  ),
};

export default async function KeralaPage() {
  // Kerala packages are managed in the admin panel; the built-in list is only
  // a fallback for when the backend is unreachable.
  const apiPackages = await getPackages("Kerala");
  const packageLinks = apiPackages
    ? apiPackages.map((p) => ({ slug: p.slug, name: p.title, href: `/packages/${p.slug}` }))
    : keralaPackages.map((p) => ({ slug: p.slug, name: p.name, href: `#${p.slug}` }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <PageHero
        eyebrow="God's Own Country"
        title={
          <>
            Kerala (Keralam) <span className="text-gradient-brand">Tour Packages</span>
          </>
        }
        tagline="Misty tea hills, slow backwater cruises, forest highlands, golden beaches and ancient temples, planned around you by our Kerala specialists."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Kerala" }]}
      />

      <section className="section-y">
        <div className="container-page flex flex-col gap-12 lg:gap-14">
          <SectionHeader
            title="Explore Kerala"
            subtitle="From the Western Ghats to the Arabian Sea, each region of Kerala has its own character. Jump to the experience that calls to you."
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {keralaDestinations.map((d) => (
              <li key={d.slug}>
                <a
                  href={`#${d.slug}`}
                  className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl bg-gradient-navy p-7 text-silver transition hover:-translate-y-1 hover:shadow-xl lg:p-8"
                >
                  <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-gold/15 blur-2xl transition group-hover:bg-gold/30" />
                  <span className="relative text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    {d.eyebrow}
                  </span>
                  <h3 className="relative flex items-center justify-between gap-3 font-display text-2xl font-semibold lg:text-[1.75rem]">
                    {d.name}
                    <ArrowDown className="size-6 shrink-0 text-gold transition group-hover:translate-y-1" />
                  </h3>
                  <p className="relative leading-[1.625rem] text-silver/80">{d.tagline}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {keralaDestinations.map((d, index) => {
        const packages = packageLinks.filter((p) => d.packageSlugs.includes(p.slug));
        return (
          <section
            key={d.slug}
            id={d.slug}
            className={`section-y scroll-mt-20 ${index % 2 === 0 ? "bg-sky" : ""}`}
          >
            <div className="container-page flex flex-col gap-10 lg:gap-12">
              <SectionHeader
                title={
                  <>
                    <span className="mb-2 block font-sans text-sm font-semibold tracking-[0.2em] text-gold uppercase lg:text-base">
                      {d.eyebrow}
                    </span>
                    {d.title}
                  </>
                }
                subtitle={d.tagline}
              />

              <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                <div className="flex flex-col gap-5 lg:flex-1">
                  {d.intro.map((para) => (
                    <p key={para} className="text-lg leading-8 text-body">
                      {para}
                    </p>
                  ))}
                </div>
                <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-3xl border border-form-border bg-form-border lg:w-[26rem] lg:shrink-0">
                  {d.facts.map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-1 bg-white p-5">
                      <dt className="text-xs font-semibold tracking-wider text-label uppercase">
                        {fact.label}
                      </dt>
                      <dd className="font-semibold text-navy lg:text-lg">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold text-heading lg:text-[1.75rem]">
                  {d.highlightsTitle}
                </h3>
                <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {d.highlights.map((h, i) => (
                    <li key={h.title} className="flex flex-col gap-2 rounded-3xl bg-white p-6 shadow-card">
                      <span className="text-gradient-gold font-display text-2xl font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-lg font-semibold text-heading lg:text-xl">{h.title}</h4>
                      <p className="leading-[1.625rem] text-body">{h.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col gap-4 self-start rounded-3xl border border-gold/40 bg-white p-6 lg:p-8">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-heading">
                    <Lightbulb className="size-6 text-gold" />
                    Good to know
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {d.tips.map((tip) => (
                      <li key={tip} className="flex gap-3 leading-[1.625rem] text-body">
                        <span className="mt-2.5 size-2 shrink-0 rounded-full bg-gold" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                  {packages.length > 0 && (
                    <p className="flex flex-wrap items-center gap-2 border-t border-form-border pt-4 text-sm text-body">
                      <span className="font-semibold text-heading">Included in:</span>
                      {packages.map((pkg) => (
                        <Link
                          key={pkg.slug}
                          href={pkg.href}
                          className="rounded-full bg-navy px-3 py-1 font-medium text-silver transition hover:bg-indigo hover:text-gold"
                        >
                          {pkg.name}
                        </Link>
                      ))}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-heading">{d.name} FAQs</h3>
                  <FaqList faqs={d.faqs} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section id="packages" className="section-y scroll-mt-20">
        <div className="container-page flex flex-col gap-12 lg:gap-14">
          <SectionHeader
            title={
              <>
                <span className="text-gradient-gold">Kerala Packages:</span> Tried &amp; Loved Routes
              </>
            }
            subtitle="Itineraries our travellers keep coming back to. Every one can be adjusted: add nights, upgrade hotels or swap destinations."
          />
          {apiPackages ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {apiPackages.map((pkg) => (
                <li key={pkg._id} className="flex">
                  <TourPackageCard pkg={pkg} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {keralaPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          )}
        </div>
      </section>

      <EnquiryBand
        title="Not sure which route suits you?"
        text="Tell us your dates, interests and budget. A Kerala specialist will design an itinerary just for you."
      />
    </main>
  );
}
