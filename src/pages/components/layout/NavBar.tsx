import { SECTIONS } from "@/data";
import { Container, ThemeToggle } from "@/pages/components";
import { classNames } from "@/lib/classNames";
import type { Theme } from "@/pages/hooks/useTheme";

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
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <button
            className="font-bold tracking-tight text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:text-white"
            onClick={() => onClickSection("hero")}
            type="button"
          >
            Sidney Junio
          </button>
          <div className="hidden lg:flex items-center gap-6">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => onClickSection(s.id)}
                className={classNames(
                  "rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50",
                  active === s.id
                    ? "text-zinc-950 dark:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                )}
                type="button"
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
