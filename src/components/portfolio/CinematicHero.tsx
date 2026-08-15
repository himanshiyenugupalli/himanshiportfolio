import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CinematicHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // cinematic smooth ease
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col justify-center">
      {/* 2-Column Grid Layout */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center gap-12 pt-20">
        
        {/* Left Side: Transparent visual area for fixed background canvas */}
        <div className="relative w-full h-[40vh] md:h-[70vh] flex items-center justify-center overflow-visible select-none pointer-events-none" />

        {/* Right Side: Identity Typography */}
        <motion.div
          className="flex flex-col justify-center relative z-10 text-left"
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
        >
          <motion.h1
            variants={itemVariants}
            className="font-display text-[15vw] md:text-[6.5vw] font-bold tracking-[0.05em] text-white leading-[0.85] uppercase"
          >
            HIMANSHI
          </motion.h1>
          
          <motion.h1
            variants={itemVariants}
            className="font-display text-[15vw] md:text-[6.5vw] font-bold tracking-[0.05em] text-white leading-[0.85] uppercase mb-4"
          >
            YENUGUPALLI
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="font-sans text-[11px] md:text-[12px] font-bold tracking-[0.3em] text-white/90 uppercase mb-5"
          >
            AI DATA · ML · TECHNOLOGY
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[14px] md:text-[15px] leading-relaxed text-white/60 max-w-md mb-8"
          >
            AI & ML professional with experience in data annotation, AI evaluation, machine learning, and intelligent systems.
          </motion.p>

          {/* Location Pin */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 font-mono text-[11px] tracking-wider text-white/50 mb-8 uppercase"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            MUMBAI, INDIA
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 border border-white/20 hover:border-white font-mono text-[11px] tracking-widest text-white uppercase transition-all duration-300"
            >
              VIEW WORK →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:border-white font-mono text-[11px] tracking-widest text-white uppercase transition-all duration-300"
            >
              CONTACT →
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Explore */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 0.4 } : {}}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 font-mono text-[9px] tracking-[0.3em] text-white uppercase"
      >
        <span>SCROLL TO EXPLORE</span>
        <svg
          className="w-3 h-3 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
}
