import React, { useEffect, useRef, useState } from "react";

// Sort filenames numerically rather than lexicographically
const FRAME_FILES: string[] = Array.from({ length: 121 }, (_, i) => {
  const indexStr = String(i).padStart(3, "0");
  return `/frames/frame_${indexStr}_delay-0.067s.webp`;
});

export function LiquidFrameAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Store loaded Image instances in memory cache
  const framesCache = useRef<(HTMLImageElement | null)[]>(new Array(121).fill(null));
  const currentFrameRef = useRef<number>(0);

  // Local frame offset driven strictly by cursor over Hero chrome
  const cursorOffsetRef = useRef<{ current: number; target: number }>({
    current: 0,
    target: 0,
  });

  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    let isMounted = true;

    // 1. Progressive preloading mechanism
    // First priority: Load first 5 frames immediately
    const priorityIndices = [0, 1, 2, 3, 4];
    priorityIndices.forEach((idx) => {
      const img = new Image();
      img.src = FRAME_FILES[idx];
      img.onload = () => {
        if (isMounted) {
          framesCache.current[idx] = img;
          if (idx === 0 && currentFrameRef.current === 0) {
            renderFrame(0);
          }
        }
      };
    });

    // Preload remaining frames progressively
    for (let i = 5; i < FRAME_FILES.length; i++) {
      const img = new Image();
      img.src = FRAME_FILES[i];
      img.onload = () => {
        if (isMounted) {
          framesCache.current[i] = img;
        }
      };
    }

    // 2. Local Mouse Interaction over Hero Chrome Interaction Area
    const handleMouseMove = (e: MouseEvent) => {
      // Disable cursor effect on touch-only / coarse pointer devices
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const heroChromeEl = document.querySelector("[data-hero-chrome]");
      if (!heroChromeEl) {
        cursorOffsetRef.current.target = 0;
        return;
      }

      const rect = heroChromeEl.getBoundingClientRect();
      const isInsideHeroChrome =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInsideHeroChrome) {
        // Calculate relative position within Hero chrome region (-1 to +1)
        const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        // Map to a subtle local frame offset range (max +-6 frames)
        cursorOffsetRef.current.target = relX * 6;
      } else {
        // Smoothly decay back to 0 when cursor leaves Hero chrome
        cursorOffsetRef.current.target = 0;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 3. Scroll & Render Loop via requestAnimationFrame
    let animationFrameId: number;

    const renderLoop = () => {
      if (!isMounted) return;

      // Smoothly interpolate cursor local frame offset
      cursorOffsetRef.current.current +=
        (cursorOffsetRef.current.target - cursorOffsetRef.current.current) * 0.1;

      // Measure continuous timeline across Hero -> About -> Experience
      const heroEl = document.getElementById("top");
      const experienceEl = document.getElementById("experience");
      const projectsEl = document.getElementById("projects");

      if (experienceEl && heroEl) {
        const startTop = heroEl.offsetTop;
        const experienceBottom = experienceEl.offsetTop + experienceEl.offsetHeight;
        const totalHeight = experienceBottom - startTop;

        const currentScroll = window.scrollY || window.pageYOffset;
        const relativeScroll = currentScroll - startTop;

        // Normalized progress [0, 1] across Hero -> About -> Experience
        let progress = Math.max(0, Math.min(1, relativeScroll / (totalHeight - window.innerHeight)));

        // Calculate base frame index from scroll
        const totalFrames = FRAME_FILES.length;
        const baseFrame = Math.max(0, Math.min(totalFrames - 1, Math.floor(progress * (totalFrames - 1))));

        // Add local cursor frame offset (clamped to valid frame boundaries)
        const effectiveFrame = Math.max(
          0,
          Math.min(totalFrames - 1, Math.round(baseFrame + cursorOffsetRef.current.current))
        );

        currentFrameRef.current = effectiveFrame;
        renderFrame(effectiveFrame);

        // Fade out transition as user scrolls past Experience into Projects
        if (projectsEl) {
          const projectsTop = projectsEl.offsetTop;
          const fadeStart = projectsTop - window.innerHeight;
          const fadeEnd = projectsTop - window.innerHeight * 0.4;

          if (currentScroll >= fadeEnd) {
            setOpacity(0);
          } else if (currentScroll > fadeStart) {
            const fadeProgress = (currentScroll - fadeStart) / (fadeEnd - fadeStart);
            setOpacity(1 - Math.max(0, Math.min(1, fadeProgress)));
          } else {
            setOpacity(1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      isMounted = false;
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Gracefully render target frame onto stationary Canvas
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find nearest loaded frame if exact target frame is still loading
    let imgToDraw: HTMLImageElement | null = framesCache.current[frameIndex];
    if (!imgToDraw) {
      for (let offset = 1; offset < 30; offset++) {
        if (frameIndex - offset >= 0 && framesCache.current[frameIndex - offset]) {
          imgToDraw = framesCache.current[frameIndex - offset];
          break;
        }
        if (frameIndex + offset < 121 && framesCache.current[frameIndex + offset]) {
          imgToDraw = framesCache.current[frameIndex + offset];
          break;
        }
      }
    }

    // Set high DPI canvas resolution matching container bounds
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
      const imgWidth = imgToDraw.naturalWidth;
      const imgHeight = imgToDraw.naturalHeight;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Preserve 16:9 frame aspect ratio
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;

      // Scale to fit nicely without stretching/distortion
      if (canvasRatio > imgRatio) {
        drawHeight = canvasHeight;
        drawWidth = drawHeight * imgRatio;
      } else {
        drawWidth = canvasWidth;
        drawHeight = drawWidth / imgRatio;
      }

      // On desktop/large screens, scale up slightly if needed so it stays prominent on left
      if (canvasWidth > 768) {
        drawWidth = Math.max(drawWidth, canvasWidth * 0.55);
        drawHeight = drawWidth / imgRatio;
      }

      // Canvas remains physically stationary flush to viewport left edge
      const drawX = 0;
      const drawY = (canvasHeight - drawHeight) / 2;

      ctx.drawImage(imgToDraw, drawX, drawY, drawWidth, drawHeight);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden transition-opacity duration-300"
      style={{ opacity }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-contain pointer-events-none"
      />
    </div>
  );
}
