import bup from "@/assets/logos/bup-region-stockholm.png";
import haninge from "@/assets/logos/haninge-kommun-crest.png.asset.json";
import vuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm.png";
import karolinska from "@/assets/logos/karolinska.png";
import sverigesRadio from "@/assets/logos/sveriges-radio.png";
import psykologtidningen from "@/assets/logos/psykologtidningen.png";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const logos: { src: string; alt: string; color?: boolean }[] = [
  { src: haninge.url, alt: "Haninge kommun", color: true },
  { src: vuxen, alt: "Vuxenpsykiatrin, Region Stockholm" },
  { src: karolinska, alt: "Karolinska Universitetssjukhuset" },
  { src: sverigesRadio, alt: "Sveriges Radio" },
  { src: bup, alt: "Barn- och ungdomspsykiatri, Region Stockholm" },
  { src: psykologtidningen, alt: "Psykologtidningen" },
];

/**
 * A rolling band of logos (row rendered twice for a seamless loop).
 * Clicking the band opens a dialog listing every logo one after another.
 */
export function LogoMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={logo.alt} className="flex w-[78vw] shrink-0 items-center justify-center md:w-auto">
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            className="h-10 max-h-full w-auto max-w-[68vw] object-contain opacity-100 md:h-11 md:max-w-none [filter:drop-shadow(0_0_1px_rgba(0,0,0,0.2))]"
            loading="lazy"
          />
          <span className="hidden md:block md:mx-16 h-1.5 w-1.5 rounded-full bg-background/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Visa alla loggor"
          className="mt-10 md:mt-16 block w-full cursor-pointer bg-mocha py-8 md:py-12 text-left"
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
                className="h-14 w-auto max-w-[80%] object-contain [filter:drop-shadow(0_0_1px_rgba(0,0,0,0.2))]"
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
