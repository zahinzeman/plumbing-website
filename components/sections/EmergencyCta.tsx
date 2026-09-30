"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, Headphones } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";

export function EmergencyCta() {
  return (
    <section className="relative bg-primary text-white overflow-hidden py-16 lg:py-0">
      {/* Background Image Texture */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/cta-bg.jpg"
          alt="Emergency plumber service background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-5 py-8 lg:py-12">
            <Reveal>
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-white/90 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                24/7 EMERGENCY DISPATCH
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-white max-w-[560px]">
                Need An Emergency Plumber Right Now?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[16px] leading-[1.4] text-white/85 max-w-[520px]">
                Burst pipes, major leaks, or overflowing sewer backups? Our licensed emergency crew is equipped for immediate dispatch day and night.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={brand.phone_href}
                  className="inline-flex items-center justify-center gap-2.5 h-[48px] px-6 rounded-[10px] bg-white text-navy font-bold text-[15px] hover:bg-white/90 active:bg-gray-100 transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call {brand.phone_display}</span>
                </a>

                <Button
                  href="/#home"
                  variant="secondary"
                  className="!h-[48px] !px-6 text-[15px]"
                >
                  Get Free Quote
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Cutout Plumber Photo */}
          <div className="lg:col-span-5 hidden lg:flex justify-end self-end relative h-[420px] w-full">
            <Reveal delay={0.2} className="relative w-full h-full">
              <Image
                src="/images/cta-plumber-cutout.jpg"
                alt="Emergency plumber on call"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1200px) 40vw, 400px"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
