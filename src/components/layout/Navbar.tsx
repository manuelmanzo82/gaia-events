"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";

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
  const [navTheme, setNavTheme] = useState<"light" | "dark">("dark");
  const [menuTheme, setMenuTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("menuTheme") as "light" | "dark" | null;
    if (saved) setMenuTheme(saved);
  }, []);

  const toggleMenuTheme = () => {
    const newTheme = menuTheme === "light" ? "dark" : "light";
    setMenuTheme(newTheme);
    localStorage.setItem("menuTheme", newTheme);
  };

  // Function to check and update navbar theme based on current scroll position
  const updateNavTheme = useCallback(() => {
    const navbarHeight = 112;
    const sections = document.querySelectorAll("[data-navbar-theme]");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
        const sectionTheme = section.getAttribute("data-navbar-theme") as "light" | "dark";
        setNavTheme(sectionTheme);
      }
    });
  }, []);

  // Reinitialize observer when pathname changes (client-side navigation)
  useEffect(() => {
    // Small delay to let the new page content render
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("[data-navbar-theme]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              if (rect.top <= 112 && rect.bottom > 112) {
                const sectionTheme = entry.target.getAttribute("data-navbar-theme") as "light" | "dark";
                setNavTheme(sectionTheme);
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

      // Also add scroll listener for more reliable updates
      window.addEventListener("scroll", updateNavTheme);

      // Initial check
      updateNavTheme();

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", updateNavTheme);
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname, updateNavTheme]);

  const isDark = navTheme === "dark";
  const textColor = isDark ? "text-ivory" : "text-charcoal";
  const textHoverColor = isDark ? "hover:text-gold" : "hover:text-gold";

  // Menu theme colors
  const isMenuDark = menuTheme === "dark";
  const menuBg = isMenuDark ? "bg-charcoal" : "bg-ivory";
  const menuText = isMenuDark ? "text-ivory" : "text-charcoal";
  const menuTextMuted = isMenuDark ? "text-ivory/60" : "text-charcoal/60";
  const toggleBg = isMenuDark ? "bg-charcoal/50" : "bg-beige";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pt-6 lg:pt-10">
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
                  className="h-[80px] lg:h-[130px] w-auto object-contain transition-all duration-300"
                  style={{
                    filter: mobileMenuOpen
                      ? (isMenuDark ? "brightness(0) invert(1)" : "none")
                      : (isDark ? "brightness(0) invert(1)" : "none"),
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
                  className={`font-sans text-[0.8rem] tracking-[0.12em] uppercase transition-colors duration-300 ${textColor} ${textHoverColor}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden font-sans text-[0.65rem] tracking-[0.15em] uppercase px-4 py-2 border bg-transparent transition-all duration-300 ${
                mobileMenuOpen
                  ? `${menuText} ${isMenuDark ? "border-ivory" : "border-charcoal"}`
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
        className={`fixed inset-0 ${menuBg} z-40 flex items-center justify-center transition-all duration-400 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="text-center p-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block font-serif text-3xl ${menuText} py-3 hover:text-gold transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contatti"
            className={`inline-block w-full font-sans text-[0.75rem] tracking-[0.18em] uppercase px-8 py-4 mt-8 bg-gold text-charcoal ${isMenuDark ? "hover:bg-ivory" : "hover:bg-white"} transition-all`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Richiedi Preventivo
          </Link>

          {/* Theme Toggle */}
          <div className="mt-8">
            <button
              onClick={toggleMenuTheme}
              className="group flex items-center justify-center gap-4 mx-auto transition-all duration-300"
              aria-label="Toggle menu theme"
            >
              <div className={`relative w-14 h-7 ${toggleBg} rounded-full border border-gold transition-colors duration-300`}>
                <div
                  className={`absolute top-0.5 w-6 h-6 rounded-full bg-gold shadow-md transition-all duration-300 ease-out flex items-center justify-center ${
                    isMenuDark ? "left-7" : "left-0.5"
                  }`}
                >
                  {!isMenuDark ? (
                    <Sun className="w-4 h-4 text-charcoal" />
                  ) : (
                    <Moon className="w-4 h-4 text-charcoal" />
                  )}
                </div>
              </div>
            </button>
            <p className={`font-serif text-sm ${menuTextMuted} mt-3 italic`}>
              {isMenuDark ? "Tema scuro" : "Tema chiaro"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
