import Link from "next/link";

const services = [
  {
    title: "Wedding Planning",
    description: "Dalla proposta al \"Sì, lo voglio\". Mi occupo di ogni dettaglio del tuo matrimonio.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    title: "Corporate Events",
    description: "Eventi aziendali che lasciano il segno. Conferenze, gala dinner, team building.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/>
      </svg>
    ),
  },
  {
    title: "Destination Wedding",
    description: "Il tuo matrimonio da sogno ovunque nel mondo. Italia e oltre.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
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
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-ivory p-10 text-center rounded-[3px] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
          >
            {/* Icon Circle */}
            <div className="w-[65px] h-[65px] mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#d4b878] text-white">
              {service.icon}
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
        ))}
      </div>
    </section>
  );
}
