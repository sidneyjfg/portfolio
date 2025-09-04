import { useEffect } from "react";
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
  const [active] = useActiveSection(SECTIONS.map((s) => s.id));

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={(theme === "dark" ? "dark " : "") + "relative isolate min-h-screen bg-transparent text-zinc-900 dark:text-zinc-100"}>
      <BackgroundFX />
      <NavBar active={active} onClickSection={scrollTo} theme={theme} setTheme={setTheme} />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <Technologies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
