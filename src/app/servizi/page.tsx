import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servizi | Gaia Events - Wedding Planner Roma",
  description:
    "Scopri i servizi di Gaia Events: wedding planning completo, coordinamento del giorno, design & styling, destination wedding. Matrimoni su misura a Roma.",
};

const services = [
  {
    id: "planning",
    title: "Wedding Planning Completo",
    subtitle: "Il percorso completo verso il vostro giorno perfetto",
    description:
      "Un servizio a 360 gradi che vi accompagna dalla prima idea fino all'ultimo ballo. Mi occupo di ogni aspetto dell'organizzazione, permettendovi di vivere il periodo del fidanzamento senza stress.",
    features: [
      "Consulenza iniziale e definizione del concept",
      "Ricerca e selezione delle location",
      "Gestione budget e contratti fornitori",
      "Coordinamento catering, fiori, musica",
      "Design personalizzato degli allestimenti",
      "Gestione inviti e RSVP",
      "Timeline dettagliata della giornata",
      "Coordinamento completo il giorno del matrimonio",
    ],
    image: "PLANNING IMAGE",
  },
  {
    id: "coordinamento",
    title: "Coordinamento del Giorno",
    subtitle: "Per chi vuole godersi ogni momento senza pensieri",
    description:
      "Avete già organizzato tutto ma desiderate un professionista che gestisca la giornata? Questo servizio è pensato per garantire che tutto proceda perfettamente mentre voi vi godete ogni istante.",
    features: [
      "Incontri pre-matrimonio per conoscere i dettagli",
      "Verifica e coordinamento con tutti i fornitori",
      "Gestione della timeline",
      "Supervisione allestimenti",
      "Punto di riferimento per ospiti e fornitori",
      "Gestione imprevisti",
      "Presenza dal setup alla chiusura",
    ],
    image: "COORDINATION IMAGE",
  },
  {
    id: "design",
    title: "Design & Styling",
    subtitle: "Trasformare gli spazi in scenografie da sogno",
    description:
      "La bellezza sta nei dettagli. Creo concept unici e allestimenti che trasformano qualsiasi location in uno spazio magico, riflettendo la vostra personalità e il vostro stile.",
    features: [
      "Creazione mood board e concept visivo",
      "Progettazione allestimenti personalizzati",
      "Selezione palette colori e materiali",
      "Coordinamento con fioristi e fornitori",
      "Styling tavoli e aree cerimonia",
      "Elementi decorativi personalizzati",
      "Supervisione montaggio e smontaggio",
    ],
    image: "DESIGN IMAGE",
  },
  {
    id: "destination",
    title: "Destination Wedding",
    subtitle: "Il vostro matrimonio da sogno, ovunque nel mondo",
    description:
      "Sognate un matrimonio in una location lontana da casa? Organizzo destination wedding in tutta Italia e all'estero, gestendo ogni aspetto logistico con la stessa cura di un evento locale.",
    features: [
      "Ricerca location esclusive",
      "Gestione logistica viaggi e alloggi",
      "Selezione e coordinamento fornitori locali",
      "Supporto burocratico e permessi",
      "Organizzazione attività per gli ospiti",
      "Welcome dinner e farewell brunch",
      "Presenza in loco per tutto il soggiorno",
    ],
    image: "DESTINATION IMAGE",
  },
];

export default function ServiziPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-subtitle">Servizi</span>
            <h1>Soluzioni Su Misura per Ogni Esigenza</h1>
            <p className="mt-6 text-lg text-charcoal/70">
              Ogni coppia è unica, e così deve essere anche l&apos;approccio al
              vostro matrimonio. Scoprite i servizi pensati per accompagnarvi
              verso il giorno più bello della vostra vita.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-beige">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-ivory to-sage/20 rounded-sm">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-charcoal/30 font-sans text-sm tracking-wider">
                        {service.image}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="section-subtitle">{service.subtitle}</span>
                  <h2 className="text-3xl mb-4">{service.title}</h2>
                  <p className="text-charcoal/70 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold mr-3 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-charcoal/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contatti" className="btn-primary">
                    Richiedi Informazioni
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bordeaux">
        <div className="container text-center">
          <h2 className="text-ivory mb-6">Non Sai Quale Servizio Fa per Te?</h2>
          <p className="text-ivory/80 max-w-2xl mx-auto mb-10">
            Contattami per una consulenza gratuita. Insieme troveremo la
            soluzione perfetta per le vostre esigenze.
          </p>
          <Link href="/contatti" className="btn-gold">
            Parliamone Insieme
          </Link>
        </div>
      </section>
    </>
  );
}
