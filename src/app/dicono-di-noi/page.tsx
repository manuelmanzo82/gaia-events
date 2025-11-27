import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dicono di Noi | Gaia Events - Wedding Planner Roma",
  description:
    "Leggi le recensioni delle coppie che hanno scelto Gaia Events per il loro matrimonio. Scopri perché siamo il wedding planner di riferimento a Roma.",
};

const testimonials = [
  {
    quote:
      "Gaia ha reso il nostro matrimonio semplicemente perfetto. Ogni dettaglio era curato con amore e la sua professionalità ci ha permesso di vivere la giornata senza stress. Non potevamo chiedere di meglio.",
    author: "Giulia & Marco",
    event: "Matrimonio Villa Aurelia, Roma",
    date: "Settembre 2024",
  },
  {
    quote:
      "Avevamo il sogno di sposarci in Toscana, ma vivendo all'estero sembrava impossibile. Gaia ha gestito tutto con professionalità incredibile, facendoci sentire sempre partecipi nonostante la distanza.",
    author: "Sara & Luca",
    event: "Destination Wedding Toscana",
    date: "Giugno 2024",
  },
  {
    quote:
      "Professionale, creativa e sempre disponibile. Gaia ha trasformato la nostra visione in realtà, creando un'atmosfera romantica e elegante che tutti gli ospiti hanno adorato.",
    author: "Elena & Andrea",
    event: "Matrimonio Castel Gandolfo",
    date: "Maggio 2024",
  },
  {
    quote:
      "Gaia è stata molto più di una wedding planner per noi. È stata una guida, un'amica, una confidente. Ha capito esattamente cosa volevamo e ci ha aiutato a realizzarlo oltre ogni aspettativa.",
    author: "Chiara & Francesco",
    event: "Matrimonio Villa Borghese",
    date: "Aprile 2024",
  },
  {
    quote:
      "Il nostro matrimonio sulla Costiera è stato un sogno ad occhi aperti. Gaia ha curato ogni dettaglio con una precisione maniacale, permettendoci di goderci ogni singolo momento.",
    author: "Alessia & Matteo",
    event: "Destination Wedding Costiera Amalfitana",
    date: "Luglio 2024",
  },
  {
    quote:
      "Volevamo un matrimonio intimo e speciale. Gaia ha saputo creare un'atmosfera magica nel castello, con allestimenti che sembravano usciti da una favola. Grazie di cuore.",
    author: "Valentina & Giovanni",
    event: "Matrimonio Relais Castello, Umbria",
    date: "Ottobre 2024",
  },
  {
    quote:
      "L'attenzione ai dettagli di Gaia è straordinaria. Gli allestimenti floreali erano mozzafiato e ogni angolo della villa era perfettamente decorato. Un lavoro impeccabile.",
    author: "Federica & Paolo",
    event: "Design & Styling Villa Medicea",
    date: "Agosto 2024",
  },
  {
    quote:
      "Organizzare un matrimonio nel centro storico di Roma sembrava una sfida impossibile. Gaia l'ha resa un'esperienza fluida e senza stress. La consigliamo a tutti!",
    author: "Martina & Stefano",
    event: "Matrimonio Roma Centro Storico",
    date: "Novembre 2024",
  },
];

export default function DiconoDiNoiPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-subtitle">Testimonianze</span>
            <h1>Dicono di Noi</h1>
            <p className="mt-6 text-lg text-charcoal/70">
              Le parole delle coppie che ho avuto il privilegio di accompagnare
              nel loro giorno speciale sono il mio più grande orgoglio.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-beige">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-ivory p-8 lg:p-10 rounded-sm border border-beige hover:border-gold/30 transition-colors"
              >
                {/* Quote Icon */}
                <svg
                  className="w-10 h-10 text-gold/40 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-charcoal/80 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="border-t border-beige pt-4">
                  <p className="text-bordeaux font-serif text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-charcoal/60 text-sm">{testimonial.event}</p>
                  <p className="text-gold text-sm mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bordeaux">
        <div className="container text-center">
          <h2 className="text-ivory mb-6">
            Vuoi Essere la Prossima Storia di Successo?
          </h2>
          <p className="text-ivory/80 max-w-2xl mx-auto mb-10">
            Contattami per iniziare a scrivere insieme la vostra storia d&apos;amore.
          </p>
          <Link href="/contatti" className="btn-gold">
            Parliamone Insieme
          </Link>
        </div>
      </section>
    </>
  );
}
