"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface CursorFollowerProps {
  active: boolean;
  text?: string;
}

export function CursorFollower({ active, text = "DISCOVER" }: CursorFollowerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice || !active) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 px-3.5 py-1.5 rounded-full bg-white text-primary text-[11px] font-bold uppercase tracking-[0.1em] shadow-lg -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: mousePosition.x + 12,
        y: mousePosition.y + 12,
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
    >
      {text}
    </motion.div>
  );
}
