import { Container, SectionTitle, Card } from "@/pages/components";
import { TECHNOLOGIES } from "@/data";
import { TECH_LOGOS } from "@/data/techLogos";
import TechBadge from "@/pages/components/ui/TechBadge";

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-16 transition-colors">
      <Container>
        <SectionTitle>Minhas Tecnologias</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
            <Card
              key={category}
              className="relative p-6 overflow-hidden bg-zinc-900/40 dark:bg-white/5
                         border-zinc-800/60 dark:border-white/10"
            >
              {/* glow dinâmico no hover */}
              <div className="pointer-events-none absolute -inset-16 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 mb-3">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <TechBadge key={t} name={t} logo={TECH_LOGOS[t]} />
                ))}
              </div>

              {/* textura diagonal sutil */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.07]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent 0, transparent 6px, rgba(255,255,255,0.06) 7px)",
                }}
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
