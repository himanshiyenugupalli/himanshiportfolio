/**
 * AnnotationProcess — 4-Step Visual Workflow Card
 */

import { CheckCircle2, ShieldAlert, Sparkles, FileText } from "lucide-react";
import { StaggerGroup } from "../motion/StaggerGroup";

export function AnnotationProcess() {
  const steps = [
    {
      num: "01",
      title: "Rubric Analysis",
      icon: FileText,
      desc: "Deconstruct style guides, formalize rating dimensions, and flag edge-case ambiguities before batch rating.",
    },
    {
      num: "02",
      title: "Preference Ranking",
      icon: Sparkles,
      desc: "Evaluate multi-turn candidate responses for RLHF & DPO reward model optimization based on truthfulness & tone.",
    },
    {
      num: "03",
      title: "Critique & Red-Teaming",
      icon: ShieldAlert,
      desc: "Identify hallucinations, toxic completions, or policy violations with precise guideline citations.",
    },
    {
      num: "04",
      title: "Calibration QA",
      icon: CheckCircle2,
      desc: "Participate in consensus alignment batches to maintain >97% agreement across reviewers.",
    },
  ];

  return (
    <div className="reveal my-12 p-6 rounded-xl border border-amber-500/20 bg-zinc-900/60 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-500">
            [ METHODOLOGY // ANNOTATION WORKFLOW ]
          </span>
          <h3 className="font-display text-xl font-bold text-text mt-1">
            How I Annotate & Evaluate
          </h3>
        </div>
        <span className="hidden md:inline text-xs font-mono text-muted px-2.5 py-1 rounded border border-zinc-800 bg-zinc-900">
          Standard Operating Procedure
        </span>
      </div>

      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="relative p-5 h-full rounded-lg border border-zinc-800/80 bg-zinc-900/40 hover:-translate-y-1 hover:border-amber-500/45 hover:shadow-[0_0_20px_rgba(245,158,11,0.12)] transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-500 font-semibold">{s.num}</span>
                <div className="p-2 rounded bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                  <Icon size={16} />
                </div>
              </div>
              <h4 className="font-display text-base font-semibold text-text mb-1">{s.title}</h4>
              <p className="text-xs text-text2 leading-relaxed">{s.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted z-10">
                  →
                </div>
              )}
            </div>
          );
        })}
      </StaggerGroup>
    </div>
  );
}
