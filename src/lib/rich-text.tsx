import { Fragment, type ReactNode } from "react";

/**
 * Tiny formatter for the popup bullet lists on Erfarenhet.
 * The texts are plain strings in the data, with two markers:
 *   **text**          -> bold
 *   [label](address)  -> link (opens in a new tab). The label may itself be **bold**.
 * An address starting with "#" is not a web page: it is handed to onAction
 * instead (e.g. "#psykologtidningen" opens the article image on the page).
 */
export function RichText({ text, onAction }: { text: string; onAction?: (id: string) => void }) {
  const out: ReactNode[] = [];
  const pattern = /\[(.+?)\]\((.+?)\)|\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = pattern.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const [label, href] = [m[1], m[2]];
      const inner = <RichText text={label} />;
      const cls = "underline underline-offset-4 decoration-accent/50 hover:text-accent hover:decoration-accent transition-colors";
      out.push(
        href.startsWith("#") ? (
          <button key={i++} type="button" onClick={() => onAction?.(href.slice(1))} className={cls}>
            {inner}
          </button>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noreferrer noopener" className={cls}>
            {inner}
          </a>
        ),
      );
    } else {
      out.push(
        <b key={i++} className="font-semibold text-foreground">
          {m[3]}
        </b>,
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}
