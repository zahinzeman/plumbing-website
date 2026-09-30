"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { framerEase } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  isHero?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  yOffset = 28,
  isHero = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (isHero) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          delay,
          ease: framerEase,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
        ease: framerEase,
      }}
    >
      {children}
    </motion.div>
  );
}
