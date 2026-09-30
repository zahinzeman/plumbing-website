import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Award, Users, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { EmergencyCta } from "@/components/sections/EmergencyCta";
import { teamMembers } from "@/data/team";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CorePlumb's mission, our certified team of master plumbers, and our commitment to honesty and quality.",
};

const teamImageMap: { [key: string]: string } = {
  "James Harlow": "/images/team/james-harlow.jpg",
  "Sarah Mitchell": "/images/team/sarah-mitchell.jpg",
  "Derek Osei": "/images/team/derek-osei.jpg",
  "Rachel Torres": "/images/team/rachel-torres.jpg",
  "Tom Brennan": "/images/team/tom-brennan.jpg",
  "Yuna Nakamura": "/images/team/yuna-nakamura.jpg",
  "Luis Vega": "/images/team/luis-vega.jpg",
  "Anne Collins": "/images/team/anne-collins.jpg",
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity & Honesty",
      desc: "Upfront pricing with no surprise charges or unnecessary service upsells.",
    },
    {
      icon: Award,
      title: "Master Craftsmanship",
      desc: "Licensed plumbers trained to local municipal building codes and manufacturer specs.",
    },
    {
      icon: Users,
      title: "Customer First",
      desc: "We treat every residential and commercial property with the utmost respect.",
    },
    {
      icon: Clock,
      title: "Prompt Dispatch",
      desc: "Rapid emergency availability so you're never stranded during a leak or freeze.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[340px] lg:min-h-[400px] flex items-center justify-center pt-28 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About CorePlumb"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white flex flex-col items-center gap-4">
          <Reveal isHero delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
              WHO WE ARE
            </span>
          </Reveal>

          <Reveal isHero delay={0.2}>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1] tracking-[-0.04em] text-white">
              About CorePlumb
            </h1>
          </Reveal>

          <Reveal isHero delay={0.3}>
            <p className="text-[16px] leading-[1.4] text-white/90 max-w-[620px]">
              Built on a foundation of honest craftsmanship, fast response times, and unwavering commitment to customer satisfaction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <Reveal>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary">
                  OUR MISSION
                </span>
                <h2 className="mt-2 text-[30px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                  Raising The Standard Of Local Plumbing
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[16px] leading-[1.6] text-body">
                  Founded with a vision to eliminate the frustration of plumbing repairs, {brand.name} has grown into a premier team of certified technicians, master plumbers, and dedicated support staff.
                </p>
                <p className="mt-4 text-[16px] leading-[1.6] text-body">
                  From minor drain unclogging to whole-house sewer line replacements, we arrive on time, treat your home like our own, and back all our work with a comprehensive satisfaction guarantee.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[36px] font-bold text-primary">15+</span>
                    <p className="text-[13px] font-bold text-navy mt-1">Years Serving USA</p>
                  </div>
                  <div>
                    <span className="text-[36px] font-bold text-primary">10k+</span>
                    <p className="text-[13px] font-bold text-navy mt-1">Jobs Completed</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Team Group Image */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/about-team-group.jpg"
                    alt="CorePlumb technician team in workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 600px"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <Reveal key={val.title} delay={idx * 0.1}>
                  <div className="p-6 rounded-[16px] bg-[#FAFAFC] border border-gray-100 flex flex-col gap-3 text-left h-full">
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 text-primary flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-[18px] font-bold text-navy mt-2">
                      {val.title}
                    </h4>
                    <p className="text-[14px] leading-[1.5] text-body">
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 lg:py-28 bg-[#FAFAFC] border-t border-gray-100">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="OUR TEAM"
              title="Meet The CorePlumb Specialists"
              subtitle="Our team is comprised of licensed master plumbers, diagnostic specialists, and friendly coordinators dedicated to your satisfaction."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => {
              const imgUrl = teamImageMap[member.name] || "/images/team/james-harlow.jpg";
              return (
                <Reveal key={member.name} delay={(idx % 4) * 0.1}>
                  <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-xs flex flex-col text-left group hover:shadow-md transition-shadow">
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                      <Image
                        src={imgUrl}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-1">
                      <h4 className="text-[18px] font-bold text-navy">
                        {member.name}
                      </h4>
                      <span className="text-[13px] font-semibold text-primary">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Emergency CTA */}
      <EmergencyCta />
    </>
  );
}
