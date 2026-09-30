"use client";

import React from "react";
import Link from "next/link";
import { X, Phone, Droplets } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { drawerSpring } from "@/lib/motion";
import { brand } from "@/data/brand";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-navy/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={drawerSpring}
            className="relative w-full max-w-[340px] bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 font-bold text-xl text-navy">
                  <Droplets className="w-6 h-6 text-primary" strokeWidth={2.5} />
                  <span>{brand.name}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-navy hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 py-6">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="text-[16px] font-bold text-navy hover:text-primary py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Contact & CTA */}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
              <a
                href={brand.phone_href}
                className="flex items-center justify-center gap-2.5 h-[48px] rounded-[10px] bg-secondary text-primary font-bold text-[15px] hover:bg-secondary-hover hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{brand.phone_display}</span>
              </a>

              <Button
                href="/#home"
                variant="primary"
                fullWidth
                onClick={onClose}
                className="!h-[48px]"
              >
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
