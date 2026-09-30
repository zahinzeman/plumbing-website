import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { EmergencyCta } from "@/components/sections/EmergencyCta";
import { blogPosts, BlogPost } from "@/data/posts";
import { brand } from "@/data/brand";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.meta_title || `${post.title} | ${brand.name}`,
    description: post.meta_description || post.card_excerpt,
  };
}

const coverImageMap: { [key: string]: string } = {
  "tankless-vs-tank-water-heaters-which-is-right-for-you":
    "/images/blog/blog-tankless-heater.jpg",
  "how-to-prevent-frozen-pipes-this-winter":
    "/images/blog/blog-frozen-pipe.jpg",
  "5-signs-you-need-a-plumber-before-it-s-too-late":
    "/images/blog/blog-under-sink.jpg",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const imageSrc = coverImageMap[post.slug] || "/images/blog/blog-under-sink.jpg";
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-white">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>
        </Reveal>

        {/* Post Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-4 text-[13px] font-bold text-primary uppercase tracking-[0.08em]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.published_at_display}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.reading_time}
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
              {post.title}
            </h1>
          </div>
        </Reveal>

        {/* Cover Image */}
        <Reveal delay={0.2} className="my-10">
          <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden shadow-xl border border-gray-100">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 840px"
            />
          </div>
        </Reveal>

        {/* Rich Article Body Content */}
        <Reveal delay={0.3}>
          <article className="prose prose-lg max-w-none text-body flex flex-col gap-6 text-left leading-[1.7] text-[16px] sm:text-[17px]">
            <p className="font-medium text-navy text-[18px] sm:text-[19px] leading-[1.6]">
              {post.card_excerpt}
            </p>

            <h2 className="text-[24px] sm:text-[28px] font-bold text-navy mt-4 mb-2">
              Understanding the Core Issues
            </h2>
            <p>
              When it comes to maintaining a home’s plumbing infrastructure, early diagnostics and preventative action are the most cost-effective investments a property owner can make. Minor drips, subtle temperature fluctuations, or slow-draining sinks frequently indicate larger underlying issues within the supply or drain-waste-vent piping.
            </p>

            <div className="p-6 rounded-[16px] bg-primary/5 border-l-4 border-primary my-4">
              <p className="font-bold text-navy text-[16px] m-0">
                Pro Tip: Never ignore unexpected pressure drops or knocking sounds behind walls. These often signify failing pressure regulators or water hammer effects that strain pipe joints.
              </p>
            </div>

            <h2 className="text-[24px] sm:text-[28px] font-bold text-navy mt-4 mb-2">
              Key Recommendations from Licensed Plumbers
            </h2>
            <p>
              Proper care begins with regular maintenance checks. Inspect accessible supply lines under kitchen sinks, laundry hookups, and bathroom fixtures at least twice a year. If your equipment is approaching the 10-to-15 year mark, consult with a licensed technician to assess replacement options before catastrophic failures occur.
            </p>

            <h3 className="text-[20px] sm:text-[22px] font-bold text-navy mt-2">
              When to Call a Professional
            </h3>
            <p>
              While clearing a simple P-trap clog can be done with basic tools, sewer camera inspections, water heater installations, gas line hookups, and main shut-off valve replacements should always be executed by certified and insured master plumbers.
            </p>
          </article>
        </Reveal>

        {/* Share & Author Footer */}
        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-primary">
              <Image
                src="/images/team/james-harlow.jpg"
                alt="James Harlow"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-bold text-navy text-sm">Written by James Harlow</p>
              <p className="text-xs text-muted">Master Plumber at {brand.name}</p>
            </div>
          </div>

          <Button href="/#home" variant="primary" icon>
            Get a Quote Today
          </Button>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-100 text-left">
            <h3 className="text-[24px] font-bold text-navy mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group p-5 rounded-[16px] border border-gray-200 bg-[#FAFAFC] hover:border-primary transition-all flex flex-col gap-2"
                >
                  <span className="text-xs font-bold text-primary uppercase">
                    {relPost.published_at_display}
                  </span>
                  <h4 className="font-bold text-navy group-hover:text-primary transition-colors text-[16px] leading-snug">
                    {relPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
