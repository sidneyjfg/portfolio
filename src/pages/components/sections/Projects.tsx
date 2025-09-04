// src/pages/components/sections/Projects.tsx
import { Container, SectionTitle, Card, Badge } from "@/pages/components";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ProjectGallery from "@/pages/components/ui/ProjectGallery";
import { TECH_LOGOS, PROJECTS, SOCIALS } from "@/data";

export default function Projects() {
  return (
    <section id="projetos" className="py-16 transition-colors">
      <Container>
        <SectionTitle>Projetos</SectionTitle>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="p-6">
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {p.title}
                    </h3>

                    {/* selos */}
                    {p.visibility === "private" && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
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

                  {/* resumo rápido */}
                  <p className="text-zinc-600 dark:text-zinc-300">{p.summary}</p>

                  {/* gallery */}
                  <ProjectGallery images={p.images} />

                  {/* narrativa */}
                  <div className="grid md:grid-cols-3 gap-6 mt-2">
                    <div className="md:col-span-2 space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                          Dor
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">{p.pain}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                          Solução
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">{p.solution}</p>
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
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="text-center rounded-lg border border-zinc-200 dark:border-zinc-800 p-2"
                        >
                          <div className="text-xs text-zinc-500">{m.label}</div>
                          <div className="text-lg font-semibold text-zinc-900 dark:text-white">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* ações */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.github ? (
                      <a
                        href={p.github}
                        className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200 hover:underline"
                      >
                        <Github className="w-4 h-4" /> Código
                      </a>
                    ) : null}

                    {/* {p.demo ? (
                      <a
                        href={p.demo}
                        className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    ) : (
                      <a
                        href={SOCIALS.email}
                        className="inline-flex items-center gap-2 text-sm rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        title="Projeto privado — posso mostrar um recorte por call"
                      >
                        <ExternalLink className="w-4 h-4" /> Solicitar demo privada
                      </a>
                    )} */}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
