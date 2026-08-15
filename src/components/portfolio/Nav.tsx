import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 border-b border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Brand */}
        <a
          href="#top"
          className="font-display text-xl md:text-2xl font-bold tracking-[0.2em] text-white hover:opacity-80 transition-opacity"
        >
          HIMANSHI
        </a>

        {/* Right Actions & Navigation */}
        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-8 font-sans text-[11px] font-medium tracking-[0.25em] text-white/70">
            <a href="#about" className="hover:text-white transition-colors duration-250 uppercase">
              ABOUT
            </a>
            <a href="#experience" className="hover:text-white transition-colors duration-250 uppercase">
              EXPERIENCE
            </a>
            <a href="#projects" className="hover:text-white transition-colors duration-250 uppercase">
              WORK
            </a>
            <a href="#journey" className="hover:text-white transition-colors duration-250 uppercase">
              JOURNEY
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-250 uppercase">
              CONTACT
            </a>
          </div>

          {/* Sparkle icon outline button */}
          <button
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-all duration-200"
            aria-label="Action"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
