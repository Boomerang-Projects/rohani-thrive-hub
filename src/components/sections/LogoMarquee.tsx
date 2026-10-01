import bup from "@/assets/logos/bup-region-stockholm-white.png";
import haninge from "@/assets/logos/haninge-kommun.png";
import vuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm-white.png";
import regionStockholm from "@/assets/logos/region-stockholm-white.png";
import karolinska from "@/assets/logos/karolinska.png";
import sverigesRadio from "@/assets/logos/sveriges-radio.png";
import psykologtidningen from "@/assets/logos/psykologtidningen.png";
import dinPsykolog from "@/assets/logos/din-psykolog.png";
import somaya from "@/assets/logos/somaya.png";
import fryshuset from "@/assets/logos/fryshuset.png";
import tillsammans from "@/assets/logos/tillsammans-for-sverige.png";
import gro from "@/assets/logos/gro-studio.png";
import hocs from "@/assets/logos/hocs-white.png";
import hero from "@/assets/logos/hero.png";
import betteryou from "@/assets/logos/betteryou.png";
import myHappyHead from "@/assets/logos/my-happy-head.png";
import sats from "@/assets/logos/sats.png";
import lululemon from "@/assets/logos/lululemon.png";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";

/** The menu link "Har arbetat med" fires this event: scroll to the band, then open the list. */
export const OPEN_LOGOS_EVENT = "rohani:open-logos";

// Logos in their original colours. Exception: logos with black text (the Region
// Stockholm ones and lululemon) use white-text versions, so they show on the brown band.
// Order: logos that look alike (the three Region Stockholm ones, and Fryshuset and
// Tillsammans för Sverige) are spread out so they never sit next to each other.
const logos = [
  { src: bup, alt: "Barn- och ungdomspsykiatri, Region Stockholm", w: 755, h: 100 },
  { src: haninge, alt: "Haninge kommun", w: 607, h: 91 },
  { src: sverigesRadio, alt: "Sveriges Radio", w: 438, h: 80 },
  { src: somaya, alt: "Somaya kvinnostödjour", w: 500, h: 100 },
  { src: fryshuset, alt: "Fryshuset", w: 382, h: 66 },
  { src: hocs, alt: "HOCS, House of Creatives Solna", w: 204, h: 89 },
  { src: vuxen, alt: "Vuxenpsykiatrin, Region Stockholm", w: 500, h: 100 },
  { src: psykologtidningen, alt: "Psykologtidningen", w: 341, h: 91 },
  { src: betteryou, alt: "Better You", w: 270, h: 97 },
  { src: karolinska, alt: "Karolinska Universitetssjukhuset", w: 500, h: 100 },
  { src: hero, alt: "Hero idrottsförening", w: 242, h: 94 },
  { src: myHappyHead, alt: "My Happy Head", w: 353, h: 69 },
  { src: regionStockholm, alt: "Region Stockholm", w: 279, h: 71 },
  { src: tillsammans, alt: "Tillsammans för Sverige", w: 273, h: 145 },
  { src: dinPsykolog, alt: "Din psykolog", w: 414, h: 71 },
  { src: gro, alt: "g:ro studio", w: 1200, h: 498 },
  { src: sats, alt: "SATS", w: 245, h: 80 },
  { src: lululemon, alt: "lululemon", w: 395, h: 80 },
];


/**
 * A rolling band of logos (row rendered twice for a seamless loop).
 * Clicking the band opens a dialog listing every logo one after another.
 */
export function LogoMarquee({ className = "mt-10 md:mt-16" }: { className?: string }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      const band = document.getElementById("samarbeten");
      band?.scrollIntoView({ behavior: "smooth", block: "center" });
      // Let the page glide to the band first, then open the list
      window.setTimeout(() => setOpen(true), 700);
    };
    window.addEventListener(OPEN_LOGOS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_LOGOS_EVENT, onOpen);
  }, []);

  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={logo.alt} className="flex items-center">
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            className="h-8 md:h-11 w-auto max-w-none"
            // Load right away, and reserve each logo's real size up front,
            // so the row never changes width mid-roll. A width change is what makes it jump.
            width={logo.w}
            height={logo.h}
            decoding="async"
            draggable={false}
          />
          <span className="mx-7 md:mx-10 h-1.5 w-1.5 rounded-full bg-background/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* No strip of its own: the link floats just above the band, in the space that is already there */}
      <div className={`${className} relative`}>
        <div className="pointer-events-none absolute bottom-full inset-x-0">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="pointer-events-auto group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent underline underline-offset-4 decoration-accent/40 transition-colors duration-300 hover:decoration-accent"
            >
              {t("Har arbetat med", "Worked with")}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      <DialogTrigger asChild>
        <button
          type="button"
          id="samarbeten"
          aria-label={t("Visa alla organisationer jag har arbetat med", "Show all organisations I have worked with")}
          className="block w-full cursor-pointer scroll-mt-32 bg-mocha py-10 md:py-12 text-left"
        >
          <div className="logo-marquee overflow-hidden">
            <div className="logo-marquee-track flex w-max">
              {row(false)}
              {row(true)}
            </div>
          </div>
        </button>
      </DialogTrigger>
      </div>
      <DialogContent className="max-h-[85vh] overflow-y-auto bg-mocha border-none sm:max-w-md">
        <DialogTitle className="text-center text-xs uppercase tracking-[0.3em] text-background">
          {/* "Worked with" is true for employers and partners alike */}
          {t("Har arbetat med", "Worked with")}
        </DialogTitle>
        <ul className="mt-4 flex flex-col items-center gap-8 pb-4">
          {logos.map((logo) => (
            <li key={logo.alt} className="flex w-full flex-col items-center gap-3">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto max-w-[80%] object-contain"
              />
              <span className="text-center text-[11px] uppercase tracking-[0.2em] text-background/80">
                {logo.alt}
              </span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
