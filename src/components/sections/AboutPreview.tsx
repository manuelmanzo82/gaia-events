import Link from "next/link";

export default function AboutPreview() {
  return (
    <section data-navbar-theme="light" className="py-20 px-6">
      <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16 items-center">
        {/* Image with Gold Border */}
        <div className="relative">
          <div className="aspect-[4/5] bg-beige rounded-[3px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-charcoal/30 font-sans text-sm tracking-wider">
                FOTO GAIA
              </span>
            </div>
          </div>
          {/* Gold Border Frame */}
          <div className="absolute top-[15px] left-[15px] right-[-15px] bottom-[-15px] border-2 border-gold rounded-[3px] -z-10" />
        </div>

        {/* Content */}
        <div className="text-left">
          <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-sage mb-3">
            Chi Sono
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-normal text-charcoal mb-5">
            Ciao, sono Gaia
          </h2>
          <p className="text-[1.05rem] font-light leading-[1.85] text-[#555] mb-6">
            Da oltre 8 anni trasformo i sogni in eventi indimenticabili.
            Ho avuto l&apos;onore di lavorare con brand prestigiosi come{" "}
            <span className="text-bordeaux font-normal">Calzedonia</span>,{" "}
            <span className="text-bordeaux font-normal">BNL</span> e{" "}
            <span className="text-bordeaux font-normal">Zurich</span>,
            portando la stessa cura e attenzione ai dettagli in ogni matrimonio.
          </p>
          <p className="text-[1.05rem] font-light leading-[1.85] text-[#555] mb-6">
            Il mio obiettivo è rendere il vostro giorno speciale unico e senza stress,
            curando ogni dettaglio con passione e professionalità.
          </p>
          <Link
            href="/chi-sono"
            className="inline-flex items-center gap-2.5 font-sans text-[0.75rem] tracking-[0.12em] uppercase text-gold hover:gap-4 transition-all"
          >
            Scopri la mia storia
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
