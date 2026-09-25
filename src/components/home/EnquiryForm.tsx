"use client";

import Image from "next/image";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { budgetOptions, destinationOptions } from "@/data/site";
import { submitEnquiry } from "@/lib/enquiry";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fieldBox =
  "flex h-14 w-full items-center gap-2 rounded-2xl border border-field-border bg-white px-5 transition focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20";
const inputText =
  "w-full min-w-0 bg-transparent text-base text-ink outline-none placeholder:text-muted lg:text-lg";

function Field({ label, htmlFor, children, className = "" }: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <label htmlFor={htmlFor} className="text-base leading-6 text-label lg:text-xl">
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({ id, name, options }: { id: string; name: string; options: string[] }) {
  return (
    <div className={`${fieldBox} relative`}>
      <select
        id={id}
        name={name}
        required
        defaultValue=""
        className={`${inputText} appearance-none pr-8 invalid:text-muted`}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-5 size-6 text-label" strokeWidth={1.5} />
    </div>
  );
}

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    await submitEnquiry({
      fullName: String(data.get("fullName")),
      phone: `+91 ${data.get("phone")}`,
      travelDate: String(data.get("travelDate")),
      destination: String(data.get("destination")),
      budget: String(data.get("budget")),
      travelers: Number(data.get("travelers")),
      notes: String(data.get("notes") ?? ""),
    });
    form.reset();
    setStatus("sent");
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="contact" className="section-y scroll-mt-20">
      <div className="container-page flex flex-col gap-12 lg:gap-14">
        <SectionHeader
          title={<span className="font-bold">Start Your Journey</span>}
          subtitle="All inquiries are routed through our secure CRM to ensure a response time of under 12 hours."
        />

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-3xl border border-form-border bg-sky p-5 sm:p-10 lg:flex-[886] lg:gap-8"
          >
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-4 lg:gap-y-8">
              <Field label="Full Name" htmlFor="fullName">
                <div className={fieldBox}>
                  <input id="fullName" name="fullName" required autoComplete="name" placeholder="Enter your name" className={inputText} />
                </div>
              </Field>

              <Field label="Phone number" htmlFor="phone">
                <div className={fieldBox}>
                  <Image src="/images/flag-in.png" alt="India" width={36} height={36} className="size-9 shrink-0 rounded-full border border-[#e3e3e3] object-cover" />
                  <span className="text-lg font-medium text-[#5a5a5a] lg:text-[1.375rem]">+91</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel-national"
                    inputMode="numeric"
                    pattern="[0-9 ]{10,12}"
                    title="10 digit mobile number"
                    placeholder="000 000 0000"
                    className={inputText}
                  />
                </div>
              </Field>

              <Field label="Estimate Travel Date" htmlFor="travelDate">
                <div className={fieldBox}>
                  <input id="travelDate" name="travelDate" type="date" required min={today} className={`${inputText} invalid:text-muted`} />
                </div>
              </Field>

              <Field label="Preferred Destination" htmlFor="destination">
                <Select id="destination" name="destination" options={destinationOptions} />
              </Field>

              <Field label="Budget Range" htmlFor="budget">
                <Select id="budget" name="budget" options={budgetOptions} />
              </Field>

              <Field label="Traveler Count" htmlFor="travelers">
                <div className={fieldBox}>
                  <input id="travelers" name="travelers" type="number" required min={1} max={100} placeholder="Eg: 2 guests" className={inputText} />
                </div>
              </Field>

              <Field label="Notes" htmlFor="notes" className="sm:col-span-2">
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Tell us what you need"
                  className={`${inputText} h-[7.5rem] resize-none rounded-2xl border border-field-border bg-white px-5 py-4 transition focus:border-accent focus:ring-2 focus:ring-accent/20`}
                />
              </Field>
            </div>

            <GradientButton type="submit" disabled={status === "sending"} className="w-full">
              {status === "sending" ? "Sending…" : "Send Request"}
            </GradientButton>

            {status === "sent" && (
              <p role="status" className="flex items-center justify-center gap-2 text-center font-medium text-green-700">
                <CheckCircle2 className="size-5" />
                Thank you! Our team will get back to you within 12 hours.
              </p>
            )}
          </form>

          <div className="relative hidden min-h-[25rem] overflow-hidden rounded-3xl bg-[#d9d9d9] sm:block lg:flex-[557]">
            <Image
              src="/images/contact.jpg"
              alt="Rowing boat on a clear turquoise mountain lake"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
