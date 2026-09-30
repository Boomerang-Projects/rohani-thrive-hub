import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

/**
 * Full-screen article viewer with smooth open/close, pinch-to-zoom
 * (two-finger on touch, ctrl+wheel / wheel on desktop) and a small
 * square close button in the top-right corner.
 */
export function ArticleLightbox({ src, alt, open, onClose }: Props) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const frameRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ dist: number; zoom: number } | null>(null);
  const pan = useRef<{ px: number; py: number } | null>(null);

  const apply = useCallback((z: number, o: { x: number; y: number }) => {
    zoomRef.current = z;
    offsetRef.current = o;
    setZoom(z);
    setOffset(o);
  }, []);

  const clampOffset = useCallback(
    (o: { x: number; y: number }, z: number) => {
      const el = frameRef.current;
      if (!el) return o;
      const r = el.getBoundingClientRect();
      const maxX = ((z - 1) * r.width) / 2;
      const maxY = ((z - 1) * r.height) / 2;
      return {
        x: Math.min(maxX, Math.max(-maxX, o.x)),
        y: Math.min(maxY, Math.max(-maxY, o.y)),
      };
    },
    []
  );

  const centerRelative = useCallback((cx: number, cy: number) => {
    const el = frameRef.current;
    if (!el) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    return { x: cx - (r.left + r.width / 2), y: cy - (r.top + r.height / 2) };
  }, []);

  const zoomAround = useCallback(
    (nextZoom: number, cx: number, cy: number) => {
      const z0 = zoomRef.current;
      const z1 = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
      const p = centerRelative(cx, cy);
      const k = z1 / z0;
      const o0 = offsetRef.current;
      apply(
        z1,
        clampOffset({ x: p.x - (p.x - o0.x) * k, y: p.y - (p.y - o0.y) * k }, z1)
      );
    },
    [apply, centerRelative, clampOffset]
  );

  /* Mount/unmount with fade + scale transition */
  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
    const t = setTimeout(() => {
      setMounted(false);
      apply(1, { x: 0, y: 0 });
    }, 300);
    return () => clearTimeout(t);
  }, [open, apply]);

  /* Scroll lock + Escape */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  /* Wheel zoom (trackpad pinch arrives as ctrl+wheel) */
  useEffect(() => {
    const el = frameRef.current;
    if (!el || !mounted) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = Math.exp(-e.deltaY * 0.002);
      zoomAround(zoomRef.current * factor, e.clientX, e.clientY);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [mounted, zoomAround]);

  const onPointerDown = (e: React.PointerEvent) => {
    // Let the close button receive its own click. Capturing the pointer here
    // would redirect the click to the frame, and the X would do nothing.
    if ((e.target as Element).closest("button")) return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        zoom: zoomRef.current,
      };
      pan.current = null;
    } else if (pointers.current.size === 1 && zoomRef.current > 1) {
      pan.current = { px: e.clientX, py: e.clientY };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const cx = (a.x + b.x) / 2;
      const cy = (a.y + b.y) / 2;
      zoomAround(
        (pinch.current.zoom * dist) / pinch.current.dist,
        cx,
        cy
      );
    } else if (pointers.current.size === 1 && pan.current) {
      const dx = e.clientX - pan.current.px;
      const dy = e.clientY - pan.current.py;
      pan.current = { px: e.clientX, py: e.clientY };
      const o0 = offsetRef.current;
      apply(zoomRef.current, clampOffset({ x: o0.x + dx, y: o0.y + dy }, zoomRef.current));
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 0) {
      pan.current = null;
    } else if (pointers.current.size === 1 && zoomRef.current > 1) {
      const [p] = [...pointers.current.values()];
      pan.current = { px: p.x, py: p.y };
    }
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 transition-opacity duration-300 ease-out ${
        shown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-foreground/90"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={frameRef}
        className={`relative max-h-full max-w-full touch-none transition-transform duration-300 ease-out ${
          shown ? "scale-100" : "scale-95"
        }`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-[85vh] w-auto max-w-full select-none object-contain"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transition: "transform 180ms ease-out",
          }}
        />
        <button
          type="button"
          onClick={onClose}
          aria-label={alt === "" ? "Close" : "Stäng"}
          className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground shadow-[0_8px_24px_-8px_rgba(58,41,34,0.4)] transition-colors duration-200 hover:bg-background/90"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>
      </div>
    </div>
  );
}
