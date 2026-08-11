import { useState, useRef, useEffect } from "react";

export function ServiceCard({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  open: openProp,
  onToggle,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
  onToggle?: () => void;
}) {
  const [openState, setOpenState] = useState(false);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : openState;
  const toggle = () =>
    isControlled ? onToggle?.() : setOpenState((v) => !v);
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    const el = innerRef.current;
    const update = () => setHeight(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  return (
    <article
      className={`flex flex-col rounded-3xl border border-border bg-background p-8 md:p-10 transition-colors duration-500 hover:border-forest/60 ${className}`}
    >
      {eyebrow && (
        <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h3 className="text-2xl md:text-[1.65rem] font-serif leading-tight mb-5 text-balance">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-foreground/75">{intro}</p>

      {children && (
        <>
          <div
            className="overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ maxHeight: open ? height : 0 }}
            aria-hidden={!open}
          >
            <div
              ref={innerRef}
              className={`pt-6 space-y-5 transition-opacity duration-500 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              {children}
            </div>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            className="mt-8 mt-auto pt-8 self-start text-[10px] uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            {open ? "Read less" : "Read more"}
          </button>
        </>
      )}
    </article>
  );
}

export function CardList({
  label,
  items,
}: {
  label?: string;
  items: string[];
}) {
  return (
    <div>
      {label && (
        <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-3">
          {label}
        </p>
      )}
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 text-[0.95rem] text-foreground/80"
          >
            <span className="size-1 rounded-full bg-accent/70 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
