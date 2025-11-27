"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  "Tutti",
  "Matrimonio Classico",
  "Destination Wedding",
  "Matrimonio Intimo",
  "Design & Styling",
];

const portfolioItems = [
  {
    id: 1,
    title: "Giulia & Marco",
    location: "Villa Aurelia, Roma",
    category: "Matrimonio Classico",
    description: "Un matrimonio elegante nel cuore di Roma",
  },
  {
    id: 2,
    title: "Sara & Luca",
    location: "Borgo Santo Pietro, Toscana",
    category: "Destination Wedding",
    description: "Un weekend da sogno nelle colline toscane",
  },
  {
    id: 3,
    title: "Elena & Andrea",
    location: "Castel Gandolfo",
    category: "Matrimonio Intimo",
    description: "Una celebrazione intima con vista sul lago",
  },
  {
    id: 4,
    title: "Chiara & Francesco",
    location: "Villa Borghese, Roma",
    category: "Matrimonio Classico",
    description: "Romanticismo e raffinatezza in villa",
  },
  {
    id: 5,
    title: "Alessia & Matteo",
    location: "Costiera Amalfitana",
    category: "Destination Wedding",
    description: "Matrimonio con vista sul mare",
  },
  {
    id: 6,
    title: "Valentina & Giovanni",
    location: "Relais Castello, Umbria",
    category: "Matrimonio Intimo",
    description: "Un castello come cornice dell'amore",
  },
  {
    id: 7,
    title: "Federica & Paolo",
    location: "Villa Medicea, Toscana",
    category: "Design & Styling",
    description: "Allestimenti floreali mozzafiato",
  },
  {
    id: 8,
    title: "Martina & Stefano",
    location: "Roma Centro Storico",
    category: "Matrimonio Classico",
    description: "Eleganza senza tempo nella città eterna",
  },
  {
    id: 9,
    title: "Laura & Michele",
    location: "Lago di Como",
    category: "Destination Wedding",
    description: "Un matrimonio da favola sul lago",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filteredItems =
    activeCategory === "Tutti"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-subtitle">Portfolio</span>
            <h1>Storie d&apos;Amore Realizzate</h1>
            <p className="mt-6 text-lg text-charcoal/70">
              Ogni matrimonio racconta una storia unica. Scoprite alcuni dei
              momenti magici che ho avuto il privilegio di creare.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-ivory border-b border-beige">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-sans text-sm tracking-wide transition-all ${
                  activeCategory === category
                    ? "bg-bordeaux text-ivory"
                    : "bg-beige text-charcoal hover:bg-bordeaux/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-beige">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-ivory to-sage/30 rounded-sm overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-charcoal/30 font-sans text-sm tracking-wider">
                      WEDDING PHOTO
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
                </div>
                <span className="text-gold text-sm font-sans uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-xl mt-1 group-hover:text-bordeaux transition-colors">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 text-sm mt-1">{item.location}</p>
                <p className="text-charcoal/70 text-sm mt-2">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-charcoal">
        <div className="container text-center">
          <h2 className="text-ivory mb-6">Vuoi Vedere il Tuo Matrimonio Qui?</h2>
          <p className="text-ivory/70 max-w-2xl mx-auto mb-10">
            Contattami per iniziare a pianificare il matrimonio dei vostri sogni.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center border-2 border-ivory text-ivory px-8 py-3 font-sans font-medium tracking-wide transition-all duration-300 hover:bg-ivory hover:text-charcoal"
          >
            Iniziamo Insieme
          </Link>
        </div>
      </section>
    </>
  );
}
