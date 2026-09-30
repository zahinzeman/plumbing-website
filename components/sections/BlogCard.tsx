"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { springUI } from "@/lib/motion";
import { BlogPost } from "@/data/posts";

interface BlogCardProps {
  post: BlogPost;
}

const coverImageMap: { [key: string]: string } = {
  "tankless-vs-tank-water-heaters-which-is-right-for-you":
    "/images/blog/blog-tankless-heater.jpg",
  "how-to-prevent-frozen-pipes-this-winter":
    "/images/blog/blog-frozen-pipe.jpg",
  "5-signs-you-need-a-plumber-before-it-s-too-late":
    "/images/blog/blog-under-sink.jpg",
};

export function BlogCard({ post }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const imageSrc = coverImageMap[post.slug] || "/images/blog/blog-under-sink.jpg";

  return (
    <Link
      href={`/blog/${post.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block relative w-full h-[450px] rounded-[20px] overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-md"
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={post.title}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 380px"
      />

      {/* Dark / Blue Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent"
        animate={{
          opacity: isHovered ? 0.95 : 0.85,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 p-7 flex flex-col justify-end text-left text-white z-10">
        {/* Date & Reading time */}
        <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white/80">
          <span>{post.published_at_display}</span>
          <span>•</span>
          <span>{post.reading_time}</span>
        </div>

        {/* Title H3 */}
        <h3 className="mt-2 text-[22px] sm:text-[24px] font-bold leading-[1.15] tracking-[-0.03em] text-white group-hover:text-secondary-DEFAULT transition-colors">
          {post.title}
        </h3>

        {/* Excerpt on tablet/desktop */}
        <p className="mt-2 text-[14px] text-white/80 line-clamp-2 leading-[1.4]">
          {post.card_excerpt}
        </p>

        {/* Slide-up "DISCOVER MORE" Pill */}
        <motion.div
          layout
          className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white bg-primary px-4 py-2 rounded-full w-fit shadow-md group-hover:bg-primary-dark transition-colors"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: isHovered ? 0 : 4,
                  opacity: 1,
                }
          }
          transition={springUI}
        >
          <span>Discover More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </Link>
  );
}
