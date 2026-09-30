import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { BlogSection } from "@/components/sections/BlogSection";
import { EmergencyCta } from "@/components/sections/EmergencyCta";

export const metadata: Metadata = {
  title: "Plumbing Tips & Insights Blog",
  description:
    "Expert tips, seasonal plumbing advice, and maintenance guides from the licensed team at CorePlumb.",
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Blog Hero */}
      <section className="relative min-h-[340px] lg:min-h-[400px] flex items-center justify-center pt-28 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Plumbing blog tips"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white flex flex-col items-center gap-4">
          <Reveal isHero delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
              INSIGHTS & GUIDES
            </span>
          </Reveal>

          <Reveal isHero delay={0.2}>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1] tracking-[-0.04em] text-white">
              Our Plumbing Blog
            </h1>
          </Reveal>

          <Reveal isHero delay={0.3}>
            <p className="text-[16px] leading-[1.4] text-white/90 max-w-[620px]">
              Stay informed with DIY troubleshooting advice, seasonal freeze prevention tips, and appliance upgrade recommendations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <BlogSection showHeading={false} />

      {/* Emergency CTA */}
      <EmergencyCta />
    </>
  );
}
