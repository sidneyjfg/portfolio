// src/pages/components/sections/Projects.tsx
import { Container, SectionTitle, Card, Badge } from "@/pages/components";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import ProjectGallery from "@/pages/components/ui/ProjectGallery";
import { PROJECTS } from "@/data/projects";
import { TECH_LOGOS } from "@/data/techLogos";

export default function Projects() {
  return (
    <section id="projetos" className="py-16 transition-colors">
      <Container>
        <SectionTitle>Projetos</SectionTitle>

        {/* GRID: 1 -> 2 -> 3 colunas */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.03 }}
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

                {/* galeria (deixe as imagens cruas; ProjectGallery faz o resolve) */}
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
                        <div className="text-[10px] text-zinc-500">{m.label}</div>
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
      </Container>
    </section>
  );
}
