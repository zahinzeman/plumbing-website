import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "810px",
      lg: "1024px",
      desktop: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1C6BCF",
          dark: "#02449C",
          10: "rgba(28, 107, 207, 0.1)",
          20: "rgba(28, 107, 207, 0.2)",
          90: "rgba(28, 107, 207, 0.9)",
        },
        navy: "#002454",
        ink: "#071312",
        body: "#5E6870",
        muted: "#8A8A8A",
        slate: "#465B55",
        secondary: {
          DEFAULT: "#B8D7FF",
          hover: "#6BA9FA",
          pressed: "#3A75C2",
          "border-hover": "#2C82F2",
        },
        star: {
          amber: "#F0B429",
          yellow: "#F1FA00",
        },
        "footer-link-hover": "#DEEBFC",
        onblue: "rgba(2, 68, 156, 0.3)",
        hairline: {
          teal: "rgba(28, 103, 88, 0.12)",
          gray: "rgba(138, 138, 138, 0.2)",
          footer: "rgba(187, 221, 255, 0.05)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        control: "10px",
        toggle: "8px",
        icon: "12px",
        "card-sm": "14px",
        card: "16px",
        "card-lg": "24px",
        image: "32px",
      },
      maxWidth: {
        container: "1200px",
        heading: "760px",
      },
      spacing: {
        "gutter-d": "64px",
        "gutter-t": "24px",
        "gutter-m": "16px",
        "section-d": "120px",
        "section-t": "64px",
        "section-m": "48px",
        "header-d": "72px",
        "header-m": "64px",
      },
      zIndex: {
        header: "50",
      },
      transitionTimingFunction: {
        framer: "cubic-bezier(0.44, 0, 0.56, 1)",
      },
      backgroundImage: {
        "hero-fade": "linear-gradient(180deg, rgba(28, 107, 207, 0) 0%, rgba(28, 107, 207, 0.9) 48.68%, #1C6BCF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
