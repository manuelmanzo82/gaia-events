import Link from "next/link";

export default function Footer() {
  return (
    <footer data-navbar-theme="dark" className="bg-charcoal py-[4.5rem] px-6">
      <div className="max-w-[1050px] mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-[1.6rem] text-white mb-5">GAIA EVENTS</h3>
            <p className="font-sans text-[0.8rem] leading-[1.8] text-white/55 max-w-[280px]">
              Wedding Planner & Event Manager a Roma. Trasformo i tuoi sogni in eventi indimenticabili.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-gold mb-5">
              Navigazione
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/chi-sono" className="font-sans text-[0.8rem] text-white/55 hover:text-white transition-colors">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="font-sans text-[0.8rem] text-white/55 hover:text-white transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="font-sans text-[0.8rem] text-white/55 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="font-sans text-[0.8rem] text-white/55 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-gold mb-5">
              Contatti
            </h4>
            <div className="font-sans text-[0.8rem] text-white/55 leading-[1.9]">
              Roma, Italia
              <br />
              info@gaiaevents.it
              <br />
              +39 XXX XXX XXXX
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-7 border-t border-white/10 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="font-sans text-[0.7rem] text-white/35">
            © {new Date().getFullYear()} Gaia Events. Tutti i diritti riservati.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="font-sans text-[0.7rem] text-white/35 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="font-sans text-[0.7rem] text-white/35 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
