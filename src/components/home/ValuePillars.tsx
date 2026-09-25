import Image from "next/image";
import { pillars } from "@/data/site";

export function ValuePillars() {
  return (
    <section className="section-y bg-sky">
      <div className="container-page grid justify-center gap-12 md:grid-cols-3 md:gap-10 lg:max-w-[81.75rem]">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="flex flex-col items-center gap-4 px-6 text-center"
          >
            <div className="flex h-[5.875rem] w-[5.25rem] items-center justify-center">
              <Image src={pillar.icon} alt="" width={70} height={70} className="h-auto max-h-[4.1875rem] w-auto" />
            </div>
            <h3 className="text-xl font-medium text-navy lg:text-2xl">{pillar.title}</h3>
            <p className="max-w-[21.25rem] leading-[1.625rem] text-body">{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
