"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Calendar, Users, Palette, Plane, ArrowRight } from "lucide-react";
import { getImpostazioni, Impostazioni } from "@/sanity/fetch";
import { Stats } from "@/components/sections";

const iconMap: Record<string, React.ComponentType<any>> = {
  calendar: Calendar,
  users: Users,
  palette: Palette,
  plane: Plane,
};

const services = [
  {
    id: "planning",
    title: "Wedding Planning Completo",
    subtitle: "Il percorso completo verso il vostro giorno perfetto",
    description:
      "Un servizio a 360 gradi che vi accompagna dalla prima idea fino all'ultimo ballo. Mi occupo di ogni aspetto dell'organizzazione, permettendovi di vivere il periodo del fidanzamento senza stress.",
    features: [
      "Consulenza iniziale e definizione del concept",
      "Ricerca e selezione delle location",
      "Gestione budget e contratti fornitori",
      "Coordinamento catering, fiori, musica",
      "Design personalizzato degli allestimenti",
      "Gestione inviti e RSVP",
      "Timeline dettagliata della giornata",
      "Coordinamento completo il giorno del matrimonio",
    ],
    icon: "calendar",
    image: "PLANNING IMAGE",
  },
  {
    id: "coordinamento",
    title: "Coordinamento del Giorno",
    subtitle: "Per chi vuole godersi ogni momento senza pensieri",
    description:
      "Avete già organizzato tutto ma desiderate un professionista che gestisca la giornata? Questo servizio è pensato per garantire che tutto proceda perfettamente mentre voi vi godete ogni istante.",
    features: [
      "Incontri pre-matrimonio per conoscere i dettagli",
      "Verifica e coordinamento con tutti i fornitori",
      "Gestione della timeline",
      "Supervisione allestimenti",
      "Punto di riferimento per ospiti e fornitori",
      "Gestione imprevisti",
      "Presenza dal setup alla chiusura",
    ],
    icon: "users",
    image: "COORDINATION IMAGE",
  },
  {
    id: "design",
    title: "Design & Styling",
    subtitle: "Trasformare gli spazi in scenografie da sogno",
    description:
      "La bellezza sta nei dettagli. Creo concept unici e allestimenti che trasformano qualsiasi location in uno spazio magico, riflettendo la vostra personalità e il vostro stile.",
    features: [
      "Creazione mood board e concept visivo",
      "Progettazione allestimenti personalizzati",
      "Selezione palette colori e materiali",
      "Coordinamento con fioristi e fornitori",
      "Styling tavoli e aree cerimonia",
      "Elementi decorativi personalizzati",
      "Supervisione montaggio e smontaggio",
    ],
    icon: "palette",
    image: "DESIGN IMAGE",
  },
  {
    id: "destination",
    title: "Destination Wedding",
    subtitle: "Il vostro matrimonio da sogno, ovunque nel mondo",
    description:
      "Sognate un matrimonio in una location lontana da casa? Organizzo destination wedding in tutta Italia e all'estero, gestendo ogni aspetto logistico con la stessa cura di un evento locale.",
    features: [
      "Ricerca location esclusive",
      "Gestione logistica viaggi e alloggi",
      "Selezione e coordinamento fornitori locali",
      "Supporto burocratico e permessi",
      "Organizzazione attività per gli ospiti",
      "Welcome dinner e farewell brunch",
      "Presenza in loco per tutto il soggiorno",
    ],
    icon: "plane",
    image: "DESTINATION IMAGE",
  },
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
        className="w-full h-[120%] relative transition-transform duration-100"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ivory to-sage/20 flex items-center justify-center">
            <span className="text-charcoal/30 font-sans text-sm tracking-wider">{placeholder}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServiziPage() {
  const [data, setData] = useState<Impostazioni["paginaServizi"] | null>(null);
  const [statistiche, setStatistiche] = useState<Impostazioni["statistiche"] | undefined>(undefined);

  useEffect(() => {
    getImpostazioni().then((impostazioni) => {
      if (impostazioni?.paginaServizi) {
        setData(impostazioni.paginaServizi);
      }
      if (impostazioni?.statistiche) {
        setStatistiche(impostazioni.statistiche);
      }
    });
  }, []);

  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="dark" className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          {data?.heroImmagine ? (
            <Image
              src={data.heroImmagine}
              alt="Servizi Hero"
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
            Servizi
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-serif font-light text-white leading-[1.1] mb-4">
            {data?.heroTitolo || "I Miei Servizi"}
          </h1>
          <p className="font-sans text-[1.1rem] font-light text-white/80 max-w-[500px] mx-auto">
            {data?.heroSottotitolo || "Soluzioni su misura per ogni esigenza"}
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
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-charcoal italic mb-8">
              Ogni coppia è unica
            </h2>
            <p className="text-[1.05rem] font-light leading-[2] text-[#555]">
              {data?.introTesto ||
                "E così deve essere anche l'approccio al vostro matrimonio. Scoprite i servizi pensati per accompagnarvi verso il giorno più bello della vostra vita. Che desideriate un supporto completo o solo una guida esperta per il grande giorno, troveremo insieme la soluzione perfetta per voi."}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Calendar;
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-beige" : "bg-ivory";

        return (
          <div key={service.id}>
            <section
              data-navbar-theme="light"
              id={service.id}
              className={`py-24 px-6 ${bgColor}`}
            >
              <div className="max-w-[1200px] mx-auto">
                <FadeInSection>
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div className={!isEven ? "lg:order-2" : ""}>
                      <ParallaxImage placeholder={service.image} alt={service.title} />
                    </div>

                    {/* Content */}
                    <div className={!isEven ? "lg:order-1" : ""}>
                      <div className="group w-[70px] h-[70px] mb-6 flex items-center justify-center rounded-full border-2 border-gold bg-transparent transition-all duration-300 ease-out hover:bg-gold">
                        <IconComponent
                          className="w-7 h-7 text-gold transition-all duration-300 ease-out group-hover:text-white group-hover:scale-110"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-sage mb-3">
                        {service.subtitle}
                      </p>
                      <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-normal text-charcoal mb-4">
                        {service.title}
                      </h2>
                      <p className="text-[1rem] font-light leading-[1.8] text-[#555] mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gold mr-3 mt-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-[#666] text-[0.9rem]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/contatti?servizio=${service.id}`}
                        className="inline-flex items-center gap-2 font-sans text-[0.85rem] tracking-[0.1em] uppercase text-gold hover:text-charcoal transition-colors duration-300 group/link"
                      >
                        Scopri di più
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </section>

            {/* Quote after second service */}
            {index === 1 && (
              <section data-navbar-theme="light" className="py-20 px-6 bg-ivory">
                <FadeInSection>
                  <div className="max-w-[800px] mx-auto text-center">
                    <div className="relative">
                      <svg className="w-12 h-12 text-gold/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      <p className="text-[1.4rem] md:text-[1.8rem] font-serif font-light leading-[1.6] text-charcoal italic">
                        {data?.citazione ||
                          "Il mio obiettivo è trasformare la vostra visione in realtà, curando ogni dettaglio con passione e dedizione per creare un giorno che superi ogni aspettativa."}
                      </p>
                      <div className="w-16 h-[2px] bg-gold mx-auto mt-8" />
                      <p className="font-sans text-[0.85rem] tracking-[0.15em] uppercase text-sage mt-4">
                        — Gaia
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              </section>
            )}
          </div>
        );
      })}

      {/* Stats */}
      <Stats statistiche={statistiche} variant="light" />

      {/* CTA */}
      <section data-navbar-theme="dark" className="py-24 px-6 bg-sage">
        <div className="max-w-[700px] mx-auto text-center">
          <FadeInSection>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-ivory mb-6">
              Non Sai Quale Servizio Fa per Te?
            </h2>
            <p className="text-[1rem] font-light leading-[1.8] text-ivory/80 mb-10">
              Contattami per una consulenza gratuita. Insieme troveremo la
              soluzione perfetta per le vostre esigenze.
            </p>
            <Link
              href="/contatti"
              className="inline-block px-10 py-4 bg-gold text-charcoal font-sans text-[0.85rem] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-ivory"
            >
              Parliamone Insieme
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
