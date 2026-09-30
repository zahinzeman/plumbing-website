import { Hero } from "@/components/sections/Hero";
import { ChooseUs } from "@/components/sections/ChooseUs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { EmergencyCta } from "@/components/sections/EmergencyCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <ServicesGrid variant="onBlue" />
      <Testimonials />
      <EmergencyCta />
      <FaqSection />
      <BlogSection />
    </>
  );
}
