import { useTheme } from "@/pages/hooks/useTheme";
import { useActiveSection } from "@/pages/hooks/useActiveSection";
import { SECTIONS } from "@/data";
import {
  BackgroundFX,
  NavBar,
  Hero,
  Services,
  Projects,
  Technologies,
  Experience,
  Contact,
  Footer,
} from "@/pages/components";

export default function PortfolioModern() {
  const { theme, setTheme } = useTheme();
  const [active] = useActiveSection(["hero", ...SECTIONS.map((s) => s.id)]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className={(theme === "dark" ? "dark " : "") + "relative isolate min-h-screen bg-transparent text-zinc-900 dark:text-zinc-100"}>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950 focus:shadow"
        href="#main-content"
      >
        Ir para o conteúdo
      </a>
      <BackgroundFX />
      <NavBar active={active} onClickSection={scrollTo} theme={theme} setTheme={setTheme} />
      <main className="relative z-10" id="main-content">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
