import { Sun, Moon } from "lucide-react";
import type { Theme } from "@/pages/hooks/useTheme";

export default function ThemeToggle({ value, onChange }: { value: Theme; onChange: (v: Theme) => void }) {
  return (
    <button
      onClick={() => onChange(value === "dark" ? "light" : "dark")}
      className="inline-flex min-h-9 items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 transition-transform duration-150 ease-out hover:bg-zinc-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
      aria-label="Alternar tema"
      type="button"
    >
      {value === "dark" ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
      {value === "dark" ? "Claro" : "Escuro"}
    </button>
  );
}
