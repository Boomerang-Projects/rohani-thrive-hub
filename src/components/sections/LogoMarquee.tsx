import bup from "@/assets/logos/bup-region-stockholm.png";
import haninge from "@/assets/logos/haninge-kommun-crest.png.asset.json";
import vuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm.png";
import karolinska from "@/assets/logos/karolinska.png";
import sverigesRadio from "@/assets/logos/sveriges-radio.png";
import psykologtidningen from "@/assets/logos/psykologtidningen.png";

const logos: { src: string; alt: string; color?: boolean }[] = [
  { src: haninge.url, alt: "Haninge kommun", color: true },
  { src: vuxen, alt: "Vuxenpsykiatrin, Region Stockholm" },
  { src: karolinska, alt: "Karolinska Universitetssjukhuset" },
  { src: sverigesRadio, alt: "Sveriges Radio" },
  { src: bup, alt: "Barn- och ungdomspsykiatri, Region Stockholm" },
  { src: psykologtidningen, alt: "Psykologtidningen" },
];

/**
 * A slowly rolling band of logos with a small white dot between each one.
 *
 * How the endless loop works: the row of logos is rendered twice, side by
 * side. The whole track slides left by exactly half its width (one full row),
 * then jumps back to the start. Because the second row looks identical to the
 * first, the jump is invisible and it seems to roll forever.
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
    // Outer div: the dark background. Inner div: the edge fade.
    // Keeping them apart means only the logos fade, not the background.
    <div className="mt-10 md:mt-16 bg-mocha py-8 md:py-12">
      <div className="logo-marquee overflow-hidden">
        <div className="logo-marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
