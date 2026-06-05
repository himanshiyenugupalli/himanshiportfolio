import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { G as GraduationCap, A as Award, C as Cloud, a as CodeXml, S as ServerCog, F as FileSpreadsheet, M as Mail, L as Linkedin, b as Github, c as ArrowRight } from "../_libs/lucide-react.mjs";
import { u as useScroll, a as useSpring, b as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const LINKS = [
  ["about", "#about"],
  ["work", "#experience"],
  ["skills", "#skills"],
  ["projects", "#projects"],
  ["contact", "#contact"]
];
function Nav() {
  const [active, setActive] = reactExports.useState("about");
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [hoverIdx, setHoverIdx] = reactExports.useState(null);
  const [pillRect, setPillRect] = reactExports.useState(null);
  const itemsRef = reactExports.useRef([]);
  const trackRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    const idx = hoverIdx ?? LINKS.findIndex(([, h]) => h.slice(1) === active);
    const node = itemsRef.current[idx];
    const track = trackRef.current;
    if (!node || !track) return;
    const a = node.getBoundingClientRect();
    const b = track.getBoundingClientRect();
    setPillRect({ left: a.left - b.left, width: a.width });
  }, [active, hoverIdx, scrolled]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      style: {
        position: "fixed",
        top: scrolled ? 10 : 18,
        left: 0,
        right: 0,
        zIndex: 60,
        fontFamily: "'Space Mono', monospace",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        transition: "top .45s cubic-bezier(.2,.8,.2,1)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative group",
          style: {
            pointerEvents: "auto",
            width: "min(1020px, calc(100% - 20px))",
            borderRadius: 22,
            padding: "1px",
            /* gradient ring */
            background: "linear-gradient(135deg, rgba(192,132,252,0.55), rgba(168,85,247,0.18) 30%, rgba(61,139,255,0.45) 60%, rgba(192,132,252,0.55))",
            boxShadow: "0 18px 60px -10px rgba(0,0,0,0.65), 0 0 50px rgba(168,85,247,0.18)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                position: "relative",
                borderRadius: 21,
                overflow: "hidden",
                background: "linear-gradient(180deg, rgba(14,8,28,0.72), rgba(8,5,18,0.78))",
                backdropFilter: "blur(26px) saturate(180%)",
                WebkitBackdropFilter: "blur(26px) saturate(180%)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    style: {
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 35%, transparent 70%)",
                      pointerEvents: "none"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    style: {
                      position: "absolute",
                      inset: 0,
                      opacity: 0.08,
                      mixBlendMode: "overlay",
                      pointerEvents: "none",
                      backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 0.7px, transparent 0.7px)",
                      backgroundSize: "3px 3px"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "linear-gradient(90deg, transparent, #c084fc 35%, #7dd3fc 55%, transparent)",
                      backgroundSize: "200% 100%",
                      animation: "gradShift 5s linear infinite",
                      opacity: 0.9
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    style: {
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { position: "absolute", top: 6, left: 6, width: 9, height: 9, borderTop: "1px solid #c084fc", borderLeft: "1px solid #c084fc", opacity: 0.8 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { position: "absolute", top: 6, right: 6, width: 9, height: 9, borderTop: "1px solid #c084fc", borderRight: "1px solid #c084fc", opacity: 0.8 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { position: "absolute", bottom: 6, left: 6, width: 9, height: 9, borderBottom: "1px solid #c084fc", borderLeft: "1px solid #c084fc", opacity: 0.8 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { position: "absolute", bottom: 6, right: 6, width: 9, height: 9, borderBottom: "1px solid #c084fc", borderRight: "1px solid #c084fc", opacity: 0.8 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-4 py-2.5 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", "data-hover": true, className: "flex items-center gap-3 shrink-0 sm:pl-1.5 group/brand", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative flex items-center justify-center",
                        style: {
                          width: 38,
                          height: 38,
                          borderRadius: 12,
                          padding: 1,
                          background: "conic-gradient(from 140deg, #c084fc, #7dd3fc, #a855f7, #c084fc)",
                          boxShadow: "0 6px 20px rgba(168,85,247,0.45), 0 0 0 1px rgba(192,132,252,0.35)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                width: "100%",
                                height: "100%",
                                borderRadius: 11,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "linear-gradient(150deg, #16091f 0%, #0b0414 60%, #1a0a2e 100%)",
                                position: "relative",
                                overflow: "hidden"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    "aria-hidden": true,
                                    style: {
                                      position: "absolute",
                                      inset: 0,
                                      background: "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, transparent 45%)",
                                      pointerEvents: "none"
                                    }
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: '"Cormorant Garamond", serif',
                                      fontWeight: 600,
                                      fontStyle: "italic",
                                      fontSize: 17,
                                      letterSpacing: "-0.04em",
                                      background: "linear-gradient(135deg, #f5f3ee 0%, #e0c8ff 50%, #7dd3fc 100%)",
                                      WebkitBackgroundClip: "text",
                                      backgroundClip: "text",
                                      color: "transparent",
                                      lineHeight: 1,
                                      transform: "translateY(0.5px)"
                                    },
                                    children: "HY"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "absolute -top-0.5 -right-0.5 pulse-dot",
                              style: {
                                width: 7,
                                height: 7,
                                borderRadius: 999,
                                background: "#7dd3fc",
                                boxShadow: "0 0 10px #7dd3fc"
                              }
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-col leading-tight", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          style: {
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 500,
                            fontSize: 19,
                            color: "#f5f3ee",
                            letterSpacing: "-0.015em",
                            lineHeight: 1
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontStyle: "italic" }, children: "H" }),
                            "imanshi",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: {
                                  color: "#c084fc",
                                  fontStyle: "italic",
                                  marginLeft: 1
                                },
                                children: "."
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "font-mono",
                          style: {
                            marginTop: 4,
                            fontSize: 8,
                            letterSpacing: "0.42em",
                            textTransform: "uppercase",
                            color: "rgba(192,132,252,0.78)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                "aria-hidden": true,
                                style: {
                                  width: 14,
                                  height: 1,
                                  background: "linear-gradient(90deg, rgba(192,132,252,0.7), transparent)"
                                }
                              }
                            ),
                            "ai · annotator"
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      ref: trackRef,
                      className: "relative flex items-center p-1 rounded-full",
                      style: {
                        background: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
                        border: "1px solid rgba(192,132,252,0.14)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)"
                      },
                      onMouseLeave: () => setHoverIdx(null),
                      children: [
                        pillRect && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            "aria-hidden": true,
                            style: {
                              position: "absolute",
                              top: 4,
                              bottom: 4,
                              left: pillRect.left,
                              width: pillRect.width,
                              borderRadius: 999,
                              background: "linear-gradient(135deg, rgba(168,85,247,0.28), rgba(61,139,255,0.22))",
                              boxShadow: "0 0 0 1px rgba(192,132,252,0.45) inset, 0 0 22px rgba(168,85,247,0.35), 0 4px 14px rgba(0,0,0,0.4)",
                              transition: "left .45s cubic-bezier(.2,.8,.2,1), width .45s cubic-bezier(.2,.8,.2,1)",
                              pointerEvents: "none"
                            }
                          }
                        ),
                        LINKS.map(([label, href], i) => {
                          const id = href.slice(1);
                          const isActive = active === id;
                          const isHover = hoverIdx === i;
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "a",
                            {
                              href,
                              "data-hover": true,
                              ref: (el) => {
                                itemsRef.current[i] = el;
                              },
                              onMouseEnter: () => setHoverIdx(i),
                              className: "relative flex items-center gap-1.5 px-1.5 sm:px-3.5 py-1.5 rounded-full transition-colors",
                              style: {
                                color: isActive || isHover ? "#f5f3ee" : "#8899aa",
                                zIndex: 1
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "hidden md:inline text-[9px] font-mono",
                                    style: {
                                      color: isActive || isHover ? "#c084fc" : "rgba(136,153,170,0.45)",
                                      transition: "color .25s"
                                    },
                                    children: String(i + 1).padStart(2, "0")
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "text-[9px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.18em]",
                                    style: { fontWeight: 600 },
                                    children: label
                                  }
                                )
                              ]
                            },
                            href
                          );
                        })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#contact",
                      "data-hover": true,
                      className: "hidden sm:inline-flex shine items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.22em] font-semibold shrink-0 transition-all",
                      style: {
                        background: "linear-gradient(135deg, #a855f7 0%, #c084fc 55%, #7dd3fc 110%)",
                        color: "#10001f",
                        boxShadow: "0 6px 22px rgba(168,85,247,0.5), inset 0 1px 0 rgba(255,255,255,0.45)"
                      },
                      onMouseEnter: (e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "pulse-dot",
                            style: { width: 6, height: 6, borderRadius: 999, background: "#10001f" }
                          }
                        ),
                        "hire me"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#contact",
                      "data-hover": true,
                      className: "sm:hidden inline-flex items-center justify-center rounded-full shrink-0",
                      style: {
                        width: 34,
                        height: 30,
                        background: "linear-gradient(135deg, #a855f7, #c084fc 55%, #7dd3fc)",
                        color: "#10001f",
                        boxShadow: "0 4px 14px rgba(168,85,247,0.45)"
                      },
                      "aria-label": "contact",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }) })
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    }
  );
}
function ScrollProgress() {
  const [p, setP] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "fixed", top: 56, left: 0, height: 2, width: "100%", zIndex: 50, background: "transparent" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${p}%`, background: "#a855f7", boxShadow: "0 0 8px rgba(168,85,247,0.5)", transition: "width .1s" } }) });
}
const PAL = [
  "transparent",
  "#06080c",
  "#1a2332",
  "#3a4a5a",
  "#a855f7",
  "#c084fc",
  "#e2e8f0",
  "#f0a832"
];
const SPRITE = [
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0],
  [0, 0, 1, 2, 3, 3, 3, 3, 2, 1, 0, 0],
  [0, 0, 1, 3, 5, 5, 5, 5, 3, 1, 0, 0],
  [0, 0, 1, 2, 2, 6, 6, 2, 2, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1, 0],
  [1, 2, 2, 3, 7, 3, 3, 7, 3, 2, 2, 1],
  [1, 2, 1, 3, 3, 4, 4, 3, 3, 1, 2, 1],
  [1, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 1],
  [0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0],
  [0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0],
  [0, 0, 0, 1, 3, 1, 1, 3, 1, 0, 0, 0],
  [0, 0, 0, 1, 3, 1, 1, 3, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
];
const COLS = 12;
const ROWS = 16;
const PX = 6;
function PixelRobot() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let raf = 0;
    let t = 0;
    let mx = window.innerWidth, my = window.innerHeight;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sway = Math.sin(t * 0.8) * 8;
      const bob = Math.sin(t * 1.2) * 1.5;
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mx - cx, dy = my - cy;
      const d = Math.max(1, Math.hypot(dx, dy));
      const lookX = Math.round(dx / d * 1.2);
      const lookY = Math.round(dy / d * 1.2);
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = "#a855f7";
      ctx.beginPath();
      ctx.ellipse(COLS * PX / 2 + sway, ROWS * PX + 4, COLS * PX * 0.32, 2.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.translate(sway, bob);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const v = SPRITE[r][c];
          if (v === 0) continue;
          if (v === 5) {
            ctx.fillStyle = PAL[5];
            ctx.fillRect(c * PX + lookX, r * PX + lookY, PX, PX);
            continue;
          }
          if (v === 4) {
            const pulse = 0.5 + 0.5 * Math.sin(t * 2.2);
            ctx.fillStyle = pulse > 0.85 ? "#c084fc" : "#a855f7";
          } else {
            ctx.fillStyle = PAL[v];
          }
          ctx.fillRect(c * PX, r * PX, PX, PX);
        }
      }
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref,
      width: COLS * PX,
      height: ROWS * PX + 8,
      style: {
        position: "fixed",
        bottom: 32,
        right: 32,
        width: COLS * PX,
        height: ROWS * PX + 8,
        pointerEvents: "none",
        zIndex: 40,
        imageRendering: "pixelated",
        filter: "drop-shadow(0 8px 18px rgba(168,85,247,0.35))"
      }
    }
  );
}
const url = "/__l5e/assets-v1/1aad3610-9076-4ec0-9e49-91489582310b/himanshi.jpeg";
const himanshiPhoto = {
  url
};
const NEON = "#c026d3";
const NEON_SOFT = "#d946ef";
function IdCard() {
  const fields = [
    ["ID", "HY-78901"],
    ["DEPT", "AI TRAINING"],
    ["ROLE", "DATA ANNOTATOR"],
    ["EXPIRES", "12/26"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "card-float id-card-glass",
      style: {
        width: "min(308px, 86vw)",
        transform: "rotate(-3deg)",
        transformOrigin: "top center"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "relative",
              width: 64,
              height: 16,
              margin: "0 auto -8px",
              borderRadius: 3,
              background: "linear-gradient(180deg, #6a7280 0%, #2a313c 50%, #14181f 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.7)",
              zIndex: 3
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 34,
                  height: 5,
                  borderRadius: 2,
                  background: "linear-gradient(180deg, #050709 0%, #1a1f28 100%)",
                  boxShadow: "inset 0 1px 1px rgba(0,0,0,0.95)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-hover": true,
            style: {
              position: "relative",
              borderRadius: 22,
              padding: 0,
              background: "linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
              backdropFilter: "blur(22px) saturate(140%)",
              WebkitBackdropFilter: "blur(22px) saturate(140%)",
              border: `1px solid rgba(217,70,239,0.55)`,
              boxShadow: `0 0 0 1px rgba(255,255,255,0.06) inset,0 0 14px ${NEON},0 0 36px ${NEON_SOFT},0 0 80px rgba(192,38,211,0.35),0 30px 60px -20px rgba(0,0,0,0.7)`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(168,85,247,0.06) 45%, rgba(255,255,255,0.03) 100%)",
                  padding: "26px 18px 16px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      "aria-hidden": true,
                      width: "100%",
                      height: "100%",
                      style: {
                        position: "absolute",
                        inset: 0,
                        opacity: 0.32,
                        pointerEvents: "none"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "pattern",
                          {
                            id: "circuitTrace",
                            width: "34",
                            height: "34",
                            patternUnits: "userSpaceOnUse",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "path",
                                {
                                  d: "M0 17 H10 V6 H22 V17 H34 M17 0 V12 M17 22 V34 M6 28 H17",
                                  stroke: NEON,
                                  strokeWidth: "0.5",
                                  fill: "none"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "6", r: "1.1", fill: NEON }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "22", cy: "17", r: "1.1", fill: NEON_SOFT })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#circuitTrace)" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 14
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "spin-slow",
                            "aria-hidden": true,
                            style: {
                              position: "absolute",
                              width: 134,
                              height: 134,
                              top: -6,
                              borderRadius: "50%",
                              background: `conic-gradient(from 0deg, ${NEON} 0%, transparent 30%, ${NEON_SOFT} 55%, transparent 80%, ${NEON} 100%)`,
                              filter: "blur(8px)",
                              opacity: 0.85,
                              zIndex: 0
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              position: "relative",
                              width: 122,
                              height: 122,
                              borderRadius: "50%",
                              padding: 3,
                              background: `linear-gradient(135deg, ${NEON}, ${NEON_SOFT} 50%, #7c3aed)`,
                              boxShadow: `0 0 18px ${NEON}, 0 0 44px rgba(217,70,239,0.55), inset 0 0 0 1px rgba(0,0,0,0.6)`,
                              zIndex: 1
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    background: "#000",
                                    border: `1.5px solid rgba(0,0,0,0.8)`
                                  },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "img",
                                    {
                                      src: himanshiPhoto.url,
                                      alt: "Himanshi Yenugupalli",
                                      style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                        filter: "saturate(1.02) contrast(1.06)"
                                      }
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "pulse-dot",
                                  style: {
                                    position: "absolute",
                                    right: 4,
                                    bottom: 8,
                                    width: 14,
                                    height: 14,
                                    borderRadius: "50%",
                                    background: "#22c55e",
                                    border: "2px solid #050309",
                                    boxShadow: "0 0 8px #22c55e",
                                    zIndex: 2
                                  }
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 12, position: "relative" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: 22,
                          fontWeight: 600,
                          letterSpacing: "-0.005em",
                          color: "#f8f1ff",
                          lineHeight: 1.05,
                          textShadow: `0 0 14px rgba(217,70,239,0.45)`
                        },
                        children: [
                          "Himanshi ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontStyle: "italic", color: "#f0abfc", fontWeight: 500 }, children: "Yenugupalli" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "font-mono",
                        style: {
                          marginTop: 6,
                          fontSize: 9,
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                          color: "#f0abfc",
                          textShadow: `0 0 6px ${NEON}`
                        },
                        children: "AI · Data Annotator"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": true,
                      style: {
                        height: 1,
                        width: "100%",
                        background: `linear-gradient(90deg, transparent, ${NEON}, transparent)`,
                        opacity: 0.55,
                        marginBottom: 12
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "8px 12px",
                        position: "relative",
                        marginBottom: 14
                      },
                      children: fields.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "font-mono",
                          style: { display: "flex", flexDirection: "column", gap: 1 },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: {
                                  fontSize: 7,
                                  letterSpacing: "0.22em",
                                  color: "#f0abfc",
                                  textShadow: `0 0 4px ${NEON}`
                                },
                                children: k
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: {
                                  fontSize: 10,
                                  letterSpacing: "0.06em",
                                  color: "#f5f3ee",
                                  fontWeight: 600
                                },
                                children: v
                              }
                            )
                          ]
                        },
                        k
                      ))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: 10,
                        alignItems: "end",
                        position: "relative"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: 54,
                              height: 54,
                              background: "#000",
                              border: `1px solid ${NEON}`,
                              borderRadius: 4,
                              padding: 3,
                              boxShadow: `0 0 8px ${NEON}`
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  display: "grid",
                                  gridTemplateColumns: "repeat(9, 1fr)",
                                  gridTemplateRows: "repeat(9, 1fr)",
                                  gap: 1
                                },
                                children: Array.from({ length: 81 }).map((_, i) => {
                                  const r = Math.floor(i / 9);
                                  const c = i % 9;
                                  const corner = r < 3 && c < 3 || r < 3 && c > 5 || r > 5 && c < 3;
                                  const cornerEdge = corner && (r === 0 || c === 0 || r === 2 || c === 2 || r < 3 && c === 8 || r === 0 && c > 5 || r === 2 && c > 5 || r > 5 && c === 0 || r > 5 && c === 2 || r === 8 && c < 3);
                                  const cornerCenter = corner && r % 4 === 1 && c % 4 === 1;
                                  const on = cornerEdge || cornerCenter || i * 977 % 7 < 3;
                                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      style: { background: on ? "#f5f3ee" : "transparent" }
                                    },
                                    i
                                  );
                                })
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "end",
                                gap: 1.2,
                                height: 34,
                                padding: "4px 6px",
                                background: "rgba(0,0,0,0.6)",
                                border: `1px solid ${NEON}`,
                                borderRadius: 4,
                                boxShadow: `0 0 8px ${NEON}`
                              },
                              children: Array.from({ length: 36 }).map((_, i) => {
                                const w = i * 53 % 3 === 0 ? 2.5 : 1.2;
                                const skip = i * 31 % 5 === 0;
                                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    style: {
                                      width: w,
                                      height: "100%",
                                      background: skip ? "transparent" : "#f5f3ee"
                                    }
                                  },
                                  i
                                );
                              })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-mono",
                              style: {
                                fontSize: 8,
                                letterSpacing: "0.28em",
                                color: "#f0abfc",
                                textAlign: "center",
                                textShadow: `0 0 4px ${NEON}`
                              },
                              children: "HY-78901"
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between",
                      style: {
                        marginTop: 12,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: "rgba(192,38,211,0.08)",
                        border: `1px solid ${NEON}`,
                        boxShadow: `inset 0 0 6px rgba(192,38,211,0.3)`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "pulse-dot",
                              style: {
                                width: 7,
                                height: 7,
                                borderRadius: 999,
                                background: "#22c55e",
                                boxShadow: "0 0 8px #22c55e"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "font-mono",
                              style: {
                                fontSize: 8,
                                letterSpacing: "0.24em",
                                color: "#f5f3ee",
                                textTransform: "uppercase"
                              },
                              children: "Available"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-mono",
                            style: {
                              fontSize: 7,
                              letterSpacing: "0.28em",
                              color: "#f0abfc"
                            },
                            children: "SCAN ME"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
const SERIF = "'Instrument Serif', 'Cormorant Garamond', serif";
const DISPLAY = "'Cormorant Garamond', 'Instrument Serif', serif";
function Particles() {
  const dots = Array.from({ length: 36 }, (_, i) => ({
    x: i * 97 % 100,
    y: i * 53 % 100,
    d: 1.4 + i * 31 % 26 / 10,
    delay: i % 12 * 0.4
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, style: { position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }, children: dots.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      style: {
        position: "absolute",
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: p.d,
        height: p.d,
        borderRadius: 999,
        background: i % 4 === 0 ? "#c084fc" : i % 4 === 1 ? "#7fd4ff" : "#ffffff",
        boxShadow: "0 0 8px currentColor",
        opacity: 0.4
      },
      animate: { opacity: [0.15, 0.8, 0.15], y: [0, -14, 0] },
      transition: { duration: 4 + i % 5, delay: p.delay, repeat: Infinity, ease: "easeInOut" }
    },
    i
  )) });
}
function ContinuousStrap({ endX, endY }) {
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
  const d = `M ${startX} -6 L ${sx} ${sy} L ${fx} ${fy} C ${loopOutX} ${loopOutY}, ${loopBackX} ${loopBackY}, ${approachX} ${approachY} S ${endX - 3} ${endY - 1}, ${endX} ${endY}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      "aria-hidden": true,
      viewBox: "0 0 200 100",
      preserveAspectRatio: "none",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 2
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "strapFabric", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#1a0633" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "8%", stopColor: "#26094a" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "22%", stopColor: "#3a0e70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "42%", stopColor: "#5e1cb0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#8a2be2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "58%", stopColor: "#5e1cb0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "78%", stopColor: "#3a0e70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "92%", stopColor: "#26094a" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1a0633" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "strapHotline", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(230,190,255,0)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "38%", stopColor: "rgba(230,190,255,0)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "rgba(235,205,255,0.45)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "62%", stopColor: "rgba(230,190,255,0)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(230,190,255,0)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "strapSheen", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(170,80,240,0)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "62%", stopColor: "rgba(170,80,240,0)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "70%", stopColor: "rgba(190,100,250,0.35)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "78%", stopColor: "rgba(170,80,240,0)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(170,80,240,0)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("pattern", { id: "strapWeave", width: "1.1", height: "1.1", patternUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "1.1", height: "1.1", fill: "transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "0.22", x2: "1.1", y2: "0.22", stroke: "rgba(255,215,255,0.13)", strokeWidth: "0.14" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "0.55", x2: "1.1", y2: "0.55", stroke: "rgba(50,12,85,0.30)", strokeWidth: "0.16" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "0.85", x2: "1.1", y2: "0.85", stroke: "rgba(255,200,255,0.07)", strokeWidth: "0.12" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("pattern", { id: "strapFiber", width: "0.6", height: "1.2", patternUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0.15", y1: "0", x2: "0.15", y2: "1.2", stroke: "rgba(235,190,255,0.09)", strokeWidth: "0.12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0.45", y1: "0", x2: "0.45", y2: "1.2", stroke: "rgba(45,12,80,0.28)", strokeWidth: "0.12" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("pattern", { id: "strapTwill", width: "2.4", height: "2.4", patternUnits: "userSpaceOnUse", patternTransform: "rotate(28)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "2.4", height: "2.4", fill: "transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "0.6", x2: "2.4", y2: "0.6", stroke: "rgba(220,170,255,0.10)", strokeWidth: "0.18" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "1.5", x2: "2.4", y2: "1.5", stroke: "rgba(30,8,60,0.22)", strokeWidth: "0.16" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("filter", { id: "strapSoftBlur", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "0.35" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("filter", { id: "strapTightBlur", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "0.18" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("filter", { id: "strapDropShadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "strapNoise", x: "0%", y: "0%", width: "100%", height: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "2.4", numOctaves: "2", seed: "7", result: "n" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "feColorMatrix",
              {
                in: "n",
                type: "matrix",
                values: "0 0 0 0 0.10\n                    0 0 0 0 0.03\n                    0 0 0 0 0.18\n                    0 0 0 0.55 0"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "SourceGraphic", operator: "in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "strapEdgeWear", x: "0%", y: "0%", width: "100%", height: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.9", numOctaves: "3", seed: "3", result: "w" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "feColorMatrix",
              {
                in: "w",
                type: "matrix",
                values: "0 0 0 0 0.65\n                    0 0 0 0 0.35\n                    0 0 0 0 0.95\n                    0 0 0 0.7 -0.35"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in2: "SourceGraphic", operator: "in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "clipMetal", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#e8ebef" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "35%", stopColor: "#a8aeb8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "55%", stopColor: "#6a7280" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#2a313c" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#000000",
            strokeOpacity: "0.7",
            strokeWidth: "56",
            fill: "none",
            filter: "url(#strapDropShadow)",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            style: { transform: "translate(1.6px, 2px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#1a0533",
            strokeOpacity: "1",
            strokeWidth: "50",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "url(#strapFabric)",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "url(#strapWeave)",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            opacity: "0.85"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "url(#strapFiber)",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            opacity: "0.45"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "url(#strapTwill)",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            opacity: "0.35"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "url(#strapSheen)",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            filter: "url(#strapSoftBlur)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "url(#strapHotline)",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            filter: "url(#strapTightBlur)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#e8c8ff",
            strokeOpacity: "0.35",
            strokeWidth: "0.6",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            filter: "url(#strapTightBlur)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#ffffff",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            filter: "url(#strapNoise)",
            opacity: "0.4",
            style: { mixBlendMode: "overlay" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#ffffff",
            strokeWidth: "46",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            filter: "url(#strapEdgeWear)",
            opacity: "0.55",
            style: { mixBlendMode: "screen" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#3a3a3a",
            strokeOpacity: "0.9",
            strokeWidth: "0.6",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            strokeDasharray: "1.4 1.0",
            style: { transform: "translate(-3.2px, 0px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#3a3a3a",
            strokeOpacity: "0.9",
            strokeWidth: "0.6",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            strokeDasharray: "1.4 1.0",
            style: { transform: "translate(3.2px, 0px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            stroke: "#4a4a4a",
            strokeOpacity: "0.5",
            strokeWidth: "2",
            fill: "none",
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "round",
            filter: "url(#strapSoftBlur)",
            style: { transform: "translate(-0.4px, 0px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { "data-testid": "strap-clip", transform: `translate(${endX}, ${endY})`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "0",
              cy: "-1.8",
              r: "1.3",
              fill: "none",
              stroke: "url(#clipMetal)",
              strokeWidth: "0.55",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "-1.2",
              y: "-0.6",
              width: "2.4",
              height: "3",
              rx: "0.5",
              fill: "url(#clipMetal)",
              stroke: "#0a0d12",
              strokeWidth: "0.18",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "-0.6",
              y1: "0.2",
              x2: "-0.6",
              y2: "2.2",
              stroke: "#1a1f28",
              strokeWidth: "0.3",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "-0.3",
              y1: "0",
              x2: "-0.3",
              y2: "2.4",
              stroke: "#ffffff",
              strokeOpacity: "0.7",
              strokeWidth: "0.18",
              vectorEffect: "non-scaling-stroke"
            }
          )
        ] })
      ]
    }
  );
}
function CinematicHero() {
  const wrapRef = reactExports.useRef(null);
  const trackRef = reactExports.useRef(null);
  const cardSlotRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"]
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 });
  const [end, setEnd] = reactExports.useState({ x: 128, y: 53 });
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useLayoutEffect(() => {
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
      setEnd({ x: cx / t.width * 200, y: cy / t.height * 100 });
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
  const trackX = useTransform(p, [0, 1], ["0vw", trackTranslateEnd]);
  const bgX = useTransform(p, [0, 1], ["0%", "-15%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "hero", ref: wrapRef, style: { position: "relative", height: heroHeight, zIndex: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "sticky", top: 0, height: "100vh", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        style: {
          position: "absolute",
          inset: -80,
          x: bgX,
          background: "radial-gradient(45% 50% at 18% 35%, rgba(168,85,247,0.22), transparent 70%),radial-gradient(35% 40% at 60% 80%, rgba(61,139,255,0.16), transparent 70%),radial-gradient(30% 35% at 92% 20%, rgba(127,212,255,0.18), transparent 70%),radial-gradient(35% 40% at 130% 60%, rgba(168,85,247,0.20), transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb orb-a", style: { position: "absolute" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb orb-b", style: { position: "absolute" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref: trackRef,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: trackWidth,
          display: "flex",
          x: trackX,
          willChange: "transform"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContinuousStrap, { endX: end.x, endY: end.y }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                width: "100vw",
                height: "100%",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                padding: "0 clamp(24px, 6vw, 96px)",
                position: "relative",
                zIndex: 3
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 760 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.15 },
                    className: "font-mono",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "7px 14px",
                      borderRadius: 999,
                      background: "rgba(168,85,247,0.06)",
                      border: "1px solid rgba(168,85,247,0.32)",
                      color: "rgba(192,132,252,0.95)",
                      fontSize: 10.5,
                      letterSpacing: "0.32em",
                      textTransform: "uppercase",
                      marginBottom: 32,
                      backdropFilter: "blur(10px)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse-dot", style: { width: 7, height: 7, borderRadius: 999, background: "#c084fc" } }),
                      "available for work"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1.1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] },
                    style: { margin: 0, lineHeight: 0.88 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            display: "block",
                            fontFamily: DISPLAY,
                            fontWeight: 900,
                            textTransform: "uppercase",
                            fontSize: "clamp(3.5rem, 11vw, 10rem)",
                            letterSpacing: "-0.045em",
                            color: "#f5f3ee"
                          },
                          children: "Himanshi"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          style: {
                            display: "block",
                            fontFamily: SERIF,
                            fontStyle: "italic",
                            fontWeight: 400,
                            fontSize: "clamp(3rem, 10vw, 9rem)",
                            letterSpacing: "-0.02em",
                            color: "#e8d9b5",
                            marginTop: "-0.08em"
                          },
                          children: [
                            "Yenugupalli",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#c084fc" }, children: "." })
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1, delay: 0.85 },
                    className: "font-mono",
                    style: {
                      marginTop: 26,
                      fontSize: 11,
                      letterSpacing: "0.36em",
                      color: "rgba(170,185,200,0.9)",
                      textTransform: "uppercase",
                      maxWidth: 620,
                      lineHeight: 1.8
                    },
                    children: [
                      "AI Data Annotator ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#a855f7" }, children: "|" }),
                      " Human Data Contributor ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#a855f7" }, children: "|" }),
                      " IT Graduate"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    animate: { x: [0, 8, 0], opacity: [0.5, 1, 0.5] },
                    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                    style: {
                      marginTop: 56,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.4em",
                      color: "rgba(192,132,252,0.7)",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: 14
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: 32, height: 1, background: "linear-gradient(90deg, #c084fc, transparent)" } }),
                      "scroll to swipe"
                    ]
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                width: panel2Width,
                height: "100%",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                position: "relative",
                zIndex: 3
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "mx-auto hero-grid",
                  style: {
                    width: "100%",
                    maxWidth: 1280,
                    padding: "0 clamp(20px, 5vw, 64px)",
                    display: "grid",
                    gap: "clamp(28px, 5vw, 72px)",
                    alignItems: "center"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", position: "relative" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        animate: { y: [0, -10, 0] },
                        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        style: { width: "100%", display: "flex", justifyContent: "center", position: "relative" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              ref: cardSlotRef,
                              "data-testid": "card-slot",
                              "aria-hidden": true,
                              style: {
                                position: "absolute",
                                top: 10,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: 2,
                                height: 2,
                                pointerEvents: "none"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, {}) })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-text-block", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "font-mono",
                          style: {
                            display: "inline-block",
                            fontSize: 11,
                            letterSpacing: "0.32em",
                            textTransform: "uppercase",
                            color: "#7fd4ff",
                            textShadow: "0 0 14px rgba(127,212,255,0.5)",
                            marginBottom: 18
                          },
                          children: "AI Data Annotation"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "h2",
                        {
                          style: {
                            margin: 0,
                            fontFamily: DISPLAY,
                            fontWeight: 900,
                            textTransform: "uppercase",
                            fontSize: "clamp(1.6rem, 6vw, 3.6rem)",
                            letterSpacing: "-0.035em",
                            color: "#f5f3ee",
                            lineHeight: 1
                          },
                          children: [
                            "Empowering AI",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: {
                                  display: "block",
                                  fontFamily: SERIF,
                                  fontStyle: "italic",
                                  fontWeight: 400,
                                  color: "#e8d9b5",
                                  letterSpacing: "-0.01em",
                                  marginTop: "0.1em"
                                },
                                children: "through human input"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            marginTop: 24,
                            maxWidth: 560,
                            color: "rgba(226,232,240,0.82)",
                            fontSize: 15.5,
                            lineHeight: 1.7,
                            fontFamily: "var(--font-sans)"
                          },
                          children: "Passionate about improving AI systems through high-quality data annotation, evaluation, and human feedback. Experienced in multilingual AI training workflows, RLHF-based projects, and quality-focused data contributions."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "font-mono",
                          style: {
                            marginTop: 24,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 18,
                            fontSize: 10.5,
                            letterSpacing: "0.24em",
                            textTransform: "uppercase",
                            color: "rgba(192,132,252,0.85)"
                          },
                          children: [
                            ["Projects", "120+"],
                            ["Annotations", "50K+"],
                            ["Impact", "High-quality"]
                          ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(170,185,200,0.65)" }, children: k }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5f3ee", fontSize: 14, letterSpacing: "0.1em" }, children: v })
                          ] }, k))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "btn-cta", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
                          " Connect Me"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#projects", className: "btn-cta", style: { background: "rgba(127,212,255,0.08)", borderColor: "rgba(127,212,255,0.35)", color: "#cde7ff" }, children: [
                          "See Work ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                        ] })
                      ] })
                    ] })
                  ]
                }
              )
            }
          )
        ]
      }
    )
  ] }) });
}
function Section({
  id,
  index,
  label,
  command,
  children
}) {
  const parts = label.trim().split(/\s+/);
  const primary = parts[0] ?? label;
  const accent = parts.slice(1).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: "relative", style: { padding: "88px 0", zIndex: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: { marginBottom: 56 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "font-mono",
          style: {
            fontSize: 11,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(170,185,200,0.55)",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 14
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#c084fc" }, children: index }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  display: "inline-block",
                  width: 40,
                  height: 1,
                  background: "linear-gradient(90deg, rgba(192,132,252,0.6), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: command })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sec-heading", style: { margin: 0, lineHeight: 0.92 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sec-heading-primary", children: primary }),
        accent && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "sec-heading-accent", children: [
            accent.toLowerCase(),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          style: {
            marginTop: 22,
            width: 80,
            height: 1,
            background: "linear-gradient(90deg, rgba(168,85,247,0.6), transparent)"
          }
        }
      )
    ] }),
    children
  ] }) });
}
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-blur, .stagger-child");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const EXP = [{
  period: "Jan 2026 — Present",
  company: "Uber AI Solutions",
  type: "Contract",
  role: "AI Data Annotator — RLHF Specialist",
  bullets: ["Rank model responses across multi-turn dialogues for reward-model training.", "Author rubric-driven critiques and rewrite low-quality completions.", "Flag hallucinations, jailbreak attempts, and unsafe behavior with policy citations."]
}, {
  period: "Jan 2026 — Present",
  company: "Prolific",
  type: "Freelance",
  role: "Multilingual Annotator (HI · EN · TE)",
  bullets: ["Annotate prompts and complete preference-pair tasks across three languages.", "Maintain >97% agreement rate on calibration batches.", "Localize style guides for Hindi and Telugu cohorts."]
}, {
  period: "Sep 2025 — Jan 2026",
  company: "DataAnnotation Tech",
  type: "Contract",
  role: "SFT Data Curator & QA Reviewer",
  bullets: ["Wrote and reviewed instruction-tuning examples for code, reasoning, and creative writing.", "Built an internal QA checklist that cut reviewer disagreement by 22%.", "Trained two new annotators on rubric application and edge-case handling."]
}];
const ANNOT = ["RLHF", "RLSF", "SFT", "DPO Preference Pairs", "Prompt Engineering", "Response Ranking", "Rubric Authoring", "Hallucination Detection", "Safety Red-Teaming", "Bias Auditing", "Multi-turn Dialogue", "Image Captioning", "Audio Transcription"];
const TECH = ["Python", "JavaScript", "Java", "HTML", "CSS", "MySQL", "Git", "Apache Tomcat", "Label Studio", "Notion", "Jupyter", "VS Code"];
const LANGS = ["Hindi · Native", "English · Fluent", "Telugu · Conversational"];
const PROJECTS = [{
  n: "01",
  title: "Musical Instrument Learning Web App",
  desc: "A full-stack learning portal with lesson tracking, quizzes, and a tutor dashboard. Built as my B.Sc. capstone.",
  tech: ["Java", "JS", "HTML", "CSS", "MySQL", "Apache Tomcat"]
}, {
  n: "02",
  title: "PackSetGo — Travel Checklist",
  desc: "Lightweight trip planner that generates personalized packing lists from destination, duration, and activities.",
  tech: ["HTML", "CSS", "JS"]
}, {
  n: "03",
  title: "BookShelf",
  desc: "Minimal reading tracker for cataloguing books, ratings, and reading goals — entirely client-side.",
  tech: ["HTML", "CSS", "JS"]
}];
const CERTS = [{
  icon: Award,
  name: "Google IT Support",
  issuer: "Coursera · 2024"
}, {
  icon: Cloud,
  name: "AWS Cloud Practitioner",
  issuer: "AWS · 2024"
}, {
  icon: CodeXml,
  name: "MERN Stack Development",
  issuer: "Internshala · 2024"
}, {
  icon: ServerCog,
  name: "Cloud Computing Workshop",
  issuer: "IIT Bombay · 2023"
}, {
  icon: FileSpreadsheet,
  name: "MS Office Specialist",
  issuer: "Microsoft · 2022"
}];
function HomePage() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", style: {
    position: "relative",
    zIndex: 3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PixelRobot, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fx-grid" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fx-scanlines" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CinematicHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "about", index: "01", label: "ABOUT", command: "cat about.md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-left flex justify-center md:justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-wrap float-y", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame scan-line glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: himanshiPhoto.url, alt: "Himanshi Yenugupalli portrait", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "corner c-tl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "corner c-tr" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "corner c-bl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "corner c-br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]", style: {
            background: "#080b10",
            border: "1px solid rgba(168,85,247,0.35)",
            color: "#a855f7",
            borderRadius: 4,
            whiteSpace: "nowrap"
          }, children: "◉ rec · subject_01" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal card", style: {
          padding: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2", style: {
            background: "#0a0e14",
            borderBottom: "1px solid rgba(168,85,247,0.1)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              width: 11,
              height: 11,
              borderRadius: 999,
              background: "#ff5f56"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              width: 11,
              height: 11,
              borderRadius: 999,
              background: "#ffbd2e"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              width: 11,
              height: 11,
              borderRadius: 999,
              background: "#27c93f"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-muted ml-3", children: "~/himanshi/about.json" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "font-mono text-[13px] leading-7 p-6 m-0", style: {
            whiteSpace: "pre-wrap"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#a855f7"
            }, children: "> " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#8899aa"
            }, children: "cat about.json" }),
            "\n",
            "{\n",
            "  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#3d8bff"
            }, children: '"name"' }),
            ": ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"Himanshi Yenugupalli"' }),
            ",",
            "\n",
            "  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#3d8bff"
            }, children: '"role"' }),
            ": ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"AI Data Annotator"' }),
            ",",
            "\n",
            "  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#3d8bff"
            }, children: '"focus"' }),
            ": [",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"RLHF"' }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"RLSF"' }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"SFT"' }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"QA"' }),
            "],",
            "\n",
            "  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#3d8bff"
            }, children: '"languages"' }),
            ": [",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"hi"' }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"en"' }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"te"' }),
            "],",
            "\n",
            "  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#3d8bff"
            }, children: '"modalities"' }),
            ": [",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"text"' }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"image"' }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"audio"' }),
            "],",
            "\n",
            "  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#3d8bff"
            }, children: '"obsessions"' }),
            ": ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#f0a832"
            }, children: '"rubric clarity · edge cases · honest labels"' }),
            ",",
            "\n",
            "  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#3d8bff"
            }, children: '"status"' }),
            ": ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#a855f7"
            }, children: '"available"' }),
            "\n",
            "}\n",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#a855f7"
            }, children: "> " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden py-3", style: {
        borderTop: "1px solid rgba(168,85,247,0.12)",
        borderBottom: "1px solid rgba(168,85,247,0.12)",
        background: "rgba(168,85,247,0.03)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track font-mono text-[12px] uppercase tracking-[0.3em]", children: Array.from({
        length: 2
      }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-7", children: ["rlhf", "•", "rlsf", "•", "sft", "•", "dpo", "•", "multilingual", "•", "qa rubrics", "•", "red-teaming", "•", "remote", "•"].map((w, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        color: w === "•" ? "#a855f7" : "#8899aa"
      }, children: w }, j)) }, k)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "experience", index: "02", label: "EXPERIENCE", command: "ls experience/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: EXP.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-blur card magnetic shine halo-soft grid md:grid-cols-[200px_1fr] gap-6", style: {
      transitionDelay: `${i * 100}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-muted", children: e.period }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[12px] text-accent mt-1", children: e.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-2 font-mono text-[10px] text-text2 px-2 py-1", style: {
          background: "var(--bg-elevated)",
          border: "1px solid rgba(168,85,247,0.1)",
          borderRadius: 3
        }, children: e.type })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "editorial-h3", style: {
          fontSize: "1.15rem"
        }, children: e.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: e.bullets.map((b, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-text2 text-[14px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "▸" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, j)) })
      ] })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "skills", index: "03", label: "SKILLS", command: "grep -r ./skills", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
      label: "annotation",
      caption: "Labeling craft",
      pills: ANNOT,
      icon: "◆"
    }, {
      label: "technical",
      caption: "Tools & stack",
      pills: TECH,
      icon: "◈"
    }, {
      label: "linguistic",
      caption: "Languages",
      pills: LANGS,
      icon: "◉"
    }].map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stagger-child flip-card", style: {
      transitionDelay: `${i * 120}ms`
    }, tabIndex: 0, role: "button", onClick: (e) => e.currentTarget.classList.toggle("is-flipped"), onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.currentTarget.classList.toggle("is-flipped");
      }
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-card-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-card-face flip-card-front", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-bg", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-grid", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-orb", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner tr" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner bl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-index font-mono", children: [
          String(i + 1).padStart(2, "0"),
          " / 03"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-icon", "aria-hidden": true, children: g.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flip-title", children: [
          g.label,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-caption font-mono", children: g.caption }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-hint font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-dot" }),
          " tap or hover to expand"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-card-face flip-card-back", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-bg back", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner tr" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner bl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flip-corner br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-back-head font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            color: "#c084fc"
          }, children: [
            "./",
            g.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            color: "rgba(136,153,170,0.55)"
          }, children: [
            g.pills.length,
            " items"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-pills", children: g.pills.map((p, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill", style: {
          animationDelay: `${0.05 + k * 0.04}s`
        }, children: p }, p)) })
      ] })
    ] }) }, g.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "projects", index: "04", label: "PROJECTS", command: "ls projects/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stagger-child card proj-card magnetic shine aurora-border", style: {
      transitionDelay: `${i * 100}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-muted mb-2", children: `// ${p.n}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "editorial-h3", style: {
        fontSize: "1.1rem"
      }, children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-text2 text-[13px] mt-3 leading-relaxed", children: p.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-4", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] px-2 py-1 text-text2", style: {
        background: "var(--bg-elevated)",
        borderRadius: 3
      }, children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-4 font-mono text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-accent", children: "$ repo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-accent", children: "$ demo" })
      ] })
    ] }, p.n)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "education", index: "05", label: "EDUCATION & CERTS", command: "cat credentials.log", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [{
        school: "VIVA College",
        degree: "B.Sc. Information Technology",
        period: "2022 — 2025",
        meta: "CGPA · 8.2 / 10"
      }, {
        school: "HSC · Science",
        degree: "Higher Secondary Certificate",
        period: "2020 — 2022",
        meta: "PCM + CS"
      }].map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stagger-child card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "text-accent shrink-0 mt-1", size: 22 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-muted", children: e.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "editorial-h3", style: {
            fontSize: "1.05rem"
          }, children: e.degree }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent font-mono text-[12px] mt-1", children: e.school }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-text2 text-[13px] mt-2", children: e.meta })
        ] })
      ] }) }, e.school)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: CERTS.map((c, i) => {
        const Icon = c.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stagger-child card flex items-center gap-4", style: {
          padding: 16,
          transitionDelay: `${i * 70}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center shrink-0", style: {
            width: 40,
            height: 40,
            borderRadius: 6,
            background: "var(--bg-g-dim)",
            border: "1px solid var(--border-g)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-accent", size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-text text-[14px] font-medium", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-muted", children: c.issuer })
          ] })
        ] }, c.name);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contact", index: "06", label: "CONTACT", command: "./reach-out.sh", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-text2 leading-relaxed mb-8 max-w-md", children: "Looking for an annotator who reads the rubric twice and asks the awkward questions? Send a message — I reply within a day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
          Icon: Mail,
          label: "himanshi.yenugupalli@gmail.com",
          href: "mailto:himanshi.yenugupalli@gmail.com"
        }, {
          Icon: Linkedin,
          label: "linkedin.com/in/himanshi-yenugupalli",
          href: "#"
        }, {
          Icon: Github,
          label: "github.com/himanshi-yen",
          href: "#"
        }].map(({
          Icon,
          label,
          href
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, "data-hover": true, className: "flex items-center gap-3 font-mono text-[13px] text-text2 px-4 py-3 rounded", style: {
          background: "var(--bg-card)",
          border: "1px solid rgba(168,85,247,0.12)",
          transition: "all .2s"
        }, onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateX(6px)";
          e.currentTarget.style.color = "#a855f7";
          e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)";
        }, onMouseLeave: (e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.color = "#8899aa";
          e.currentTarget.style.borderColor = "rgba(168,85,247,0.12)";
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, className: "text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-accent", children: "→" })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-right card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse-dot", style: {
            width: 9,
            height: 9,
            borderRadius: 999,
            background: "#a855f7"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[12px] text-accent", children: "AVAILABLE_FOR_HIRE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "editorial-h3 mb-5", style: {
          fontSize: "1.2rem"
        }, children: "Roles I'm open to" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-6", children: ["RLHF / RLSF Annotator", "Multilingual SFT Curator", "Annotation QA Reviewer", "Red-team / Safety Evaluator"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-3 py-2 text-text", style: {
          borderLeft: "2px solid #a855f7"
        }, children: r }, r)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Remote", "Contract", "Freelance", "Part-time"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-on", children: t }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative", style: {
      borderTop: "1px solid rgba(168,85,247,0.1)",
      zIndex: 5
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-muted", children: "© 2026 himanshi.yenugupalli // all rights reserved" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-muted", children: "labeled with care · shipped from /home" })
    ] }) })
  ] });
}
export {
  HomePage as component
};
