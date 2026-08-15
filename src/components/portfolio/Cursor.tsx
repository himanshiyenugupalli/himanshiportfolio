import { useEffect, useState, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [chromeHovered, setChromeHovered] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number | null = null;
    let lastTarget: HTMLElement | null = null;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      if (target !== lastTarget) {
        lastTarget = target;
        if (!target) return;
        const tagName = target.tagName;
        const isDirectInteractive =
          tagName === "A" || tagName === "BUTTON" || tagName === "INPUT" || tagName === "TEXTAREA";
        const isInteractive =
          isDirectInteractive || !!target.closest("a, button, [role='button'], input, textarea, [data-hover]");
        const isChrome = target.classList?.contains("chrome-interactive") || !!target.closest(".chrome-interactive");

        setHovered(isInteractive);
        setChromeHovered(isChrome);
      }
    };

    const render = () => {
      // Smooth lerp for ring follower
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Support reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) return null;

  return (
    <>
      <style>{`
        body, a, button, [role='button'], input, textarea {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[999] transition-transform duration-75 ease-out mix-blend-difference ${
          hovered ? "scale-150" : chromeHovered ? "scale-[2.5]" : "scale-100"
        }`}
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[999] transition-all duration-150 ease-out ${
          hovered
            ? "scale-150 border-white/90"
            : chromeHovered
            ? "scale-[2.2] border-white/80"
            : "scale-100 border-white/40"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
