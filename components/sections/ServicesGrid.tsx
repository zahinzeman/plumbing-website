"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CursorFollower } from "@/components/sections/CursorFollower";
import { services } from "@/data/services";

interface ServicesGridProps {
  variant?: "onBlue" | "onWhite";
  limit?: number;
  showHeading?: boolean;
}

export function ServicesGrid({
  variant = "onBlue",
  limit,
  showHeading = true,
}: ServicesGridProps) {
  const [cursorActive, setCursorActive] = useState(false);
  const displayServices = limit ? services.slice(0, limit) : services;
  const isOnBlue = variant === "onBlue";

  return (
    <section
      id="services"
      className={`py-20 lg:py-28 overflow-hidden relative ${
        isOnBlue ? "bg-primary text-white" : "bg-white text-navy"
      }`}
    >
      <CursorFollower active={cursorActive && isOnBlue} text="DISCOVER" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="SERVICES WE PROVIDE"
              title="Comprehensive Plumbing & Emergency Solutions"
              subtitle="From routine preventative maintenance to high-pressure repiping and urgent leak repairs, our licensed technicians get the job done right."
              align="center"
              theme={isOnBlue ? "dark" : "light"}
            />
          </Reveal>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayServices.map((service, idx) => (
            <Reveal key={service.slug} delay={(idx % 3) * 0.1}>
              <ServiceCard
                service={service}
                variant={variant}
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
