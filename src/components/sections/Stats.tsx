const stats = [
  { value: "150+", label: "Eventi Realizzati" },
  { value: "2000+", label: "Ospiti Felici" },
];

export default function Stats() {
  return (
    <section data-navbar-theme="light" className="py-[4.5rem] px-6 bg-beige">
      <div className="max-w-[600px] mx-auto grid grid-cols-2 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-[clamp(2.2rem,5vw,3.5rem)] font-serif font-light text-bordeaux mb-1">
              {stat.value}
            </p>
            <p className="font-sans text-[0.7rem] tracking-[0.12em] uppercase text-[#666]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
