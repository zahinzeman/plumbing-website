"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, ThumbsUp, Headphones, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/data/brand";

export function ChooseUs() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Expert Licensed Plumbers",
      description:
        "Master-certified professionals trained to handle complex residential repiping, fixture diagnostics, and commercial installations.",
    },
    {
      icon: ThumbsUp,
      title: "Upfront Flat-Rate Pricing",
      description:
        "No hidden charges, surprise travel fees, or overtime spikes. We provide transparent estimates before starting any job.",
    },
    {
      icon: Headphones,
      title: "24/7 Rapid Emergency Callouts",
      description:
        "Burst pipes and sewer backups don't wait. Our dispatch teams are available round-the-clock with fully stocked service trucks.",
    },
    {
      icon: ShieldCheck,
      title: "100% Satisfaction Guarantee",
      description:
        "All our repairs, installations, and maintenance services are backed by a comprehensive parts and labor warranty.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Dependable Plumbing & Maintenance Crafted For Peace of Mind"
            subtitle="We combine master craftsmanship, rapid dispatch, and transparent pricing to protect your home or business from costly water damage."
            align="center"
          />
        </Reveal>

        {/* Content Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: 4 Features */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <Reveal key={feat.title} delay={idx * 0.1}>
                  <div className="p-6 rounded-[16px] border border-[rgba(28,103,88,0.12)] hover:border-primary/30 transition-all bg-white shadow-xs flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1.5 text-left">
                      <h4 className="text-[18px] font-bold text-navy leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-[14px] leading-[1.5] text-body">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right: Master Plumber Portrait + Overlapping Stat Badges */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal delay={0.2} className="relative w-full max-w-[500px]">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/choose-portrait.jpg"
                  alt="CorePlumb certified technician"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Floating Stat 1: 99% Satisfaction */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-5 rounded-[16px] shadow-xl border border-gray-100 flex flex-col items-start gap-1">
                <span className="text-[36px] sm:text-[44px] font-bold leading-none text-primary">
                  99%
                </span>
                <span className="text-[13px] font-bold text-navy">
                  Customer Satisfaction
                </span>
              </div>

              {/* Floating Stat 2: 100+ 5 Star Rating */}
              <div className="absolute -top-6 -right-4 sm:right-4 bg-navy text-white p-5 rounded-[16px] shadow-xl border border-white/10 flex flex-col items-start gap-1">
                <span className="text-[32px] sm:text-[38px] font-bold leading-none text-white">
                  100+
                </span>
                <span className="text-[12px] font-bold text-white/80">
                  5-Star TrustPilot Reviews
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
