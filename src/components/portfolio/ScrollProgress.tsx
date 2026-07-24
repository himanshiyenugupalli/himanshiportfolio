import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <div style={{ position: "fixed", top: 56, left: 0, height: 2, width: "100%", zIndex: 50, background: "transparent" }}>
      <div style={{ height: "100%", width: `${p}%`, background: "#f59e0b", boxShadow: "0 0 8px rgba(245,158,11,0.5)", transition: "width .1s" }} />
    </div>
  );
}
