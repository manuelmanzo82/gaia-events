import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi Sono | Gaia Events - Wedding Planner Roma",
  description:
    "Scopri la storia di Gaia Events. Wedding planner a Roma con oltre 10 anni di esperienza nell'organizzazione di matrimoni eleganti e indimenticabili.",
};

export default function ChiSonoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-subtitle">Chi Sono</span>
            <h1>La Passione per i Matrimoni Perfetti</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-beige">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative lg:sticky lg:top-32">
              <div className="aspect-[3/4] bg-gradient-to-br from-ivory to-sage/20 rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-charcoal/30 font-sans text-sm tracking-wider">
                    PORTRAIT IMAGE
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-sm -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-6">Ciao, sono Gaia</h2>
                <p className="text-charcoal/70 mb-4">
                  Da oltre dieci anni dedico la mia vita alla realizzazione di matrimoni
                  da sogno. La mia storia con gli eventi è iniziata quasi per caso,
                  organizzando il matrimonio di una cara amica, e da quel momento
                  ho capito che questa era la mia vocazione.
                </p>
                <p className="text-charcoal/70 mb-4">
                  Ogni coppia che incontro porta con sé una storia unica, sogni e
                  desideri che meritano di essere ascoltati e realizzati. Il mio
                  approccio è basato sull&apos;ascolto attento e sulla comprensione
                  profonda di ciò che rende speciale ogni storia d&apos;amore.
                </p>
                <p className="text-charcoal/70">
                  Roma, con la sua bellezza senza tempo, è la cornice perfetta per
                  i matrimoni che organizzo. Ma la mia esperienza si estende ben
                  oltre i confini della città eterna, abbracciando location
                  mozzafiato in tutta Italia e all&apos;estero.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4">La Mia Filosofia</h3>
                <p className="text-charcoal/70 mb-4">
                  Credo che ogni matrimonio debba riflettere l&apos;essenza della
                  coppia. Non esistono formule prestabilite: ogni evento è un&apos;opera
                  d&apos;arte unica, creata su misura per voi.
                </p>
                <p className="text-charcoal/70">
                  L&apos;eleganza toscana, la cura dei dettagli e l&apos;attenzione
                  alla qualità sono i pilastri del mio lavoro. Mi impegno a creare
                  esperienze che non solo soddisfino le aspettative, ma le superino.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4">Perché Scegliere Me</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-charcoal/70">
                      <strong className="text-charcoal">Esperienza consolidata</strong> - Oltre 150 matrimoni
                      organizzati con successo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-charcoal/70">
                      <strong className="text-charcoal">Network esclusivo</strong> - Collaborazioni con i
                      migliori fornitori del settore
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-charcoal/70">
                      <strong className="text-charcoal">Approccio personalizzato</strong> - Ogni matrimonio
                      è unico come la vostra storia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-charcoal/70">
                      <strong className="text-charcoal">Serenità garantita</strong> - Vi accompagno in ogni
                      fase, dal primo incontro al grande giorno
                    </span>
                  </li>
                </ul>
              </div>

              <Link href="/contatti" className="btn-primary inline-block">
                Conosciamoci
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
