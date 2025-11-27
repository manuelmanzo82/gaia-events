import Link from "next/link";

interface FooterProps {
  email?: string;
  telefono?: string;
  indirizzo?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    pinterest?: string;
  };
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  );
}

export default function Footer({ email, telefono, indirizzo, social }: FooterProps) {
  const hasSocial = social?.instagram || social?.facebook || social?.pinterest;

  return (
    <footer data-navbar-theme="dark" className="bg-charcoal py-[4.5rem] px-6">
      <div className="max-w-[1050px] mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-[1.6rem] text-white mb-5">GAIA EVENTS</h3>
            <p className="font-sans text-[0.8rem] leading-[1.8] text-white/55 max-w-[280px] mb-6">
              Wedding Planner & Event Manager a Roma. Trasformo i tuoi sogni in eventi indimenticabili.
            </p>
            {/* Social Icons */}
            {hasSocial && (
              <div className="flex gap-4">
                {social?.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                )}
                {social?.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                )}
                {social?.pinterest && (
                  <a
                    href={social.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-gold transition-colors"
                    aria-label="Pinterest"
                  >
                    <PinterestIcon />
                  </a>
                )}
              </div>
            )}
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
                <Link href="/blog" className="font-sans text-[0.8rem] text-white/55 hover:text-white transition-colors">
                  Blog
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
              {indirizzo || "Roma, Italia"}
              <br />
              {email ? (
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              ) : (
                "info@gaiaevents.it"
              )}
              <br />
              {telefono ? (
                <a href={`tel:${telefono.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {telefono}
                </a>
              ) : (
                "+39 XXX XXX XXXX"
              )}
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
