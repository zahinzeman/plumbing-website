import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/data/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Expert licensed plumbing and handyman services in the USA. Fast 24/7 emergency dispatch, drain cleaning, water heater installation, and repairs.",
  keywords: [
    "plumber",
    "plumbing services",
    "emergency plumber",
    "drain cleaning",
    "water heater repair",
    "pipe installation",
    "handyman",
  ],
  authors: [{ name: brand.name }],
  metadataBase: new URL("https://coreplumb.com"),
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Expert licensed plumbing and handyman services. 24/7 emergency response, upfront pricing, 100% satisfaction guarantee.",
    siteName: brand.name,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C6BCF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
