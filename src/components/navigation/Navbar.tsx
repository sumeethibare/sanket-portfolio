"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/data/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Performance", href: "#performance" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "SWP Guide", href: "#swp-education" },
    { label: "Scenarios", href: "#scenarios" },
    { label: "Calculator", href: "#calculator" },
    { label: "Contact", href: "#contact" },
  ];

  const handleMobileNavigation = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090D0E]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5"
          : "bg-[#090D0E]/60 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a
          href="/"
          className="group flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4E79E] rounded-xl p-1"
        >
          {/* Geometric Custom SVG Brandmark */}
          <div className="w-9 h-9 rounded-xl bg-[#141E20] border border-white/15 flex items-center justify-center text-[#D4E79E] transition-transform group-hover:scale-105">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              aria-label="Money Matters brandmark"
            >
              <title>Money Matters brandmark</title>
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-white leading-tight">
              {SITE_CONFIG.brandName}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#D4E79E]/90 uppercase">
              {SITE_CONFIG.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4E79E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 bg-[#D4E79E] hover:bg-[#c6db8b] text-[#121E0E] text-xs font-semibold px-4 py-2 rounded-xl transition-transform active:scale-95 shadow-sm font-mono tracking-wide"
          >
            <span>Try Calculator</span>
            <span className="text-sm">↗</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4E79E]"
          aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Close menu"
            >
              <title>Close menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Open menu"
            >
              <title>Open menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E0F] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleMobileNavigation(item.href)}
              className="block w-full text-left text-sm font-mono uppercase tracking-wider text-neutral-200 hover:text-[#D4E79E] py-2.5 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={() => handleMobileNavigation("#calculator")}
              className="flex items-center justify-center gap-2 w-full bg-[#D4E79E] text-[#121E0E] text-sm font-semibold py-2.5 px-4 rounded-xl cursor-pointer"
            >
              <span>Try SWP Calculator</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
