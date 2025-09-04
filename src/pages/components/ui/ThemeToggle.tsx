import { Sun, Moon } from "lucide-react";
import type { Theme } from "@/pages/pages/hooks/useTheme";

export default function ThemeToggle({ value, onChange }: { value: Theme; onChange: (v: Theme) => void }) {
  return (
    <button
      onClick={() => onChange(value === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/50"
      aria-label="Alternar tema (atalho: T)"
    >
      {value === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      {value === "dark" ? "Claro" : "Escuro"}
    </button>
  );
}
