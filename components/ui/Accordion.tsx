"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { springSnappy } from "@/lib/motion";

export interface AccordionItemData {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className={`flex flex-col gap-[10px] w-full ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);

        return (
          <div
            key={idx}
            className="bg-white rounded-[14px] border border-[rgba(28,103,88,0.12)] overflow-hidden transition-shadow"
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between p-[18px] text-left cursor-pointer select-none gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={isOpen}
            >
              <span className="text-[16px] font-bold leading-[1.2] text-navy">
                {item.q}
              </span>
              <span className="shrink-0 text-[#1C6758] w-[20px] h-[20px] flex items-center justify-center">
                {isOpen ? (
                  <X className="w-[18px] h-[18px]" />
                ) : (
                  <ChevronDown className="w-[18px] h-[18px]" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { height: "auto", opacity: 1 }
                  }
                  exit={
                    shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                  }
                  transition={springSnappy}
                  className="overflow-hidden"
                >
                  <div className="px-[18px] pb-[18px] text-[14px] font-medium leading-[1.5] text-body">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
