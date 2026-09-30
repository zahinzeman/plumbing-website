"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Testimonial } from "@/data/testimonials";

interface MarqueeRowProps {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
}

export function MarqueeRow({
  items,
  direction = "left",
  speed = 35,
}: MarqueeRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items for seamless continuous looping
  const duplicatedItems = [...items, ...items, ...items];

  if (shouldReduceMotion) {
    return (
      <div className="flex gap-6 overflow-x-auto py-2 no-scrollbar">
        {items.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    );
  }

  const duration = isHovered ? speed * 1.11 : speed; // 90% speed on hover

  return (
    <div
      className="overflow-hidden w-full flex select-none py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-6 shrink-0"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-[320px] sm:w-[341px] min-h-[190px] p-[18px] bg-white rounded-[14px] border border-[rgba(28,103,88,0.12)] shadow-xs flex flex-col justify-between shrink-0 text-left">
      <div className="flex flex-col gap-2.5">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-star-amber font-bold text-[14px] tracking-wider">
          {"★".repeat(item.stars || 5)}
        </div>

        {/* Quote text */}
        <p className="text-[14px] font-medium leading-[1.5] text-body line-clamp-4">
          "{item.text}"
        </p>
      </div>

      {/* Author details */}
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-2">
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-ink leading-tight">
            {item.author}
          </span>
          <span className="text-[12px] text-muted leading-tight">
            {item.source || item.role || "Verified Customer"}
          </span>
        </div>
      </div>
    </div>
  );
}
