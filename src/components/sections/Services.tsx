import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Organizations",
    eyebrow: "For HR & Leadership",
    items: [
      "Leadership Development",
      "Employee Wellbeing",
      "Psychological Safety",
      "Stress Prevention",
      "Team Development",
    ],
  },
  {
    title: "Individuals",
    eyebrow: "For Executives & Professionals",
    items: [
      "Coaching",
      "Personal Growth",
      "Self-Leadership",
      "Mindfulness",
    ],
  },
  {
    title: "Retreats & Experiences",
    eyebrow: "For Teams & Individuals",
    items: [
      "Wellbeing Retreats",
      "Corporate Retreats",
      "Transformational Experiences",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] font-medium text-accent mb-4">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-serif max-w-xl leading-tight">
            Tailored programs for sustainable growth
          </h2>
        </div>
        <Link
          to="/services"
          className="text-[10px] uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 self-start hover:text-accent hover:border-accent transition-colors"
        >
          View all services
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {services.map((s) => (
          <article
            key={s.title}
            className="group p-8 md:p-10 bg-background border border-taupe/40 rounded-3xl hover:border-forest transition-all duration-500"
          >
            <div className="mb-8 text-foreground/30 group-hover:text-accent transition-colors">
              <div className="w-12 h-px bg-current" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-3">
              {s.eyebrow}
            </p>
            <h3 className="text-2xl md:text-[1.75rem] font-serif mb-6 leading-tight">
              {s.title}
            </h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              {s.items.map((item) => (
                <li key={item} className="flex items-baseline gap-3">
                  <span className="size-1 rounded-full bg-accent/70 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
