// src/pages/components/sections/Projects.tsx
import { useRef } from "react";
import { Container, SectionTitle, Card, Badge } from "@/pages/components";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectGallery from "@/pages/components/ui/ProjectGallery";
import { PROJECTS } from "@/data/projects";
import { TECH_LOGOS } from "@/data/techLogos";

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>('[data-card="true"]');
    const step = (firstCard?.offsetWidth ?? 360) + 24; // largura do card + gap
    el.scrollBy({ left: dir * step * 1.2, behavior: "smooth" });
  };

  return (
    <section id="projetos" className="py-16 transition-colors">
      <Container>
        <div className="flex items-center justify-between gap-3">
          <SectionTitle>Projetos</SectionTitle>

          {/* Controles (desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300/50 dark:border-zinc-700/60 bg-white/60 dark:bg-white/5 backdrop-blur
                         hover:bg-white/80 dark:hover:bg-white/10 transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300/50 dark:border-zinc-700/60 bg-white/60 dark:bg-white/5 backdrop-blur
                         hover:bg-white/80 dark:hover:bg-white/10 transition"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CARROSSEL HORIZONTAL */}
        <div className="relative mt-6">
          {/* fades laterais */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent hidden sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent hidden sm:block" />

          <div
            ref={scrollerRef}
            className="
              flex gap-6 overflow-x-auto pb-3 pr-2
              snap-x snap-mandatory scroll-smooth
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.03 }}
                // largura fixa por breakpoint para manter o layout estável
                className="snap-start shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
                data-card="true"
              >
                <Card className="h-full p-5 flex flex-col">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-white">
                      {p.title}
                    </h3>

                    {p.visibility === "private" && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                        Projeto Confidencial
                      </span>
                    )}
                    {p.clientKind && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/40">
                        {p.clientKind}
                      </span>
                    )}
                    {p.role && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/40">
                        Papel: {p.role}
                      </span>
                    )}
                  </div>

                  {/* resumo */}
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {p.summary}
                  </p>

                  {/* galeria */}
                  <ProjectGallery images={p.images} />

                  {/* narrativa compacta */}
                  <div className="grid md:grid-cols-3 gap-4 mt-2">
                    <div className="md:col-span-2 space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                          Dor
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                          {p.pain}
                        </p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                          Solução
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                          {p.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                          Integrações
                        </div>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {p.integrations.map((it) => (
                            <Badge key={it}>{it}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                          Stack
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <div
                              key={t}
                              className="flex items-center gap-2 px-2 py-1 rounded-md bg-zinc-800/40 dark:bg-white/5 border border-zinc-800/50 dark:border-white/10"
                              title={t}
                            >
                              {TECH_LOGOS[t] ? (
                                <img
                                  src={TECH_LOGOS[t]}
                                  alt={t}
                                  className="w-5 h-5 object-contain"
                                  loading="lazy"
                                />
                              ) : null}
                              <span className="text-sm text-zinc-200">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* métricas */}
                  {p.metrics?.length ? (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-md border border-zinc-200 dark:border-zinc-800 p-2 text-center"
                        >
                          <div className="text-[10px] text-zinc-500">
                            {m.label}
                          </div>
                          <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* ações */}
                  <div className="mt-4 flex flex-wrap gap-3 mt-auto">
                    {p.github ? (
                      <a
                        href={p.github}
                        className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200 hover:underline"
                      >
                        <Github className="w-4 h-4" /> Código
                      </a>
                    ) : null}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Controles flutuantes (mobile e desktop) */}
          <div className="sm:hidden mt-4 flex justify-center gap-3">
            <button
              onClick={() => scrollByCards(-1)}
              className="inline-flex h-9 px-3 items-center gap-1 rounded-full border border-zinc-300/50 dark:border-zinc-700/60 bg-white/60 dark:bg-white/5 backdrop-blur
                         hover:bg-white/80 dark:hover:bg-white/10 transition text-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" /> Anterior
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="inline-flex h-9 px-3 items-center gap-1 rounded-full border border-zinc-300/50 dark:border-zinc-700/60 bg-white/60 dark:bg-white/5 backdrop-blur
                         hover:bg-white/80 dark:hover:bg-white/10 transition text-sm"
              aria-label="Próximo"
            >
              Próximo <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
