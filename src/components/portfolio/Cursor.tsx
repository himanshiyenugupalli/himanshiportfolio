import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [chromeHovered, setChromeHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    let rafId: number | null = null;
    let lastTarget: HTMLElement | null = null;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (target !== lastTarget) {
        lastTarget = target;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          if (!target) return;
          const tagName = target.tagName;
          const isDirectInteractive =
            tagName === "A" || tagName === "BUTTON" || tagName === "INPUT" || tagName === "TEXTAREA";
          const isInteractive =
            isDirectInteractive || !!target.closest("a, button, [role='button'], input, textarea, [data-hover]");
          const isChrome = target.classList?.contains("chrome-interactive") || !!target.closest(".chrome-interactive");

          setHovered(isInteractive);
          setChromeHovered(isChrome);
        });
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

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
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2mix-blend-difference"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={{
          scale: hovered ? 1.5 : chromeHovered ? 2.5 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={{
          scale: hovered ? 1.8 : chromeHovered ? 2.2 : 1,
          borderColor: hovered ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)",
        }}
      />
    </>
  );
}
