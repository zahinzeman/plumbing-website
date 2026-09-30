import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and data protection practices for ${brand.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[300px] lg:min-h-[340px] flex items-center justify-center pt-28 pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/privacy-hero.jpg"
            alt="Privacy policy background"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white flex flex-col items-center gap-3">
          <Reveal isHero delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
              LEGAL & PRIVACY
            </span>
          </Reveal>

          <Reveal isHero delay={0.2}>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1] tracking-[-0.04em] text-white">
              Privacy Policy
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Reveal>
            <div className="prose prose-lg max-w-none text-body flex flex-col gap-8 leading-[1.7] text-[16px]">
              <p className="text-sm text-muted">
                Last updated: October 2026
              </p>

              <div>
                <h2 className="text-[24px] font-bold text-navy mb-3">
                  1. Information We Collect
                </h2>
                <p>
                  At {brand.name}, we value your privacy. We collect information you voluntarily provide when requesting a service quote, scheduling an emergency technician, or contacting our dispatch desk. This includes your name, phone number, email address, property address, and service details.
                </p>
              </div>

              <div>
                <h2 className="text-[24px] font-bold text-navy mb-3">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use your personal details exclusively to:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                  <li>Schedule, dispatch, and confirm plumbing service appointments.</li>
                  <li>Provide accurate, transparent pricing estimates and invoices.</li>
                  <li>Communicate technician arrival times and emergency updates.</li>
                  <li>Maintain records for warranty and guarantee fulfillment.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[24px] font-bold text-navy mb-3">
                  3. Information Sharing & Third Parties
                </h2>
                <p>
                  We do not sell, rent, or trade your personal information to third-party advertisers. We only share necessary service information with certified subcontractors, payment processors, and local municipal inspectors when required to execute code compliance and permits.
                </p>
              </div>

              <div>
                <h2 className="text-[24px] font-bold text-navy mb-3">
                  4. Data Security
                </h2>
                <p>
                  We implement robust physical, technical, and administrative safeguards to protect your personal information against unauthorized access, loss, or alteration.
                </p>
              </div>

              <div>
                <h2 className="text-[24px] font-bold text-navy mb-3">
                  5. Contact Us Regarding Your Privacy
                </h2>
                <p>
                  If you have questions about this Privacy Policy or wish to update or delete your information, please contact us at:
                </p>
                <div className="mt-3 p-5 rounded-[12px] bg-primary/5 border border-primary/10 text-navy font-medium">
                  <p>Email: {brand.email}</p>
                  <p>Phone: {brand.phone_display}</p>
                  <p>Address: {brand.address}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
