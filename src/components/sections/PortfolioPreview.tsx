"use client";

import Link from "next/link";
import { useState } from "react";

const filters = ["Tutti", "Matrimoni", "Corporate", "Destination"];

const portfolioItems = [
  { title: "Sara & Marco", location: "Villa Cetinale, Toscana", category: "Matrimonio" },
  { title: "Corporate Gala", location: "Palazzo Brancaccio, Roma", category: "Corporate" },
  { title: "Giulia & Alessandro", location: "Borgo Egnazia, Puglia", category: "Destination" },
  { title: "Maria & Angelo", location: "Val d'Orcia, Toscana", category: "Matrimonio" },
  { title: "Elena & Francesco", location: "Ravello, Costiera", category: "Matrimonio" },
];

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("Tutti");

  return (
    <section data-navbar-theme="light" className="py-20 px-6">
      {/* Header */}
      <div className="max-w-[1150px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
        <div>
          <p className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-sage mb-3">
            Portfolio
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-normal text-charcoal">
            Eventi Realizzati
          </h2>
        </div>
        <div className="flex gap-5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-sans text-[0.72rem] tracking-[0.08em] uppercase bg-transparent border-none text-charcoal cursor-pointer transition-opacity ${
                activeFilter === filter ? "opacity-100" : "opacity-50 hover:opacity-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-2">
        {portfolioItems.map((item, index) => (
          <Link
            key={index}
            href="/portfolio"
            className={`relative overflow-hidden rounded-[3px] group ${
              index === 0 ? "row-span-2" : ""
            }`}
          >
            <div className="absolute inset-0 bg-beige flex items-center justify-center">
              <span className="text-charcoal/20 font-sans text-xs tracking-wider">
                FOTO
              </span>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent">
              <p className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-gold mb-1">
                {item.category}
              </p>
              <h3 className="font-serif text-[1.2rem] text-white mb-0.5">
                {item.title}
              </h3>
              <p className="font-sans text-[0.7rem] text-white/70">
                {item.location}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-[1150px] mx-auto mt-10 text-center">
        <Link
          href="/portfolio"
          className="inline-block font-sans text-[0.68rem] tracking-[0.12em] uppercase px-5 py-2.5 border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-white transition-all"
        >
          Vedi Tutti gli Eventi
        </Link>
      </div>
    </section>
  );
}
