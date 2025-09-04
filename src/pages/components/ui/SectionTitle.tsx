import type { ReactNode } from "react";
import { classNames } from "@/lib/classNames";

export default function SectionTitle({ children, subtle = false }: { children: ReactNode; subtle?: boolean }) {
  return (
    <h2
      className={classNames(
        "text-3xl md:text-4xl font-semibold tracking-tight mb-6",
        subtle ? "text-zinc-800 dark:text-zinc-100" : "text-zinc-900 dark:text-white"
      )}
    >
      {children}
    </h2>
  );
}
