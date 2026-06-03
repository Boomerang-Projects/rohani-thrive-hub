export function About() {
  return (
    <section className="bg-secondary py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <div className="md:col-span-5 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Psychology Meets Human Potential
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6">
          <p className="text-xl leading-relaxed text-foreground/75">
            Rohani was founded to bridge modern psychology, mindfulness and
            personal growth. Through workshops, talks, coaching and
            transformational experiences, we support individuals and
            organizations in creating sustainable wellbeing and meaningful
            development.
          </p>
          <p className="text-base leading-relaxed text-foreground/60">
            We work with HR leaders, executives and international teams who
            understand that lasting performance is built on psychological
            safety, emotional intelligence and the quiet skill of leading
            oneself well.
          </p>
        </div>
      </div>
    </section>
  );
}
