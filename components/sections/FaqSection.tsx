"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { homeFaqs } from "@/data/faqs";

const resolvedHomeFaqs = [
  {
    q: "What are the benefits of water filtration?",
    a: "Water filtration removes chlorine, heavy metals, and odors, protecting your skin, drinking water, and household appliances from mineral buildup.",
  },
  {
    q: "How quickly can you arrive?",
    a: "For urgent plumbing emergencies, we prioritize same-day dispatch and can typically arrive at your home or business within 60 to 90 minutes.",
  },
  {
    q: "Do you provide estimates first?",
    a: "Yes. Our technicians perform a thorough on-site diagnosis and provide a clear, upfront written quote before beginning any repair or installation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, cash, bank checks, and offer flexible financing plans for major repiping or remodeling projects.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Yes, 100% of our team members are fully licensed, background-checked, bonded, and insured to meet and exceed all municipal plumbing codes.",
  },
  {
    q: "Do you offer 24/7 emergency service?",
    a: "Yes, our emergency response team operates 24 hours a day, 7 days a week, 365 days a year for burst pipes, sewage backups, and catastrophic leaks.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the entire metropolitan region and surrounding suburban counties. Give us a call to confirm immediate availability in your zip code.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Every job comes with our 100% workmanship and customer satisfaction guarantee, backed by manufacturer warranties on all installed parts.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column Text & Contact CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left gap-6">
            <Reveal>
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                Quick Answers To Questions You May Have
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[16px] leading-[1.4] text-body">
                Not sure where to start? These are the questions homeowners and business owners ask before scheduling a service visit.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Button href="/#home" variant="secondary" icon>
                Contact Us
              </Button>
            </Reveal>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-7 w-full">
            <Reveal delay={0.15}>
              <Accordion items={resolvedHomeFaqs} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
