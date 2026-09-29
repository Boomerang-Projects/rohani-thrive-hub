import bup from "@/assets/logos/bup-region-stockholm.png";
import haninge from "@/assets/logos/haninge-kommun-crest.png.asset.json";
import vuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm.png";
import karolinska from "@/assets/logos/karolinska.png";
import sverigesRadio from "@/assets/logos/sveriges-radio.png";
import psykologtidningen from "@/assets/logos/psykologtidningen.png";

const logos = [
  { src: bup, alt: "Barn- och ungdomspsykiatri, Region Stockholm" },
  { src: haninge.url, alt: "Haninge kommun", color: true },
  { src: vuxen, alt: "Vuxenpsykiatrin, Region Stockholm" },
  { src: karolinska, alt: "Karolinska Universitetssjukhuset" },
  { src: sverigesRadio, alt: "Sveriges Radio" },
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
        <li key={logo.alt} className="flex items-center">
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            className={`h-8 md:h-11 w-auto max-w-none opacity-85 ${logo.color ? "[filter:drop-shadow(0_0_1px_rgba(0,0,0,0.2))]" : "[filter:brightness(0)_invert(1)]"}`}
            loading="lazy"
          />
          <span className="mx-10 md:mx-16 h-1.5 w-1.5 rounded-full bg-background/70" />
        </li>
      ))}
    </ul>
  );

  return (
    // Outer div: the dark background. Inner div: the edge fade.
    // Keeping them apart means only the logos fade, not the background.
    <div className="mt-10 md:mt-16 bg-mocha py-10 md:py-12">
      <div className="logo-marquee overflow-hidden">
        <div className="logo-marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
