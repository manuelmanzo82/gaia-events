"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { getImpostazioni, Impostazioni, PortfolioCategoria } from "@/sanity/fetch";

function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function ParallaxImage({ src, alt, placeholder }: { src?: string; alt: string; placeholder: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffset(scrollPercent * 30 - 15);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="aspect-[4/3] overflow-hidden rounded-sm">
      <div
        className="w-full h-[120%] relative transition-transform duration-300 group-hover:scale-105"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ivory to-sage/20 flex items-center justify-center">
            <span className="text-charcoal/30 font-sans text-sm tracking-wider">{placeholder}</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface CategoryBlockProps {
  slug: string;
  data?: PortfolioCategoria;
  defaultTitle: string;
  defaultDescription: string;
  placeholder: string;
  linkText: string;
  isReversed: boolean;
  bgColor: string;
}

function CategoryBlock({ slug, data, defaultTitle, defaultDescription, placeholder, linkText, isReversed, bgColor }: CategoryBlockProps) {
  return (
    <section data-navbar-theme="light" className={`py-24 px-6 ${bgColor}`}>
      <div className="max-w-[1200px] mx-auto">
        <FadeInSection>
          <div className={`grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center ${isReversed ? "lg:grid-cols-[1fr_1.2fr]" : ""}`}>
            {/* Image */}
            <Link
              href={`/portfolio/${slug}`}
              className={`group block ${isReversed ? "lg:order-2" : ""}`}
            >
              <ParallaxImage
                src={data?.immagineCopertina}
                alt={data?.titolo || defaultTitle}
                placeholder={placeholder}
              />
            </Link>

            {/* Content */}
            <div className={isReversed ? "lg:order-1" : ""}>
              <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-serif font-light text-charcoal mb-4 leading-[1.1]">
                {data?.titolo || defaultTitle}
              </h2>
              {data?.sottotitolo && (
                <p className="font-sans text-[0.8rem] tracking-[0.2em] uppercase text-sage mb-4">
                  {data.sottotitolo}
                </p>
              )}
              <p className="text-[1.05rem] font-light leading-[1.9] text-[#555] mb-8">
                {data?.descrizione || defaultDescription}
              </p>
              <Link
                href={`/portfolio/${slug}`}
                className="inline-flex items-center gap-2 font-sans text-[0.85rem] tracking-[0.1em] uppercase text-gold hover:text-charcoal transition-colors duration-300 group/link"
              >
                {linkText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const [pageData, setPageData] = useState<Impostazioni["paginaPortfolio"] | null>(null);
  const [categorie, setCategorie] = useState<Impostazioni["portfolioCategorie"] | null>(null);

  useEffect(() => {
    getImpostazioni().then((impostazioni) => {
      if (impostazioni?.paginaPortfolio) {
        setPageData(impostazioni.paginaPortfolio);
      }
      if (impostazioni?.portfolioCategorie) {
        setCategorie(impostazioni.portfolioCategorie);
      }
    });
  }, []);

  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="dark" className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          {pageData?.heroImmagine ? (
            <Image
              src={pageData.heroImmagine}
              alt="Portfolio Hero"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 font-sans text-sm tracking-wider">
                HERO IMAGE
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/70" />
        <div className="relative z-10 text-center px-6">
          <p className="font-sans text-[0.8rem] tracking-[0.35em] uppercase text-gold mb-4">
            Portfolio
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-serif font-light text-white leading-[1.1] mb-4">
            {pageData?.heroTitolo || "Portfolio"}
          </h1>
          <p className="font-sans text-[1.1rem] font-light text-white/80 max-w-[500px] mx-auto">
            {pageData?.heroSottotitolo || "Storie ed Emozioni"}
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1.4rem] h-[2.2rem] border-2 border-white/50 rounded-full flex justify-center pt-1.5">
            <span className="w-[3px] h-[7px] bg-gold rounded-sm" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section data-navbar-theme="light" className="py-20 px-6 bg-ivory">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <p className="text-[1.2rem] md:text-[1.4rem] font-serif font-light leading-[1.8] text-charcoal italic">
              {pageData?.introTesto ||
                "Ogni evento racconta una storia unica. Scoprite alcuni dei momenti magici che ho avuto il privilegio di creare insieme a chi ha riposto in me la propria fiducia."}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Wedding */}
      <CategoryBlock
        slug="wedding"
        data={categorie?.wedding}
        defaultTitle="Wedding"
        defaultDescription="Matrimoni indimenticabili, curati in ogni dettaglio. Dal primo incontro fino all'ultimo ballo, trasformo il vostro sogno in realtà."
        placeholder="WEDDING PHOTO"
        linkText="Scopri i matrimoni"
        isReversed={false}
        bgColor="bg-beige"
      />

      {/* Corporate */}
      <CategoryBlock
        slug="corporate"
        data={categorie?.corporate}
        defaultTitle="Corporate"
        defaultDescription="Eventi aziendali che lasciano il segno. Conference, gala dinner, team building e celebrazioni corporate con un tocco di eleganza."
        placeholder="CORPORATE PHOTO"
        linkText="Scopri gli eventi"
        isReversed={true}
        bgColor="bg-ivory"
      />

      {/* Celebrations */}
      <CategoryBlock
        slug="celebrations"
        data={categorie?.celebrations}
        defaultTitle="Celebrations"
        defaultDescription="Feste private, compleanni speciali, battesimi e anniversari. Ogni celebrazione merita di essere indimenticabile."
        placeholder="CELEBRATIONS PHOTO"
        linkText="Scopri le feste"
        isReversed={false}
        bgColor="bg-beige"
      />

      {/* CTA */}
      <section data-navbar-theme="dark" className="py-24 px-6 bg-sage">
        <div className="max-w-[700px] mx-auto text-center">
          <FadeInSection>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-ivory mb-6">
              Vuoi Vedere il Tuo Evento Qui?
            </h2>
            <p className="text-[1rem] font-light leading-[1.8] text-ivory/80 mb-10">
              Contattami per iniziare a pianificare il tuo evento da sogno.
              Insieme creeremo qualcosa di indimenticabile.
            </p>
            <Link
              href="/contatti"
              className="inline-block px-10 py-4 bg-gold text-charcoal font-sans text-[0.85rem] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-ivory"
            >
              Iniziamo Insieme
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
