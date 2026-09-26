import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Clock, IndianRupee, MapPin, MoveRight, X } from "lucide-react";
import { formatDuration, formatPrice, getPackage, mediaUrl } from "@/lib/api";
import { PageHero } from "@/components/ui/PageHero";
import { GradientLink } from "@/components/ui/GradientButton";
import { EnquiryBand } from "@/components/ui/EnquiryBand";

export async function generateMetadata({ params }: PageProps<"/packages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackage(slug);
  if (!pkg) return {};
  const title = `${pkg.title}: ${pkg.destination} Tour Package`;
  return {
    title,
    description: `${formatDuration(pkg)} ${pkg.destination} itinerary. ${pkg.summary}`.slice(0, 160),
    openGraph: {
      title: `${title} | Purpleworld Tours`,
      description: pkg.summary,
      images: pkg.coverImage ? [mediaUrl(pkg.coverImage)] : undefined,
    },
  };
}

export default async function PackagePage({ params }: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const pkg = await getPackage(slug);
  if (!pkg) notFound();

  const paragraphs = pkg.description.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const facts = [
    { icon: Clock, label: "Duration", value: formatDuration(pkg) },
    { icon: MapPin, label: "Destination", value: pkg.destination },
    { icon: IndianRupee, label: "Price", value: formatPrice(pkg.price) + (pkg.price > 0 ? " / person" : "") },
  ];

  return (
    <main>
      <PageHero
        eyebrow={`${pkg.destination} · ${formatDuration(pkg)}`}
        title={pkg.title}
        tagline={pkg.summary}
        image={pkg.coverImage ? mediaUrl(pkg.coverImage) : undefined}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
          { label: pkg.title },
        ]}
        cta={{ label: "Enquire Now", href: "/#contact" }}
      >
        {pkg.route.length > 0 && (
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-medium text-silver lg:text-lg">
            {pkg.route.map((stop, i) => (
              <li key={`${stop.place}-${i}`} className="flex items-center gap-2">
                {i > 0 && <MoveRight className="size-4 text-gold" aria-hidden />}
                {stop.place}
                {stop.nights > 0 && <span className="text-silver/60">({stop.nights}N)</span>}
              </li>
            ))}
          </ol>
        )}
      </PageHero>

      <section className="section-y">
        <div className="container-page flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-14 lg:flex-1">
            {paragraphs.length > 0 && (
              <div className="flex flex-col gap-5">
                <h2 className="text-gradient-navy font-display text-3xl font-semibold lg:text-[2.5rem]">Overview</h2>
                {paragraphs.map((p) => (
                  <p key={p} className="text-lg leading-8 whitespace-pre-line text-body">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {pkg.itinerary.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-gradient-navy font-display text-3xl font-semibold lg:text-[2.5rem]">
                  Day-by-Day Itinerary
                </h2>
                <ol className="relative flex flex-col gap-6 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-form-border">
                  {pkg.itinerary.map((day, i) => (
                    <li key={`${day.title}-${i}`} className="relative flex gap-5">
                      <span className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold font-semibold text-white">
                        {i + 1}
                      </span>
                      <div className="flex flex-col gap-1 pt-1.5">
                        <p className="text-xs font-semibold tracking-wider text-gold uppercase">Day {i + 1}</p>
                        <h3 className="text-xl font-semibold text-heading">{day.title}</h3>
                        {day.text && <p className="leading-[1.625rem] text-body lg:text-lg">{day.text}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {(pkg.inclusions.length > 0 || pkg.exclusions.length > 0) && (
              <div className="grid gap-6 sm:grid-cols-2">
                {pkg.inclusions.length > 0 && (
                  <div className="flex flex-col gap-4 rounded-3xl bg-sky p-7">
                    <h2 className="text-xl font-semibold text-heading">What&apos;s included</h2>
                    <ul className="flex flex-col gap-3">
                      {pkg.inclusions.map((item) => (
                        <li key={item} className="flex gap-3 text-body">
                          <Check className="mt-0.5 size-5 shrink-0 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {pkg.exclusions.length > 0 && (
                  <div className="flex flex-col gap-4 rounded-3xl border border-form-border p-7">
                    <h2 className="text-xl font-semibold text-heading">Not included</h2>
                    <ul className="flex flex-col gap-3">
                      {pkg.exclusions.map((item) => (
                        <li key={item} className="flex gap-3 text-body">
                          <X className="mt-0.5 size-5 shrink-0 text-muted" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {pkg.gallery.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-gradient-navy font-display text-3xl font-semibold lg:text-[2.5rem]">Gallery</h2>
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {pkg.gallery.map((url) => (
                    <li key={url} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky">
                      <Image
                        src={mediaUrl(url)}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:w-[22rem] lg:shrink-0">
            <div className="flex flex-col gap-5 rounded-3xl border border-form-border bg-white p-7 shadow-card lg:sticky lg:top-32">
              <dl className="flex flex-col gap-4">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-sky">
                      <Icon className="size-5 text-gold" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold tracking-wider text-label uppercase">{label}</dt>
                      <dd className="font-semibold text-navy">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <GradientLink href="/#contact" className="w-full">
                Enquire Now
                <ArrowUpRight className="size-6" strokeWidth={2} />
              </GradientLink>
              <p className="text-center text-sm text-body">
                Every itinerary can be customised to your dates and pace.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <EnquiryBand
        title={`Ready for ${pkg.destination}?`}
        text="Share your travel dates and group size, and we'll send a tailored quote for this package."
      />

      <div className="container-page pb-16 lg:pb-[6.25rem]">
        <Link href="/packages" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold">
          ← All packages
        </Link>
      </div>
    </main>
  );
}
