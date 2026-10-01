import { useLang } from "@/lib/i18n";
import { ContactEn } from "@/components/en/Contact";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

function ContactSv() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Presentational only - wire to backend later
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Tack. Jag hör av mig inom kort.");
      (e.currentTarget as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section id="contact" data-no-reveal className="pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-10 max-w-3xl mx-auto">
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-secondary rounded-3xl p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Namn" name="name" required />
            <Field label="E-post" name="email" type="email" required />
          </div>
          <Field label="Organisation" name="organization" />
          <Field label="Roll" name="role" />
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block">
              Ärende
            </label>
            <select
              name="inquiry"
              className="w-full bg-transparent border-b border-foreground/15 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
              defaultValue="corporate"
            >
              <option value="corporate">Välbefinnandeprogram för företag</option>
              <option value="leadership">Ledarskapsutveckling</option>
              <option value="retreat">Retreat eller kickoff</option>
              <option value="speaking">Föreläsning</option>
              <option value="individual">Individuell coaching</option>
              <option value="other">Annat</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 block">
              Meddelande
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-foreground/15 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
              placeholder="Berätta kort om ditt team eller vad du söker."
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-foreground text-background rounded-full text-xs uppercase tracking-[0.22em] hover:bg-foreground/90 transition-all disabled:opacity-60"
          >
            {submitting ? "Skickar…" : "Skicka meddelande"}
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
        className="w-full bg-transparent border-b border-foreground/15 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

export function Contact(props: Record<string, never>) {
  const { lang } = useLang();
  return lang === "en" ? <ContactEn {...props} /> : <ContactSv {...props} />;
}
