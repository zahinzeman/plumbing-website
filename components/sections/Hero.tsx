"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { brand } from "@/data/brand";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[900px] flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-primary"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="CorePlumb expert plumbing workspace"
          fill
          priority
          className="object-cover object-center brightness-75"
          sizes="100vw"
        />
        {/* Gradient Overlay matching Framer hero specification */}
        <div className="absolute inset-0 bg-hero-fade opacity-95" />
      </div>

      {/* Hero Container Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left text-white gap-6">
            <Reveal isHero delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-white/20">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-white">
                  {brand.trademark_display}
                </span>
              </div>
            </Reveal>

            <Reveal isHero delay={0.15}>
              <h1 className="text-[38px] sm:text-[44px] lg:text-[48px] font-bold leading-[0.96] tracking-[-0.04em] text-white">
                {brand.tagline}
              </h1>
            </Reveal>

            <Reveal isHero delay={0.25}>
              <p className="text-[16px] leading-[1.4] text-white/90 max-w-[540px]">
                Fast, professional, and licensed local plumbing specialists ready 24/7 for leak repairs, drain unclogging, water heater installation, and home maintenance.
              </p>
            </Reveal>

            <Reveal isHero delay={0.35}>
              <div className="pt-2">
                <TrustBadge variant="hero" />
              </div>
            </Reveal>
          </div>

          {/* Right Column Quote Form */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <Reveal isHero delay={0.25} className="w-full">
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
