import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { services, ServiceItem } from "@/data/services";
import { brand } from "@/data/brand";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.meta_title || `${service.name} | ${brand.name}`,
    description: service.page_description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Generate structured FAQs for this service
  const serviceFaqItems = (service.faq?.questions || []).map((q: string) => ({
    q,
    a: `Our certified technicians handle all aspects of ${service.name.toLowerCase()} with precision diagnostics, premium materials, and transparent upfront pricing. Contact us anytime to schedule your on-site assessment.`,
  }));

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Back Link & Breadcrumb */}
        <Reveal>
          <div className="flex items-center gap-2 text-[14px] text-body mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all services</span>
            </Link>
            <span>/</span>
            <span className="text-navy font-semibold">{service.name}</span>
          </div>
        </Reveal>

        {/* Title Header */}
        <Reveal delay={0.1}>
          <div className="max-w-[800px]">
            <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
              {service.name}
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.5] text-body">
              {service.page_description}
            </p>
          </div>
        </Reveal>

        {/* Hero Image */}
        <Reveal delay={0.2} className="mt-10">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-[24px] overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={`/images/services/${service.slug}.jpg`}
              alt={service.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </Reveal>

        {/* Content Layout Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Body Content */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <Reveal>
              <div className="prose prose-lg max-w-none text-body flex flex-col gap-6">
                <h2 className="text-[26px] sm:text-[30px] font-bold text-navy leading-tight">
                  Comprehensive {service.name} Solutions
                </h2>
                <p className="text-[16px] leading-[1.6]">
                  Whether you are dealing with an unexpected plumbing emergency or planning scheduled renovations, our licensed technicians provide thorough inspections, durable installations, and code-compliant repairs tailored to your property.
                </p>

                <h3 className="text-[22px] sm:text-[24px] font-bold text-navy leading-tight mt-4">
                  Why Choose Our Specialists
                </h3>
                <p className="text-[16px] leading-[1.6]">
                  We combine modern diagnostic technology with decades of hands-on plumbing craftsmanship. Every job begins with an honest evaluation and transparent pricing with no hidden fees or surprise invoices.
                </p>

                <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Master-licensed & insured plumbers",
                    "Upfront flat-rate pricing guaranteed",
                    "High-grade commercial materials",
                    "Complete clean-up after every visit",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 p-4 rounded-[12px] bg-primary/5 border border-primary/10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-[14px] font-bold text-navy">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <h2 className="text-[26px] sm:text-[30px] font-bold text-navy leading-tight mt-4">
                  Our Proven Step-by-Step Process
                </h2>
                <p className="text-[16px] leading-[1.6]">
                  From initial inspection and diagnosis to rigorous leak testing and final sign-off, our team guarantees your plumbing system will operate at peak efficiency and reliability for years to come.
                </p>
              </div>
            </Reveal>

            {/* Service Specific FAQ */}
            {serviceFaqItems.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-[24px] font-bold text-navy mb-6">
                  Frequently Asked Questions
                </h3>
                <Accordion items={serviceFaqItems} />
              </div>
            )}
          </div>

          {/* Sidebar CTA & Other Services */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Quick Contact Card */}
            <div className="p-7 rounded-[20px] bg-primary text-white shadow-xl flex flex-col gap-5 text-left">
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-white/80">
                NEED IMMEDIATE ASSISTANCE?
              </span>
              <h3 className="text-[22px] font-bold text-white leading-tight">
                Schedule Your {service.name}
              </h3>
              <p className="text-[14px] leading-[1.5] text-white/85">
                Our technicians are ready to assist. Call now for priority dispatch or get a free quote online.
              </p>
              <a
                href={brand.phone_href}
                className="flex items-center justify-center gap-2.5 h-[48px] rounded-[10px] bg-white text-navy font-bold text-[15px] hover:bg-white/90 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{brand.phone_display}</span>
              </a>
              <Button href="/#home" variant="secondary" fullWidth className="!h-[48px]">
                Request Free Quote
              </Button>
            </div>

            {/* Other Services */}
            <div className="p-6 rounded-[20px] border border-gray-200 bg-[#FAFAFC] flex flex-col gap-4 text-left">
              <h4 className="text-[18px] font-bold text-navy">
                Other Plumbing Services
              </h4>
              <ul className="flex flex-col gap-3">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-[14px] font-medium text-body hover:text-primary transition-colors flex items-center justify-between py-1 border-b border-gray-100 last:border-0"
                    >
                      <span>{s.name}</span>
                      <span className="text-primary font-bold">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
