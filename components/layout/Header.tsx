"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplets, Menu, X, Phone } from "lucide-react";
import { brand } from "@/data/brand";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  forceWhite?: boolean;
}

export function Header({ forceWhite = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTransparentInitial = isHome && !forceWhite;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const showWhiteHeader = !isTransparentInitial || isScrolled;

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.44,0,0.56,1)] ${
          showWhiteHeader
            ? "bg-white/95 backdrop-blur-md border-b border-[rgba(138,138,138,0.2)] shadow-xs py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-[52px] sm:h-[56px] lg:h-[60px]">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-xl lg:text-2xl tracking-tight transition-colors focus:outline-none"
          >
            <Droplets
              className={`w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] transition-colors ${
                showWhiteHeader ? "text-primary" : "text-white"
              }`}
              strokeWidth={2.5}
            />
            <span
              className={`transition-colors ${
                showWhiteHeader ? "text-navy" : "text-white"
              }`}
            >
              {brand.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-bold tracking-normal transition-colors hover:text-primary ${
                  showWhiteHeader ? "text-navy" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Phone & CTA */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={brand.phone_href}
              className={`flex items-center gap-2 text-[14px] font-bold transition-colors hover:text-primary ${
                showWhiteHeader ? "text-navy" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{brand.phone_display}</span>
            </a>

            <Button href="/#home" variant="primary" className="!h-[40px] !px-4">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              showWhiteHeader
                ? "text-navy hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
