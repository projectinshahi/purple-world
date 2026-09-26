import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { CustomPackages } from "@/components/home/CustomPackages";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { AboutUs } from "@/components/home/AboutUs";
import { Testimonials } from "@/components/home/Testimonials";
import { EnquiryForm } from "@/components/home/EnquiryForm";

export default function Home() {
  return (
    <main>
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
