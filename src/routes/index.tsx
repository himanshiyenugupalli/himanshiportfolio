import { Nav } from "@/components/portfolio/Nav";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { PixelRobot } from "@/components/portfolio/PixelRobot";
import { CinematicHero } from "@/components/portfolio/CinematicHero";
import { Section } from "@/components/portfolio/Section";
import { StatsDashboard } from "@/components/portfolio/StatsDashboard";
import { AnnotationProcess } from "@/components/portfolio/AnnotationProcess";
import { RubricShowcase } from "@/components/portfolio/RubricShowcase";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, Linkedin, Github, Award, Cloud, Code2, GraduationCap, ServerCog, FileSpreadsheet, ExternalLink, CheckCircle } from "lucide-react";

/** Profile photo — served as a static file from /public */
const HIMANSHI_PHOTO = "/himanshi.jpg";

const EXP = [
  {
    period: "Jan 2026 — Present", company: "Uber AI Solutions", type: "Contract",
    role: "AI Data Annotator — RLHF Specialist",
    bullets: [
      "Rank model responses across multi-turn dialogues for reward-model training.",
      "Author rubric-driven critiques and rewrite low-quality completions.",
      "Flag hallucinations, jailbreak attempts, and unsafe behavior with policy citations.",
    ],
  },
  {
    period: "Jan 2026 — Present", company: "Prolific", type: "Freelance",
    role: "Multilingual Annotator (HI · EN · TE)",
    bullets: [
      "Annotate prompts and complete preference-pair tasks across three languages.",
      "Maintain >97% agreement rate on calibration batches.",
      "Localize style guides for Hindi and Telugu cohorts.",
    ],
  },
  {
    period: "Sep 2025 — Jan 2026", company: "DataAnnotation Tech", type: "Contract",
    role: "SFT Data Curator & QA Reviewer",
    bullets: [
      "Wrote and reviewed instruction-tuning examples for code, reasoning, and creative writing.",
      "Built an internal QA checklist that cut reviewer disagreement by 22%.",
      "Trained two new annotators on rubric application and edge-case handling.",
    ],
  },
];

const ANNOT = ["RLHF", "RLSF", "SFT", "DPO Preference Pairs", "Prompt Engineering", "Response Ranking", "Rubric Authoring", "Hallucination Detection", "Safety Red-Teaming", "Bias Auditing", "Multi-turn Dialogue", "Image Captioning", "Audio Transcription"];
const TECH = ["Python", "JavaScript", "Java", "HTML", "CSS", "MySQL", "Git", "Apache Tomcat", "Label Studio", "Notion", "Jupyter", "VS Code"];
const LANGS = ["Hindi · Native", "English · Fluent", "Telugu · Conversational"];

const PROJECTS = [
  {
    n: "QA-01", title: "Musical Instrument Learning Web App",
    desc: "A full-stack learning portal with lesson tracking, quizzes, and a tutor dashboard. Built as my B.Sc. capstone.",
    tech: ["Java", "JS", "HTML", "CSS", "MySQL", "Apache Tomcat"],
    status: "SHIPPED",
  },
  {
    n: "QA-02", title: "PackSetGo — Travel Checklist",
    desc: "Lightweight trip planner that generates personalized packing lists from destination, duration, and activities.",
    tech: ["HTML", "CSS", "JS"],
    status: "SHIPPED",
  },
  {
    n: "QA-03", title: "BookShelf",
    desc: "Minimal reading tracker for cataloguing books, ratings, and reading goals — entirely client-side.",
    tech: ["HTML", "CSS", "JS"],
    status: "SHIPPED",
  },
];

const CERTS = [
  { icon: Award, name: "Google IT Support", issuer: "Coursera · 2024" },
  { icon: Cloud, name: "AWS Cloud Practitioner", issuer: "AWS · 2024" },
  { icon: Code2, name: "MERN Stack Development", issuer: "Internshala · 2024" },
  { icon: ServerCog, name: "Cloud Computing Workshop", issuer: "IIT Bombay · 2023" },
  { icon: FileSpreadsheet, name: "MS Office Specialist", issuer: "Microsoft · 2022" },
];

function HomePage() {
  useReveal();
  return (
    <div id="top" style={{ position: "relative", zIndex: 3 }}>
      <Nav />
      <ScrollProgress />
      <PixelRobot />
      <div className="fx-grid" />

      {/* HERO — cinematic two-stage scroll experience */}
      <CinematicHero />

      {/* STATS DASHBOARD WIDGETS */}
      <div className="mx-auto max-w-6xl px-6">
        <StatsDashboard />
      </div>

      {/* ABOUT */}
      <Section id="about" index="01" label="ABOUT" tag="ANNOTATOR SPEC SHEET">
        <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-10 items-start">
          {/* Photo frame */}
          <div className="reveal-left flex justify-center md:justify-start">
            <div className="photo-wrap float-y">
              <div className="photo-frame border-2 border-amber-500/40 rounded-lg overflow-hidden shadow-xl">
                <img src={HIMANSHI_PHOTO} alt="Himanshi Yenugupalli portrait" loading="lazy" />
              </div>
              <div
                className="mt-3 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-center"
                style={{ background: "#151a24", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b", borderRadius: 4 }}
              >
                SUBJECT: HIMANSHI Y.
              </div>
            </div>
          </div>

          {/* Annotator Data Sheet Card */}
          <div className="reveal card border border-amber-500/20 bg-zinc-900/60 p-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 font-mono text-xs text-muted">
              <span className="text-amber-500 font-semibold">[ ANNOTATOR_PROFILE.DAT ]</span>
              <span>CONFIDENCE: HIGH</span>
            </div>

            <div className="space-y-3 text-sm text-text2 leading-relaxed">
              <p>
                <strong className="text-text">Himanshi Yenugupalli</strong> is an AI Data Annotator & RLHF Specialist focusing on instruction tuning (SFT), reward model preference ranking, and multilingual annotation QA.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                  <span className="text-muted block text-[10px] uppercase">Core Modalities</span>
                  <span className="text-amber-400 font-medium">Text · Multilingual · Audio</span>
                </div>
                <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                  <span className="text-muted block text-[10px] uppercase">Languages</span>
                  <span className="text-amber-400 font-medium">Hindi (Native) · English · Telugu</span>
                </div>
              </div>
              <p className="pt-2 text-xs">
                Obsessed with rubric clarity, edge-case disambiguation, and honest label distributions to ensure reward models generalize effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Process workflow showcase */}
        <AnnotationProcess />
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" index="02" label="EXPERIENCE" tag="WORK HISTORY & SFT">
        <div className="space-y-6">
          {EXP.map((e, i) => (
            <div key={i} className="reveal-blur card grid md:grid-cols-[200px_1fr] gap-6 border border-zinc-800 bg-zinc-900/50 hover:border-amber-500/30 transition-colors" style={{ transitionDelay: `${i * 100}ms` }}>
              <div>
                <div className="font-mono text-[11px] text-muted">{e.period}</div>
                <div className="font-mono text-[13px] font-semibold text-amber-500 mt-1">{e.company}</div>
                <span className="inline-block mt-2 font-mono text-[10px] text-text2 px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/5">{e.type}</span>
              </div>
              <div>
                <h3 className="editorial-h3 text-lg font-bold text-text">{e.role}</h3>
                <ul className="mt-3 space-y-2">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-text2 text-[14px]">
                      <span className="text-amber-500">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Rubric / Critique Showcase */}
        <RubricShowcase />
      </Section>

      {/* SKILLS */}
      <Section id="skills" index="03" label="SKILLS" tag="COMPETENCY MATRIX">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Annotation Craft", caption: "Labeling & Rubrics", pills: ANNOT, icon: "◆" },
            { label: "Technical Tools", caption: "Stack & Platforms", pills: TECH, icon: "◈" },
            { label: "Linguistic QA", caption: "Native & Conversational", pills: LANGS, icon: "◉" },
          ].map((g, i) => (
            <div
              key={g.label}
              className="stagger-child card border border-zinc-800 bg-zinc-900/60 p-5 hover:border-amber-500/30 transition-all"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <h3 className="font-display font-bold text-lg text-text">{g.label}</h3>
                <span className="text-amber-500 font-mono text-sm">{g.icon}</span>
              </div>
              <p className="font-mono text-xs text-muted mb-4">{g.caption}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.pills.map((p) => (
                  <span
                    key={p}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-950 text-text2 border border-zinc-800 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS — Restyled as QA Tickets */}
      <Section id="projects" index="04" label="PROJECTS" tag="QA TICKETS & CAPSTONE">
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.n}
              className="stagger-child card border border-zinc-800 bg-zinc-900/60 p-5 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-muted mb-3 pb-2 border-b border-zinc-800">
                  <span className="text-amber-500 font-semibold">[{p.n}]</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle size={10} /> {p.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-text mb-2">{p.title}</h3>
                <p className="text-text2 text-[13px] leading-relaxed mb-4">{p.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-muted border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 font-mono text-xs">
                  <a href="#" className="text-amber-500 hover:underline flex items-center gap-1">
                    Repository <ExternalLink size={11} />
                  </a>
                  <a href="#" className="text-amber-500 hover:underline flex items-center gap-1">
                    Demo <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION + CERTS */}
      <Section id="education" index="05" label="EDUCATION & CERTS" tag="CREDENTIALS">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { school: "VIVA College", degree: "B.Sc. Information Technology", period: "2022 — 2025", meta: "CGPA · 8.2 / 10" },
            { school: "HSC · Science", degree: "Higher Secondary Certificate", period: "2020 — 2022", meta: "PCM + CS" },
          ].map((e) => (
            <div key={e.school} className="stagger-child card border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-amber-500 shrink-0 mt-1" size={22} />
                <div>
                  <div className="font-mono text-[11px] text-muted">{e.period}</div>
                  <h3 className="font-display text-lg font-bold text-text mt-0.5">{e.degree}</h3>
                  <div className="text-amber-500 font-mono text-[12px] mt-1">{e.school}</div>
                  <div className="text-text2 text-[13px] mt-2">{e.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={c.name} className="stagger-child card flex items-center gap-4 border border-zinc-800 bg-zinc-900/60 p-4" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-text text-[14px] font-medium">{c.name}</div>
                  <div className="font-mono text-[11px] text-muted">{c.issuer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" index="06" label="CONTACT" tag="DIRECT INQUIRY">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal-left">
            <p className="text-text2 leading-relaxed mb-8 max-w-md">
              Looking for an annotator who reads the rubric twice, verifies edge cases, and delivers high-consistency datasets? Send a message — I reply within 24 hours.
            </p>
            <div className="space-y-3">
              {[
                { Icon: Mail, label: "himanshi.yenugupalli@gmail.com", href: "mailto:himanshi.yenugupalli@gmail.com" },
                { Icon: Linkedin, label: "linkedin.com/in/himanshi-yenugupalli", href: "#" },
                { Icon: Github, label: "github.com/himanshi-yen", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} data-hover
                  className="flex items-center gap-3 font-mono text-[13px] text-text2 px-4 py-3 rounded border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
                >
                  <Icon size={16} className="text-amber-500" />
                  <span>{label}</span>
                  <span className="ml-auto text-amber-500">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal-right card border border-amber-500/20 bg-zinc-900/60 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs text-amber-500 font-semibold">[ STATUS: AVAILABLE FOR CONTRACT ]</span>
            </div>
            <h3 className="font-display text-xl font-bold text-text mb-4">Roles & Specializations</h3>
            <div className="space-y-3 mb-6 font-mono text-xs">
              {[
                "RLHF / RLSF Preference Ranking",
                "Multilingual SFT Data Curation",
                "Annotation QA & Calibration",
                "Safety & Red-Team Evaluation",
              ].map((r) => (
                <div key={r} className="pl-3 py-2 text-text border-l-2 border-amber-500 bg-zinc-950/40">
                  {r}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Remote", "Contract", "Freelance", "Part-time"].map((t) => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <footer className="relative border-t border-zinc-800 z-10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-muted">© 2026 Himanshi Yenugupalli // QA Lab Notebook</span>
          <span className="font-mono text-[11px] text-muted">Curated with precision · Human feedback at scale</span>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himanshi Yenugupalli — AI Data Annotator & QA Specialist" },
      { name: "description", content: "Portfolio of Himanshi Yenugupalli — RLHF, RLSF, SFT, and multilingual annotation QA." },
      { property: "og:title", content: "Himanshi Yenugupalli — AI Data Annotator" },
      { property: "og:description", content: "RLHF · RLSF · SFT · Multilingual annotation" },
    ],
  }),
  component: HomePage,
});
