import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { EmergencyCta } from "@/components/sections/EmergencyCta";

export const metadata: Metadata = {
  title: "All Plumbing Services",
  description:
    "Explore our complete range of plumbing, repiping, drain cleaning, water heater, and emergency services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="relative min-h-[340px] lg:min-h-[400px] flex items-center justify-center pt-28 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Services background"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white flex flex-col items-center gap-4">
          <Reveal isHero delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
              OUR EXPERTISE
            </span>
          </Reveal>

          <Reveal isHero delay={0.2}>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1] tracking-[-0.04em] text-white">
              Services We Provide
            </h1>
          </Reveal>

          <Reveal isHero delay={0.3}>
            <p className="text-[16px] leading-[1.4] text-white/90 max-w-[620px]">
              Discover our full catalog of residential and commercial plumbing services delivered with certified expertise and upfront pricing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid on Light Background */}
      <ServicesGrid variant="onWhite" showHeading={false} />

      {/* Emergency CTA */}
      <EmergencyCta />
    </>
  );
}
