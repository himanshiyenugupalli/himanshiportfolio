
import { Nav } from "@/components/portfolio/Nav";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { PixelRobot } from "@/components/portfolio/PixelRobot";
import { CinematicHero } from "@/components/portfolio/CinematicHero";
import { Section } from "@/components/portfolio/Section";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, Linkedin, Github, Award, Cloud, Code2, GraduationCap, ServerCog, FileSpreadsheet } from "lucide-react";

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
    n: "01", title: "Musical Instrument Learning Web App",
    desc: "A full-stack learning portal with lesson tracking, quizzes, and a tutor dashboard. Built as my B.Sc. capstone.",
    tech: ["Java", "JS", "HTML", "CSS", "MySQL", "Apache Tomcat"],
  },
  {
    n: "02", title: "PackSetGo — Travel Checklist",
    desc: "Lightweight trip planner that generates personalized packing lists from destination, duration, and activities.",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    n: "03", title: "BookShelf",
    desc: "Minimal reading tracker for cataloguing books, ratings, and reading goals — entirely client-side.",
    tech: ["HTML", "CSS", "JS"],
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
      <div className="fx-scanlines" />

      {/* HERO — cinematic two-stage scroll experience */}
      <CinematicHero />

      {/* ABOUT */}
      <Section id="about" index="01" label="ABOUT" command="cat about.md">
        <div className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start">
          {/* Photo with octagonal frame */}
          <div className="reveal-left flex justify-center md:justify-start">
            <div className="photo-wrap float-y">
              <div className="photo-ring" />
              <div className="photo-frame scan-line glow-pulse">
                <img src={HIMANSHI_PHOTO} alt="Himanshi Yenugupalli portrait" loading="lazy" />
              </div>
              <span className="corner c-tl" />
              <span className="corner c-tr" />
              <span className="corner c-bl" />
              <span className="corner c-br" />
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{ background: "#080b10", border: "1px solid rgba(168,85,247,0.35)", color: "#a855f7", borderRadius: 4, whiteSpace: "nowrap" }}
              >
                ◉ rec · subject_01
              </div>
            </div>
          </div>

          <div className="reveal card" style={{ padding: 0 }}>
            <div className="flex items-center gap-2 px-4 py-2" style={{ background: "#0a0e14", borderBottom: "1px solid rgba(168,85,247,0.1)" }}>
              <span style={{ width: 11, height: 11, borderRadius: 999, background: "#ff5f56" }} />
              <span style={{ width: 11, height: 11, borderRadius: 999, background: "#ffbd2e" }} />
              <span style={{ width: 11, height: 11, borderRadius: 999, background: "#27c93f" }} />
              <span className="font-mono text-[11px] text-muted ml-3">~/himanshi/about.json</span>
            </div>
            <pre className="font-mono text-[13px] leading-7 p-6 m-0" style={{ whiteSpace: "pre-wrap" }}>
<span style={{ color: "#a855f7" }}>{"> "}</span><span style={{ color: "#8899aa" }}>cat about.json</span>{"\n"}
{"{\n"}
{"  "}<span style={{ color: "#3d8bff" }}>"name"</span>: <span style={{ color: "#f0a832" }}>"Himanshi Yenugupalli"</span>,{"\n"}
{"  "}<span style={{ color: "#3d8bff" }}>"role"</span>: <span style={{ color: "#f0a832" }}>"AI Data Annotator"</span>,{"\n"}
{"  "}<span style={{ color: "#3d8bff" }}>"focus"</span>: [<span style={{ color: "#f0a832" }}>"RLHF"</span>, <span style={{ color: "#f0a832" }}>"RLSF"</span>, <span style={{ color: "#f0a832" }}>"SFT"</span>, <span style={{ color: "#f0a832" }}>"QA"</span>],{"\n"}
{"  "}<span style={{ color: "#3d8bff" }}>"languages"</span>: [<span style={{ color: "#f0a832" }}>"hi"</span>, <span style={{ color: "#f0a832" }}>"en"</span>, <span style={{ color: "#f0a832" }}>"te"</span>],{"\n"}
{"  "}<span style={{ color: "#3d8bff" }}>"modalities"</span>: [<span style={{ color: "#f0a832" }}>"text"</span>, <span style={{ color: "#f0a832" }}>"image"</span>, <span style={{ color: "#f0a832" }}>"audio"</span>],{"\n"}
{"  "}<span style={{ color: "#3d8bff" }}>"obsessions"</span>: <span style={{ color: "#f0a832" }}>"rubric clarity · edge cases · honest labels"</span>,{"\n"}
{"  "}<span style={{ color: "#3d8bff" }}>"status"</span>: <span style={{ color: "#a855f7" }}>"available"</span>{"\n"}
{"}\n"}
<span style={{ color: "#a855f7" }}>{"> "}</span><span className="caret" />
            </pre>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-12 overflow-hidden py-3" style={{ borderTop: "1px solid rgba(168,85,247,0.12)", borderBottom: "1px solid rgba(168,85,247,0.12)", background: "rgba(168,85,247,0.03)" }}>
          <div className="marquee-track font-mono text-[12px] uppercase tracking-[0.3em]">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-7">
                {["rlhf", "•", "rlsf", "•", "sft", "•", "dpo", "•", "multilingual", "•", "qa rubrics", "•", "red-teaming", "•", "remote", "•"].map((w, j) => (
                  <span key={j} style={{ color: w === "•" ? "#a855f7" : "#8899aa" }}>{w}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>



      {/* EXPERIENCE */}
      <Section id="experience" index="02" label="EXPERIENCE" command="ls experience/">
        <div className="space-y-6">
          {EXP.map((e, i) => (
            <div key={i} className="reveal-blur card magnetic shine halo-soft grid md:grid-cols-[200px_1fr] gap-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div>
                <div className="font-mono text-[11px] text-muted">{e.period}</div>
                <div className="font-mono text-[12px] text-accent mt-1">{e.company}</div>
                <span className="inline-block mt-2 font-mono text-[10px] text-text2 px-2 py-1" style={{ background: "var(--bg-elevated)", border: "1px solid rgba(168,85,247,0.1)", borderRadius: 3 }}>{e.type}</span>
              </div>
              <div>
                <h3 className="editorial-h3" style={{ fontSize: "1.15rem" }}>{e.role}</h3>
                <ul className="mt-3 space-y-2">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-text2 text-[14px]">
                      <span className="text-accent">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS — flip cards: front shows category, hover flips to reveal skills */}
      <Section id="skills" index="03" label="SKILLS" command="grep -r ./skills">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "annotation", caption: "Labeling craft", pills: ANNOT, icon: "◆" },
            { label: "technical",  caption: "Tools & stack",  pills: TECH,  icon: "◈" },
            { label: "linguistic", caption: "Languages",      pills: LANGS, icon: "◉" },
          ].map((g, i) => (
            <div
              key={g.label}
              className="stagger-child flip-card"
              style={{ transitionDelay: `${i * 120}ms` }}
              tabIndex={0}
              role="button"
              onClick={(e) => e.currentTarget.classList.toggle("is-flipped")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  (e.currentTarget as HTMLDivElement).classList.toggle("is-flipped");
                }
              }}
            >
              <div className="flip-card-inner">
                {/* FRONT */}
                <div className="flip-card-face flip-card-front">
                  <div className="flip-bg" aria-hidden />
                  <div className="flip-grid" aria-hidden />
                  <div className="flip-orb" aria-hidden />
                  <span className="flip-corner tl" />
                  <span className="flip-corner tr" />
                  <span className="flip-corner bl" />
                  <span className="flip-corner br" />

                  <div className="flip-index font-mono">
                    {String(i + 1).padStart(2, "0")} / 03
                  </div>
                  <div className="flip-icon" aria-hidden>{g.icon}</div>
                  <h3 className="flip-title">{g.label}.</h3>
                  <div className="flip-caption font-mono">{g.caption}</div>
                  <div className="flip-hint font-mono">
                    <span className="flip-dot" /> tap or hover to expand
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-card-face flip-card-back">
                  <div className="flip-bg back" aria-hidden />
                  <span className="flip-corner tl" />
                  <span className="flip-corner tr" />
                  <span className="flip-corner bl" />
                  <span className="flip-corner br" />
                  <div className="flip-back-head font-mono">
                    <span style={{ color: "#c084fc" }}>./{g.label}</span>
                    <span style={{ color: "rgba(136,153,170,0.55)" }}>
                      {g.pills.length} items
                    </span>
                  </div>
                  <div className="flip-pills">
                    {g.pills.map((p, k) => (
                      <span
                        key={p}
                        className="pill"
                        style={{ animationDelay: `${0.05 + k * 0.04}s` }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" index="04" label="PROJECTS" command="ls projects/">
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div key={p.n} className="stagger-child card proj-card magnetic shine aurora-border" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-mono text-[11px] text-muted mb-2">{`// ${p.n}`}</div>
              <h3 className="editorial-h3" style={{ fontSize: "1.1rem" }}>{p.title}</h3>
              <p className="text-text2 text-[13px] mt-3 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2 py-1 text-text2" style={{ background: "var(--bg-elevated)", borderRadius: 3 }}>{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 font-mono text-[12px]">
                <a href="#" className="text-accent">$ repo</a>
                <a href="#" className="text-accent">$ demo</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION + CERTS */}
      <Section id="education" index="05" label="EDUCATION & CERTS" command="cat credentials.log">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { school: "VIVA College", degree: "B.Sc. Information Technology", period: "2022 — 2025", meta: "CGPA · 8.2 / 10" },
            { school: "HSC · Science", degree: "Higher Secondary Certificate", period: "2020 — 2022", meta: "PCM + CS" },
          ].map((e) => (
            <div key={e.school} className="stagger-child card">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <div className="font-mono text-[11px] text-muted">{e.period}</div>
                  <h3 className="editorial-h3" style={{ fontSize: "1.05rem" }}>{e.degree}</h3>
                  <div className="text-accent font-mono text-[12px] mt-1">{e.school}</div>
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
              <div key={c.name} className="stagger-child card flex items-center gap-4" style={{ padding: 16, transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40, borderRadius: 6, background: "var(--bg-g-dim)", border: "1px solid var(--border-g)" }}>
                  <Icon className="text-accent" size={18} />
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
      <Section id="contact" index="06" label="CONTACT" command="./reach-out.sh">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal-left">
            <p className="text-text2 leading-relaxed mb-8 max-w-md">
              Looking for an annotator who reads the rubric twice and asks the
              awkward questions? Send a message — I reply within a day.
            </p>
            <div className="space-y-3">
              {[
                { Icon: Mail, label: "himanshi.yenugupalli@gmail.com", href: "mailto:himanshi.yenugupalli@gmail.com" },
                { Icon: Linkedin, label: "linkedin.com/in/himanshi-yenugupalli", href: "#" },
                { Icon: Github, label: "github.com/himanshi-yen", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} data-hover
                  className="flex items-center gap-3 font-mono text-[13px] text-text2 px-4 py-3 rounded"
                  style={{
                    background: "var(--bg-card)", border: "1px solid rgba(168,85,247,0.12)",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(6px)"; e.currentTarget.style.color = "#a855f7"; e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.color = "#8899aa"; e.currentTarget.style.borderColor = "rgba(168,85,247,0.12)"; }}
                >
                  <Icon size={16} className="text-accent" />
                  <span>{label}</span>
                  <span className="ml-auto text-accent">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal-right card">
            <div className="flex items-center gap-2 mb-5">
              <span className="pulse-dot" style={{ width: 9, height: 9, borderRadius: 999, background: "#a855f7" }} />
              <span className="font-mono text-[12px] text-accent">AVAILABLE_FOR_HIRE</span>
            </div>
            <h3 className="editorial-h3 mb-5" style={{ fontSize: "1.2rem" }}>Roles I'm open to</h3>
            <div className="space-y-3 mb-6">
              {[
                "RLHF / RLSF Annotator",
                "Multilingual SFT Curator",
                "Annotation QA Reviewer",
                "Red-team / Safety Evaluator",
              ].map((r) => (
                <div key={r} className="pl-3 py-2 text-text" style={{ borderLeft: "2px solid #a855f7" }}>{r}</div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Remote", "Contract", "Freelance", "Part-time"].map((t) => <span key={t} className="pill pill-on">{t}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <footer className="relative" style={{ borderTop: "1px solid rgba(168,85,247,0.1)", zIndex: 5 }}>
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-muted">© 2026 himanshi.yenugupalli // all rights reserved</span>
          <span className="font-mono text-[11px] text-muted">labeled with care · shipped from /home</span>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himanshi Yenugupalli — AI Data Annotator" },
      { name: "description", content: "Portfolio of Himanshi Yenugupalli — RLHF, RLSF, SFT, and multilingual annotation QA." },
      { property: "og:title", content: "Himanshi Yenugupalli — AI Data Annotator" },
      { property: "og:description", content: "RLHF · RLSF · SFT · Multilingual annotation" },
    ],
  }),
  component: HomePage,
});
