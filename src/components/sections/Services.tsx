"use client";

import Link from "next/link";
import { Heart, Sparkles, Plane } from "lucide-react";

const services = [
  {
    title: "Wedding Planning",
    description: "Dalla proposta al \"Sì, lo voglio\". Mi occupo di ogni dettaglio del tuo matrimonio.",
    icon: Heart,
  },
  {
    title: "Corporate Events",
    description: "Eventi aziendali che lasciano il segno. Conferenze, gala dinner, team building.",
    icon: Sparkles,
  },
  {
    title: "Destination Wedding",
    description: "Il tuo matrimonio da sogno ovunque nel mondo. Italia e oltre.",
    icon: Plane,
  },
];

export default function Services() {
  return (
    <section data-navbar-theme="light" className="py-20 px-6 bg-beige">
      <div className="text-center mb-12">
        <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-sage mb-3">
          Servizi
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-normal text-charcoal">
          Come Posso Aiutarti
        </h2>
      </div>

      <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="group bg-ivory p-10 text-center rounded-[3px] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
            >
              {/* Icon Circle */}
              <div className="w-[65px] h-[65px] mx-auto mb-5 flex items-center justify-center rounded-full border-2 border-gold bg-transparent transition-all duration-300 ease-out group-hover:bg-gold group-hover:border-gold">
                <IconComponent
                  className="w-6 h-6 text-gold transition-all duration-300 ease-out group-hover:text-white group-hover:scale-110 group-hover:rotate-12"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[1.3rem] font-serif text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-[0.8rem] leading-[1.7] text-[#666] mb-5">
                {service.description}
              </p>
              <Link
                href="/servizi"
                className="font-sans text-[0.7rem] tracking-[0.12em] uppercase text-gold hover:text-bordeaux transition-colors"
              >
                Scopri di più →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
