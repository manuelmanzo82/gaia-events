import Link from "next/link";

function StarIcon() {
  return (
    <svg className="w-[18px] h-[18px] fill-gold" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section data-navbar-theme="light" className="py-20 px-6 bg-beige">
      <div className="max-w-[750px] mx-auto text-center">
        <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-sage mb-3">
          Dicono di Noi
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-normal text-charcoal mb-7">
          Le Parole dei Nostri Sposi
        </h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-7">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-[clamp(1.1rem,2.5vw,1.45rem)] font-serif italic font-light leading-[1.8] text-[#4A4A4A] mb-6">
          &ldquo;Gaia ha trasformato il nostro sogno in realtà. Ogni dettaglio era perfetto, esattamente come lo avevamo immaginato.&rdquo;
        </blockquote>

        {/* Author */}
        <p className="font-sans text-[0.8rem] tracking-[0.12em] uppercase text-sage">
          — Francesca & Luca
        </p>

        {/* Link */}
        <div className="mt-8">
          <Link
            href="/dicono-di-noi"
            className="inline-flex items-center gap-2.5 font-sans text-[0.75rem] tracking-[0.12em] uppercase text-gold hover:gap-4 transition-all"
          >
            Leggi tutte le recensioni
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
