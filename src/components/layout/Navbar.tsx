"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Chi Sono", href: "/chi-sono" },
  { name: "Servizi", href: "/servizi" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Dicono di Me", href: "/dicono-di-me" },
  { name: "Contatti", href: "/contatti" },
];

interface NavbarProps {
  logo?: string;
  siteName?: string;
}

export default function Navbar({ logo, siteName = "GAIA EVENTS" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-navbar-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            if (rect.top <= 112 && rect.bottom > 112) {
              const sectionTheme = entry.target.getAttribute("data-navbar-theme") as "light" | "dark";
              setTheme(sectionTheme);
            }
          }
        });
      },
      {
        rootMargin: "-112px 0px -100% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const navbarHeight = 112;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          const sectionTheme = section.getAttribute("data-navbar-theme") as "light" | "dark";
          setTheme(sectionTheme);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDark = theme === "dark";
  const textColor = isDark ? "text-ivory" : "text-charcoal";
  const textHoverColor = isDark ? "hover:text-gold" : "hover:text-gold";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pt-2 lg:pt-4">
        <nav className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {logo ? (
                <Image
                  src={logo}
                  alt={siteName}
                  width={300}
                  height={100}
                  className="h-[60px] lg:h-[100px] w-auto object-contain transition-all duration-300"
                  style={{
                    filter: mobileMenuOpen ? "none" : (isDark ? "brightness(0) invert(1)" : "none"),
                  }}
                  priority
                />
              ) : (
                <span
                  className={`font-serif text-[1.4rem] font-medium tracking-[0.12em] transition-colors duration-300 ${
                    mobileMenuOpen ? "text-charcoal" : textColor
                  }`}
                >
                  {siteName}
                </span>
              )}
            </Link>

            {/* Desktop Navigation - aligned to middle of logo */}
            <div className="hidden lg:flex items-center gap-9">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-sans text-[0.7rem] tracking-[0.12em] uppercase transition-colors duration-300 ${textColor} ${textHoverColor}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden font-sans text-[0.65rem] tracking-[0.15em] uppercase px-4 py-2 border bg-transparent transition-all duration-300 ${
                mobileMenuOpen
                  ? "text-charcoal border-charcoal"
                  : `${textColor} ${isDark ? "border-ivory" : "border-charcoal"}`
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? "Chiudi" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-ivory z-40 flex items-center justify-center transition-all duration-400 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="text-center p-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block font-serif text-3xl text-charcoal py-3 hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="inline-block mt-8 w-full font-sans text-[0.75rem] tracking-[0.18em] uppercase px-8 py-4 bg-gold text-charcoal hover:bg-white transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Richiedi Preventivo
          </Link>
        </div>
      </div>
    </>
  );
}
