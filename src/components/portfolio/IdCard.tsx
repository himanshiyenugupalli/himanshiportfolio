/**
 * Premium Identity Card — corporate employee badge edition.
 *
 * Features:
 *   - Real profile photo (uploaded image, served from /public)
 *   - Glassmorphism card body with neon purple accent
 *   - Rotating conic halo behind the photo
 *   - Circuit-board trace background texture
 *   - Metal lanyard slot at top center
 *   - Holographic shimmer overlay
 *   - Desktop-only hover tilt effect (CSS only, no JS)
 *   - `floatDisabled` prop — pass on mobile to skip the CSS float animation
 */

/** Path to Himanshi's profile photo — served from /public as a static file */
const PHOTO_URL = "/himanshi.jpg";

const NEON = "#c026d3";
const NEON_SOFT = "#d946ef";
const NEON_GLOW = "rgba(192,38,211,0.5)";

interface IdCardProps {
  /** When true, suppresses the cardFloat CSS animation (used on mobile) */
  floatDisabled?: boolean;
}

export function IdCard({ floatDisabled = false }: IdCardProps) {
  const fields: [string, string][] = [
    ["ID", "HY-78901"],
    ["DEPT", "AI TRAINING"],
    ["ROLE", "DATA ANNOTATOR"],
    ["EXPIRES", "12/26"],
  ];

  return (
    <div
      className={floatDisabled ? "id-card-glass id-card-tilt" : "card-float id-card-glass id-card-tilt"}
      style={{
        width: "min(320px, 90vw)",
        transformOrigin: "top center",
        // Note: card-float applies rotate via CSS animation keyframe.
        // When floatDisabled, we apply a static tilt instead.
        transform: floatDisabled ? "rotate(-2deg)" : undefined,
      }}
    >
      {/* ── Metal lanyard slot at top center ── */}
      <div
        style={{
          position: "relative",
          width: 70,
          height: 18,
          margin: "0 auto -9px",
          borderRadius: "4px 4px 3px 3px",
          background:
            "linear-gradient(180deg, #8a9ab0 0%, #4a5668 40%, #2a313c 70%, #14181f 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.8), " +
            "0 3px 6px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,0,0,0.5)",
          zIndex: 3,
        }}
      >
        {/* Slot opening */}
        <div
          style={{
            position: "absolute",
            top: 5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 38,
            height: 6,
            borderRadius: 2,
            background: "linear-gradient(180deg, #020305 0%, #0f1218 100%)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.98), inset 0 0 4px rgba(0,0,0,0.9)",
          }}
        />
        {/* Slot highlight */}
        <div
          style={{
            position: "absolute",
            top: 2,
            left: 6,
            right: 6,
            height: 1,
            borderRadius: 1,
            background: "rgba(255,255,255,0.35)",
          }}
        />
      </div>

      {/* ── Outer glowing border ── */}
      <div
        data-hover
        style={{
          position: "relative",
          borderRadius: 22,
          padding: 0,
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
          backdropFilter: "blur(24px) saturate(150%)",
          WebkitBackdropFilter: "blur(24px) saturate(150%)",
          border: `1px solid rgba(217,70,239,0.6)`,
          boxShadow:
            `0 0 0 1px rgba(255,255,255,0.07) inset,` +
            `0 0 16px ${NEON},` +
            `0 0 40px ${NEON_SOFT},` +
            `0 0 90px rgba(192,38,211,0.3),` +
            `0 35px 70px -20px rgba(0,0,0,0.75)`,
        }}
      >
        {/* ── Card body ── */}
        <div
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.09) 0%, rgba(140,60,220,0.07) 45%, rgba(255,255,255,0.03) 100%)",
            padding: "28px 20px 18px",
          }}
        >
          {/* Circuit board trace pattern */}
          <svg
            aria-hidden
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.28,
              pointerEvents: "none",
            }}
          >
            <defs>
              <pattern
                id="circuitTrace"
                width="34"
                height="34"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 17 H10 V6 H22 V17 H34 M17 0 V12 M17 22 V34 M6 28 H17"
                  stroke={NEON}
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle cx="10" cy="6" r="1.1" fill={NEON} />
                <circle cx="22" cy="17" r="1.1" fill={NEON_SOFT} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuitTrace)" />
          </svg>

          {/* Holographic shimmer overlay */}
          <div
            aria-hidden
            className="holo"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 20,
              pointerEvents: "none",
            }}
          />

          {/* ── Company branding strip ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
              position: "relative",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 7.5,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(240,171,252,0.7)",
                textShadow: `0 0 6px ${NEON}`,
              }}
            >
              AI · Corp
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "3px 8px",
                borderRadius: 4,
                background: "rgba(192,38,211,0.1)",
                border: `1px solid rgba(217,70,239,0.3)`,
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: 6.5,
                  letterSpacing: "0.28em",
                  color: "#22c55e",
                  textTransform: "uppercase",
                }}
              >
                Active
              </span>
            </div>
          </div>

          {/* ── Profile photo with conic halo ── */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            {/* Rotating conic halo */}
            <div
              className="spin-slow"
              aria-hidden
              style={{
                position: "absolute",
                width: 140,
                height: 140,
                top: -8,
                borderRadius: "50%",
                background:
                  `conic-gradient(from 0deg, ${NEON} 0%, transparent 30%, ${NEON_SOFT} 55%, transparent 80%, ${NEON} 100%)`,
                filter: "blur(9px)",
                opacity: 0.9,
                zIndex: 0,
              }}
            />
            {/* Secondary inner halo */}
            <div
              className="spin-slow"
              aria-hidden
              style={{
                position: "absolute",
                width: 128,
                height: 128,
                top: -2,
                borderRadius: "50%",
                background:
                  `conic-gradient(from 180deg, transparent 0%, rgba(168,85,247,0.4) 30%, transparent 60%, rgba(217,70,239,0.3) 80%, transparent 100%)`,
                filter: "blur(5px)",
                opacity: 0.7,
                zIndex: 0,
                animationDuration: "14s",
                animationDirection: "reverse",
              }}
            />
            {/* Photo ring */}
            <div
              style={{
                position: "relative",
                width: 124,
                height: 124,
                borderRadius: "50%",
                padding: 3,
                background: `linear-gradient(135deg, ${NEON}, ${NEON_SOFT} 50%, #7c3aed)`,
                boxShadow:
                  `0 0 20px ${NEON}, 0 0 50px rgba(217,70,239,0.5), inset 0 0 0 1px rgba(0,0,0,0.6)`,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "#000",
                  border: `2px solid rgba(0,0,0,0.8)`,
                }}
              >
                <img
                  src={PHOTO_URL}
                  alt="Himanshi Yenugupalli"
                  width={120}
                  height={120}
                  fetchPriority="high"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    filter: "saturate(1.04) contrast(1.07) brightness(1.02)",
                  }}
                />
              </div>
              {/* Online status badge */}
              <span
                className="pulse-dot"
                style={{
                  position: "absolute",
                  right: 5,
                  bottom: 8,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2.5px solid #050309",
                  boxShadow: "0 0 10px #22c55e, 0 0 20px rgba(34,197,94,0.4)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          {/* ── Name + role ── */}
          <div style={{ textAlign: "center", marginBottom: 14, position: "relative" }}>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 23,
                fontWeight: 600,
                letterSpacing: "-0.005em",
                color: "#f8f1ff",
                lineHeight: 1.05,
                textShadow: `0 0 16px rgba(217,70,239,0.4)`,
              }}
            >
              Himanshi{" "}
              <span style={{ fontStyle: "italic", color: "#f0abfc", fontWeight: 500 }}>
                Yenugupalli
              </span>
            </div>
            <div
              className="font-mono"
              style={{
                marginTop: 7,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#f0abfc",
                textShadow: `0 0 7px ${NEON}`,
              }}
            >
              AI · Data Annotator
            </div>
          </div>

          {/* ── Divider ── */}
          <div
            aria-hidden
            style={{
              height: 1,
              width: "100%",
              background: `linear-gradient(90deg, transparent, ${NEON}, rgba(217,70,239,0.4), transparent)`,
              opacity: 0.6,
              marginBottom: 14,
            }}
          />

          {/* ── Field grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "9px 14px",
              position: "relative",
              marginBottom: 16,
            }}
          >
            {fields.map(([k, v]) => (
              <div
                key={k}
                className="font-mono"
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <span
                  style={{
                    fontSize: 7,
                    letterSpacing: "0.22em",
                    color: "rgba(240,171,252,0.65)",
                    textShadow: `0 0 4px ${NEON}`,
                    textTransform: "uppercase",
                  }}
                >
                  {k}
                </span>
                <span
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.06em",
                    color: "#f5f3ee",
                    fontWeight: 600,
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>

          {/* ── QR + Barcode row ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 10,
              alignItems: "end",
              position: "relative",
            }}
          >
            {/* QR code (synthetic) */}
            <div
              style={{
                width: 56,
                height: 56,
                background: "#000",
                border: `1px solid ${NEON}`,
                borderRadius: 5,
                padding: 3,
                boxShadow: `0 0 10px ${NEON_GLOW}`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(9, 1fr)",
                  gridTemplateRows: "repeat(9, 1fr)",
                  gap: 1,
                }}
              >
                {Array.from({ length: 81 }).map((_, i) => {
                  const r = Math.floor(i / 9);
                  const c = i % 9;
                  const corner =
                    (r < 3 && c < 3) ||
                    (r < 3 && c > 5) ||
                    (r > 5 && c < 3);
                  const cornerEdge =
                    corner &&
                    (r === 0 || c === 0 || r === 2 || c === 2 ||
                     (r < 3 && c === 8) || (r === 0 && c > 5) ||
                     (r === 2 && c > 5) || (r > 5 && c === 0) ||
                     (r > 5 && c === 2) || (r === 8 && c < 3));
                  const cornerCenter = corner && r % 4 === 1 && c % 4 === 1;
                  const on = cornerEdge || cornerCenter || ((i * 977) % 7 < 3);
                  return (
                    <span
                      key={i}
                      style={{ background: on ? "#f5f3ee" : "transparent" }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Barcode block */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  gap: 1.2,
                  height: 36,
                  padding: "4px 7px",
                  background: "rgba(0,0,0,0.65)",
                  border: `1px solid ${NEON}`,
                  borderRadius: 5,
                  boxShadow: `0 0 10px ${NEON_GLOW}`,
                }}
              >
                {Array.from({ length: 36 }).map((_, i) => {
                  const w = (i * 53) % 3 === 0 ? 2.5 : 1.2;
                  const skip = (i * 31) % 5 === 0;
                  return (
                    <span
                      key={i}
                      style={{
                        width: w,
                        height: "100%",
                        background: skip ? "transparent" : "#f5f3ee",
                      }}
                    />
                  );
                })}
              </div>
              <span
                className="font-mono"
                style={{
                  fontSize: 8,
                  letterSpacing: "0.28em",
                  color: "#f0abfc",
                  textAlign: "center",
                  textShadow: `0 0 5px ${NEON}`,
                }}
              >
                HY-78901
              </span>
            </div>
          </div>

          {/* ── Status pill ── */}
          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 14,
              padding: "7px 12px",
              borderRadius: 999,
              background: "rgba(192,38,211,0.09)",
              border: `1px solid rgba(217,70,239,0.45)`,
              boxShadow: `inset 0 0 8px rgba(192,38,211,0.25), 0 0 12px rgba(192,38,211,0.12)`,
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="pulse-dot"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: 8.5,
                  letterSpacing: "0.24em",
                  color: "#f5f3ee",
                  textTransform: "uppercase",
                }}
              >
                Available
              </span>
            </div>
            <span
              className="font-mono"
              style={{
                fontSize: 7,
                letterSpacing: "0.28em",
                color: "rgba(240,171,252,0.7)",
                textTransform: "uppercase",
              }}
            >
              SCAN ME
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
