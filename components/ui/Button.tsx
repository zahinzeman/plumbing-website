"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { springSnappy } from "@/lib/motion";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "form-submit";
  href?: string;
  onClick?: () => void;
  icon?: boolean | React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon = false,
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center font-bold text-sm tracking-normal transition-colors rounded-[10px] select-none cursor-pointer h-[44px] px-[18px] gap-2";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-dark active:bg-navy disabled:opacity-50",
    secondary:
      "bg-secondary text-primary border border-[rgba(28,103,88,0.16)] hover:bg-secondary-hover hover:text-white hover:border-secondary-border active:bg-secondary-pressed active:text-white",
    outline:
      "bg-transparent text-white border border-white/30 hover:bg-white/10 active:bg-white/20",
    "form-submit":
      "bg-primary text-white hover:bg-primary-dark active:bg-navy text-base h-[48px] w-full rounded-[10px]",
  }[variant];

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variantStyles} ${widthStyle} ${className}`;

  const renderIcon = () => {
    if (typeof icon === "boolean" && icon) {
      return <ArrowRight className="w-4 h-4 shrink-0 transition-transform" />;
    }
    return icon;
  };

  const content = (
    <>
      <span>{children}</span>
      {renderIcon()}
    </>
  );

  if (href) {
    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={combinedClasses} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={springSnappy}
    >
      {content}
    </motion.button>
  );
}
