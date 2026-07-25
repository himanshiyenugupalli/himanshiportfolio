import { Check, X, FileCheck, ThumbsUp } from "lucide-react";
import { ScrollReveal } from "../motion/ScrollReveal";

export function RubricShowcase() {
  return (
    <ScrollReveal className="my-12 p-6 rounded-xl border border-amber-500/20 bg-zinc-900/60 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-500">
            [ SAMPLE CRITIQUE SHOWCASE // RLHF SAMPLE ]
          </span>
          <h3 className="font-display text-xl font-bold text-text mt-1">
            Rubric Evaluation & Preference Pair
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Task ID: RLHF-9042
          </span>
          <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
            <FileCheck size={12} /> Verified
          </span>
        </div>
      </div>

      {/* Prompt Card */}
      <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 mb-4">
        <div className="font-mono text-[10px] uppercase text-muted mb-1">PROMPT</div>
        <p className="text-sm text-text font-medium">
          "Explain how gradient clipping prevents exploding gradients in neural networks, and provide a PyTorch example."
        </p>
      </div>

      {/* Response Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Response A (Winner) */}
        <ScrollReveal delay={0.2} y={15} className="h-full">
          <div className="p-4 h-full rounded-lg bg-zinc-950 border-2 border-amber-500/50 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-amber-400 flex items-center gap-1">
                  <ThumbsUp size={12} /> RESPONSE A (PREFERRED)
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                  Score: 9.6 / 10
                </span>
              </div>
              <p className="text-xs text-text2 leading-relaxed mb-3">
                Correctly explains gradient L2 norm thresholding. PyTorch snippet uses <code className="text-amber-300 font-mono">torch.nn.utils.clip_grad_norm_</code> accurately before optimizer step.
              </p>
            </div>
            <div className="space-y-1 pt-3 border-t border-zinc-800 font-mono text-[10px]">
              <div className="flex items-center justify-between text-emerald-400">
                <span>Factuality & Code Safety</span>
                <span className="flex items-center gap-1"><Check size={12} /> PASS</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400">
                <span>Rubric Adherence</span>
                <span className="flex items-center gap-1"><Check size={12} /> 100%</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Response B (Rejected) */}
        <ScrollReveal delay={0.35} y={15} className="h-full">
          <div className="p-4 h-full rounded-lg bg-zinc-950 border border-zinc-800 opacity-75 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-zinc-400">RESPONSE B</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-semibold">
                  Score: 5.2 / 10
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Confuses gradient clipping with weight decay. PyTorch code calls clip after <code className="font-mono text-red-300">optimizer.step()</code>, causing unclipped updates.
              </p>
            </div>
            <div className="space-y-1 pt-3 border-t border-zinc-800 font-mono text-[10px]">
              <div className="flex items-center justify-between text-red-400">
                <span>Code Execution Order</span>
                <span className="flex items-center gap-1"><X size={12} /> FAIL</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Hallucinated API Usage</span>
                <span>MINOR</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </ScrollReveal>
  );
}
