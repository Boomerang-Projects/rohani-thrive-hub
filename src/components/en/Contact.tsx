import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function ContactEn() {
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
    <section id="contact" className="py-16 md:py-24 px-6 md:px-10 max-w-3xl mx-auto">
      <div>
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
