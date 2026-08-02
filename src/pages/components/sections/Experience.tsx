import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge, Container, SectionTitle } from "@/pages/components";
import { EXPERIENCES } from "@/data";

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experiencia" className="py-16 transition-colors">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionTitle>Experiência profissional</SectionTitle>
            <p className="max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
              Linha do tempo com foco no que importa para avaliação técnica: contexto, problemas reais, stack usada e responsabilidades com impacto operacional.
            </p>
          </div>

          <div className="relative">
            <motion.div
              aria-hidden="true"
              className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px origin-top bg-zinc-200 dark:bg-zinc-800 sm:block"
              initial={reduceMotion ? { opacity: 1 } : { transform: "scaleY(0)" }}
              whileInView={reduceMotion ? { opacity: 1 } : { transform: "scaleY(1)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            />

            <div className="space-y-5">
              {EXPERIENCES.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  className="relative rounded-lg border border-zinc-200 bg-white/75 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 sm:ml-10"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(10px)" }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.05, duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="absolute -left-[2.95rem] top-5 hidden h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 sm:flex">
                    <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
                        {experience.company}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">
                        {experience.role}
                      </h3>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-white/5 dark:text-zinc-300">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {experience.period}
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                    {experience.description}
                  </p>

                  <ul className="mt-5 grid gap-2">
                    {experience.bullets.map((item) => (
                      <li key={item} className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
