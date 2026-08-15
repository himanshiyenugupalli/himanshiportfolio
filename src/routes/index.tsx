import { useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { CinematicHero } from "@/components/portfolio/CinematicHero";
import { Cursor } from "@/components/portfolio/Cursor";
import { Linkedin, Github, ExternalLink, User, MapPin, Mail, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LiquidFrameAnimation } from "@/components/portfolio/LiquidFrameAnimation";
import {
  LiscorePreview,
  SocialEyePreview,
  CalmPrepPreview,
  CarbonLensPreview,
  TravelChecklistPreview,
} from "@/components/portfolio/ProjectPreviews";
import { createFileRoute } from "@tanstack/react-router";

const EXP = [
  {
    period: "JAN 2026 — PRESENT",
    company: "Uber AI Solutions",
    type: "Freelance / Remote",
    role: "AI DATA ANNOTATOR",
    desc: "Annotate and evaluate diverse data types including images, text, and documents to support the development of high-quality AI models for real-world applications.",
  },
  {
    period: "JAN 2026 — PRESENT",
    company: "Prolific",
    type: "Freelance / Remote",
    role: "RLHF CONTRIBUTOR",
    desc: "Contribute to reinforcement learning from human feedback projects by providing thoughtful, accurate, and consistent responses that improve model safety and helpfulness.",
  },
  {
    period: "OCT 2025",
    company: "clickworker",
    type: "Freelance / Remote",
    role: "IMAGE ANNOTATOR",
    desc: "Annotate images for object detection, classification, and segmentation tasks to support computer vision model training and evaluation.",
  },
  {
    period: "SEP 2025 — JAN 2026",
    company: "DataAnnotation Tech",
    type: "Freelance / Remote",
    role: "ANNOTATION / QA SPECIALIST",
    desc: "Reviewed and refined AI-generated responses, ensured annotation quality, and maintained consistency across complex guidelines and projects.",
  },
];

const PROJECTS = [
  {
    title: "LISCORE",
    subtitle: "MSc IT Research Project (Ongoing)",
    tech: "React / Vite / TypeScript / Bun / Netlify",
    desc: "AI-powered GitHub license health scanner that evaluates GitHub repositories & compatibility score.",
    component: LiscorePreview,
    repo: "https://github.com/himanshiyenugupalli",
    demo: "#",
  },
  {
    title: "SOCIALEYE",
    subtitle: "Vibe2Ship Hackathon",
    tech: "Next.js / Supabase / Netlify",
    desc: "AI-powered hyperlocal civic issue reporting & resolution web application with real-time tracking.",
    component: SocialEyePreview,
    repo: "https://github.com/himanshiyenugupalli",
    demo: "#",
  },
  {
    title: "CALMPREP",
    subtitle: "PromptWars Hackathon",
    tech: "React / Supabase / Netlify / Ollama",
    desc: "AI-powered mental wellness companion designed for students during high-stakes competitive exams.",
    component: CalmPrepPreview,
    repo: "https://github.com/himanshiyenugupalli",
    demo: "#",
  },
  {
    title: "CARBONLENS",
    subtitle: "Online PromptWars Hackathon",
    tech: "TypeScript / Vite / Netlify",
    desc: "Personal carbon footprint tracking web application with data visualizer and emission metrics.",
    component: CarbonLensPreview,
    repo: "https://github.com/himanshiyenugupalli",
    demo: "#",
  },
  {
    title: "TRAVELCHECKLIST",
    subtitle: "Outlier AI CodeCircuit",
    tech: "HTML5 / CSS3 / JavaScript / Netlify",
    desc: "Responsive travel packing checklist web app supporting custom packing rules and progress tracking.",
    component: TravelChecklistPreview,
    repo: "https://github.com/himanshiyenugupalli",
    demo: "#",
  },
];

const CAPABILITIES = [
  "DATA ANNOTATION",
  "RLHF / RLSF",
  "CONVERSATIONAL AI",
  "ANNOTATION QA / QC",
  "PROMPT ENGINEERING",
  "IMAGE CLASSIFICATION",
  "PYTHON",
  "JAVASCRIPT",
  "HTML / CSS",
  "JAVA",
  "MYSQL",
];

const TECHNICAL_SKILLS = [
  "Data Annotation",
  "RLHF / RLSF",
  "Data Labelling",
  "Annotation QA / QC",
  "Text / Image / Audio Annotation",
  "Conversational AI Testing",
  "Intent & Dialogue Labeling",
  "Customer Sentiment Analysis",
  "Image Classification",
  "Bounding Boxes",
  "Prompt Engineering",
  "Basic AI/ML Concepts",
  "HTML5 & CSS3",
  "JavaScript",
  "Python",
  "Java",
  "MySQL",
  "Networking",
];

const TOOLS_AND_PLATFORMS = [
  "VS Code",
  "Git / GitHub",
  "Netlify",
  "Apache Tomcat",
  "Hugging Face",
  "Microsoft Office Suite",
  "AWS Basics",
  "Supabase",
];

function HomePage() {
  const [activeExp, setActiveExp] = useState<number | null>(null);
  const [activeEdu, setActiveEdu] = useState<number | null>(null);

  return (
    <div id="top" className="bg-black text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-white/20">
      <Nav />
      <Cursor />
      <LiquidFrameAnimation />

      {/* 1. HERO */}
      <CinematicHero />

      {/* 2. ABOUT */}
      <section id="about" className="py-24 md:py-36 border-t border-white/10 relative overflow-hidden bg-transparent z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Section Indicator */}
          <div className="font-mono text-[12px] tracking-[0.3em] text-white/50 mb-6 uppercase">
            01 / PROFILE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative">
            
            {/* Left: Giant Typography */}
            <div className="relative flex flex-col justify-center">
              <ScrollReveal className="relative z-10" delay={0.1}>
                <h2 className="font-display text-[9vw] md:text-[5vw] font-bold tracking-wider leading-[0.9] text-white uppercase mb-6">
                  ABOUT ME
                </h2>
              </ScrollReveal>

              {/* Overlapping Typography layout */}
              <ScrollReveal className="relative z-10 font-display text-[5.5vw] md:text-[2.8vw] font-bold tracking-tight leading-[0.85] text-white/75 uppercase" delay={0.25}>
                <div className="mb-1.5">HUMAN</div>
                <div className="mb-1.5">INTELLIGENCE</div>
                <div className="text-white/30 my-2 text-[4vw] md:text-[2vw]">×</div>
                <div className="mb-1.5">ARTIFICIAL</div>
                <div>INTELLIGENCE</div>
              </ScrollReveal>
            </div>

            {/* Right: Paragraphs + Profile Avatar + Signature */}
            <div className="flex flex-col justify-center relative z-10 lg:pl-12">
              {/* Profile Avatar */}
              <ScrollReveal className="mb-6 flex items-center gap-4" delay={0.2}>
                <img
                  src="/himanshi.jpg"
                  alt="Himanshi Yenugupalli"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white/25 shadow-xl shrink-0"
                />
                <div>
                  <div className="font-mono text-[14px] md:text-[16px] tracking-widest text-white uppercase font-bold">
                    HIMANSHI YENUGUPALLI
                  </div>
                  <div className="font-mono text-[12px] tracking-wider text-white/50 uppercase mt-1 font-medium">
                    AI DATA ANNOTATOR & QA SPECIALIST
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="text-[17px] md:text-[18px] leading-relaxed text-white/80 space-y-5" delay={0.3}>
                <p>
                  I design, build, and optimize data-centric solutions that power intelligent systems. My work sits at the intersection of human judgment and machine learning — where high-quality data, thoughtful annotation, and precise evaluation shape the behavior of AI in the real world.
                </p>
                <p>
                  I care about accuracy, clarity, and impact. Every dataset, prompt, and model interaction is an opportunity to create technology that is more helpful, fair, and human-centered.
                </p>
              </ScrollReveal>

              {/* Styled Cursive Signature */}
              <ScrollReveal className="mt-3" delay={0.45}>
                <div className="font-['Brush_Script_MT',cursive] text-3xl md:text-4xl text-white/70 mt-4 -rotate-3 inline-block select-none tracking-wide">
                  Himanshi Y.
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Capabilities Horizontal Strip */}
          <div className="mt-20 border-t border-white/10 pt-8">
            <div className="font-mono text-[12px] tracking-[0.3em] text-white/50 mb-6 uppercase font-semibold">
              CAPABILITIES
            </div>
            
            {/* Capability Strip */}
            <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] border-b border-white/10 mb-12">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap}
                  className="py-4 px-4 font-mono text-[12px] md:text-[13px] tracking-wider text-white/90 border-r border-t border-white/10 flex items-center justify-center text-center uppercase font-medium hover:bg-white/5 transition-colors"
                >
                  {cap}
                </div>
              ))}
            </div>

            {/* Technical Skills & Tools/Platforms Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Technical Skills */}
              <div className="border border-white/15 bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                <div className="font-mono text-[12px] tracking-[0.25em] text-white/70 uppercase mb-4 font-semibold border-b border-white/10 pb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  TECHNICAL SKILLS
                </div>
                <div className="flex flex-wrap gap-2">
                  {TECHNICAL_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-[12px] md:text-[13px] text-white/85 hover:border-white/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="border border-white/15 bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                <div className="font-mono text-[12px] tracking-[0.25em] text-white/70 uppercase mb-4 font-semibold border-b border-white/10 pb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  TOOLS & PLATFORMS
                </div>
                <div className="flex flex-wrap gap-2">
                  {TOOLS_AND_PLATFORMS.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-[12px] md:text-[13px] text-white/85 hover:border-white/30 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EXPERIENCE */}
      <section id="experience" className="py-24 md:py-36 border-t border-white/10 bg-transparent z-10 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            
            {/* Left Col: Introduction + Languages */}
            <div>
              <div className="font-mono text-[12px] tracking-[0.3em] text-white/50 mb-6 uppercase">
                02 / PROFESSIONAL JOURNEY
              </div>
              <h2 className="font-display text-[9vw] md:text-[5vw] font-bold tracking-wider leading-[0.9] text-white uppercase mb-4">
                EXPERIENCE
              </h2>
              <div className="font-sans text-[13px] tracking-[0.2em] font-bold text-white/90 uppercase mb-6">
                BUILDING BETTER DATA FOR BETTER AI
              </div>
              
              <div className="w-12 h-[1px] bg-white mb-6" />
              
              <p className="font-sans text-[16px] leading-relaxed text-white/70 mb-12 max-w-sm">
                I contribute to the foundation of intelligent systems by creating high-quality training data that powers the next generation of AI.
              </p>

              {/* Interactive Languages display */}
              <div className="mt-12 space-y-4">
                <div className="font-mono text-[11px] tracking-[0.3em] text-white/50 uppercase mb-4 font-semibold">
                  LANGUAGES
                </div>
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-3 font-mono text-[13px] tracking-widest text-white/90">
                    <span className="w-2.5 h-2.5 rounded-full border border-white/40 flex items-center justify-center text-[8px]">◇</span>
                    HINDI — NATIVE
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[13px] tracking-widest text-white/90">
                    <span className="w-2.5 h-2.5 rounded-full border border-white/40 flex items-center justify-center text-[8px]">◇</span>
                    ENGLISH — FLUENT
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[13px] tracking-widest text-white/90">
                    <span className="w-2.5 h-2.5 rounded-full border border-white/40 flex items-center justify-center text-[8px]">◇</span>
                    TELUGU — FLUENT
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Timeline */}
            <div className="relative border-l border-white/20 pl-8 md:pl-12 space-y-12">
              {EXP.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group transition-opacity duration-300"
                  style={{
                    opacity: activeExp === null || activeExp === idx ? 1 : 0.45,
                  }}
                  onMouseEnter={() => setActiveExp(idx)}
                  onMouseLeave={() => setActiveExp(null)}
                >
                  {/* Custom Chrome Node */}
                  <span className="absolute -left-[38px] md:-left-[54px] top-1.5 w-4 h-4 rounded-full bg-black border border-white/40 group-hover:scale-125 group-hover:border-white transition-all duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>

                  <div className="font-mono text-[12px] tracking-widest text-white/60 mb-2 font-medium">
                    {item.period}
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-wide text-white mb-0.5">
                    {item.role}
                  </h3>

                  <div className="font-sans text-[13px] font-semibold text-white/95 mb-2">
                    {item.company} <span className="text-white/50 font-normal">· {item.type}</span>
                  </div>

                  <p className="font-sans text-[15px] leading-relaxed text-white/70 max-w-xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. PROJECTS SECTION WITH PROPER LAYOUT & PREVIEW IMAGES */}
      <section id="projects" className="py-24 md:py-36 border-t border-white/10 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="font-mono text-[12px] tracking-[0.3em] text-white/50 mb-6 uppercase">
            03 / SELECTED WORK
          </div>
          <h2 className="font-display text-[9vw] md:text-[5vw] font-bold tracking-wider leading-[0.9] text-white uppercase mb-14">
            PROJECTS
          </h2>

          {/* Clean 5-column grid layout for desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-28 items-stretch">
            {PROJECTS.map((proj) => {
              const PreviewComponent = proj.component;
              return (
                <div
                  key={proj.title}
                  className="group relative border border-white/15 bg-[#080808] p-5 rounded-xl flex flex-col justify-between hover:border-white/50 hover:-translate-y-1.5 transition-all duration-300 min-h-[460px] shadow-lg will-change-transform transform-gpu"
                >
                  {/* Top: Project Screen UI Preview Frame */}
                  <div className="w-full h-44 mb-5 rounded-lg overflow-hidden shrink-0 group-hover:scale-[1.02] transition-transform duration-300 will-change-transform transform-gpu">
                    <PreviewComponent />
                  </div>

                  {/* Middle Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-display text-2xl font-bold tracking-wider text-white group-hover:text-white uppercase">
                          {proj.title}
                        </h3>
                      </div>
                      
                      <div className="font-mono text-[11px] tracking-wider text-white/60 uppercase mb-3 leading-tight font-medium">
                        {proj.tech}
                      </div>

                      <p className="font-sans text-[14px] leading-relaxed text-white/70 mb-4">
                        {proj.desc}
                      </p>
                    </div>

                    {/* Bottom Action Links */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[12px] text-white/80 font-medium">
                      <a
                        href={proj.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white flex items-center gap-1 transition-colors"
                      >
                        Repo <ExternalLink size={12} />
                      </a>
                      <a
                        href={proj.demo}
                        className="hover:text-white flex items-center gap-1 transition-colors"
                      >
                        Demo <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* EDUCATION (right under projects) */}
          <div className="border-t border-white/10 pt-16">
            <h2 className="font-display text-[9vw] md:text-[5vw] font-bold tracking-wider leading-[0.9] text-white uppercase mb-12">
              EDUCATION
            </h2>

            {/* Horizontal Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* timeline horizontal line */}
              <div className="absolute top-[9px] left-0 right-0 h-[1px] bg-white/20 hidden md:block" />

              {/* MSC */}
              <div
                className="relative pt-6 group"
                onMouseEnter={() => setActiveEdu(0)}
                onMouseLeave={() => setActiveEdu(null)}
                style={{ opacity: activeEdu === null || activeEdu === 0 ? 1 : 0.4 }}
              >
                <div className="absolute top-0 left-0 w-4.5 h-4.5 rounded-full border border-white/40 bg-black flex items-center justify-center group-hover:border-white transition-colors duration-200">
                  <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-widest uppercase mb-1">
                  MSc — INFORMATION TECHNOLOGY
                </h3>
                <div className="font-sans text-[14px] font-semibold text-white/90">
                  DG Ruparel College
                </div>
                <div className="font-mono text-[12px] tracking-wider text-white/60 mt-1 font-medium">
                  2026 — Present
                </div>
              </div>

              {/* BSC */}
              <div
                className="relative pt-6 group"
                onMouseEnter={() => setActiveEdu(1)}
                onMouseLeave={() => setActiveEdu(null)}
                style={{ opacity: activeEdu === null || activeEdu === 1 ? 1 : 0.4 }}
              >
                <div className="absolute top-0 left-0 w-4.5 h-4.5 rounded-full border border-white/40 bg-black flex items-center justify-center group-hover:border-white transition-colors duration-200">
                  <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-widest uppercase mb-1">
                  BSc — INFORMATION TECHNOLOGY
                </h3>
                <div className="font-sans text-[14px] font-semibold text-white/90">
                  VIVA College · University of Mumbai
                </div>
                <div className="font-mono text-[12px] tracking-wider text-white/60 mt-1 font-medium">
                  2022 — 2025 · CGPA: 8.2 / 10
                </div>
              </div>

              {/* HSC */}
              <div
                className="relative pt-6 group"
                onMouseEnter={() => setActiveEdu(2)}
                onMouseLeave={() => setActiveEdu(null)}
                style={{ opacity: activeEdu === null || activeEdu === 2 ? 1 : 0.4 }}
              >
                <div className="absolute top-0 left-0 w-4.5 h-4.5 rounded-full border border-white/40 bg-black flex items-center justify-center group-hover:border-white transition-colors duration-200">
                  <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-widest uppercase mb-1">
                  HSC — SCIENCE
                </h3>
                <div className="font-sans text-[14px] font-semibold text-white/90">
                  Utkarsha Vidyalaya
                </div>
                <div className="font-mono text-[12px] tracking-wider text-white/60 mt-1 font-medium">
                  2020 — 2022
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. JOURNEY + CONTACT */}
      <section id="journey" className="py-24 md:py-36 border-t border-white/10 bg-black relative overflow-hidden">
        {/* Background Liquid Chrome Image */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/liquid-chrome-bg.png"
            alt="Liquid Chrome Background"
            className="w-full h-full object-cover object-center opacity-85 transition-opacity duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 relative z-10">
          
          {/* Left: Journey Timeline */}
          <div>
            <div className="font-mono text-[12px] tracking-[0.3em] text-white/50 mb-6 uppercase">
              04 / LET'S CONNECT
            </div>
            
            <h2 className="font-display text-[9vw] md:text-[4.5vw] font-bold tracking-wider leading-[0.9] text-white uppercase mb-12">
              LET'S BUILD<br />SOMETHING<br />INTELLIGENT.
            </h2>

            <div className="font-mono text-[12px] tracking-[0.25em] text-white/80 uppercase mb-8 font-semibold">
              CHRONOLOGICAL JOURNEY
            </div>

            {/* Vertical Chronological Journey Timeline */}
            <div className="border-l border-white/20 pl-8 space-y-8">
              {[
                { year: "2020", desc: "Science education" },
                { year: "2022", desc: "BSc Information Technology begins" },
                { year: "2024", desc: "Technology workshops / virtual internship experience" },
                { year: "2025", desc: "BSc IT completed + AI/data annotation work" },
                { year: "2026", desc: "MSc IT + AI Data Annotation + RLHF + AI projects" },
              ].map((step) => (
                <div key={step.year} className="relative group flex items-center gap-6">
                  <span className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full border border-white/40 bg-black group-hover:border-white transition-colors" />
                  <span className="font-mono text-[15px] font-bold tracking-widest text-white shrink-0 min-w-[50px]">
                    {step.year}
                  </span>
                  <span className="font-sans text-[15px] text-white/80">
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Contact Card */}
          <div id="contact" className="flex flex-col justify-center items-start lg:pl-8">
            <div className="w-full border border-white/20 bg-black/40 backdrop-blur-xl p-8 rounded-2xl relative overflow-hidden group hover:border-white/40 transition-all duration-300 shadow-2xl">
              
              <div className="font-mono text-[11px] tracking-[0.3em] text-white/60 mb-3 uppercase font-semibold">
                HAVE AN IDEA?
              </div>

              <h3 className="font-display text-4xl md:text-5xl font-bold tracking-wider text-white mb-6 uppercase">
                LET'S TALK.
              </h3>

              <div className="w-full h-[1px] bg-white/10 my-6" />

              <div className="space-y-4 font-sans text-[15px] text-white/90">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-white/70 shrink-0" />
                  <span className="text-white font-medium">Himanshi Yenugupalli</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-white/70 shrink-0" />
                  <span className="text-white">Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-white/70 shrink-0" />
                  <a href="mailto:himanshiyenugalli@gmail.com" className="text-white hover:underline">
                    himanshiyenugalli@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white/70 shrink-0" />
                  <span className="text-white">+91 70584 69422</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="mailto:himanshiyenugalli@gmail.com"
                  className="w-full py-3.5 border border-white/30 rounded-full hover:border-white hover:bg-white/10 font-mono text-[12px] tracking-widest text-white uppercase flex items-center justify-center gap-2 transition-all duration-300 font-medium"
                >
                  START A CONVERSATION →
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-3 mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://linkedin.com/in/himanshi-yenugupalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white group/soc transition-colors"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/soc:border-white/30">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-white/50 uppercase font-medium">LINKEDIN</div>
                    <div className="font-mono text-[13px] text-white/90">linkedin.com/in/himanshi-yenugupalli</div>
                  </div>
                </a>

                <a
                  href="https://github.com/himanshiyenugupalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white group/soc transition-colors"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/soc:border-white/30">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-white/50 uppercase font-medium">GITHUB</div>
                    <div className="font-mono text-[13px] text-white/90">github.com/himanshiyenugupalli</div>
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-8 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[12px] text-white/50">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="text-white/90 tracking-widest font-bold">HIMANSHI YENUGUPALLI</span>
            <span>AI DATA · ML · TECHNOLOGY</span>
          </div>
          <div>© 2026</div>
        </div>
      </footer>
    </div>
  );
}

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
