import Image from "next/image";
import { customizationOptions, processSteps } from "@/data/site";

export function CustomPackages() {
  return (
    <section id="packages" className="section-y scroll-mt-20">
      <div className="container-page flex flex-col gap-12 lg:gap-[4.125rem]">
        <div className="flex max-w-[51.5rem] flex-col gap-2">
          <h2 className="font-display text-4xl leading-[1.27] font-semibold md:text-5xl lg:text-[3.5rem]">
            <span className="text-gradient-gold">Customized Packages:</span>
            <br />
            <span className="text-gradient-navy">The Purpleworld Signature</span>
          </h2>
          <p className="max-w-[47.75rem] text-base leading-[1.625rem] text-body lg:text-lg">
            Every Purpleworld journey is shaped by a real person, not an
            algorithm. That human touch is what sets us apart from automated
            booking sites.
          </p>
        </div>

        <div className="flex flex-col gap-12 xl:flex-row xl:gap-14">
          <div className="flex flex-col gap-10 xl:w-[29.875rem] xl:shrink-0 xl:gap-14">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-heading lg:text-[2rem] lg:leading-[2.4375rem]">
                Why Go Custom?
              </h3>
              <p className="text-base leading-[1.625rem] text-body lg:text-lg">
                Generic itineraries rarely lead to extraordinary memories. Our
                customized package department works directly with you to align
                your interests, pace, and budget.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-semibold text-heading lg:text-2xl">
                Customization Options Include:
              </h4>
              <ul className="flex flex-col gap-4">
                {customizationOptions.map((option) => (
                  <li key={option} className="flex items-center gap-2 text-base text-body lg:text-lg">
                    <span className="size-2 shrink-0 rounded-full bg-accent" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="grid gap-8 sm:grid-cols-3 xl:flex-1">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                className={`flex flex-col gap-4 ${i === 1 ? "sm:mt-14" : ""}`}
              >
                <div className="group relative aspect-[305/373] overflow-hidden rounded-3xl bg-[#d9d9d9]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 640px) 305px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium text-ink lg:text-2xl">{step.title}</h3>
                  <p className="leading-6 text-body">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
