export interface BlogPost {
  slug: string;
  route?: string;
  title: string;
  date?: string;
  published_at_display?: string;
  date_iso?: string;
  reading_time?: string;
  excerpt?: string;
  card_excerpt?: string;
  meta_title?: string;
  meta_description?: string;
  cover_image?: {
    subject?: string;
    aspect_ratio?: string;
    treatment?: string;
    generation_prompt?: string;
  };
  body_outline?: any;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tankless-vs-tank-water-heaters-which-is-right-for-you",
    route: "/blog/tankless-vs-tank-water-heaters-which-is-right-for-you",
    title: "Tankless vs Tank Water Heaters: Which Is Right for You?",
    date: "June 24, 2026",
    published_at_display: "June 24, 2026",
    date_iso: "2026-06-24",
    reading_time: "5 min read",
    excerpt:
      "Tankless vs tank water heaters compared — cost, efficiency, lifespan, and space. Find out which type is the right fit for your home and budget.",
    card_excerpt:
      "Tankless vs tank water heaters compared — cost, efficiency, lifespan, and space. Find out which type is the right fit for your home and budget.",
    meta_title: "Tankless vs Tank Water Heaters: Which Is Right for You? | CorePlumb",
    meta_description:
      "Compare tankless and tank water heaters on cost, energy efficiency, installation, and lifespan.",
  },
  {
    slug: "how-to-prevent-frozen-pipes-this-winter",
    route: "/blog/how-to-prevent-frozen-pipes-this-winter",
    title: "How to Prevent Frozen Pipes This Winter",
    date: "June 24, 2026",
    published_at_display: "June 24, 2026",
    date_iso: "2026-06-24",
    reading_time: "4 min read",
    excerpt:
      "Essential cold-weather steps every homeowner should take before sub-zero temperatures hit. Prevent bursts, leaks, and costly winter emergencies.",
    card_excerpt:
      "Essential cold-weather steps every homeowner should take before sub-zero temperatures hit. Prevent bursts, leaks, and costly winter emergencies.",
    meta_title: "How to Prevent Frozen Pipes This Winter | CorePlumb",
    meta_description:
      "Prevent frozen pipes this winter with our licensed plumber guide on pipe insulation, trickle taps, and thermostat tips.",
  },
  {
    slug: "5-signs-you-need-a-plumber-before-it-s-too-late",
    route: "/blog/5-signs-you-need-a-plumber-before-it-s-too-late",
    title: "5 Signs You Need a Plumber Before It's Too Late",
    date: "June 24, 2026",
    published_at_display: "June 24, 2026",
    date_iso: "2026-06-24",
    reading_time: "4 min read",
    excerpt:
      "Don't ignore subtle signs of plumbing failure. Slow drains, low pressure, knocking pipes, foul odors, and damp spots signal serious trouble.",
    card_excerpt:
      "Don't ignore subtle signs of plumbing failure. Slow drains, low pressure, knocking pipes, foul odors, and damp spots signal serious trouble.",
    meta_title: "5 Signs You Need a Plumber Before It's Too Late | CorePlumb",
    meta_description:
      "Learn the 5 critical warning signs that mean you need a licensed plumber before small leaks turn into major water damage.",
  },
];
