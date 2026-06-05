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
        fontFamily: "'Space Mono', monospace",
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
          /* gradient ring */
          background:
            "linear-gradient(135deg, rgba(192,132,252,0.55), rgba(168,85,247,0.18) 30%, rgba(61,139,255,0.45) 60%, rgba(192,132,252,0.55))",
          boxShadow:
            "0 18px 60px -10px rgba(0,0,0,0.65), 0 0 50px rgba(168,85,247,0.18)",
        }}
      >
        {/* inner glass surface */}
        <div
          style={{
            position: "relative",
            borderRadius: 21,
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(14,8,28,0.72), rgba(8,5,18,0.78))",
            backdropFilter: "blur(26px) saturate(180%)",
            WebkitBackdropFilter: "blur(26px) saturate(180%)",
          }}
        >
          {/* glass highlight sheen on top */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 35%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          {/* soft noise / frosted texture */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.08,
              mixBlendMode: "overlay",
              pointerEvents: "none",
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.6) 0.7px, transparent 0.7px)",
              backgroundSize: "3px 3px",
            }}
          />
          {/* moving aurora light streak */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, #c084fc 35%, #7dd3fc 55%, transparent)",
              backgroundSize: "200% 100%",
              animation: "gradShift 5s linear infinite",
              opacity: 0.9,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
            }}
          />
          {/* corner brackets */}
          <span style={{ position: "absolute", top: 6, left: 6, width: 9, height: 9, borderTop: "1px solid #c084fc", borderLeft: "1px solid #c084fc", opacity: .8 }} />
          <span style={{ position: "absolute", top: 6, right: 6, width: 9, height: 9, borderTop: "1px solid #c084fc", borderRight: "1px solid #c084fc", opacity: .8 }} />
          <span style={{ position: "absolute", bottom: 6, left: 6, width: 9, height: 9, borderBottom: "1px solid #c084fc", borderLeft: "1px solid #c084fc", opacity: .8 }} />
          <span style={{ position: "absolute", bottom: 6, right: 6, width: 9, height: 9, borderBottom: "1px solid #c084fc", borderRight: "1px solid #c084fc", opacity: .8 }} />

          <div className="flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-4 py-2.5 relative">
            {/* LEFT — refined monogram brand */}
            <a href="#top" data-hover className="flex items-center gap-3 shrink-0 sm:pl-1.5 group/brand">
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  padding: 1,
                  background:
                    "conic-gradient(from 140deg, #c084fc, #7dd3fc, #a855f7, #c084fc)",
                  boxShadow:
                    "0 6px 20px rgba(168,85,247,0.45), 0 0 0 1px rgba(192,132,252,0.35)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(150deg, #16091f 0%, #0b0414 60%, #1a0a2e 100%)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* glass highlight */}
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, transparent 45%)",
                      pointerEvents: "none",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 600,
                      fontStyle: "italic",
                      fontSize: 17,
                      letterSpacing: "-0.04em",
                      background:
                        "linear-gradient(135deg, #f5f3ee 0%, #e0c8ff 50%, #7dd3fc 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      lineHeight: 1,
                      transform: "translateY(0.5px)",
                    }}
                  >
                    HY
                  </span>
                </div>
                <span
                  className="absolute -top-0.5 -right-0.5 pulse-dot"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: "#7dd3fc",
                    boxShadow: "0 0 10px #7dd3fc",
                  }}
                />
              </div>

              <div className="hidden sm:flex flex-col leading-tight">
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 500,
                    fontSize: 19,
                    color: "#f5f3ee",
                    letterSpacing: "-0.015em",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ fontStyle: "italic" }}>H</span>imanshi
                  <span
                    style={{
                      color: "#c084fc",
                      fontStyle: "italic",
                      marginLeft: 1,
                    }}
                  >
                    .
                  </span>
                </span>
                <span
                  className="font-mono"
                  style={{
                    marginTop: 4,
                    fontSize: 8,
                    letterSpacing: "0.42em",
                    textTransform: "uppercase",
                    color: "rgba(192,132,252,0.78)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 14,
                      height: 1,
                      background:
                        "linear-gradient(90deg, rgba(192,132,252,0.7), transparent)",
                    }}
                  />
                  ai · annotator
                </span>
              </div>
            </a>

            {/* CENTER — links with sliding glow pill */}
            <div
              ref={trackRef}
              className="relative flex items-center p-1 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
                border: "1px solid rgba(192,132,252,0.14)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
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
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.28), rgba(61,139,255,0.22))",
                    boxShadow:
                      "0 0 0 1px rgba(192,132,252,0.45) inset, 0 0 22px rgba(168,85,247,0.35), 0 4px 14px rgba(0,0,0,0.4)",
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
                    className="relative flex items-center gap-1.5 px-1.5 sm:px-3.5 py-1.5 rounded-full transition-colors"
                    style={{
                      color: isActive || isHover ? "#f5f3ee" : "#8899aa",
                      zIndex: 1,
                    }}
                  >
                    <span
                      className="hidden md:inline text-[9px] font-mono"
                      style={{
                        color:
                          isActive || isHover
                            ? "#c084fc"
                            : "rgba(136,153,170,0.45)",
                        transition: "color .25s",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[9px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.18em]"
                      style={{ fontWeight: 600 }}
                    >
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* RIGHT — CTA */}
            <a
              href="#contact"
              data-hover
              className="hidden sm:inline-flex shine items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.22em] font-semibold shrink-0 transition-all"
              style={{
                background:
                  "linear-gradient(135deg, #a855f7 0%, #c084fc 55%, #7dd3fc 110%)",
                color: "#10001f",
                boxShadow:
                  "0 6px 22px rgba(168,85,247,0.5), inset 0 1px 0 rgba(255,255,255,0.45)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span
                className="pulse-dot"
                style={{ width: 6, height: 6, borderRadius: 999, background: "#10001f" }}
              />
              hire me
            </a>
            <a
              href="#contact"
              data-hover
              className="sm:hidden inline-flex items-center justify-center rounded-full shrink-0"
              style={{
                width: 34, height: 30,
                background: "linear-gradient(135deg, #a855f7, #c084fc 55%, #7dd3fc)",
                color: "#10001f",
                boxShadow: "0 4px 14px rgba(168,85,247,0.45)",
              }}
              aria-label="contact"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
