import type { ReactNode } from "react";
import { classNames } from "@/lib/classNames";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={classNames(
        "rounded-lg border border-zinc-200 bg-white/75 shadow-sm transition-shadow duration-200 ease-out hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60",
        className
      )}
    >
      {children}
    </div>
  );
}
