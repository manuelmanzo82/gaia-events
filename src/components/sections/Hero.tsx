import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  heroImage?: string;
  title?: string;
  subtitle?: string;
}

export default function Hero({ heroImage, title, subtitle }: HeroProps) {
  return (
    <section data-navbar-theme="dark" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        {heroImage ? (
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 font-sans text-sm tracking-wider">
              HERO BACKGROUND IMAGE
            </span>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/35 to-charcoal/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-12">
        <p className="font-sans text-[0.8rem] tracking-[0.35em] uppercase text-gold mb-5">
          Wedding Planner & Event Manager
        </p>
        <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-light text-white leading-[1.15] mb-5">
          {title || "Creiamo Insieme"}
          <br />
          <em className="italic">{subtitle || "il Tuo Sogno"}</em>
        </h1>
        <p className="font-sans text-[0.95rem] font-light text-white/90 max-w-[28rem] mx-auto mb-8">
          Esclusività e ricercatezza per il giorno più importante della tua vita
        </p>
        <Link
          href="/contatti"
          className="inline-block font-sans text-[0.75rem] tracking-[0.18em] uppercase px-9 py-4 bg-gold text-charcoal hover:bg-white transition-all"
        >
          Raccontami il Tuo Evento
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1.4rem] h-[2.2rem] border-2 border-white/50 rounded-full flex justify-center pt-1.5">
          <span className="w-[3px] h-[7px] bg-gold rounded-sm" />
        </div>
      </div>
    </section>
  );
}
