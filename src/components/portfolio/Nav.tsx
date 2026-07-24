import { useEffect, useRef, useState } from "react";

const LINKS: [string, string][] = [
  ["about", "#about"],
  ["work", "#experience"],
  ["skills", "#skills"],
  ["projects", "#projects"],
  ["contact", "#contact"],
];

export function Nav() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [pillRect, setPillRect] = useState<{ left: number; width: number } | null>(null);
  const itemsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ids = LINKS.map(([, h]) => h.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Position the glow pill behind the active (or hovered) link
  useEffect(() => {
    const idx =
      hoverIdx ?? LINKS.findIndex(([, h]) => h.slice(1) === active);
    const node = itemsRef.current[idx];
    const track = trackRef.current;
    if (!node || !track) return;
    const a = node.getBoundingClientRect();
    const b = track.getBoundingClientRect();
    setPillRect({ left: a.left - b.left, width: a.width });
  }, [active, hoverIdx, scrolled]);

  return (
    <nav
      style={{
        position: "fixed",
        top: scrolled ? 10 : 18,
        left: 0,
        right: 0,
        zIndex: 60,
        fontFamily: "var(--font-sans)",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        transition: "top .45s cubic-bezier(.2,.8,.2,1)",
      }}
    >
      <div
        className="relative group"
        style={{
          pointerEvents: "auto",
          width: "min(1020px, calc(100% - 20px))",
          borderRadius: 22,
          padding: "1px",
          background:
            "linear-gradient(135deg, rgba(245,158,11,0.4), rgba(245,158,11,0.1) 40%, rgba(217,119,6,0.3))",
          boxShadow:
            "0 18px 60px -10px rgba(0,0,0,0.65), 0 0 30px rgba(245,158,11,0.12)",
        }}
      >
        {/* inner glass surface */}
        <div
          style={{
            position: "relative",
            borderRadius: 21,
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(21,26,36,0.85), rgba(14,17,23,0.92))",
            backdropFilter: "blur(26px) saturate(180%)",
            WebkitBackdropFilter: "blur(26px) saturate(180%)",
          }}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 relative">
            {/* LEFT — bracketed monogram logo */}
            <a
              href="#top"
              data-hover
              className="flex items-center gap-2 shrink-0 sm:pl-1.5 group/brand font-mono select-none"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span
                className="font-bold transition-transform duration-200 group-hover/brand:scale-105"
                style={{
                  color: "#f59e0b",
                  fontSize: 14,
                  letterSpacing: "0.02em",
                  textShadow: "0 0 12px rgba(245,158,11,0.4)",
                }}
              >
                [HY]
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "rgba(243, 244, 246, 0.65)",
                  letterSpacing: "0.06em",
                }}
              >
                annotator
              </span>
            </a>

            {/* CENTER — links with sliding glow pill */}
            <div
              ref={trackRef}
              className="relative flex items-center p-1 rounded-full"
              style={{
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(245,158,11,0.15)",
              }}
              onMouseLeave={() => setHoverIdx(null)}
            >
              {/* Sliding glow pill */}
              {pillRect && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: pillRect.left,
                    width: pillRect.width,
                    borderRadius: 999,
                    background: "rgba(245,158,11,0.18)",
                    boxShadow: "0 0 0 1px rgba(245,158,11,0.35) inset",
                    transition:
                      "left .45s cubic-bezier(.2,.8,.2,1), width .45s cubic-bezier(.2,.8,.2,1)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {LINKS.map(([label, href], i) => {
                const id = href.slice(1);
                const isActive = active === id;
                const isHover = hoverIdx === i;
                return (
                  <a
                    key={href}
                    href={href}
                    data-hover
                    ref={(el) => { itemsRef.current[i] = el; }}
                    onMouseEnter={() => setHoverIdx(i)}
                    className="relative flex items-center gap-1 px-2.5 sm:px-4 py-1.5 rounded-full transition-colors"
                    style={{
                      color: isActive || isHover ? "#f3f4f6" : "#9ca3af",
                      zIndex: 1,
                    }}
                  >
                    <span
                      className="text-[11px] sm:text-[13px] capitalize"
                      style={{ fontWeight: isActive ? 600 : 400 }}
                    >
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* RIGHT — single CTA button */}
            <a
              href="#contact"
              data-hover
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium shrink-0 transition-all"
              style={{
                background: "#f59e0b",
                color: "#0e1117",
                boxShadow: "0 4px 14px rgba(245,158,11,0.3)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
