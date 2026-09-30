"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { springUI } from "@/lib/motion";
import { brand } from "@/data/brand";

interface TrustBadgeProps {
  className?: string;
  variant?: "hero" | "footer" | "card";
}

export function TrustBadge({ className = "", variant = "hero" }: TrustBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  const isFooter = variant === "footer";

  return (
    <motion.a
      href={brand.trustpilot_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}
      whileHover={shouldReduceMotion ? undefined : { opacity: 0.8 }}
      transition={springUI}
    >
      {/* Overlapping Avatars */}
      <div className="flex -space-x-2.5 items-center">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="w-[36px] h-[36px] rounded-full border-2 border-white overflow-hidden relative shadow-sm"
          >
            <Image
              src={`/images/avatars/avatar-${num}.jpg`}
              alt="Client review avatar"
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
        ))}
      </div>

      {/* Review details & stars */}
      <div className="flex flex-col gap-0.5 text-left">
        {/* 5 Stars */}
        <div className="flex items-center gap-0.5 text-[#F1FA00]">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Text */}
        <span
          className={`text-xs font-bold leading-tight flex items-center gap-1 ${
            isFooter ? "text-white/90" : "text-white"
          }`}
        >
          {brand.rating_claim}
          <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </motion.a>
  );
}
