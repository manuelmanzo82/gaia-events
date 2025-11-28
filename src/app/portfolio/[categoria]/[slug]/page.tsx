"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowLeft, MapPin, Calendar, ArrowRight } from "lucide-react";
import { getEventoBySlug, getEventiCorrelati, Evento } from "@/sanity/fetch";
import { PortableText } from "@portabletext/react";
import { useParams, notFound } from "next/navigation";

const categoryLabels: Record<string, string> = {
  wedding: "Wedding",
  corporate: "Corporate",
  celebrations: "Celebrations",
};

function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getVideoEmbedUrl(url: string): string | null {
  // YouTube
  const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }
  return null;
}

export default function EventoPage() {
  const params = useParams();
  const categoria = params?.categoria as string;
  const slug = params?.slug as string;

  const [evento, setEvento] = useState<Evento | null>(null);
  const [eventiCorrelati, setEventiCorrelati] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (slug) {
      getEventoBySlug(slug).then((data) => {
        setEvento(data);
        setLoading(false);

        // Fetch related events
        if (data?.macroCategoria) {
          getEventiCorrelati(data.macroCategoria, slug).then(setEventiCorrelati);
        }
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!evento) {
    notFound();
  }

  const heroImage = evento.immagineHero || evento.immagineCopertina;
  const videoEmbedUrl = evento.videoUrl ? getVideoEmbedUrl(evento.videoUrl) : null;

  return (
    <>
      {/* Hero */}
      <section data-navbar-theme="dark" className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={evento.titolo}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 font-sans text-sm tracking-wider">
                EVENT PHOTO
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/20" />

        {/* Back Link */}
        <Link
          href={`/portfolio/${categoria}`}
          className="absolute top-28 left-6 md:left-12 z-20 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-sans text-sm tracking-wide"
        >
          <ArrowLeft className="w-4 h-4" />
          {categoryLabels[categoria] || "Portfolio"}
        </Link>

        {/* Content */}
        <div className="relative z-10 w-full px-6 pb-12 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="inline-block px-4 py-1.5 bg-gold/90 text-charcoal text-[0.7rem] tracking-[0.2em] uppercase font-sans mb-4">
              {categoryLabels[evento.macroCategoria] || evento.macroCategoria}
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-serif font-light text-white leading-[1.1] mb-4">
              {evento.titolo}
            </h1>
            <p className="font-sans text-[1.1rem] text-white/80">
              {evento.location}
            </p>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section data-navbar-theme="light" className="py-6 px-6 bg-ivory border-b border-beige">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {evento.data && (
              <div className="flex items-center gap-3 text-charcoal/80">
                <Calendar className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="font-sans text-[0.9rem]">{formatDate(evento.data)}</span>
              </div>
            )}
            <div className="flex items-center gap-3 text-charcoal/80">
              <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
              <span className="font-sans text-[0.9rem]">{evento.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      {(evento.descrizioneBreve || evento.descrizioneCompleta) && (
        <section data-navbar-theme="light" className="py-20 px-6 bg-ivory">
          <div className="max-w-[800px] mx-auto">
            <FadeInSection>
              {evento.descrizioneBreve && (
                <p className="text-[1.3rem] font-serif font-light leading-[1.8] text-charcoal italic text-center mb-12">
                  {evento.descrizioneBreve}
                </p>
              )}
              {evento.descrizioneCompleta && evento.descrizioneCompleta.length > 0 && (
                <div className="prose prose-lg max-w-none text-[#555] font-light leading-[2]">
                  <PortableText value={evento.descrizioneCompleta} />
                </div>
              )}
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Gallery */}
      {evento.galleria && evento.galleria.length > 0 && (
        <section data-navbar-theme="light" className="py-20 px-6 bg-beige">
          <div className="max-w-[1400px] mx-auto">
            <FadeInSection>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-charcoal text-center mb-12">
                Gallery
              </h2>

              {/* Dynamic Grid - first image larger */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {evento.galleria.map((img, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                      index === 0 ? "col-span-2 row-span-2" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                      <Image
                        src={img.url}
                        alt={img.alt || `${evento.titolo} - Foto ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {selectedImage !== null && evento.galleria && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-light"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : evento.galleria!.length - 1);
            }}
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < evento.galleria!.length - 1 ? selectedImage + 1 : 0);
            }}
          >
            <ArrowRight className="w-8 h-8" />
          </button>
          <div className="relative max-w-[90vw] max-h-[85vh]">
            <Image
              src={evento.galleria[selectedImage].url}
              alt={evento.galleria[selectedImage].alt || ""}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Video */}
      {videoEmbedUrl && (
        <section data-navbar-theme="light" className="py-20 px-6 bg-ivory">
          <div className="max-w-[1000px] mx-auto">
            <FadeInSection>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-charcoal text-center mb-12">
                Il Video
              </h2>
              <div className="relative aspect-video bg-charcoal rounded-sm overflow-hidden">
                <iframe
                  src={videoEmbedUrl}
                  title={`Video - ${evento.titolo}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {evento.testimonialTesto && (
        <section data-navbar-theme="dark" className="py-20 px-6 bg-bordeaux">
          <div className="max-w-[800px] mx-auto text-center">
            <FadeInSection>
              <svg className="w-12 h-12 text-ivory/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-[1.3rem] md:text-[1.6rem] font-serif font-light leading-[1.7] text-ivory italic mb-8">
                {evento.testimonialTesto}
              </p>
              {evento.testimonialAutore && (
                <>
                  <div className="w-12 h-[1px] bg-gold mx-auto mb-4" />
                  <p className="font-sans text-[0.85rem] tracking-[0.15em] uppercase text-ivory/70">
                    — {evento.testimonialAutore}
                  </p>
                </>
              )}
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Related Events */}
      {eventiCorrelati.length > 0 && (
        <section data-navbar-theme="light" className="py-20 px-6 bg-ivory">
          <div className="max-w-[1200px] mx-auto">
            <FadeInSection>
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-charcoal text-center mb-12">
                Altri Eventi
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {eventiCorrelati.map((item) => (
                  <Link
                    key={item._id}
                    href={`/portfolio/${categoria}/${item.slug?.current}`}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                      {item.immagineCopertina ? (
                        <Image
                          src={item.immagineCopertina}
                          alt={item.titolo}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-ivory to-sage/20 flex items-center justify-center">
                          <span className="text-charcoal/30 font-sans text-sm tracking-wider">PHOTO</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300" />
                    </div>
                    {item.categoria && (
                      <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-1">
                        {item.categoria}
                      </p>
                    )}
                    <h3 className="font-serif text-xl text-charcoal group-hover:text-bordeaux transition-colors">
                      {item.titolo}
                    </h3>
                    <p className="font-sans text-[0.85rem] text-charcoal/60 mt-1">
                      {item.location}
                    </p>
                  </Link>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section data-navbar-theme="dark" className="py-24 px-6 bg-sage">
        <div className="max-w-[700px] mx-auto text-center">
          <FadeInSection>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-light text-ivory mb-6">
              Vuoi un Evento Così?
            </h2>
            <p className="text-[1rem] font-light leading-[1.8] text-ivory/80 mb-10">
              Raccontami la tua storia e insieme creeremo l&apos;evento dei tuoi sogni.
            </p>
            <Link
              href="/contatti"
              className="inline-block px-10 py-4 bg-gold text-charcoal font-sans text-[0.85rem] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-ivory"
            >
              Contattami
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
