"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: React.ElementType;
}

interface StatsProps {
  statistiche?: {
    eventiRealizzati?: string;
    anniEsperienza?: string;
    locationPartner?: string;
    fornitoriSelezionati?: string;
  };
  variant?: "light" | "dark";
}

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * targetNumber));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats({ statistiche, variant = "light" }: StatsProps) {
  const isDark = variant === "dark";

  const stats: StatItem[] = [
    {
      value: statistiche?.eventiRealizzati || "150+",
      label: "Eventi Realizzati",
      icon: Calendar
    },
    {
      value: statistiche?.anniEsperienza || "10+",
      label: "Anni Esperienza",
      icon: Clock
    },
    {
      value: statistiche?.locationPartner || "50+",
      label: "Location Partner",
      icon: MapPin
    },
    {
      value: statistiche?.fornitoriSelezionati || "80+",
      label: "Fornitori Selezionati",
      icon: Users
    },
  ];

  return (
    <section
      data-navbar-theme={isDark ? "dark" : "light"}
      className={`py-24 px-6 ${isDark ? "bg-charcoal" : "bg-beige border-y border-sage/20"}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  isDark
                    ? "border-gold/50 bg-transparent group-hover:border-gold group-hover:bg-gold/20"
                    : "border-gold/30 bg-transparent group-hover:border-gold group-hover:bg-gold/10"
                }`}>
                  <IconComponent
                    className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <p className={`text-[clamp(2.2rem,5vw,3.5rem)] font-serif font-light mb-2 ${
                  isDark ? "text-gold" : "text-bordeaux"
                }`}>
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className={`font-sans text-[0.7rem] tracking-[0.12em] uppercase ${
                  isDark ? "text-white/70" : "text-charcoal/70"
                }`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
