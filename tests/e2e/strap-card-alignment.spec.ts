import { test, expect, type Page } from "@playwright/test";

/**
 * Visual regression check: the hanging-lanyard strap's lobster-clip end
 * must stay glued to the ID card's metal slot through the entire horizontal
 * swipe, at every common viewport size.
 *
 * Strategy: measure the bounding rect of the SVG `[data-testid="strap-clip"]`
 * group and the DOM `[data-testid="card-slot"]` anchor, then assert their
 * centers overlap within a small tolerance. We sample at three scroll
 * progress points (start, mid-swipe, end) and across several viewports.
 *
 * Run: `bunx playwright test` (after starting `bun run dev`).
 */

const VIEWPORTS = [
  { name: "mobile-portrait", width: 390, height: 844 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "laptop", width: 1366, height: 768 },
  { name: "desktop", width: 1536, height: 864 },
  { name: "desktop-xl", width: 1920, height: 1080 },
];

// Scroll positions expressed as a fraction of the hero's pinned-track range.
// At 0 the user sees Panel 1; at ~1 they've swiped fully to Panel 2.
const SWIPE_POINTS = [0, 0.25, 0.5, 0.75, 1];

// Pixel tolerance between the strap clip center and the card slot center.
// Generous enough to absorb sub-pixel rounding and spring damping, tight
// enough to catch any real seam or drift.
const TOLERANCE_PX = 12;

async function measureGap(page: Page) {
  return page.evaluate(() => {
    const clip = document.querySelector<SVGGElement>('[data-testid="strap-clip"]');
    const slot = document.querySelector<HTMLElement>('[data-testid="card-slot"]');
    if (!clip || !slot) return null;
    const c = clip.getBoundingClientRect();
    const s = slot.getBoundingClientRect();
    const cx = c.left + c.width / 2;
    const cy = c.top + c.height / 2;
    const sx = s.left + s.width / 2;
    const sy = s.top + s.height / 2;
    return {
      dx: cx - sx,
      dy: cy - sy,
      distance: Math.hypot(cx - sx, cy - sy),
    };
  });
}

for (const vp of VIEWPORTS) {
  test(`strap clip stays anchored to card slot @ ${vp.name} ${vp.width}x${vp.height}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("/");

    // Wait for the hero to mount and refs to be measured.
    await page.waitForSelector('[data-testid="strap-clip"]');
    await page.waitForSelector('[data-testid="card-slot"]');
    // Allow framer-motion spring to settle.
    await page.waitForTimeout(400);

    const heroHeight = await page.evaluate(() => {
      const hero = document.getElementById("hero");
      return hero ? hero.getBoundingClientRect().height : 0;
    });
    expect(heroHeight).toBeGreaterThan(0);

    const scrollRange = heroHeight - vp.height;

    for (const t of SWIPE_POINTS) {
      const y = Math.max(0, Math.round(scrollRange * t));
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      // Let the spring catch up to the scroll position.
      await page.waitForTimeout(500);

      const gap = await measureGap(page);
      expect(gap, `measurements at progress ${t}`).not.toBeNull();
      expect(
        gap!.distance,
        `clip-to-slot gap at progress ${t} on ${vp.name} ` +
          `was ${gap!.distance.toFixed(2)}px (dx=${gap!.dx.toFixed(2)}, dy=${gap!.dy.toFixed(2)})`,
      ).toBeLessThanOrEqual(TOLERANCE_PX);
    }
  });
}
