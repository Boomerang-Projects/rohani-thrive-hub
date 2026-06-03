import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-office.jpg";

export function Hero() {
  return (
    <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-8">
        <div className="space-y-5">
          <span className="text-accent font-serif italic text-xl md:text-2xl">
            Peace of Mind
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] text-balance">
            Helping People and Organizations Thrive
          </h1>
        </div>
        <p className="text-lg leading-relaxed text-foreground/75 max-w-md">
          Through psychology, mindfulness and human development, Rohani creates
          meaningful experiences that strengthen wellbeing, resilience,
          leadership and sustainable performance.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-all"
          >
            Book a Discovery Call
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-transparent border border-foreground/20 rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
          >
            Explore Services
          </Link>
        </div>
        <div className="pt-6 flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-foreground/50">
          <span>Trusted by international teams</span>
          <span className="h-px flex-1 bg-foreground/15 max-w-24" />
        </div>
      </div>

      <div className="relative">
        <img
          src={heroImage}
          alt="Calm minimalist Scandinavian corporate environment with natural light"
          width={1080}
          height={1600}
          className="w-full aspect-[4/5] object-cover rounded-2xl"
        />
        <div className="absolute -bottom-6 -left-6 md:-left-10 bg-background p-6 md:p-8 rounded-xl shadow-[0_20px_60px_-20px_rgba(27,43,36,0.25)] max-w-[18rem] hidden sm:block border border-taupe/40">
          <p className="font-serif italic text-lg leading-snug">
            "True leadership begins with inner clarity."
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-foreground/50">
            — The Rohani Philosophy
          </p>
        </div>
      </div>
    </section>
  );
}
