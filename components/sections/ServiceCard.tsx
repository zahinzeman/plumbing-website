"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Droplet,
  Flame,
  AlertCircle,
  Bath,
  Search,
  Network,
  Filter,
  Gauge,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { springUI } from "@/lib/motion";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "onBlue" | "onWhite";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "pipe-installation": Wrench,
  "drain-cleaning": Droplet,
  "water-heater-repair": Flame,
  "emergency-plumbing": AlertCircle,
  "bathroom-remodeling": Bath,
  "leak-detection": Search,
  "sewer-line-service": Network,
  "water-filtration": Filter,
  "sump-pump-services": Gauge,
};

export function ServiceCard({
  service,
  variant = "onBlue",
  onMouseEnter,
  onMouseLeave,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const IconComponent = iconMap[service.slug] || Wrench;
  const isOnBlue = variant === "onBlue";

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
  };

  return (
    <Link
      href={`/services/${service.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="block h-full select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[16px]"
    >
      <motion.div
        className={`h-full p-8 rounded-[16px] flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
          isOnBlue
            ? "bg-[rgba(2,68,156,0.35)] border border-white/10 text-white hover:bg-gradient-to-br hover:from-[#4A97FD] hover:to-[#02449C]"
            : "bg-white border border-[rgba(28,107,207,0.2)] text-navy hover:border-primary hover:shadow-lg"
        }`}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={springUI}
      >
        {/* Top Icon & Arrow */}
        <div className="flex items-center justify-between">
          <div
            className={`w-14 h-14 rounded-[14px] flex items-center justify-center transition-colors ${
              isOnBlue
                ? "bg-white/10 text-white"
                : "bg-primary/10 text-primary"
            }`}
          >
            <IconComponent className="w-7 h-7" />
          </div>

          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform ${
              isHovered ? "translate-x-1" : ""
            } ${
              isOnBlue
                ? "bg-white/10 text-white"
                : "bg-primary/10 text-primary"
            }`}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 flex flex-col gap-2.5 text-left">
          <h4
            className={`text-[22px] sm:text-[24px] font-bold leading-[1.1] tracking-[-0.03em] ${
              isOnBlue ? "text-white" : "text-navy"
            }`}
          >
            {service.name}
          </h4>
          <p
            className={`text-[15px] leading-[1.4] ${
              isOnBlue ? "text-white/85" : "text-body"
            }`}
          >
            {service.card_description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
