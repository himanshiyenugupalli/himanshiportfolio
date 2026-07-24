import { ReactNode } from "react";

export function Section({
  id, index, label, tag = "LAB NOTEBOOK", children,
}: { id: string; index: string; label: string; tag?: string; command?: string; children: ReactNode }) {
  const parts = label.trim().split(/\s+/);
  const primary = parts[0] ?? label;
  const accent = parts.slice(1).join(" ");

  return (
    <section id={id} className="relative" style={{ padding: "80px 0", zIndex: 5 }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(245, 158, 11, 0.8)",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ color: "#f59e0b", fontWeight: 600 }}>[{index}]</span>
            <span
              style={{
                display: "inline-block",
                width: 32,
                height: 1,
                background: "rgba(245, 158, 11, 0.3)",
              }}
            />
            <span style={{ color: "rgba(156, 163, 175, 0.7)" }}>{tag}</span>
          </div>

          <h2 className="sec-heading" style={{ margin: 0, lineHeight: 1.05 }}>
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
              marginTop: 18,
              width: 60,
              height: 2,
              borderRadius: 1,
              background: "linear-gradient(90deg, #f59e0b, transparent)",
            }}
          />
        </div>
        {children}
      </div>
    </section>
  );
}
