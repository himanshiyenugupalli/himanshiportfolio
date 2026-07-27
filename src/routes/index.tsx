import { useRef, lazy, Suspense } from "react";
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
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";

const ChromeHeadphones = lazy(() => import("@/components/ChromeHeadphones"));

/** Profile photo — served as a static file from /public */
const HIMANSHI_PHOTO = "/himanshi.jpg";

const EXP = [
  {
    period: "Jan 2026 — Present", company: "Uber AI Solutions", type: "Freelance",
    role: "AI Data Annotator (Freelance)",
    bullets: [
      "Conducted high-precision audio annotation, data labeling, and quality evaluation to support AI model training and fine-tuning.",
      "Maintained strict adherence to project guidelines while achieving consistently high accuracy rates in multilingual datasets.",
      "Collaborated remotely in fast-paced environments, delivering timely and reliable annotation outputs.",
    ],
  },
  {
    period: "Jan 2026 — Present", company: "Prolific", type: "Freelance",
    role: "RLHF Contributor (Freelance)",
    bullets: [
      "Generated high-quality human feedback data for AI model alignment, focusing on information analysis and response evaluation.",
      "Performed structured annotation tasks and followed research protocols to enhance model safety, accuracy, and reasoning capabilities.",
      "Delivered consistent, guideline-compliant contributions supporting ongoing AI research initiatives.",
    ],
  },
  {
    period: "Oct 2025", company: "clickworker", type: "Freelance",
    role: "Image Annotator (Freelance)",
    bullets: [
      "Executed detailed image annotation tasks including categorization, labeling, and bounding box creation for machine learning datasets.",
    ],
  },
  {
    period: "Sep 2025 — Jan 2026", company: "DataAnnotation Tech", type: "Contract",
    role: "AI Data Annotator (Freelance)",
    bullets: [
      "Specialized in RLHF and RLSF methodologies to improve AI performance across medical, educational, and conversational domains.",
      "Conducted rubric-based evaluations, image classification, text categorization, and response ranking in Hindi, English, and Telugu.",
      "Provided culturally nuanced and linguistically accurate annotations, significantly contributing to multilingual model development.",
    ],
  },
];

const ANNOT = ["RLHF", "RLSF", "SFT", "DPO Preference Pairs", "Prompt Engineering", "Response Ranking", "Rubric Authoring", "Hallucination Detection", "Safety Red-Teaming", "Bias Auditing", "Multi-turn Dialogue", "Image Captioning", "Audio Transcription"];
const TECH = ["Python", "JavaScript", "Java", "HTML", "CSS", "MySQL", "Git", "Apache Tomcat", "Label Studio", "Notion", "Jupyter", "VS Code"];
const LANGS = ["Hindi · Native", "English · Fluent", "Telugu · Conversational"];

const PROJECTS = [
  {
    n: "QA-01", title: "LiScore",
    subtitle: "MSc IT Research Project (Ongoing)",
    desc: "An AI-powered license health scanner that evaluates GitHub repositories and generates a 0–100 / A–F compatibility score with detailed reports and embeddable badges. Implemented real-time repo scanning for licenses, dependencies, and SPDX headers; extending into a full License Integrity Monitor with change tracking and drift detection.",
    tech: ["React", "Vite", "TypeScript", "Bun", "Netlify"],
    status: "ONGOING",
  },
  {
    n: "QA-02", title: "SocialEye",
    subtitle: "Vibe2Ship Hackathon (CodeNinjas x Google)",
    desc: "An AI-Powered Hyperlocal Civic Issue Reporting & Resolution web application. Implemented user authentication, profile management, and real-time issue tracking using Supabase. Emphasized community-driven problem solving with clean, responsive UI/UX.",
    tech: ["Next.js", "Supabase", "Netlify"],
    status: "SHIPPED",
  },
  {
    n: "QA-03", title: "CalmPrep",
    subtitle: "PromptWars Hackathon",
    desc: "Developed an AI-powered mental wellness assistant designed specifically for students during high-stakes exams. Integrated modern tech stack with Supabase backend and deployed on Netlify with SSR configuration.",
    tech: ["React", "Supabase", "Netlify", "Ollama"],
    status: "SHIPPED",
  },
  {
    n: "QA-04", title: "CarbonLens",
    subtitle: "Online PromptWars Hackathon",
    desc: "Developed a personal carbon footprint tracker web application. Implemented features for tracking and visualizing personal carbon emissions with a modern, responsive UI.",
    tech: ["TypeScript", "Vite", "Netlify"],
    status: "SHIPPED",
  },
  {
    n: "QA-05", title: "TravelChecklist",
    subtitle: "Outlier AI CodeCircuit Hackathon",
    desc: "Designed a user-friendly, culturally sensitive travel packing checklist web application. Implemented responsive design, accessibility features, and deployed on Netlify.",
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    status: "SHIPPED",
  },
];

const CERTS = [
  { icon: Award, name: "McKinsey Forward Program", issuer: "McKinsey & Company · Jun 2026" },
  { icon: Award, name: "Technical Support Fundamentals", issuer: "Google · Sep 2025" },
  { icon: Cloud, name: "AWS Cloud Practitioner Essentials", issuer: "AWS · Jul 2025" },
  { icon: Code2, name: "MERN Stack Development", issuer: "edba academy · May 2025" },
  { icon: ServerCog, name: "Cloud Computing Workshop", issuer: "IIT Bombay · Dec 2024" },
  { icon: Cloud, name: "AWS Solutions Architecture Simulation", issuer: "Forage · Jun 2024" },
  { icon: ServerCog, name: "Technology Virtual Internship", issuer: "Deloitte Australia · Jan 2024" },
];

function HomePage() {
  useReveal();
  const aboutRef = useRef<HTMLDivElement>(null);
  const rubricRef = useRef<HTMLDivElement>(null);

  return (
    <div id="top" style={{ position: "relative", zIndex: 3 }}>
      <Nav />
      <ScrollProgress />
      <PixelRobot />
      <div className="fx-grid" />

      {/* HERO — cinematic two-stage scroll experience */}
      <CinematicHero />

      {/* STATS DASHBOARD WIDGETS */}
      <div className="mx-auto max-w-[1380px] px-6 md:px-10 lg:px-12">
        <StatsDashboard />
      </div>

      {/* ABOUT */}
      <Section id="about" index="01" label="ABOUT" tag="ANNOTATOR SPEC SHEET">
        <div ref={aboutRef} className="relative">

          <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-10 items-start">
            {/* Photo frame */}
            <div className="reveal-left flex justify-center md:justify-start">
              <div className="photo-wrap float-y">
                <div className="photo-frame border-2 border-amber-500/40 rounded-lg overflow-hidden shadow-xl">
                  <img src={HIMANSHI_PHOTO} alt="Himanshi Yenugupalli portrait" loading="lazy" />
                </div>
                <div
                  className="mt-3 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-center"
                  style={{ background: "#151a24", border: "1px solid rgba(230, 201, 160,0.25)", color: "#e6c9a0", borderRadius: 4 }}
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
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" index="02" label="EXPERIENCE" tag="WORK HISTORY & SFT">
        <div className="relative border-l-2 border-zinc-800/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {/* Timeline connecting line */}
          <div className="absolute left-[-2px] top-0 bottom-0 origin-top">
            <ScrollReveal className="w-[2px] h-full bg-amber-500/60 origin-top" y={0} delay={0} />
          </div>

          {EXP.map((e, i) => (
            <ScrollReveal
              key={i}
              className="relative"
              delay={i * 0.15}
              y={25}
            >
              {/* Timeline marker */}
              <span className="absolute -left-[31px] md:-left-[45px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-zinc-950 border-2 border-amber-500 shadow-[0_0_8px_rgba(230, 201, 160,0.5)] z-10" />

              <div className="card grid md:grid-cols-[200px_1fr] gap-6 border border-zinc-800 bg-zinc-900/50 hover:border-amber-500/35 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
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
            </ScrollReveal>
          ))}
        </div>

        {/* Sample Rubric / Critique Showcase & Headphones layout */}
        <div ref={rubricRef} className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center mt-12">
          <div>
            <RubricShowcase />
          </div>
          <div className="hidden lg:block w-full h-[480px] relative pointer-events-none z-20">
            <Suspense fallback={null}>
              <ChromeHeadphones sectionRef={rubricRef} />
            </Suspense>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" index="03" label="SKILLS" tag="COMPETENCY MATRIX">
        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Annotation Craft", caption: "Labeling & Rubrics", pills: ANNOT, icon: "◆" },
            { label: "Technical Tools", caption: "Stack & Platforms", pills: TECH, icon: "◈" },
            { label: "Linguistic QA", caption: "Native & Conversational", pills: LANGS, icon: "◉" },
          ].map((g) => (
            <div
              key={g.label}
              className="card border border-zinc-800 bg-zinc-900/60 p-5 hover:border-amber-500/35 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(230, 201, 160,0.08)] transition-all duration-300"
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
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-950 text-text2 border border-zinc-800 hover:border-amber-500/40 hover:text-amber-400 hover:scale-105 transition-all duration-200"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </StaggerGroup>
      </Section>

      {/* PROJECTS — Restyled as QA Tickets */}
      <Section id="projects" index="04" label="PROJECTS" tag="QA TICKETS & CAPSTONE">
        <div className="space-y-6">
          {/* FEATURED PROJECT */}
          {PROJECTS.slice(0, 1).map((p) => (
            <ScrollReveal key={p.n} y={30} delay={0.1}>
              <div className="card border border-zinc-800 bg-zinc-900/60 p-6 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg flex flex-col justify-between md:grid md:grid-cols-[1fr_300px] gap-6">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-muted mb-3 pb-2 border-b border-zinc-800">
                    <span className="text-amber-500 font-semibold">[{p.n} // FEATURED CAPSTONE]</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle size={10} /> {p.status}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-text mb-3">{p.title}</h3>
                  <p className="text-text2 text-[14px] leading-relaxed mb-6">{p.desc}</p>
                  
                  <div className="flex gap-4 font-mono text-xs mt-auto">
                    <a href="#" className="text-amber-500 hover:underline flex items-center gap-1 font-semibold">
                      Repository <ExternalLink size={12} />
                    </a>
                    <a href="#" className="text-amber-500 hover:underline flex items-center gap-1 font-semibold">
                      Demo <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800/80 pt-4 md:pt-0 md:pl-6">
                  <div>
                    <div className="font-mono text-[10px] uppercase text-muted mb-2.5">Technologies Used</div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span key={t} className="font-mono text-[10.5px] px-2.5 py-1 rounded bg-zinc-950 text-text2 border border-zinc-800 hover:border-amber-500/30 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* SUB-GRID */}
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {PROJECTS.slice(1).map((p) => (
              <div
                key={p.n}
                className="card border border-zinc-800 bg-zinc-900/60 p-5 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
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
          </StaggerGroup>
        </div>
      </Section>

      {/* EDUCATION + CERTS */}
      <Section id="education" index="05" label="EDUCATION & CERTS" tag="CREDENTIALS">
        <StaggerGroup className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { school: "DG Ruparel College of Arts, Science and Commerce", degree: "M.Sc. Information Technology", period: "2026 — Present", meta: "Mumbai, India" },
            { school: "VIVA Institute of Pharmacy, University of Mumbai", degree: "B.Sc. Information Technology", period: "2022 — 2025", meta: "CGPA · 8.2 / 10 · Mumbai, India" },
            { school: "Utkarsha Vidyalaya & Junior College", degree: "Higher Secondary Certificate (Science)", period: "2020 — 2022", meta: "PCM + CS · Mumbai, India" },
          ].map((e) => (
            <div key={e.school} className="card border border-zinc-800 bg-zinc-900/60 p-5 hover:border-amber-500/25 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-amber-500 shrink-0 mt-1" size={22} />
                <div>
                  <div className="font-mono text-[11px] text-muted">{e.period}</div>
                  <h3 className="font-display text-base font-bold text-text mt-0.5">{e.degree}</h3>
                  <div className="text-amber-500 font-mono text-[12px] mt-1">{e.school}</div>
                  <div className="text-text2 text-[13px] mt-2">{e.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerGroup>

        <StaggerGroup className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.name} className="card flex items-center gap-4 border border-zinc-800 bg-zinc-900/60 p-4 hover:border-amber-500/25 hover:-translate-y-0.5 transition-all duration-300">
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
        </StaggerGroup>

        {/* Extracurricular Activities & Achievements */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-500">
              [ ACTIVITIES & ACHIEVEMENTS ]
            </span>
          </div>
          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {[
              { title: "ECSOC Contributor", period: "Jul 2026 – Present", desc: "Contributing to coding challenges and collaborative initiatives." },
              { title: "Rewriting the Code (RTC)", period: "Jun 2026 – Present", desc: "Active member in the Women in Tech community for networking and skill-building." },
              { title: "Hackathon Participant", period: "Hackathons", desc: "PromptWars, Vibe2Ship (CodeNinjas x Google), Outlier AI CodeCircuit. Built multiple full-stack AI/web applications under time constraints." },
            ].map((act) => (
              <div key={act.title} className="card border border-zinc-800 bg-zinc-900/60 p-5 hover:border-amber-500/25 hover:-translate-y-0.5 transition-all duration-300">
                <span className="font-mono text-[10px] text-muted">{act.period}</span>
                <h4 className="font-display text-base font-bold text-text mt-1">{act.title}</h4>
                <p className="text-xs text-text2 leading-relaxed mt-2">{act.desc}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" index="06" label="CONTACT" tag="DIRECT INQUIRY">
        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal className="reveal-left" delay={0.1}>
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
                  className="flex items-center gap-3 font-mono text-[13px] text-text2 px-4 py-3 rounded border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 hover:text-amber-400 hover:shadow-[0_2px_12px_rgba(230, 201, 160,0.05)] transition-all duration-300 group"
                >
                  <Icon size={16} className="text-amber-500" />
                  <span>{label}</span>
                  <span className="ml-auto text-amber-500 transform transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right" delay={0.2}>
            <div className="card border border-amber-500/20 bg-zinc-900/60 p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs text-amber-500 font-semibold">[ STATUS: AVAILABLE FOR CONTRACT ]</span>
              </div>
              <h3 className="font-display text-xl font-bold text-text mb-4">Roles & Specializations</h3>
              
              <StaggerGroup className="space-y-3 mb-6 font-mono text-xs">
                {[
                  "RLHF / RLSF Preference Ranking",
                  "Multilingual SFT Data Curation",
                  "Annotation QA & Calibration",
                  "Safety & Red-Team Evaluation",
                ].map((r) => (
                  <div key={r} className="pl-3 py-2 text-text border-l-2 border-amber-500 bg-zinc-950/40 hover:bg-zinc-950/60 transition-colors">
                    {r}
                  </div>
                ))}
              </StaggerGroup>
              
              <div className="flex flex-wrap gap-2">
                {["Remote", "Contract", "Freelance", "Part-time"].map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:scale-105 transition-transform duration-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <footer className="relative border-t border-zinc-800 z-10">
        <div className="mx-auto max-w-[1380px] px-6 md:px-10 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-3">
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
