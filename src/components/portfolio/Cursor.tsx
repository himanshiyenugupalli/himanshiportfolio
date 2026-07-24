import { useEffect, useRef } from "react";

// Neural-arrow cursor: a sharp arrowhead with a trailing neural-net of nodes
// connected by glowing synapses that pulse along the path.
export function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let mouseX = -200, mouseY = -200;
    let curX = -200, curY = -200;
    let prevX = -200, prevY = -200;
    let hovering = false;
    let raf = 0;
    let frame = 0;

    type Node = { x: number; y: number; r: number; born: number };
    const nodes: Node[] = [];
    const MAX_NODES = 14;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      const t = e.target as HTMLElement | null;
      hovering = !!t?.closest("a, button, [data-hover]");
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      frame++;
      curX += (mouseX - curX) * 0.28;
      curY += (mouseY - curY) * 0.28;
      const dx = curX - prevX, dy = curY - prevY;
      const speed = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);

      // Drop a new neural node every few frames while moving
      if (speed > 1.2 && frame % 3 === 0) {
        nodes.push({
          x: curX - Math.cos(angle) * 14,
          y: curY - Math.sin(angle) * 14,
          r: 2 + Math.random() * 2,
          born: frame,
        });
        if (nodes.length > MAX_NODES) nodes.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Synapse lines between consecutive nodes + to arrow tip
      ctx.lineCap = "round";
      const pulse = (frame % 60) / 60;
      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i], b = nodes[i + 1];
        const alpha = (i + 1) / nodes.length * 0.55;
        ctx.strokeStyle = `rgba(245,158,11,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        // pulse traveling along
        const t = (pulse + i / nodes.length) % 1;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        ctx.fillStyle = `rgba(252,211,77,${alpha + 0.3})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      // Last node to arrow base
      if (nodes.length) {
        const last = nodes[nodes.length - 1];
        ctx.strokeStyle = "rgba(252,211,77,0.6)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(curX - Math.cos(angle) * 6, curY - Math.sin(angle) * 6);
        ctx.stroke();
      }

      // Neural nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const age = (frame - n.born) / 60;
        const a = Math.max(0, 1 - age) * 0.9;
        ctx.fillStyle = `rgba(245,158,11,${a})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(252,211,77,${a * 0.7})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 2.5, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Arrow head
      const color = hovering ? "#fcd34d" : "#f59e0b";
      const size = hovering ? 22 : 16;
      ctx.save();
      ctx.translate(curX, curY);
      ctx.rotate(angle);
      // Glow
      ctx.shadowColor = color;
      ctx.shadowBlur = hovering ? 18 : 10;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(size * 0.6, 0);
      ctx.lineTo(-size * 0.5, -size * 0.45);
      ctx.lineTo(-size * 0.25, 0);
      ctx.lineTo(-size * 0.5, size * 0.45);
      ctx.closePath();
      ctx.fill();
      // Inner core
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#0a1220";
      ctx.beginPath();
      ctx.moveTo(size * 0.3, 0);
      ctx.lineTo(-size * 0.2, -size * 0.16);
      ctx.lineTo(-size * 0.2, size * 0.16);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      prevX = curX; prevY = curY;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999,
        mixBlendMode: "screen",
      }}
    />
  );
}
