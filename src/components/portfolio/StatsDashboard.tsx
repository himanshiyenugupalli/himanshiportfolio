/**
 * StatsDashboard — Illustrative QA & Annotation Metrics Widgets
 */

export function StatsDashboard() {
  return (
    <div className="reveal my-10">
      {/* Header tag */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>[ QA METRICS DASHBOARD // ILLUSTRATIVE ]</span>
        </div>
        <span className="font-mono text-[10px] text-muted tracking-wider hidden sm:inline">
          BATCH CALIBRATION · ACCURACY LOG
        </span>
      </div>

      {/* 4 Card Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Sparkline Widget */}
        <div className="card p-4 flex flex-col justify-between" style={{ background: "var(--bg-card)" }}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Total Volume</span>
            <span className="text-xs px-2 py-0.5 rounded font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
              50K+
            </span>
          </div>
          <div className="mt-3">
            <div className="text-xl font-bold font-display text-text">50,000+</div>
            <div className="text-xs text-text2 mt-0.5">Annotations Completed</div>
          </div>
          {/* Sparkline SVG */}
          <div className="mt-4 h-8 w-full">
            <svg viewBox="0 0 120 30" className="w-full h-full stroke-amber-500 fill-amber-500/10">
              <path
                d="M0 25 Q15 20, 30 18 T60 12 T90 8 T120 4 L120 30 L0 30 Z"
                strokeWidth="1"
              />
              <path
                d="M0 25 Q15 20, 30 18 T60 12 T90 8 T120 4"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* 2. Radial/Gauge Chart Widget */}
        <div className="card p-4 flex flex-col justify-between" style={{ background: "var(--bg-card)" }}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Agreement Rate</span>
            <span className="text-xs px-2 py-0.5 rounded font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              Pass
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-xl font-bold font-display text-text">97%</div>
              <div className="text-xs text-text2 mt-0.5">Calibration Consensus</div>
            </div>
            {/* Circular Gauge SVG */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                  strokeDasharray="97, 100"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. Before/After Bar Comparison Widget */}
        <div className="card p-4 flex flex-col justify-between" style={{ background: "var(--bg-card)" }}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">QA Disagreement</span>
            <span className="text-xs px-2 py-0.5 rounded font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
              -22%
            </span>
          </div>
          <div className="mt-3">
            <div className="text-xl font-bold font-display text-text">-22%</div>
            <div className="text-xs text-text2 mt-0.5">Reviewer Disagreement Cut</div>
          </div>
          <div className="mt-3 space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center gap-2">
              <span className="w-8 text-muted">Before</span>
              <div className="flex-1 h-1.5 bg-zinc-800 rounded overflow-hidden">
                <div className="h-full bg-zinc-500" style={{ width: "75%" }} />
              </div>
              <span className="text-muted">32%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 text-amber-400">After</span>
              <div className="flex-1 h-1.5 bg-zinc-800 rounded overflow-hidden">
                <div className="h-full bg-amber-500" style={{ width: "25%" }} />
              </div>
              <span className="text-amber-400">10%</span>
            </div>
          </div>
        </div>

        {/* 4. Donut Chart Widget */}
        <div className="card p-4 flex flex-col justify-between" style={{ background: "var(--bg-card)" }}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Coverage</span>
            <span className="text-xs px-2 py-0.5 rounded font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
              Multi
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-xl font-bold font-display text-text">3 Langs</div>
              <div className="text-xs text-text2 mt-0.5">HI · EN · TE · Text/Audio/Img</div>
            </div>
            <div className="w-10 h-10">
              <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
                <circle cx="16" cy="16" r="12" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="45 100" />
                <circle cx="16" cy="16" r="12" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="30 100" strokeDashoffset="-45" />
                <circle cx="16" cy="16" r="12" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="-75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
