import bup from "@/assets/logos/bup-region-stockholm.png";
import haninge from "@/assets/logos/haninge-kommun-crest.png.asset.json";
import vuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm.png";
import karolinska from "@/assets/logos/karolinska.png";
import sverigesRadio from "@/assets/logos/sveriges-radio.png";
import psykologtidningen from "@/assets/logos/psykologtidningen.png";
import abfSodertorn from "@/assets/logos/partners/abf-sodertorn.jpg.asset.json";
import betteryou from "@/assets/logos/partners/betteryou.webp.asset.json";
import somaya from "@/assets/logos/partners/somaya-kvinnostodjour.jpg.asset.json";
import hocs from "@/assets/logos/partners/house-of-creatives-solna.jpg.asset.json";
import fryshuset from "@/assets/logos/partners/fryshuset.png.asset.json";
import lululemon from "@/assets/logos/partners/lululemon.jpg.asset.json";
import sats from "@/assets/logos/partners/sats.jpg.asset.json";
import myHappyHead from "@/assets/logos/partners/my-happy-head.jpg.asset.json";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const logos: { src: string; alt: string; color?: boolean }[] = [
  { src: haninge.url, alt: "Haninge kommun", color: true },
  { src: vuxen, alt: "Vuxenpsykiatrin, Region Stockholm" },
  { src: karolinska, alt: "Karolinska Universitetssjukhuset" },
  { src: sverigesRadio, alt: "Sveriges Radio" },
  { src: bup, alt: "Barn- och ungdomspsykiatri, Region Stockholm" },
  { src: psykologtidningen, alt: "Psykologtidningen" },
  { src: abfSodertorn.url, alt: "ABF Södertörn" },
  { src: betteryou.url, alt: "Better You" },
  { src: somaya.url, alt: "Somaya kvinnostödjour" },
  { src: hocs.url, alt: "House of Creatives Solna" },
  { src: fryshuset.url, alt: "Fryshuset" },
  { src: lululemon.url, alt: "lululemon" },
  { src: sats.url, alt: "SATS" },
  { src: myHappyHead.url, alt: "My Happy Head" },
];

/**
 * A rolling band of logos (row rendered twice for a seamless loop).
 * Clicking the band opens a dialog listing every logo one after another.
 */
export function LogoMarquee({ className = "mt-10 md:mt-16" }: { className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={logo.alt} className="flex w-[46vw] shrink-0 items-center justify-center px-2 md:w-auto md:px-0">
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            className="h-10 max-h-full w-auto max-w-[42vw] object-contain opacity-100 md:h-11 md:max-w-none [filter:drop-shadow(0_0_1px_rgba(0,0,0,0.2))]"
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
          id="samarbeten"
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
