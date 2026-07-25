import { ReactNode, Children } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface StaggerGroupProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  staggerDelay?: number;
}

export function StaggerGroup({
  children,
  delay = 0,
  y = 20,
  className,
  staggerDelay = 0.1,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();
  const initialY = shouldReduceMotion ? 0 : y;

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: initialY },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {Children.map(children, (child) => {
        if (!child) return null;
        return <motion.div variants={itemVariants}>{child}</motion.div>;
      })}
    </motion.div>
  );
}
