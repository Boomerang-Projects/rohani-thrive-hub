const outcomes = [
  { label: "Wellbeing", value: "Increased" },
  { label: "Resilience", value: "Greater" },
  { label: "Leadership", value: "Stronger" },
  { label: "Communication", value: "Better" },
  { label: "Performance", value: "Sustainable" },
  { label: "Engagement", value: "Higher" },
];

export function Impact() {
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
            Measurable Outcomes
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Creating Lasting Change
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto text-pretty">
            What organizations and individuals experience when psychology,
            mindfulness and human development are woven into how they work and live.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {outcomes.map((o) => (
            <div key={o.label} className="text-center space-y-3">
              <div className="h-px bg-primary-foreground/20 mb-6" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                {o.label}
              </p>
              <p className="font-serif text-2xl md:text-[1.7rem]">{o.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
