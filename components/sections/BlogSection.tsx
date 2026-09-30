"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/sections/BlogCard";
import { blogPosts } from "@/data/posts";

interface BlogSectionProps {
  showHeading?: boolean;
}

export function BlogSection({ showHeading = true }: BlogSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        {showHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="OUR BLOG"
              title="Stay Up-to-Date with Plumbing Tips & Trends"
              subtitle="Helpful advice, seasonal prevention guides, and professional plumbing insights from our licensed team."
              align="center"
            />
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 0.1}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
