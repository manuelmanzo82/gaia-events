import Link from "next/link";

export default function CTA() {
  return (
    <section data-navbar-theme="dark" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/10 font-sans text-sm tracking-wider">
            CTA BACKGROUND IMAGE
          </span>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-bordeaux/[0.88]" />

      {/* Content */}
      <div className="relative z-10 max-w-[650px] mx-auto text-center">
        <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-white/70 mb-3">
          Iniziamo Insieme
        </p>
        <h2 className="text-[clamp(1.8rem,4.5vw,2.6rem)] font-light text-white leading-[1.25] mb-5">
          Pronta a Realizzare
          <br />
          <em className="italic">il Tuo Sogno?</em>
        </h2>
        <p className="font-sans text-[0.9rem] font-light text-white/85 max-w-[450px] mx-auto mb-7">
          Raccontami la tua visione e insieme creeremo qualcosa di indimenticabile
        </p>
        <Link
          href="/contatti"
          className="inline-block font-sans text-[0.75rem] tracking-[0.18em] uppercase px-9 py-4 bg-gold text-charcoal hover:bg-white transition-all"
        >
          Richiedi un Preventivo
        </Link>
      </div>
    </section>
  );
}
