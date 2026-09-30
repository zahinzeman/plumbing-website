"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MarqueeRow } from "@/components/sections/Marquee";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const row1 = testimonials.row1 || [];
  const row2 = testimonials.row2 || [];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#FAFAFC] overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title="Happy Customers Say"
            subtitle="Read real verified reviews from local homeowners and property managers who rely on CorePlumb for prompt and reliable service."
            align="center"
          />
        </Reveal>
      </div>

      {/* Marquee Rows Container with Edge Fade Mask */}
      <div
        className="mt-14 flex flex-col gap-6 w-full"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <MarqueeRow items={row1} direction="left" speed={30} />
        <MarqueeRow items={row2} direction="right" speed={32} />
      </div>
    </section>
  );
}
