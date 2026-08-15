import React from "react";

/**
 * 1. LISCORE UI PREVIEW
 * Dark gold glowing theme with search bar & compliance badges.
 */
export function LiscorePreview() {
  return (
    <div className="w-full h-full bg-[#0a0a0c] border border-amber-500/20 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden select-none group-hover:border-amber-500/50 transition-colors">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-mono text-[9px] font-bold text-amber-400">
            L
          </div>
          <span className="font-display tracking-widest text-xs font-bold text-white">LISCORE</span>
        </div>
        <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
          v0.1
        </span>
      </div>

      {/* Main Hero mockup */}
      <div className="my-auto text-center py-2">
        <div className="font-display text-lg font-bold tracking-wider text-amber-400 mb-1">
          LISCORE
        </div>
        <p className="font-sans text-[9px] text-white/60 max-w-[200px] mx-auto leading-tight mb-3">
          AI-powered open source license intelligence.
        </p>
        
        {/* Search Input Mock */}
        <div className="w-full bg-black/80 border border-amber-500/30 rounded p-1.5 flex items-center justify-between text-[8px] font-mono text-white/70">
          <span className="truncate">https://github.com/vercel/next.js</span>
          <span className="bg-amber-500 text-black font-bold px-2 py-0.5 rounded text-[7px] shrink-0">
            Scan
          </span>
        </div>
      </div>

      {/* Footer tags */}
      <div className="flex items-center justify-center gap-1 font-mono text-[7px] text-amber-400/80">
        <span className="px-1 bg-white/5 rounded border border-white/10">Next.js [A]</span>
        <span className="px-1 bg-white/5 rounded border border-white/10">VSCode [B]</span>
      </div>
    </div>
  );
}

/**
 * 2. SOCIALEYE UI PREVIEW
 * Deep blue community reporting theme with shield graphic & status indicators.
 */
export function SocialEyePreview() {
  return (
    <div className="w-full h-full bg-[#0b1329] border border-blue-500/20 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden select-none group-hover:border-blue-500/50 transition-colors">
      <div className="absolute -left-6 -bottom-6 w-28 h-28 bg-blue-500/15 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[10px]">
          👁
        </div>
        <span className="font-display tracking-wider text-xs font-bold text-white">SOCIALEYE</span>
      </div>

      {/* Content */}
      <div className="my-auto">
        <div className="font-sans font-bold text-sm text-white leading-tight mb-1">
          Empower Your <span className="text-blue-400">Community</span>
        </div>
        <p className="font-sans text-[9px] text-blue-200/60 leading-tight mb-3">
          Report civic issues & track real-time resolution.
        </p>
        
        {/* Mock Badge */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-500/20 border border-blue-400/30 px-2 py-1 rounded text-[8px] font-mono text-blue-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Hyperlocal Accuracy
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-2 border-t border-blue-500/10 flex items-center justify-between text-[8px] font-mono text-blue-400">
        <span>Civic Resolution Platform</span>
        <span>→</span>
      </div>
    </div>
  );
}

/**
 * 3. CALMPREP UI PREVIEW
 * Soft purple gradient theme with exam companion card.
 */
export function CalmPrepPreview() {
  return (
    <div className="w-full h-full bg-[#141024] border border-purple-500/20 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden select-none group-hover:border-purple-500/50 transition-colors">
      <div className="absolute right-0 top-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="font-display tracking-wider text-xs font-bold text-purple-200">CalmPrep</span>
      </div>

      {/* Hero text */}
      <div className="my-auto">
        <div className="font-sans font-bold text-xs text-white leading-tight mb-1">
          Your AI companion through exam season.
        </div>
        <p className="font-sans text-[8.5px] text-purple-200/60 leading-tight mb-2">
          Meet Saanvi — warm, always-on AI for NEET, JEE & UPSC warriors.
        </p>

        {/* Feature Badges */}
        <div className="grid grid-cols-3 gap-1 text-[7px] font-mono text-purple-300">
          <div className="bg-purple-900/40 border border-purple-500/20 p-1 rounded text-center">
            Stress Shield
          </div>
          <div className="bg-purple-900/40 border border-purple-500/20 p-1 rounded text-center">
            Burnout Radar
          </div>
          <div className="bg-purple-900/40 border border-purple-500/20 p-1 rounded text-center">
            Wisdom
          </div>
        </div>
      </div>

      {/* Sign in mockup strip */}
      <div className="bg-purple-950/60 border border-purple-500/20 rounded p-1.5 flex items-center justify-between text-[8px] font-mono text-purple-300/80">
        <span>Ollama AI + Supabase</span>
        <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded text-[7px]">Active</span>
      </div>
    </div>
  );
}

/**
 * 4. CARBONLENS UI PREVIEW
 * Eco dark green theme with footprint metrics.
 */
export function CarbonLensPreview() {
  return (
    <div className="w-full h-full bg-[#0d160e] border border-emerald-500/20 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden select-none group-hover:border-emerald-500/50 transition-colors">
      <div className="absolute left-0 bottom-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full border border-emerald-400 flex items-center justify-center text-[7px] text-emerald-400">
            ◯
          </span>
          <span className="font-display tracking-wider text-xs font-bold text-emerald-100">CarbonLens</span>
        </div>
        <span className="text-[7.5px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Tracking
        </span>
      </div>

      {/* Headline */}
      <div className="my-auto">
        <div className="font-serif italic text-xs text-white leading-tight mb-1">
          See your footprint <span className="text-emerald-400 font-sans not-italic font-bold">clearly</span>.
        </div>
        
        {/* Metric Boxes */}
        <div className="grid grid-cols-3 gap-1 mt-2 font-mono">
          <div className="bg-emerald-950/60 border border-emerald-500/20 p-1 rounded">
            <div className="text-[9px] font-bold text-white">4.6t</div>
            <div className="text-[6.5px] text-emerald-400/70">AVG YEARLY</div>
          </div>
          <div className="bg-emerald-950/60 border border-emerald-500/20 p-1 rounded">
            <div className="text-[9px] font-bold text-emerald-400">-18%</div>
            <div className="text-[6.5px] text-emerald-400/70">REDUCTION</div>
          </div>
          <div className="bg-emerald-950/60 border border-emerald-500/20 p-1 rounded">
            <div className="text-[9px] font-bold text-white">12k+</div>
            <div className="text-[6.5px] text-emerald-400/70">LOGGED</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[8px] font-mono text-emerald-400/80 flex items-center justify-between">
        <span>Personal Carbon Tracker</span>
        <span>→</span>
      </div>
    </div>
  );
}

/**
 * 5. TRAVELCHECKLIST (PackSetGo) UI PREVIEW
 * Clean light lavender packing checklist theme.
 */
export function TravelChecklistPreview() {
  return (
    <div className="w-full h-full bg-[#f6f5fa] border border-purple-300/40 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden select-none text-slate-800 group-hover:border-purple-400 transition-colors">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-purple-200 pb-1.5 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-amber-500 text-xs">🧳</span>
          <span className="font-display tracking-wider text-xs font-bold text-purple-900">PackSetGo</span>
        </div>
        <span className="bg-purple-600 text-white font-mono text-[7px] px-1.5 py-0.5 rounded font-bold">
          Checklists
        </span>
      </div>

      {/* Content Mock */}
      <div className="my-auto space-y-1.5">
        <div className="font-sans font-bold text-xs text-purple-950 leading-tight">
          Your Packing Checklists
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {/* Japan Card */}
          <div className="bg-white border border-purple-200 rounded p-1.5 shadow-sm">
            <div className="font-bold text-[9px] text-purple-900 flex justify-between">
              <span>Japan</span>
              <span className="text-emerald-600 text-[8px]">25%</span>
            </div>
            <div className="text-[7.5px] text-emerald-600 mt-0.5">✓ Sunglasses</div>
            <div className="text-[7.5px] text-slate-500">○ T-Shirts</div>
          </div>

          {/* Austria Card */}
          <div className="bg-white border border-purple-200 rounded p-1.5 shadow-sm">
            <div className="font-bold text-[9px] text-purple-900 flex justify-between">
              <span>Austria</span>
              <span className="text-emerald-600 text-[8px]">43%</span>
            </div>
            <div className="text-[7.5px] text-emerald-600 mt-0.5">✓ Jeans</div>
            <div className="text-[7.5px] text-slate-500">○ Documents</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[8px] font-mono text-purple-700 flex items-center justify-between pt-1 border-t border-purple-200">
        <span>Travel Packing App</span>
        <span>→</span>
      </div>
    </div>
  );
}
