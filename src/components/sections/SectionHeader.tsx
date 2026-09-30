// pl-[0.15em] balances the letter-spacing, which adds space after the last letter too,
// so the title sits truly centred.
export function SectionHeader({ title, dark }: { title: string; dark?: boolean }) {
  return (
    <div className="text-center mb-8 md:mb-10">
      <h2
        className={`text-3xl md:text-4xl font-medium uppercase tracking-[0.15em] pl-[0.15em] leading-snug text-balance ${
          dark ? "text-gold" : "text-accent"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
