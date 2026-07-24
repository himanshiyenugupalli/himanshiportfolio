/**
 * Premium Identity Card — corporate employee badge edition.
 *
 * Features:
 *   - Real profile photo (uploaded image, served from /public)
 *   - Clean flat dark glassmorphism card body (amber/gold theme matched)
 *   - Rotating conic halo behind the photo
 *   - Metal lanyard slot at top center
 *   - Monospace ID & barcode styling
 *   - Desktop-only hover tilt effect
 */

const PHOTO_URL = "/himanshi.jpg";

const NEON = "#d97706"; // Warm amber/gold
const NEON_SOFT = "#f59e0b"; // Bright amber
const NEON_GLOW = "rgba(245,158,11,0.4)";

interface IdCardProps {
  /** When true, suppresses the cardFloat CSS animation (used on mobile) */
  floatDisabled?: boolean;
}

export function IdCard({ floatDisabled = false }: IdCardProps) {
  return (
    <div
      className={floatDisabled ? "id-card-glass id-card-tilt" : "card-float id-card-glass id-card-tilt"}
      style={{
        width: "min(320px, 90vw)",
        height: 440,
        transformOrigin: "top center",
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
          height: "100%",
          borderRadius: 22,
          padding: 0,
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
          backdropFilter: "blur(24px) saturate(150%)",
          WebkitBackdropFilter: "blur(24px) saturate(150%)",
          border: `1px solid rgba(245,158,11,0.6)`,
          boxShadow:
            `0 0 0 1px rgba(255,255,255,0.07) inset,` +
            `0 0 16px ${NEON},` +
            `0 0 40px ${NEON_SOFT},` +
            `0 0 90px rgba(245,158,11,0.22),` +
            `0 35px 70px -20px rgba(0,0,0,0.75)`,
        }}
      >
        {/* ── Card body: Flat background without network/circuit pattern ── */}
        <div
          style={{
            position: "relative",
            height: "100%",
            borderRadius: 20,
            overflow: "hidden",
            background: "linear-gradient(160deg, #181d28 0%, #0e1117 100%)",
            padding: "26px 20px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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

          {/* ── Header row: Company branding + Status badge ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 8,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(253,230,138,0.75)",
                textShadow: `0 0 6px ${NEON}`,
              }}
            >
              AI · CORP
            </div>

            {/* Single Status badge: Available */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "3px 9px",
                borderRadius: 999,
                background: "rgba(34,197,94,0.12)",
                border: "1px solid rgba(34,197,94,0.35)",
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
                  fontSize: 7.5,
                  letterSpacing: "0.22em",
                  color: "#22c55e",
                  textTransform: "uppercase",
                }}
              >
                Available
              </span>
            </div>
          </div>

          {/* ── Profile photo with conic halo ── */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              margin: "12px 0 8px",
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
                  `conic-gradient(from 180deg, transparent 0%, rgba(245,158,11,0.4) 30%, transparent 60%, rgba(217,119,6,0.3) 80%, transparent 100%)`,
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
                background: `linear-gradient(135deg, ${NEON}, ${NEON_SOFT} 50%, #b45309)`,
                boxShadow:
                  `0 0 20px ${NEON}, 0 0 50px rgba(245,158,11,0.4), inset 0 0 0 1px rgba(0,0,0,0.6)`,
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

          {/* ── Name + Role + ID block ── */}
          <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#f8f1ff",
                lineHeight: 1.1,
                textShadow: `0 0 16px rgba(245,158,11,0.35)`,
              }}
            >
              Himanshi{" "}
              <span style={{ color: "#fcd34d", fontWeight: 700 }}>
                Yenugupalli
              </span>
            </div>
            <div
              className="font-mono"
              style={{
                marginTop: 6,
                fontSize: 9,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#fcd34d",
                textShadow: `0 0 7px ${NEON}`,
              }}
            >
              AI · Data Annotator
            </div>
            <div
              className="font-mono"
              style={{
                marginTop: 6,
                fontSize: 10,
                letterSpacing: "0.25em",
                color: "rgba(253,230,138,0.8)",
                textTransform: "uppercase",
              }}
            >
              ID: HY-78901
            </div>
          </div>

          {/* ── Bottom Barcode / QR Strip (No label text) ── */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              paddingTop: 8,
              borderTop: "1px solid rgba(245,158,11,0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                background: "rgba(0,0,0,0.45)",
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid rgba(245,158,11,0.3)",
                boxShadow: `0 0 12px ${NEON_GLOW}`,
              }}
            >
              {/* Synthetic Barcode lines */}
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  gap: 1.5,
                  height: 28,
                  flex: 1,
                }}
              >
                {Array.from({ length: 42 }).map((_, i) => {
                  const w = (i * 47) % 3 === 0 ? 2.5 : 1.2;
                  const skip = (i * 29) % 6 === 0;
                  return (
                    <span
                      key={i}
                      style={{
                        width: w,
                        height: "100%",
                        background: skip ? "transparent" : "#f5f3ee",
                        opacity: 0.9,
                      }}
                    />
                  );
                })}
              </div>

              {/* Synthetic Mini QR code */}
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "#000",
                  border: `1px solid ${NEON}`,
                  borderRadius: 3,
                  padding: 2,
                  shrink: 0,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gridTemplateRows: "repeat(6, 1fr)",
                    gap: 0.5,
                  }}
                >
                  {Array.from({ length: 36 }).map((_, i) => {
                    const r = Math.floor(i / 6);
                    const c = i % 6;
                    const corner = (r < 2 && c < 2) || (r < 2 && c > 3) || (r > 3 && c < 2);
                    const on = corner || ((i * 823) % 5 < 2);
                    return (
                      <span
                        key={i}
                        style={{ background: on ? "#f5f3ee" : "transparent" }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
