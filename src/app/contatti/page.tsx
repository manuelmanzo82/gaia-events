import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti | Gaia Events - Wedding Planner Roma",
  description:
    "Contatta Gaia Events per una consulenza gratuita. Siamo qui per aiutarvi a pianificare il matrimonio dei vostri sogni a Roma.",
};

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-subtitle">Contatti</span>
            <h1>Iniziamo a Conoscerci</h1>
            <p className="mt-6 text-lg text-charcoal/70">
              Sono qui per ascoltare la vostra storia e aiutarvi a realizzare il
              matrimonio dei vostri sogni. Compilate il form o contattatemi
              direttamente.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-beige">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-ivory p-8 lg:p-12 rounded-sm">
                <h2 className="text-2xl mb-8">Richiedi un Preventivo</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-sm font-sans font-medium text-charcoal mb-2"
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cognome"
                        className="block text-sm font-sans font-medium text-charcoal mb-2"
                      >
                        Cognome *
                      </label>
                      <input
                        type="text"
                        id="cognome"
                        name="cognome"
                        required
                        className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-sans font-medium text-charcoal mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-sans font-medium text-charcoal mb-2"
                      >
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="data"
                        className="block text-sm font-sans font-medium text-charcoal mb-2"
                      >
                        Data del Matrimonio
                      </label>
                      <input
                        type="date"
                        id="data"
                        name="data"
                        className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="ospiti"
                        className="block text-sm font-sans font-medium text-charcoal mb-2"
                      >
                        Numero Ospiti (stimato)
                      </label>
                      <input
                        type="number"
                        id="ospiti"
                        name="ospiti"
                        placeholder="es. 100"
                        className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="servizio"
                      className="block text-sm font-sans font-medium text-charcoal mb-2"
                    >
                      Servizio di Interesse
                    </label>
                    <select
                      id="servizio"
                      name="servizio"
                      className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="planning">Wedding Planning Completo</option>
                      <option value="coordinamento">Coordinamento del Giorno</option>
                      <option value="design">Design & Styling</option>
                      <option value="destination">Destination Wedding</option>
                      <option value="altro">Altro / Non sono sicuro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="messaggio"
                      className="block text-sm font-sans font-medium text-charcoal mb-2"
                    >
                      Raccontatemi del vostro matrimonio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={5}
                      required
                      placeholder="Raccontatemi la vostra storia, le vostre idee e i vostri sogni per il grande giorno..."
                      className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans resize-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="come"
                      className="block text-sm font-sans font-medium text-charcoal mb-2"
                    >
                      Come mi avete conosciuto?
                    </label>
                    <select
                      id="come"
                      name="come"
                      className="w-full px-4 py-3 bg-white border border-beige rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                    >
                      <option value="">Seleziona</option>
                      <option value="google">Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="pinterest">Pinterest</option>
                      <option value="passaparola">Passaparola</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Invia Richiesta
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl mb-4">Informazioni di Contatto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-gold mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium text-charcoal">Email</p>
                      <a href="mailto:info@gaiaevents.it" className="text-charcoal/70 hover:text-bordeaux transition-colors">
                        info@gaiaevents.it
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-gold mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium text-charcoal">Telefono</p>
                      <a href="tel:+390612345678" className="text-charcoal/70 hover:text-bordeaux transition-colors">
                        +39 06 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-gold mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium text-charcoal">Sede</p>
                      <p className="text-charcoal/70">Roma, Italia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4">Seguimi sui Social</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-ivory border border-beige flex items-center justify-center hover:border-gold hover:text-gold transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-ivory border border-beige flex items-center justify-center hover:border-gold hover:text-gold transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-ivory border border-beige flex items-center justify-center hover:border-gold hover:text-gold transition-all"
                    aria-label="Pinterest"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4">Orari</h3>
                <div className="text-charcoal/70 space-y-1">
                  <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p>Sabato: Su appuntamento</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </div>

              <div className="p-6 bg-sage/10 border border-sage/20 rounded-sm">
                <p className="text-charcoal/80 text-sm italic">
                  &ldquo;Rispondo a tutte le richieste entro 24-48 ore.
                  Se avete urgenza, non esitate a chiamarmi direttamente.&rdquo;
                </p>
                <p className="text-gold font-serif mt-2">- Gaia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
