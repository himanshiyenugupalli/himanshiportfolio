import { useEffect, useRef } from "react";

// Palette
// 0 transparent, 1 outline, 2 dark body, 3 mid body, 4 accent amber,
// 5 visor gold, 6 highlight, 7 amber rivet
const PAL = [
  "transparent",
  "#06080c",
  "#1a2332",
  "#3a4a5a",
  "#f59e0b",
  "#fcd34d",
  "#e2e8f0",
  "#d97706",
];

// 12 cols × 16 rows mech/chibi
const SPRITE: number[][] = [
  [0,0,0,0,0,1,1,0,0,0,0,0],
  [0,0,0,0,0,1,4,1,0,0,0,0],
  [0,0,0,1,1,2,2,1,1,0,0,0],
  [0,0,1,2,3,3,3,3,2,1,0,0],
  [0,0,1,3,5,5,5,5,3,1,0,0],
  [0,0,1,2,2,6,6,2,2,1,0,0],
  [0,0,0,1,1,1,1,1,1,0,0,0],
  [0,1,1,2,3,3,3,3,2,1,1,0],
  [1,2,2,3,7,3,3,7,3,2,2,1],
  [1,2,1,3,3,4,4,3,3,1,2,1],
  [1,2,1,3,3,3,3,3,3,1,2,1],
  [0,1,1,2,2,2,2,2,2,1,1,0],
  [0,0,0,1,2,2,2,2,1,0,0,0],
  [0,0,0,1,3,1,1,3,1,0,0,0],
  [0,0,0,1,3,1,1,3,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,0,0,0],
];

const COLS = 12;
const ROWS = 16;
const PX = 6; // pixel size

export function PixelRobot() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;

    let raf = 0;
    let t = 0;
    let mx = window.innerWidth, my = window.innerHeight;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // smooth horizontal drift — more sway than bob
      const sway = Math.sin(t * 0.8) * 8;
      const bob = Math.sin(t * 1.2) * 1.5;

      // visor tracks cursor (subtle 2px shift)
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mx - cx, dy = my - cy;
      const d = Math.max(1, Math.hypot(dx, dy));
      const lookX = Math.round((dx / d) * 1.2);
      const lookY = Math.round((dy / d) * 1.2);

      // soft shadow
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.ellipse((COLS * PX) / 2 + sway, ROWS * PX + 4, COLS * PX * 0.32, 2.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(sway, bob);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const v = SPRITE[r][c];
          if (v === 0) continue;
          if (v === 5) {
            // visor — render shifted toward cursor for "look" effect
            ctx.fillStyle = PAL[5];
            ctx.fillRect(c * PX + lookX, r * PX + lookY, PX, PX);
            continue;
          }
          if (v === 4) {
            const pulse = 0.5 + 0.5 * Math.sin(t * 2.2);
            ctx.fillStyle = pulse > 0.85 ? "#fcd34d" : "#f59e0b";
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

  return (
    <canvas
      ref={ref}
      width={COLS * PX}
      height={ROWS * PX + 8}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: COLS * PX,
        height: ROWS * PX + 8,
        pointerEvents: "none",
        zIndex: 40,
        imageRendering: "pixelated",
        filter: "drop-shadow(0 8px 18px rgba(245,158,11,0.3))",
      }}
    />
  );
}

