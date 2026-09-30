"use client";

import React from "react";
import Link from "next/link";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  XLogo,
  RedditLogo,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { springUI } from "@/lib/motion";
import { brand } from "@/data/brand";
import { services } from "@/data/services";
import { TrustBadge } from "@/components/ui/TrustBadge";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const socialLinks = [
    { icon: FacebookLogo, href: brand.socials.facebook, label: "Facebook" },
    { icon: InstagramLogo, href: brand.socials.instagram, label: "Instagram" },
    { icon: XLogo, href: brand.socials.x, label: "X (Twitter)" },
    { icon: RedditLogo, href: brand.socials.reddit, label: "Reddit" },
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-[rgba(187,221,255,0.05)]">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-white focus:outline-none"
            >
              <Droplets className="w-8 h-8 text-primary" strokeWidth={2.5} />
              <span>{brand.name}</span>
            </Link>

            <p className="text-[14px] leading-[1.6] text-white/70 max-w-[340px]">
              {brand.name} provides trusted residential and commercial plumbing, drain cleaning, water heater repair, and 24/7 emergency services nationwide.
            </p>

            <div className="pt-1">
              <TrustBadge variant="footer" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-colors"
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.1, y: -2 }
                    }
                    transition={springUI}
                  >
                    <IconComponent size={20} weight="regular" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h5 className="text-[20px] font-bold tracking-[-0.03em] text-white">
              Services We Provide
            </h5>
            <ul className="flex flex-col gap-2.5 text-[14px]">
              {services.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-white/70 hover:text-footer-link-hover transition-colors duration-300"
                  >
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h5 className="text-[20px] font-bold tracking-[-0.03em] text-white">
              Company
            </h5>
            <ul className="flex flex-col gap-2.5 text-[14px]">
              <li>
                <Link
                  href="/#home"
                  className="text-white/70 hover:text-footer-link-hover transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-footer-link-hover transition-colors duration-300"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-footer-link-hover transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-footer-link-hover transition-colors duration-300"
                >
                  Blog & Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-white/70 hover:text-footer-link-hover transition-colors duration-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-white/70 hover:text-footer-link-hover transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h5 className="text-[20px] font-bold tracking-[-0.03em] text-white">
              Contact Info
            </h5>
            <ul className="flex flex-col gap-3.5 text-[14px] text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{brand.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={brand.phone_href}
                  className="hover:text-footer-link-hover transition-colors"
                >
                  {brand.phone_display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-footer-link-hover transition-colors"
                >
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-white/50">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <Link
            href="/privacy-policy"
            className="text-muted hover:text-primary transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
