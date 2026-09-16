"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Metnin altına çizilerek beliren dalgalı çizgi (Adem'in verdiği AnimatedText örneğinden).
 * Sayfa açılınca çizgi soldan sağa çizilir; üzerine gelince dalga yön değiştirir.
 */
export function AltiCizgili({
  children,
  className,
  cizgiClassName,
  yol = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
  hoverYol = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
  sure = 1.5,
}: {
  children: ReactNode;
  className?: string;
  cizgiClassName?: string;
  yol?: string;
  hoverYol?: string;
  sure?: number;
}) {
  return (
    <motion.span className={cn("relative inline-block", className)} whileHover="hover" initial="gizli" animate="gorunur">
      {children}
      <motion.svg
        width="100%"
        height="20"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={cn("pointer-events-none absolute -bottom-4 left-0 text-primary sm:-bottom-5", cizgiClassName)}
      >
        <motion.path
          d={yol}
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          variants={{
            gizli: { pathLength: 0, opacity: 0 },
            gorunur: { pathLength: 1, opacity: 1, transition: { duration: sure, ease: "easeInOut", delay: 0.3 } },
            hover: { d: hoverYol, transition: { duration: 0.8 } },
          }}
        />
      </motion.svg>
    </motion.span>
  );
}
