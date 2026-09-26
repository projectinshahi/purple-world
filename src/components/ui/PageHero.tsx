import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { GradientLink } from "@/components/ui/GradientButton";

type Props = {
  eyebrow: string;
  title: ReactNode;
  tagline: ReactNode;
  breadcrumbs: { label: string; href?: string }[];
  /** Optional background photo; without one the brand indigo with soft glows is used */
  image?: string;
  cta?: { label: string; href: string } | null;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  tagline,
  breadcrumbs,
  image,
  cta = { label: "Plan My Trip", href: "/#contact" },
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy">
      {image ? (
        <>
          <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-navy/40" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 -left-40 size-[32rem] rounded-full bg-[#2e8bff]/20 blur-3xl" />
        </>
      )}

      <div className="container-page relative flex flex-col gap-6 pt-32 pb-16 lg:pt-[10rem] lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-silver/70 lg:text-base">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-4" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-silver">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase lg:text-base">
          {eyebrow}
        </p>
        <h1 className="max-w-[56rem] font-display text-4xl leading-[1.2] font-bold text-silver sm:text-5xl lg:text-[4rem]">
          {title}
        </h1>
        <div className="max-w-[44rem] text-base leading-[1.625rem] text-silver/85 lg:text-xl lg:leading-8">
          {tagline}
        </div>
        {children}
        {cta && (
          <GradientLink href={cta.href} className="mt-2 self-start">
            {cta.label}
            <ArrowUpRight className="size-6 lg:size-7" strokeWidth={2} />
          </GradientLink>
        )}
      </div>
    </section>
  );
}
