import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { classNames } from "@/lib/classNames";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ rotateX: -1.5, rotateY: 1.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={classNames(
        "transform-gpu rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm shadow-sm hover:shadow-lg",
        className
      )}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
