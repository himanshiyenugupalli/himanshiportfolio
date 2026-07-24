import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { IdCard } from "./IdCard";
import { ArrowRight, Mail } from "lucide-react";

/**
 * CinematicHero — split experience:
 *   Desktop (> 820px): Horizontal swipe driven by vertical scroll, sticky panel.
 *   Mobile  (≤ 820px): Natural vertical stacking — no pinning, no scroll-jacking.
 *
 * Desktop Layout:
 *   [ outer: 220vh sticky trigger ]
 *     [ sticky: 100vh, overflow hidden ]
 *       [ track: 200vw, translateX 0 → -100vw ]
 *         [ Panel 1: 100vw ]  [ Panel 2: 100vw ]
 *         [ Strap SVG: 200vw absolute over both ]
 *
 * Mobile Layout (vertical):
 *   [ Section A: Name + intro ]
 *   [ Section B: ID Card (centered) ]
 *   [ Section C: Description + CTAs ]
 */

const SERIF = "'Inter', sans-serif";
const DISPLAY = "'Fraunces', Georgia, serif";

// ─── Particles ────────────────────────────────────────────────────────────────
function Particles({ count = 36 }: { count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => ({
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
            willChange: "transform",
          }}
          animate={{ opacity: [0.15, 0.8, 0.15], y: [0, -14, 0] }}
          transition={{ duration: 4 + (i % 5), delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─── Continuous Strap (desktop only) ──────────────────────────────────────────
/**
 * Realistic hanging lanyard with a natural drape and one loose loop.
 * Single SVG spans the full 200vw track.
 */
function ContinuousStrap({ endX, endY }: { endX: number; endY: number }) {
  const startX = Math.max(36, endX - 78);
  const sx = startX + 18;
  const sy = 16;
  const foldAngle = Math.atan2(sy - -6, sx - startX);
  const foldLen = 4.2;
  const fx = sx + Math.cos(foldAngle) * foldLen;
  const fy = sy + Math.sin(foldAngle) * foldLen;
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
        <linearGradient id="strapHotline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="rgba(230,190,255,0)" />
          <stop offset="38%" stopColor="rgba(230,190,255,0)" />
          <stop offset="50%" stopColor="rgba(235,205,255,0.45)" />
          <stop offset="62%" stopColor="rgba(230,190,255,0)" />
          <stop offset="100%" stopColor="rgba(230,190,255,0)" />
        </linearGradient>
        <linearGradient id="strapSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="rgba(170,80,240,0)" />
          <stop offset="62%" stopColor="rgba(170,80,240,0)" />
          <stop offset="70%" stopColor="rgba(190,100,250,0.35)" />
          <stop offset="78%" stopColor="rgba(170,80,240,0)" />
          <stop offset="100%" stopColor="rgba(170,80,240,0)" />
        </linearGradient>
        <pattern id="strapWeave" width="1.1" height="1.1" patternUnits="userSpaceOnUse">
          <rect width="1.1" height="1.1" fill="transparent" />
          <line x1="0" y1="0.22" x2="1.1" y2="0.22" stroke="rgba(255,215,255,0.13)" strokeWidth="0.14" />
          <line x1="0" y1="0.55" x2="1.1" y2="0.55" stroke="rgba(50,12,85,0.30)"    strokeWidth="0.16" />
          <line x1="0" y1="0.85" x2="1.1" y2="0.85" stroke="rgba(255,200,255,0.07)" strokeWidth="0.12" />
        </pattern>
        <pattern id="strapFiber" width="0.6" height="1.2" patternUnits="userSpaceOnUse">
          <line x1="0.15" y1="0" x2="0.15" y2="1.2" stroke="rgba(235,190,255,0.09)" strokeWidth="0.12" />
          <line x1="0.45" y1="0" x2="0.45" y2="1.2" stroke="rgba(45,12,80,0.28)" strokeWidth="0.12" />
        </pattern>
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
        <filter id="strapNoise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="2.4" numOctaves="2" seed="7" result="n" />
          <feColorMatrix in="n" type="matrix"
            values="0 0 0 0 0.10
                    0 0 0 0 0.03
                    0 0 0 0 0.18
                    0 0 0 0.55 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="strapEdgeWear" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="3" result="w" />
          <feColorMatrix in="w" type="matrix"
            values="0 0 0 0 0.65
                    0 0 0 0 0.35
                    0 0 0 0 0.95
                    0 0 0 0.7 -0.35" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <linearGradient id="clipMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8ebef" />
          <stop offset="35%" stopColor="#a8aeb8" />
          <stop offset="55%" stopColor="#6a7280" />
          <stop offset="100%" stopColor="#2a313c" />
        </linearGradient>
      </defs>

      {/* Soft cast shadow */}
      <path d={d} stroke="#000000" strokeOpacity="0.7" strokeWidth="56" fill="none"
            filter="url(#strapDropShadow)" vectorEffect="non-scaling-stroke" strokeLinecap="round"
            style={{ transform: "translate(1.6px, 2px)" }} />
      {/* Outer piping */}
      <path d={d} stroke="#1a0533" strokeOpacity="1" strokeWidth="50" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      {/* Main satin body */}
      <path d={d} stroke="url(#strapFabric)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      {/* Weave overlay */}
      <path d={d} stroke="url(#strapWeave)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" opacity="0.85" />
      {/* Fiber overlay */}
      <path d={d} stroke="url(#strapFiber)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" opacity="0.45" />
      {/* Twill overlay */}
      <path d={d} stroke="url(#strapTwill)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round" opacity="0.35" />
      {/* Sheen */}
      <path d={d} stroke="url(#strapSheen)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapSoftBlur)" />
      {/* Hotline */}
      <path d={d} stroke="url(#strapHotline)" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapTightBlur)" />
      {/* Hair highlight */}
      <path d={d} stroke="#e8c8ff" strokeOpacity="0.35" strokeWidth="0.6" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapTightBlur)" />
      {/* Noise grain */}
      <path d={d} stroke="#ffffff" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapNoise)" opacity="0.4"
            style={{ mixBlendMode: "overlay" }} />
      {/* Edge wear */}
      <path d={d} stroke="#ffffff" strokeWidth="46" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapEdgeWear)" opacity="0.55"
            style={{ mixBlendMode: "screen" }} />
      {/* Stitch lines */}
      <path d={d} stroke="#3a3a3a" strokeOpacity="0.9" strokeWidth="0.6"
            fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round"
            strokeDasharray="1.4 1.0"
            style={{ transform: "translate(-3.2px, 0px)" }} />
      <path d={d} stroke="#3a3a3a" strokeOpacity="0.9" strokeWidth="0.6"
            fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round"
            strokeDasharray="1.4 1.0"
            style={{ transform: "translate(3.2px, 0px)" }} />
      {/* Specular highlight */}
      <path d={d} stroke="#4a4a4a" strokeOpacity="0.5" strokeWidth="2" fill="none"
            vectorEffect="non-scaling-stroke" strokeLinecap="round"
            filter="url(#strapSoftBlur)"
            style={{ transform: "translate(-0.4px, 0px)" }} />

      {/* Metal swivel clip */}
      <g data-testid="strap-clip" transform={`translate(${endX}, ${endY})`}>
        <circle cx="0" cy="-1.8" r="1.3" fill="none" stroke="url(#clipMetal)" strokeWidth="0.55"
                vectorEffect="non-scaling-stroke" />
        <rect x="-1.2" y="-0.6" width="2.4" height="3" rx="0.5" fill="url(#clipMetal)"
              stroke="#0a0d12" strokeWidth="0.18" vectorEffect="non-scaling-stroke" />
        <line x1="-0.6" y1="0.2" x2="-0.6" y2="2.2" stroke="#1a1f28"
              strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
        <line x1="-0.3" y1="0" x2="-0.3" y2="2.4" stroke="#ffffff" strokeOpacity="0.7"
              strokeWidth="0.18" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

// ─── Shared intro content (Panel 1 / Mobile Intro) ────────────────────────────
function HeroIntro() {
  return (
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
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "clamp(3.2rem, 10vw, 10rem)",
            letterSpacing: "-0.045em",
            color: "#f5f3ee",
          }}
        >
          Himanshi
        </span>
        <span
          style={{
            display: "block",
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 9vw, 9rem)",
            letterSpacing: "-0.03em",
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
    </div>
  );
}

// ─── Shared "about" copy + CTAs (Panel 2 right / Mobile Section 3) ────────────
function HeroCopy() {
  return (
    <div style={{ maxWidth: 600 }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 10.5,
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#f59e0b",
          background: "rgba(245, 158, 11, 0.08)",
          border: "1px solid rgba(245, 158, 11, 0.25)",
          padding: "4px 10px",
          borderRadius: 4,
          marginBottom: 16,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b" }} />
        QA & RLHF ANNOTATION LAB
      </div>

      <h2
        style={{
          margin: 0,
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
          letterSpacing: "-0.025em",
          color: "#f3f4f6",
          lineHeight: 1.08,
        }}
      >
        Empowering AI{" "}
        <span
          style={{
            display: "block",
            fontStyle: "italic",
            fontWeight: 600,
            color: "#f59e0b",
            marginTop: "0.08em",
          }}
        >
          through human input
        </span>
      </h2>

      <p
        style={{
          marginTop: 14,
          color: "rgba(243, 244, 246, 0.75)",
          fontSize: 16,
          lineHeight: 1.5,
          fontFamily: "var(--font-sans)",
        }}
      >
        RLHF · Multilingual QA · Human feedback at scale.
      </p>

      {/* Clear visual separation */}
      <div
        aria-hidden
        style={{
          margin: "24px 0",
          height: 1,
          width: "100%",
          maxWidth: 420,
          background: "linear-gradient(90deg, rgba(245,158,11,0.4), transparent)",
        }}
      />

      {/* Compact horizontal row of 2 small stat cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
        }}
      >
        {[
          { label: "PROJECTS", value: "120+" },
          { label: "ANNOTATIONS", value: "50K+" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              background: "#151a24",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minWidth: 130,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9ca3af",
              }}
            >
              {s.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                color: "#f59e0b",
                letterSpacing: "-0.02em",
              }}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
        <a
          href="#contact"
          className="btn-fill"
          style={{
            background: "#f59e0b",
            color: "#0e1117",
            borderColor: "#f59e0b",
            fontWeight: 600,
            borderRadius: 6,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Mail size={14} /> Connect Me
        </a>
        <a
          href="#projects"
          className="btn-outline"
          style={{
            background: "rgba(245,158,11,0.06)",
            borderColor: "rgba(245,158,11,0.3)",
            color: "#f3f4f6",
            borderRadius: 6,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          See Work <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

// ─── MOBILE HERO ──────────────────────────────────────────────────────────────
/**
 * Pure vertical scrolling experience for mobile.
 * No sticky pinning, no horizontal transforms, no scroll-jacking.
 */
function MobileHero() {
  return (
    <section id="hero" style={{ position: "relative", zIndex: 5, overflow: "hidden" }}>
      {/* Ambient background — fixed to section */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(55% 40% at 15% 25%, rgba(168,85,247,0.25), transparent 70%)," +
            "radial-gradient(40% 35% at 85% 70%, rgba(61,139,255,0.18), transparent 70%)",
        }}
      />
      <div className="orb orb-a" style={{ position: "absolute", opacity: 0.4 }} />
      <Particles count={18} />

      {/* ── Section A: Name + Intro ── */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px clamp(20px, 6vw, 48px) 60px",
          zIndex: 3,
        }}
      >
        <HeroIntro />
      </div>

      {/* ── Section B: ID Card (centered) ── */}
      <div
        style={{
          position: "relative",
          padding: "20px clamp(20px, 6vw, 48px) 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-mono"
          style={{
            fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase",
            color: "rgba(192,132,252,0.6)", marginBottom: 28,
            display: "flex", alignItems: "center", gap: 10,
          }}
        >
          <span style={{ width: 24, height: 1, background: "linear-gradient(90deg, rgba(192,132,252,0.5), transparent)" }} />
          identity card
          <span style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.5))" }} />
        </motion.div>

        {/* ID Card — no float animation on mobile, just fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IdCard floatDisabled />
        </motion.div>
      </div>

      {/* ── Section C: Description + CTAs ── */}
      <div
        style={{
          position: "relative",
          padding: "20px clamp(20px, 6vw, 48px) 80px",
          zIndex: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <HeroCopy />
        </motion.div>
      </div>
    </section>
  );
}

// ─── DESKTOP HERO ─────────────────────────────────────────────────────────────
/**
 * Two-panel cinematic hero with a horizontal swipe transition driven by
 * vertical scroll. A single continuous lanyard strap is drawn across both
 * panels inside a shared 200vw inner container.
 */
function DesktopHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardSlotRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 });

  const [end, setEnd] = useState({ x: 128, y: 53 });

  useLayoutEffect(() => {
    const measure = () => {
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

  const trackX = useTransform(p, [0, 1], ["0vw", "-100vw"]);
  const bgX = useTransform(p, [0, 1], ["0%", "-15%"]);

  return (
    <section id="hero" ref={wrapRef} style={{ position: "relative", height: "220vh", zIndex: 5 }}>
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
        <Particles count={36} />

        {/* Swiping track — 200vw, holds both panels + strap */}
        <motion.div
          ref={trackRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "200vw",
            display: "flex",
            x: trackX,
            willChange: "transform",
          }}
        >
          {/* Continuous lanyard strap */}
          <ContinuousStrap endX={end.x} endY={end.y} />

          {/* ── PANEL 1 ── */}
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
            <HeroIntro />
            {/* scroll hint */}
            <motion.div
              animate={{ x: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 48,
                left: "clamp(24px, 6vw, 96px)",
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.4em",
                color: "rgba(192,132,252,0.7)", textTransform: "uppercase",
                display: "flex", alignItems: "center", gap: 14,
              }}
            >
              <span style={{ width: 32, height: 1, background: "linear-gradient(90deg, #c084fc, transparent)" }} />
              scroll to swipe
            </motion.div>
          </div>

          {/* ── PANEL 2 ── */}
          <div
            style={{
              width: "100vw",
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
                  {/* Invisible anchor at the metal slot */}
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
                <HeroCopy />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
/**
 * Synchronously determine mobile vs desktop on first render so:
 *   1. No null/blank frame is shown (avoids Framer Motion scroll offset reset)
 *   2. The correct hero branch mounts immediately — DesktopHero's useScroll
 *      binds to the section on first paint, not after a re-render
 *   3. Viewport resize still updates correctly via MediaQueryList listener
 */
export function CinematicHero() {
  const [isMobile, setIsMobile] = useState<boolean>(
    // Lazily initialize — runs once, synchronously on mount
    () => typeof window !== "undefined" && window.innerWidth <= 820
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    // Sync in case width changed between SSR and hydration
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
