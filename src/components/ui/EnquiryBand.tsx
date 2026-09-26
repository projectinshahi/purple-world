import { ArrowUpRight } from "lucide-react";
import { GradientLink } from "@/components/ui/GradientButton";

export function EnquiryBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-gradient-navy p-8 lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative flex max-w-[44rem] flex-col gap-3">
            <h2 className="font-display text-3xl font-semibold text-silver lg:text-[2.5rem] lg:leading-tight">
              {title}
            </h2>
            <p className="leading-[1.625rem] text-silver/80 lg:text-lg">{text}</p>
          </div>
          <GradientLink href="/#contact" className="relative shrink-0">
            Get a Custom Quote
            <ArrowUpRight className="size-6 lg:size-7" strokeWidth={2} />
          </GradientLink>
        </div>
      </div>
    </section>
  );
}
