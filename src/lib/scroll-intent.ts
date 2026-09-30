/**
 * A tiny "note" passed from the menu to the page it opens.
 *
 * The menu sets it right before switching page ("scroll down to the
 * category slider once you're there"). The new page reads it once when it
 * appears, then it's cleared. It lives in plain module memory, so it never
 * shows up in the address bar.
 */
let pending: string | null = null;

export function requestScrollTo(id: string) {
  pending = id;
}

export function takeScrollRequest(): string | null {
  const id = pending;
  pending = null;
  return id;
}

/** Smoothly scroll so the element's top sits just below the sticky header. */
export function scrollBelowHeader(el: HTMLElement) {
  const header = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - header;
  window.scrollTo({ top, behavior: "smooth" });
}
