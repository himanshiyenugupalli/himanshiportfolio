/**
 * Neon Identity Card — refined edition.
 * Circular profile photo crowns the top center, ringed by a glowing neon
 * halo and rotating conic gradient. Below it: name + role, then the
 * field list, QR + barcode, and a status pill. Elegant serif typography
 * for the headline, mono for technical labels.
 */
import himanshi from "@/assets/himanshi.jpeg.asset.json";

const NEON = "#c026d3";
const NEON_SOFT = "#d946ef";

export function IdCard() {
  const fields: [string, string][] = [
    ["ID", "HY-78901"],
    ["DEPT", "AI TRAINING"],
    ["ROLE", "DATA ANNOTATOR"],
    ["EXPIRES", "12/26"],
  ];

  return (
    <div
      className="card-float id-card-glass"
      style={{
        width: "min(308px, 86vw)",
        transform: "rotate(-3deg)",
        transformOrigin: "top center",
      }}
    >
      {/* Metal slot at top center — strap clip plugs in here */}
      <div
        style={{
          position: "relative",
          width: 64,
          height: 16,
          margin: "0 auto -8px",
          borderRadius: 3,
          background:
            "linear-gradient(180deg, #6a7280 0%, #2a313c 50%, #14181f 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.7)",
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 34,
            height: 5,
            borderRadius: 2,
            background: "linear-gradient(180deg, #050709 0%, #1a1f28 100%)",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.95)",
          }}
        />
      </div>

      {/* Outer neon glow halo */}
      <div
        data-hover
        style={{
          position: "relative",
          borderRadius: 22,
          padding: 0,
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
          backdropFilter: "blur(22px) saturate(140%)",
          WebkitBackdropFilter: "blur(22px) saturate(140%)",
          border: `1px solid rgba(217,70,239,0.55)`,
          boxShadow:
            `0 0 0 1px rgba(255,255,255,0.06) inset,` +
            `0 0 14px ${NEON},` +
            `0 0 36px ${NEON_SOFT},` +
            `0 0 80px rgba(192,38,211,0.35),` +
            `0 30px 60px -20px rgba(0,0,0,0.7)`,
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(168,85,247,0.06) 45%, rgba(255,255,255,0.03) 100%)",
            padding: "26px 18px 16px",
          }}
        >
          {/* faint circuit board trace pattern */}
          <svg
            aria-hidden
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.32,
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

          {/* TOP — circular profile photo with conic halo */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            {/* Rotating conic halo */}
            <div
              className="spin-slow"
              aria-hidden
              style={{
                position: "absolute",
                width: 134,
                height: 134,
                top: -6,
                borderRadius: "50%",
                background:
                  `conic-gradient(from 0deg, ${NEON} 0%, transparent 30%, ${NEON_SOFT} 55%, transparent 80%, ${NEON} 100%)`,
                filter: "blur(8px)",
                opacity: 0.85,
                zIndex: 0,
              }}
            />
            {/* Photo ring */}
            <div
              style={{
                position: "relative",
                width: 122,
                height: 122,
                borderRadius: "50%",
                padding: 3,
                background: `linear-gradient(135deg, ${NEON}, ${NEON_SOFT} 50%, #7c3aed)`,
                boxShadow:
                  `0 0 18px ${NEON}, 0 0 44px rgba(217,70,239,0.55), inset 0 0 0 1px rgba(0,0,0,0.6)`,
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
                  border: `1.5px solid rgba(0,0,0,0.8)`,
                }}
              >
                <img
                  src={himanshi.url}
                  alt="Himanshi Yenugupalli"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "saturate(1.02) contrast(1.06)",
                  }}
                />
              </div>
              {/* Tiny corner badge */}
              <span
                className="pulse-dot"
                style={{
                  position: "absolute",
                  right: 4,
                  bottom: 8,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid #050309",
                  boxShadow: "0 0 8px #22c55e",
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          {/* Name + role */}
          <div style={{ textAlign: "center", marginBottom: 12, position: "relative" }}>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.005em",
                color: "#f8f1ff",
                lineHeight: 1.05,
                textShadow: `0 0 14px rgba(217,70,239,0.45)`,
              }}
            >
              Himanshi <span style={{ fontStyle: "italic", color: "#f0abfc", fontWeight: 500 }}>Yenugupalli</span>
            </div>
            <div
              className="font-mono"
              style={{
                marginTop: 6,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#f0abfc",
                textShadow: `0 0 6px ${NEON}`,
              }}
            >
              AI · Data Annotator
            </div>
          </div>

          {/* Divider */}
          <div
            aria-hidden
            style={{
              height: 1,
              width: "100%",
              background: `linear-gradient(90deg, transparent, ${NEON}, transparent)`,
              opacity: 0.55,
              marginBottom: 12,
            }}
          />

          {/* Field grid — compact two-column */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 12px",
              position: "relative",
              marginBottom: 14,
            }}
          >
            {fields.map(([k, v]) => (
              <div
                key={k}
                className="font-mono"
                style={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <span
                  style={{
                    fontSize: 7,
                    letterSpacing: "0.22em",
                    color: "#f0abfc",
                    textShadow: `0 0 4px ${NEON}`,
                  }}
                >
                  {k}
                </span>
                <span
                  style={{
                    fontSize: 10,
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

          {/* BOTTOM ROW — QR + barcode */}
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
                width: 54,
                height: 54,
                background: "#000",
                border: `1px solid ${NEON}`,
                borderRadius: 4,
                padding: 3,
                boxShadow: `0 0 8px ${NEON}`,
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
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  gap: 1.2,
                  height: 34,
                  padding: "4px 6px",
                  background: "rgba(0,0,0,0.6)",
                  border: `1px solid ${NEON}`,
                  borderRadius: 4,
                  boxShadow: `0 0 8px ${NEON}`,
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
                  textShadow: `0 0 4px ${NEON}`,
                }}
              >
                HY-78901
              </span>
            </div>
          </div>

          {/* Status pill */}
          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 12,
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(192,38,211,0.08)",
              border: `1px solid ${NEON}`,
              boxShadow: `inset 0 0 6px rgba(192,38,211,0.3)`,
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
                  fontSize: 8,
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
                color: "#f0abfc",
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
