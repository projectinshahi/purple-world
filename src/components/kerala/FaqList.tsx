import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/kerala";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex flex-col divide-y divide-form-border border-y border-form-border">
      {faqs.map((faq) => (
        <details key={faq.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-heading lg:text-xl">
            {faq.q}
            <ChevronDown className="mt-1 size-5 shrink-0 text-gold transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 leading-[1.625rem] text-body lg:text-lg">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
