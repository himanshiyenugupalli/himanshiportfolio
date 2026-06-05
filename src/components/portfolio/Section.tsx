import { ReactNode } from "react";

export function Section({
  id, index, label, command, children,
}: { id: string; index: string; label: string; command: string; children: ReactNode }) {
  // Split label into primary + accent (first word display, rest serif italic)
  const parts = label.trim().split(/\s+/);
  const primary = parts[0] ?? label;
  const accent = parts.slice(1).join(" ");

  return (
    <section id={id} className="relative" style={{ padding: "88px 0", zIndex: 5 }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(170,185,200,0.55)",
              marginBottom: 14,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ color: "#c084fc" }}>{index}</span>
            <span
              style={{
                display: "inline-block",
                width: 40,
                height: 1,
                background: "linear-gradient(90deg, rgba(192,132,252,0.6), transparent)",
              }}
            />
            <span>{command}</span>
          </div>

          <h2 className="sec-heading" style={{ margin: 0, lineHeight: 0.92 }}>
            <span className="sec-heading-primary">{primary}</span>
            {accent && (
              <>
                {" "}
                <span className="sec-heading-accent">{accent.toLowerCase()}.</span>
              </>
            )}
          </h2>

          <div
            aria-hidden
            style={{
              marginTop: 22,
              width: 80,
              height: 1,
              background: "linear-gradient(90deg, rgba(168,85,247,0.6), transparent)",
            }}
          />
        </div>
        {children}
      </div>
    </section>
  );
}
