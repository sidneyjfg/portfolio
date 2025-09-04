import { SECTIONS } from "@/data";
import { Container, ThemeToggle } from "@/pages/components";
import { classNames } from "@/lib/classNames";
import type { Theme } from "@/pages/pages/hooks/useTheme";

export default function NavBar({
  active,
  onClickSection,
  theme,
  setTheme,
}: {
  active: string;
  onClickSection: (id: string) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/50 backdrop-blur-xl">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="font-bold tracking-tight text-zinc-900 dark:text-white">Sidney Junio</div>
          <div className="hidden md:flex items-center gap-6">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => onClickSection(s.id)}
                className={classNames(
                  "text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/50 rounded-md",
                  active === s.id
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                )}
              >
                {s.label}
              </button>
            ))}
            <ThemeToggle value={theme} onChange={setTheme} />
          </div>
        </div>
      </Container>
    </nav>
  );
}
