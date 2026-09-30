# CorePlumb — Plumbing & Handyman Marketing Site

A high-performance, pixel-perfect Next.js website rebuilt faithfully according to design specifications with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Motion (Framer Motion).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Content & Brand Editing Guide

All site content is typed and organized under `/data` for single-source-of-truth customization:

### 1. Brand Facts & Contact Details (`/data/brand.ts`)
- **Brand Name & Trademark**: `brand.name`, `brand.trademark_display`
- **Phone Number & Action**: `brand.phone_display`, `brand.phone_href`
- **Email & Address**: `brand.email`, `brand.address`
- **Rating Claims**: `brand.rating_claim`, `brand.satisfaction_claim`
- **Social Media Links**: `brand.socials` (Facebook, Instagram, X, Reddit)

### 2. Services Management (`/data/services.ts`)
- Add or modify services by editing the `services` array.
- Each service has:
  - `slug`: Defines the URL route (`/services/{slug}`)
  - `name`: Display title
  - `card_description`: Summary shown on homepage and services index cards
  - `page_description`: Meta description and detail page intro
  - `faq`: Service-specific questions and answers

### 3. Blog Articles (`/data/posts.ts`)
- Add new blog posts to the `blogPosts` array.
- Define `slug`, `title`, `published_at_display`, `reading_time`, and `card_excerpt`.
- Dynamic routes are automatically created at `/blog/{slug}` via `generateStaticParams`.

### 4. Testimonials & Marquee (`/data/testimonials.ts`)
- `row1` and `row2`: Dual-row continuous marquee reviews.
- Each review includes `author`, `role`, `stars`, and review `text`.

### 5. FAQs (`/data/faqs.ts`)
- `homeFaqs`: Homepage accordion FAQ entries with resolved question/answer pairs.
- `aboutFaqs`: About page FAQ items.

### 6. Team Members (`/data/team.ts`)
- `teamMembers`: 8 certified plumbers and staff with name, role, bio, and portrait image references.

---

## 🎨 Design System & Motion Features
- **Tailwind Tokens**: Custom primary `#1C6BCF`, dark `#02449C`, navy `#002454`, ink `#071312`, body `#5E6870`, star amber `#F0B429`.
- **Motion Primitives**:
  - `Reveal`: Scroll-triggered fade-up animations.
  - `MarqueeRow`: Continuous opposite scrolling tickers with hover ease to 90% speed.
  - `CursorFollower`: Floating `DISCOVER` badge on service card hover (disabled on touch).
  - `Accordion`: Spring height animation with independent item toggle and icon glyph swap.
  - `Header`: Dynamic scroll morphing from transparent over hero to frosted white sticky header.
  - Accessibility: Full `prefers-reduced-motion` compliance.
