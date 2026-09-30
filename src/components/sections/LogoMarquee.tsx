import bup from "@/assets/logos/bup-region-stockholm.png";
import haninge from "@/assets/logos/haninge-kommun.png";
import vuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm.png";
import karolinska from "@/assets/logos/karolinska.png";
import sverigesRadio from "@/assets/logos/sveriges-radio.png";
import psykologtidningen from "@/assets/logos/psykologtidningen.png";
import dinPsykolog from "@/assets/logos/din-psykolog.png";
import somaya from "@/assets/logos/somaya.png";
import fryshuset from "@/assets/logos/fryshuset.png";
import hocs from "@/assets/logos/hocs.png";
import betteryou from "@/assets/logos/betteryou.png";
import myHappyHead from "@/assets/logos/my-happy-head.png";
import sats from "@/assets/logos/sats.png";
import lululemon from "@/assets/logos/lululemon.png";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Logos in their original colours, exactly as supplied. Transparent PNGs only.
const logos = [
  { src: bup, alt: "Barn- och ungdomspsykiatri, Region Stockholm", w: 755, h: 100 },
  { src: haninge, alt: "Haninge kommun", w: 755, h: 100 },
  { src: vuxen, alt: "Vuxenpsykiatrin, Region Stockholm", w: 500, h: 100 },
  { src: karolinska, alt: "Karolinska Universitetssjukhuset", w: 500, h: 100 },
  { src: sverigesRadio, alt: "Sveriges Radio", w: 438, h: 80 },
  { src: psykologtidningen, alt: "Psykologtidningen", w: 341, h: 91 },
  { src: dinPsykolog, alt: "Din psykolog", w: 500, h: 100 },
  { src: somaya, alt: "Somaya kvinnostödjour", w: 500, h: 100 },
  { src: fryshuset, alt: "Fryshuset", w: 500, h: 100 },
  { src: hocs, alt: "House of Creatives Solna", w: 500, h: 100 },
  { src: betteryou, alt: "Better You", w: 500, h: 100 },
  { src: myHappyHead, alt: "My Happy Head", w: 500, h: 100 },
  { src: sats, alt: "SATS", w: 500, h: 100 },
  { src: lululemon, alt: "lululemon", w: 500, h: 100 },
];


/**
 * A rolling band of logos (row rendered twice for a seamless loop).
 * Clicking the band opens a dialog listing every logo one after another.
 */
export function LogoMarquee({ className = "mt-10 md:mt-16" }: { className?: string }) {
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
          <span className="mx-10 md:mx-16 h-1.5 w-1.5 rounded-full bg-background/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          id="samarbeten"
          aria-label="Visa alla loggor"
          className={`${className} block w-full cursor-pointer scroll-mt-32 bg-mocha py-10 md:py-12 text-left`}
        >
          <div className="logo-marquee overflow-hidden">
            <div className="logo-marquee-track flex w-max">
              {row(false)}
              {row(true)}
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto bg-mocha border-none sm:max-w-md">
        <DialogTitle className="text-center text-xs uppercase tracking-[0.3em] text-background">
          Samarbeten
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
