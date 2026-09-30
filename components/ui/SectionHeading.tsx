import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "blue" | "white" | "badge";
}

export function Eyebrow({
  children,
  className = "",
  variant = "blue",
}: EyebrowProps) {
  const colorStyles = {
    blue: "text-primary",
    white: "text-white",
    badge:
      "inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[12px]",
  }[variant];

  return (
    <p
      className={`text-[12px] font-bold uppercase tracking-[0.08em] leading-tight select-none ${colorStyles} ${className}`}
    >
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col gap-3.5 max-w-[760px] ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Eyebrow variant={isDark ? "white" : "blue"}>{eyebrow}</Eyebrow>
      )}

      <h2
        className={`text-[30px] sm:text-[36px] md:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-[15px] sm:text-[16px] leading-[1.4] ${
            isDark ? "text-white/80" : "text-body"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
