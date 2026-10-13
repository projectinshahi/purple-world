import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { CustomPackages } from "@/components/home/CustomPackages";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { AboutUs } from "@/components/home/AboutUs";
import { Testimonials } from "@/components/home/Testimonials";
import { EnquiryForm } from "@/components/home/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, pageMetadata, websiteSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Purpleworld Tours | Customised Tour & Holiday Packages from Kochi",
  absoluteTitle: true,
  description:
    "Kochi travel agency crafting customised tour and holiday packages since 2013: Kerala houseboats, Munnar tea hills, India and Asia trips, with 24/7 support.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Hero />
      <ValuePillars />
      <CustomPackages />
      <FeaturedDestinations />
      <AboutUs />
      <Testimonials />
      <EnquiryForm />
    </main>
  );
}
