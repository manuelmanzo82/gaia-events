"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useParams, notFound } from "next/navigation";
import { getEventiByMacroCategoria, getImpostazioni, Evento, Impostazioni, MacroCategoria } from "@/sanity/fetch";

const validCategorie: MacroCategoria[] = ["wedding", "corporate", "celebrations"];

const categoryConfig: Record<MacroCategoria, { title: string; subtitle?: string }> = {
  wedding: { title: "Wedding" },
  corporate: { title: "Corporate" },
  celebrations: { title: "Celebrations", subtitle: "Party, compleanni, battesimi, anniversari" },
};

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

function ParallaxImage({ src, alt, placeholder }: { src?: string; alt: string; placeholder?: string }) {
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
            <span className="text-charcoal/30 font-sans text-sm tracking-wider">{placeholder || "EVENT PHOTO"}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CategoriaPage() {
  const params = useParams();
  const categoria = params?.categoria as string;

  const [eventi, setEventi] = useState<Evento[]>([]);
  const [categoryData, setCategoryData] = useState<Impostazioni["portfolioCategorie"]>();
  const [loading, setLoading] = useState(true);

  // Validate categoria
  const isValidCategoria = validCategorie.includes(categoria as MacroCategoria);

  useEffect(() => {
    if (!isValidCategoria) {
      setLoading(false);
      return;
    }

    Promise.all([
      getEventiByMacroCategoria(categoria as MacroCategoria),
      getImpostazioni()
    ]).then(([eventiData, impostazioni]) => {
      setEventi(eventiData);
      if (impostazioni?.portfolioCategorie) {
        setCategoryData(impostazioni.portfolioCategorie);
      }
      setLoading(false);
    });
  }, [categoria, isValidCategoria]);

  if (!isValidCategoria && !loading) {
    notFound();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const currentCategory = categoryData?.[categoria as MacroCategoria];
  const config = categoryConfig[categoria as MacroCategoria];

  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="dark" className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          {currentCategory?.immagineHero ? (
            <Image
              src={currentCategory.immagineHero}
              alt={config.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 font-sans text-sm tracking-wider">
                {config.title.toUpperCase()} HERO
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/30" />

        {/* Back Link */}
        <Link
          href="/portfolio"
          className="absolute top-28 left-6 md:left-12 z-20 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
        >
          <ArrowLeft className="w-4 h-4" />
          Portfolio
        </Link>

        {/* Content */}
        <div className="relative z-10 w-full px-6 pb-16 md:px-12">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="font-sans text-[0.8rem] tracking-[0.35em] uppercase text-gold mb-4">
              Portfolio
            </p>
            <h1 className="text-[clamp(3rem,8vw,5rem)] font-serif font-light text-white leading-[1.1] mb-4">
              {currentCategory?.titolo || config.title}
            </h1>
            {config.subtitle && (
              <p className="font-sans text-[1rem] font-light text-white/70">
                {config.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Events List */}
      {eventi.length > 0 ? (
        eventi.map((evento, index) => {
          const isEven = index % 2 === 0;
          const bgColor = isEven ? "bg-ivory" : "bg-beige";

          return (
            <section
              key={evento._id}
              data-navbar-theme="light"
              className={`py-24 px-6 ${bgColor}`}
            >
              <div className="max-w-[1200px] mx-auto">
                <FadeInSection>
                  <div className={`grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-cols-[1fr_1.2fr]" : ""}`}>
                    {/* Image */}
                    <Link
                      href={`/portfolio/${categoria}/${evento.slug?.current}`}
                      className={`group block ${!isEven ? "lg:order-2" : ""}`}
                    >
                      <ParallaxImage
                        src={evento.immagineCopertina}
                        alt={evento.titolo}
                      />
                    </Link>

                    {/* Content */}
                    <div className={!isEven ? "lg:order-1" : ""}>
                      {evento.categoria && (
                        <p className="font-sans text-[0.7rem] tracking-[0.25em] uppercase text-gold mb-4">
                          {evento.categoria}
                        </p>
                      )}
                      <h2 className="text-[clamp(2rem,5vw,3rem)] font-serif font-light text-charcoal mb-3 leading-[1.2]">
                        {evento.titolo}
                      </h2>
                      <p className="font-sans text-[0.95rem] text-sage mb-4">
                        {evento.location}
                      </p>
                      {evento.descrizioneBreve && (
                        <p className="text-[1rem] font-light leading-[1.8] text-[#555] mb-8">
                          {evento.descrizioneBreve}
                        </p>
                      )}
                      <Link
                        href={`/portfolio/${categoria}/${evento.slug?.current}`}
                        className="inline-flex items-center gap-2 font-sans text-[0.85rem] tracking-[0.1em] uppercase text-gold hover:text-charcoal transition-colors duration-300 group/link"
                      >
                        Scopri la storia
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </section>
          );
        })
      ) : (
        <section data-navbar-theme="light" className="py-24 px-6 bg-ivory">
          <div className="max-w-[800px] mx-auto text-center">
            <FadeInSection>
              <p className="text-charcoal/60 font-sans text-lg">
                Gli eventi di questa categoria saranno presto disponibili...
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 mt-8 font-sans text-[0.85rem] tracking-[0.1em] uppercase text-gold hover:text-charcoal transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna al Portfolio
              </Link>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section data-navbar-theme="dark" className="py-24 px-6 bg-sage">
        <div className="max-w-[700px] mx-auto text-center">
          <FadeInSection>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-ivory mb-6">
              Vuoi Vedere il Tuo Evento Qui?
            </h2>
            <p className="text-[1rem] font-light leading-[1.8] text-ivory/80 mb-10">
              Contattami per iniziare a pianificare il tuo evento da sogno.
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
