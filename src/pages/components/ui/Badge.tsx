import type { ReactNode } from "react";
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
      {children}
    </span>
  );
}
