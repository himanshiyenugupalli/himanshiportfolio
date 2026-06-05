import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { IdCard } from "./IdCard";
import { ArrowRight, Mail } from "lucide-react";

/**
 * Two-panel cinematic hero with a horizontal swipe transition driven by
 * vertical scroll. A single continuous lanyard strap is drawn across both
 * panels inside a shared 200vw inner container — as the container slides
 * left, the strap moves with it, so it never visually breaks or resets.
 *
 * Layout:
 *   [ outer: 200vh, position: relative ]
 *     [ sticky: 100vh, overflow hidden ]
 *       [ track: 200vw, translateX from 0 → -100vw ]
 *         [ Panel 1: 100vw ]  [ Panel 2: 100vw ]
 *         [ Strap SVG: 200vw absolute over both ]
 */

const SERIF = "'Instrument Serif', 'Cormorant Garamond', serif";
const DISPLAY = "'Cormorant Garamond', 'Instrument Serif', serif";

function Particles() {
  const dots = Array.from({ length: 36 }, (_, i) => ({
    x: (i * 97) % 100,
    y: (i * 53) % 100,
    d: 1.4 + ((i * 31) % 26) / 10,
    delay: (i % 12) * 0.4,
  }));
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {dots.map((p, i) => (
        <motion.span
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.d,
            height: p.d,
            borderRadius: 999,
            background: i % 4 === 0 ? "#c084fc" : i % 4 === 1 ? "#7fd4ff" : "#ffffff",
            boxShadow: "0 0 8px currentColor",
            opacity: 0.4,
          }}
          animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -14, 0] }}
          transition={{ duration: 4 + (i % 5), delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/**
 * Continuous strap drawn across both panels. The SVG itself is 200vw wide
 * and sits inside the swiping track — no scroll-linked path morphing is
 * required, because the swipe already moves the strap into position.
 *
 * Path (in viewBox 200×100, preserveAspectRatio none → x stretches to 200vw):
 *   - Enters top of Panel 1 around x≈88 (right side of first viewport)
 *   - Curves down and to the right
 *   - Lands on top of the ID card in Panel 2 around x≈122 (left side of
 *     the second viewport, since 100 + ~22 of 100)
 */
/**
 * Realistic hanging lanyard with a natural drape and one loose loop.
 * Single SVG spans the full 200vw track. The ribbon enters top-right of
 * Panel 1, drapes down-left, loops once around the upper area, and lands
 * on the metal slot at the top of the ID card in Panel 2.
 *
 * viewBox 200×100, preserveAspectRatio="none" → x stretches to 200vw,
 * y stretches to 100vh. The ID card slot sits roughly at x≈128, y≈51.
 */
function ContinuousStrap({ endX, endY }: { endX: number; endY: number }) {
  // Single continuous path spanning both panels. The end point (endX, endY)
  // is measured from the live ID-card slot position so the strap stays
  // perfectly anchored to the clip across every viewport size — no seam,
  // no drift, no distortion during the horizontal swipe.
  //
  // The starting anchor sits in Panel 1 (top, around x≈70) and the curve
  // control points are derived so the drape always lands on (endX, endY).
  // Geometry: "straight → fold → spiral" lanyard drape.
  //  1. Straight diagonal segment from the top anchor down a bit.
  //  2. A short fold (the strap bends back on itself — rendered as a small
  //     overlapping flap below).
  //  3. A spiral-style sweeping curve that loops once before settling on
  //     the clip endpoint.
  const startX = Math.max(36, endX - 78);
  // 1) Straight diagonal bit from top anchor — gentle slope, not vertical.
  const sx = startX + 18;
  const sy = 16;
  // 2) Fold pivot — short kink back along the same axis so it reads as a
  //    natural doubled-over crease, not a hard zig-zag.
  const foldAngle = Math.atan2(sy - -6, sx - startX); // direction of the straight bit
  const foldLen = 4.2;
  const fx = sx + Math.cos(foldAngle) * foldLen;
  const fy = sy + Math.sin(foldAngle) * foldLen;
  // 3) Spiral drape — one easy S-curve that swings outward, then settles
  //    onto the clip. Control points are anchored to the fold so the
  //    tangent is continuous (no kink leaving the fold).
  const tangentX = Math.cos(foldAngle);
  const tangentY = Math.sin(foldAngle);
  const loopOutX = fx + tangentX * 14 + 6;
  const loopOutY = fy + tangentY * 14 + 14;
  const loopBackX = endX - 28;
  const loopBackY = endY + 4;
  const approachX = endX - 10;
  const approachY = endY - 6;
  const d =
    `M ${startX} -6 ` +
    `L ${sx} ${sy} ` +
    `L ${fx} ${fy} ` +
    `C ${loopOutX} ${loopOutY}, ${loopBackX} ${loopBackY}, ${approachX} ${approachY} ` +
    `S ${endX - 3} ${endY - 1}, ${endX} ${endY}`;
  // Fold flap — short piece doubled back along the straight-bit axis.
  const flapLen = 11;
  const flapX2 = fx - tangentX * flapLen;
  const flapY2 = fy - tangentY * flapLen + 1.4;
  const flapD = `M ${fx + 1.2} ${fy + 0.6} L ${flapX2} ${flapY2}`;
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 2,
      }}
    >
      <defs>
        {/* Shiny black satin — deep black edges, lifted gray midline for roundness */}
        {/* Dark neon purple satin — saturated violet edges, glowing neon midline
            tuned bright enough to read on the dark hero bg without going glossy. */}
        <linearGradient id="strapFabric" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#1a0633" />
          <stop offset="8%"  stopColor="#26094a" />
          <stop offset="22%" stopColor="#3a0e70" />
          <stop offset="42%" stopColor="#5e1cb0" />
          <stop offset="50%" stopColor="#8a2be2" />
          <stop offset="58%" stopColor="#5e1cb0" />
          <stop offset="78%" stopColor="#3a0e70" />
          <stop offset="92%" stopColor="#26094a" />
          <stop offset="100%" stopColor="#1a0633" />
        </linearGradient>
        {/* Medium specular hotline — softer, wider falloff (matte-neon, not wet). */}
        <linearGradient id="strapHotline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="rgba(230,190,255,0)" />
          <stop offset="38%" stopColor="rgba(230,190,255,0)" />
          <stop offset="50%" stopColor="rgba(235,205,255,0.45)" />
          <stop offset="62%" stopColor="rgba(230,190,255,0)" />
          <stop offset="100%" stopColor="rgba(230,190,255,0)" />
        </linearGradient>
        {/* Secondary off-center neon sheen — moderate. */}
        <linearGradient id="strapSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="rgba(170,80,240,0)" />
          <stop offset="62%" stopColor="rgba(170,80,240,0)" />
          <stop offset="70%" stopColor="rgba(190,100,250,0.35)" />
          <stop offset="78%" stopColor="rgba(170,80,240,0)" />
          <stop offset="100%" stopColor="rgba(170,80,240,0)" />
        </linearGradient>
        {/* Tight horizontal rib weave — denser, multi-tone for a richer satin look */}
        <pattern id="strapWeave" width="1.1" height="1.1" patternUnits="userSpaceOnUse">
          <rect width="1.1" height="1.1" fill="transparent" />
          <line x1="0" y1="0.22" x2="1.1" y2="0.22" stroke="rgba(255,215,255,0.13)" strokeWidth="0.14" />
          <line x1="0" y1="0.55" x2="1.1" y2="0.55" stroke="rgba(50,12,85,0.30)"    strokeWidth="0.16" />
          <line x1="0" y1="0.85" x2="1.1" y2="0.85" stroke="rgba(255,200,255,0.07)" strokeWidth="0.12" />
        </pattern>
        {/* Vertical micro-fibers — slightly tighter, brighter highlights */}
        <pattern id="strapFiber" width="0.6" height="1.2" patternUnits="userSpaceOnUse">
          <line x1="0.15" y1="0" x2="0.15" y2="1.2" stroke="rgba(235,190,255,0.09)" strokeWidth="0.12" />
          <line x1="0.45" y1="0" x2="0.45" y2="1.2" stroke="rgba(45,12,80,0.28)" strokeWidth="0.12" />
        </pattern>
        {/* Diagonal twill — subtle anisotropic sheen direction */}
        <pattern id="strapTwill" width="2.4" height="2.4" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
          <rect width="2.4" height="2.4" fill="transparent" />
          <line x1="0" y1="0.6" x2="2.4" y2="0.6" stroke="rgba(220,170,255,0.10)" strokeWidth="0.18" />
          <line x1="0" y1="1.5" x2="2.4" y2="1.5" stroke="rgba(30,8,60,0.22)" strokeWidth="0.16" />
        </pattern>
        <filter id="strapSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.35" />
        </filter>
        <filter id="strapTightBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.18" />
        </filter>
        <filter id="strapDropShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        {/* Procedural micro-fiber noise — fractal turbulence tinted dark,
            composited into the strap to add a tactile satin grain. */}
        <filter id="strapNoise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="2.4" numOctaves="2" seed="7" result="n" />
          <feColorMatrix in="n" type="matrix"
            values="0 0 0 0 0.10
                    0 0 0 0 0.03
                    0 0 0 0 0.18
                    0 0 0 0.55 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        {/* Coarser edge-wear noise — neon purple scuffs along the rim. */}
        <filter id="strapEdgeWear" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="3" result="w" />
          <feColorMatrix in="w" type="matrix"
            values="0 0 0 0 0.65
                    0 0 0 0 0.35
                    0 0 0 0 0.95
                    0 0 0 0.7 -0.35" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        {/* Metallic gradient for the clip + ring */}
        <linearGradient id="clipMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8ebef" />
          <stop offset="35%" stopColor="#a8aeb8" />
          <stop offset="55%" stopColor="#6a7280" />
          <stop offset="100%" stopColor="#2a313c" />
        </linearGradient>
      </defs>

      {/* Soft cast shadow under the strap */}
      <path d={d} stroke="#000000" strokeOpacity="0.7" strokeWidth="56" fill="none"
            filter="url(#strapDropShadow)" vectorEffect="non-scaling-stroke" strokeLinecap="round"
            style={{ transform: "translate(1.6px, 2px)" }} />

      {/* Outer piping — deep violet instead of pure black so the spiral
          doesn't read as a black band */}
      <path d={d} stroke="#1a0533" strokeOpacity="1" strokeWidth="50" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" />

      {/* Main shiny satin body with rounded cross-section shading */}
      <path d={d} stroke="url(#strapFabric)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" />

      {/* Horizontal rib weave overlay */}
      <path d={d} stroke="url(#strapWeave)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" opacity="0.85" />

      {/* Vertical micro-fiber overlay */}
      <path d={d} stroke="url(#strapFiber)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" opacity="0.45" />

      {/* Diagonal twill — directional satin grain */}
      <path d={d} stroke="url(#strapTwill)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" opacity="0.35" />

      {/* (removed the multiply inner-rim and the narrower 36-wide fabric overlay —
          both were stacking dark gradient edges over the bright midline and
          producing the flat dark pill down the centre of the strap.) */}

      {/* Secondary cool sheen offset right of center */}
      <path d={d} stroke="url(#strapSheen)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapSoftBlur)" />

      {/* Centered specular hotline — the bright glossy glint */}
      <path d={d} stroke="url(#strapHotline)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapTightBlur)" />

      {/* Hair-thin top highlight — softened so the strap reads matte-neon, not wet */}
      <path d={d} stroke="#e8c8ff" strokeOpacity="0.35" strokeWidth="0.6" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapTightBlur)" />

      {/* Procedural micro-fiber noise grain on top of the satin body */}
      <path d={d} stroke="#ffffff" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapNoise)" opacity="0.4"
            style={{ mixBlendMode: "overlay" }} />

      {/* Coarser edge wear — brighter neon scuffs for readable rim contrast */}
      <path d={d} stroke="#ffffff" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapEdgeWear)" opacity="0.55"
            style={{ mixBlendMode: "screen" }} />

      {/* (fold flap removed — was stacking a dark pill on top of the strap) */}




      {/* Stitch lines running parallel along both edges */}
      <path d={d} stroke="#3a3a3a" strokeOpacity="0.9" strokeWidth="0.6"
            fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round"
            strokeDasharray="1.4 1.0"
            style={{ transform: "translate(-3.2px, 0px)" }} />
      <path d={d} stroke="#3a3a3a" strokeOpacity="0.9" strokeWidth="0.6"
            fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round"
            strokeDasharray="1.4 1.0"
            style={{ transform: "translate(3.2px, 0px)" }} />

      {/* Subtle specular highlight slightly off-center */}
      <path d={d} stroke="#4a4a4a" strokeOpacity="0.5" strokeWidth="2" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapSoftBlur)"
            style={{ transform: "translate(-0.4px, 0px)" }} />


      {/* Metal swivel clip at end — pinned to the live card slot */}
      <g data-testid="strap-clip" transform={`translate(${endX}, ${endY})`}>
        {/* swivel ring */}
        <circle cx="0" cy="-1.8" r="1.3" fill="none" stroke="url(#clipMetal)" strokeWidth="0.55"
                vectorEffect="non-scaling-stroke" />
        {/* lobster clasp body */}
        <rect x="-1.2" y="-0.6" width="2.4" height="3" rx="0.5" fill="url(#clipMetal)"
              stroke="#0a0d12" strokeWidth="0.18" vectorEffect="non-scaling-stroke" />
        {/* clasp lever */}
        <line x1="-0.6" y1="0.2" x2="-0.6" y2="2.2" stroke="#1a1f28"
              strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
        {/* highlight */}
        <line x1="-0.3" y1="0" x2="-0.3" y2="2.4" stroke="#ffffff" strokeOpacity="0.7"
              strokeWidth="0.18" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

export function CinematicHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardSlotRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 });

  // Measure the live card-slot position and convert it to the strap SVG's
  // viewBox coordinates (200×100). Re-measure on resize so the strap end
  // stays glued to the clip across every viewport.
  const [end, setEnd] = useState({ x: 128, y: 53 });
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      setIsMobile(window.innerWidth <= 820);
      const track = trackRef.current;
      const slot = cardSlotRef.current;
      if (!track || !slot) return;
      const t = track.getBoundingClientRect();
      const s = slot.getBoundingClientRect();
      if (t.width === 0 || t.height === 0) return;
      const cx = s.left + s.width / 2 - t.left;
      const cy = s.top + s.height / 2 - t.top;
      setEnd({ x: (cx / t.width) * 200, y: (cy / t.height) * 100 });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (cardSlotRef.current) ro.observe(cardSlotRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const trackWidth = isMobile ? "300vw" : "200vw";
  const trackTranslateEnd = isMobile ? "-200vw" : "-100vw";
  const panel2Width = isMobile ? "200vw" : "100vw";
  const heroHeight = isMobile ? "280vh" : "220vh";

  // Track slides left based on dynamic width
  const trackX = useTransform(p, [0, 1], ["0vw", trackTranslateEnd]);

  // Subtle background parallax (independent layer)
  const bgX = useTransform(p, [0, 1], ["0%", "-15%"]);

  return (
    <section id="hero" ref={wrapRef} style={{ position: "relative", height: heroHeight, zIndex: 5 }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {/* Shared ambient background */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute", inset: -80, x: bgX,
            background:
              "radial-gradient(45% 50% at 18% 35%, rgba(168,85,247,0.22), transparent 70%)," +
              "radial-gradient(35% 40% at 60% 80%, rgba(61,139,255,0.16), transparent 70%)," +
              "radial-gradient(30% 35% at 92% 20%, rgba(127,212,255,0.18), transparent 70%)," +
              "radial-gradient(35% 40% at 130% 60%, rgba(168,85,247,0.20), transparent 70%)",
          }}
        />
        <div className="orb orb-a" style={{ position: "absolute" }} />
        <div className="orb orb-b" style={{ position: "absolute" }} />
        <Particles />

        {/* Swiping track — Dynamic width, holds both panels + the continuous strap */}
        <motion.div
          ref={trackRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: trackWidth,
            display: "flex",
            x: trackX,
            willChange: "transform",
          }}
        >
          {/* Continuous lanyard strap spanning both panels */}
          <ContinuousStrap endX={end.x} endY={end.y} />

          {/* ============ PANEL 1 ============ */}
          <div
            style={{
              width: "100vw",
              height: "100%",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              padding: "0 clamp(24px, 6vw, 96px)",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div style={{ maxWidth: 760 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-mono"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "7px 14px", borderRadius: 999,
                  background: "rgba(168,85,247,0.06)",
                  border: "1px solid rgba(168,85,247,0.32)",
                  color: "rgba(192,132,252,0.95)",
                  fontSize: 10.5, letterSpacing: "0.32em", textTransform: "uppercase",
                  marginBottom: 32,
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: 999, background: "#c084fc" }} />
                available for work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ margin: 0, lineHeight: 0.88 }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: DISPLAY,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "clamp(3.5rem, 11vw, 10rem)",
                    letterSpacing: "-0.045em",
                    color: "#f5f3ee",
                  }}
                >
                  Himanshi
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(3rem, 10vw, 9rem)",
                    letterSpacing: "-0.02em",
                    color: "#e8d9b5",
                    marginTop: "-0.08em",
                  }}
                >
                  Yenugupalli<span style={{ color: "#c084fc" }}>.</span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.85 }}
                className="font-mono"
                style={{
                  marginTop: 26, fontSize: 11, letterSpacing: "0.36em",
                  color: "rgba(170,185,200,0.9)", textTransform: "uppercase",
                  maxWidth: 620, lineHeight: 1.8,
                }}
              >
                AI Data Annotator <span style={{ color: "#a855f7" }}>|</span> Human Data Contributor <span style={{ color: "#a855f7" }}>|</span> IT Graduate
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  marginTop: 56,
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.4em",
                  color: "rgba(192,132,252,0.7)", textTransform: "uppercase",
                  display: "flex", alignItems: "center", gap: 14,
                }}
              >
                <span style={{ width: 32, height: 1, background: "linear-gradient(90deg, #c084fc, transparent)" }} />
                scroll to swipe
              </motion.div>
            </div>
          </div>

          {/* ============ PANEL 2 ============ */}
          <div
            style={{
              width: panel2Width,
              height: "100%",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div
              className="mx-auto hero-grid"
              style={{
                width: "100%", maxWidth: 1280,
                padding: "0 clamp(20px, 5vw, 64px)",
                display: "grid",
                gap: "clamp(28px, 5vw, 72px)",
                alignItems: "center",
              }}
            >
              {/* LEFT — ID card sitting under the strap endpoint */}
              <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative" }}
                >
                  {/* Invisible anchor at the metal slot — strap end snaps here */}
                  <div
                    ref={cardSlotRef}
                    data-testid="card-slot"
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 10,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 2,
                      height: 2,
                      pointerEvents: "none",
                    }}
                  />
                  <div style={{ marginTop: 6 }}>
                    <IdCard />
                  </div>
                </motion.div>
              </div>

              {/* RIGHT — copy + CTAs */}
              <div className="hero-text-block">
                <div
                  className="font-mono"
                  style={{
                    display: "inline-block",
                    fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
                    color: "#7fd4ff",
                    textShadow: "0 0 14px rgba(127,212,255,0.5)",
                    marginBottom: 18,
                  }}
                >
                  AI Data Annotation
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontFamily: DISPLAY,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "clamp(1.6rem, 6vw, 3.6rem)",
                    letterSpacing: "-0.035em",
                    color: "#f5f3ee",
                    lineHeight: 1,
                  }}
                >
                  Empowering AI
                  <span
                    style={{
                      display: "block",
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#e8d9b5",
                      letterSpacing: "-0.01em",
                      marginTop: "0.1em",
                    }}
                  >
                    through human input
                  </span>
                </h2>

                <p
                  style={{
                    marginTop: 24, maxWidth: 560,
                    color: "rgba(226,232,240,0.82)",
                    fontSize: 15.5, lineHeight: 1.7,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Passionate about improving AI systems through high-quality data
                  annotation, evaluation, and human feedback. Experienced in
                  multilingual AI training workflows, RLHF-based projects, and
                  quality-focused data contributions.
                </p>

                <div
                  className="font-mono"
                  style={{
                    marginTop: 24, display: "flex", flexWrap: "wrap", gap: 18,
                    fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase",
                    color: "rgba(192,132,252,0.85)",
                  }}
                >
                  {[
                    ["Projects", "120+"],
                    ["Annotations", "50K+"],
                    ["Impact", "High-quality"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ color: "rgba(170,185,200,0.65)" }}>{k}</span>
                      <span style={{ color: "#f5f3ee", fontSize: 14, letterSpacing: "0.1em" }}>{v}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
                  <a href="#contact" className="btn-cta">
                    <Mail size={14} /> Connect Me
                  </a>
                  <a href="#projects" className="btn-cta" style={{ background: "rgba(127,212,255,0.08)", borderColor: "rgba(127,212,255,0.35)", color: "#cde7ff" }}>
                    See Work <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
