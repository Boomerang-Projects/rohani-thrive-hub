/**
 * Centred section title in the hero's style: the serif headline font in
 * espresso, with the short clay-taupe bar from the hero's quote card above it.
 */
export function SectionHeader({ title, dark }: { title: string; dark?: boolean }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="mx-auto mb-6 h-[3px] w-12 bg-accent" />
      <h2
        className={`font-serif text-4xl md:text-6xl leading-[1.08] text-balance ${
          dark ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
