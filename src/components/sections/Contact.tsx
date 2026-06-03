import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Presentational only — wire to backend later
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you. We'll be in touch shortly.");
      (e.currentTarget as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.05] text-balance">
              Let's Create Meaningful Change Together
            </h2>
            <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
              Whether you're an HR leader exploring a partnership or an
              individual ready for the next chapter, we'd love to hear from you.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            <a
              href="mailto:hello@rohani.co"
              className="flex items-baseline justify-between border-b border-border pb-3 hover:text-accent transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                Email
              </span>
              <span className="text-sm">hello@rohani.co</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-baseline justify-between border-b border-border pb-3 hover:text-accent transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                LinkedIn
              </span>
              <span className="text-sm">Connect with Rohani</span>
            </a>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                Based in
              </span>
              <span className="text-sm">Scandinavia · Working globally</span>
            </div>
          </div>

          <a
            href="mailto:hello@rohani.co?subject=Discovery%20Call"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-all"
          >
            Book a Discovery Call
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-secondary rounded-3xl p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Organization" name="organization" />
          <Field label="Role" name="role" />
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block">
              Inquiry
            </label>
            <select
              name="inquiry"
              className="w-full bg-transparent border-b border-foreground/15 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              defaultValue="corporate"
            >
              <option value="corporate">Corporate wellbeing program</option>
              <option value="leadership">Leadership development</option>
              <option value="retreat">Retreat or off-site</option>
              <option value="speaking">Speaking engagement</option>
              <option value="individual">Individual coaching</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-foreground/15 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell us a little about your team or what you're exploring."
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-all disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-foreground/15 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
