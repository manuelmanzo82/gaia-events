"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Heart, Sparkles, Star, Crown } from "lucide-react";
import { getImpostazioni, Impostazioni } from "@/sanity/fetch";
import { Stats, CTA } from "@/components/sections";

const iconMap: Record<string, React.ComponentType<any>> = {
  heart: Heart,
  sparkles: Sparkles,
  star: Star,
  crown: Crown,
};

const defaultValori = [
  { titolo: "Eleganza", descrizione: "Ogni dettaglio curato con raffinatezza e gusto impeccabile", icona: "crown" },
  { titolo: "Passione", descrizione: "Dedizione totale per trasformare i vostri sogni in realtà", icona: "heart" },
  { titolo: "Eccellenza", descrizione: "Standard qualitativi elevati in ogni aspetto del servizio", icona: "star" },
  { titolo: "Creatività", descrizione: "Soluzioni uniche e personalizzate per ogni coppia", icona: "sparkles" },
];

const defaultTimeline = [
  { anno: "2014", titolo: "L'Inizio del Viaggio", descrizione: "Ho organizzato il mio primo matrimonio per una cara amica, scoprendo la mia vera passione." },
  { anno: "2016", titolo: "Prima Collaborazione Corporate", descrizione: "Calzedonia mi affida l'organizzazione del primo grande evento aziendale." },
  { anno: "2018", titolo: "Destination Weddings", descrizione: "Espando i servizi ai matrimoni all'estero, dalla Toscana alla Costiera Amalfitana." },
  { anno: "2022", titolo: "150+ Eventi", descrizione: "Raggiungo il traguardo di oltre 150 eventi organizzati con successo." },
];

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

export default function ChiSonoPage() {
  const [data, setData] = useState<Impostazioni["paginaChiSono"] | null>(null);
  const [statistiche, setStatistiche] = useState<Impostazioni["statistiche"] | undefined>(undefined);

  useEffect(() => {
    getImpostazioni().then((impostazioni) => {
      if (impostazioni?.paginaChiSono) {
        setData(impostazioni.paginaChiSono);
      }
      if (impostazioni?.statistiche) {
        setStatistiche(impostazioni.statistiche);
      }
    });
  }, []);

  const valori = data?.valori?.length ? data.valori : defaultValori;
  const timeline = data?.timeline?.length ? data.timeline : defaultTimeline;

  return (
    <>
      {/* 1. HERO SECTION */}
      <section data-navbar-theme="dark" className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          {data?.heroImmagine ? (
            <Image
              src={data.heroImmagine}
              alt="Chi Sono Hero"
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
            La Mia Storia
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-serif font-light text-white leading-[1.1] mb-4">
            {data?.heroTitolo || "Chi Sono"}
          </h1>
          <p className="font-sans text-[1.1rem] font-light text-white/80 max-w-[500px] mx-auto">
            {data?.heroSottotitolo || "La mia storia, la mia passione"}
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1.4rem] h-[2.2rem] border-2 border-white/50 rounded-full flex justify-center pt-1.5">
            <span className="w-[3px] h-[7px] bg-gold rounded-sm" />
          </div>
        </div>
      </section>

      {/* 2. CIAO SONO GAIA - Centered, no photo, italic title */}
      <section data-navbar-theme="light" className="pt-14 pb-24 px-6 bg-ivory">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-serif font-light text-charcoal italic mb-10">
              {data?.biografiaTitolo || "Ciao, sono Gaia"}
            </h2>

            <div className="space-y-6">
              <p className="text-[1.05rem] font-light leading-[2] text-[#555]">
                {data?.biografiaTesto1 ||
                  "Da oltre dieci anni dedico la mia vita alla realizzazione di matrimoni da sogno. La mia storia con gli eventi è iniziata quasi per caso, organizzando il matrimonio di una cara amica, e da quel momento ho capito che questa era la mia vocazione."}
              </p>

              <p className="text-[1.05rem] font-light leading-[2] text-[#555]">
                {data?.biografiaTesto2 ||
                  "Ogni coppia che incontro porta con sé una storia unica, sogni e desideri che meritano di essere ascoltati e realizzati. Il mio approccio è basato sull'ascolto attento e sulla comprensione profonda di ciò che rende speciale ogni storia d'amore."}
              </p>

              <p className="text-[1.05rem] font-light leading-[2] text-[#555]">
                {data?.biografiaTesto3 ||
                  "Roma, con la sua bellezza senza tempo, è la cornice perfetta per i matrimoni che organizzo. Ma la mia esperienza si estende ben oltre i confini della città eterna, abbracciando location mozzafiato in tutta Italia e all'estero."}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 3. LA MIA EVOLUZIONE - Timeline */}
      <section data-navbar-theme="light" className="py-24 px-6 bg-beige">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-sage mb-3">
                La Mia Evoluzione
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-normal text-charcoal">
                Il Mio Percorso
              </h2>
            </div>
          </FadeInSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gold/30" />

            {timeline.map((item, index) => (
              <FadeInSection key={index} className="h-full">
                <div className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <span className="font-serif text-[2rem] text-gold font-light">{item.anno}</span>
                    <h3 className="text-[1.3rem] font-serif text-charcoal mt-2 mb-2">
                      {item.titolo}
                    </h3>
                    <p className="font-sans text-[0.9rem] leading-[1.7] text-[#666]">
                      {item.descrizione}
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-beige" />
                  <div className="hidden md:block flex-1" />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CITAZIONE */}
      <section data-navbar-theme="light" className="py-20 px-6 bg-ivory">
        <FadeInSection>
          <div className="max-w-[800px] mx-auto text-center">
            <div className="relative">
              <svg className="w-12 h-12 text-gold/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-[1.4rem] md:text-[1.8rem] font-serif font-light leading-[1.6] text-charcoal italic">
                {data?.citazione ||
                  "Ogni matrimonio è una storia d'amore unica che merita di essere raccontata con eleganza e passione. Il mio compito è trasformare i vostri sogni in ricordi indimenticabili."}
              </p>
              <div className="w-16 h-[2px] bg-gold mx-auto mt-8" />
              <p className="font-sans text-[0.85rem] tracking-[0.15em] uppercase text-sage mt-4">
                — Gaia
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* 5. LA MIA FILOSOFIA - Values */}
      <section data-navbar-theme="light" className="py-24 px-6 bg-beige">
        <div className="max-w-[1100px] mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-sage mb-3">
                Cosa Mi Guida
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-normal text-charcoal">
                La Mia Filosofia
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {valori.map((valore, index) => {
              const IconComponent = iconMap[valore.icona || "star"] || Star;
              return (
                <FadeInSection key={index} className="h-full">
                  <div className="group bg-ivory p-8 text-center rounded-[3px] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] h-full flex flex-col justify-center">
                    <div className="w-[70px] h-[70px] mx-auto mb-5 flex items-center justify-center rounded-full border-2 border-gold bg-transparent transition-all duration-300 ease-out group-hover:bg-gold group-hover:border-gold">
                      <IconComponent
                        className="w-7 h-7 text-gold transition-all duration-300 ease-out group-hover:text-white group-hover:scale-110 group-hover:rotate-12"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-[1.2rem] font-serif text-charcoal mb-3">
                      {valore.titolo}
                    </h3>
                    <p className="font-sans text-[0.85rem] leading-[1.7] text-[#666]">
                      {valore.descrizione}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. STATISTICHE - Dark variant */}
      <Stats statistiche={statistiche} variant="light" />

      {/* 7. CTA - Same as homepage */}
      <CTA />
    </>
  );
}
