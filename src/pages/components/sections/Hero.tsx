import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge, Container } from "@/pages/components";
import { SOCIALS } from "@/data";

const stats = [
  { value: "4+", label: "anos entre suporte, web e desenvolvimento" },
  { value: "Nérus", label: "progressão de suporte a Full Stack" },
  { value: "Full Stack", label: "React, Node, TypeScript, Python e MySQL" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="pt-28 pb-16 transition-colors md:pt-32">
      <Container>
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(10px)" }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}
          className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center"
        >
          <div className="text-center lg:text-left">
            <div className="mx-auto flex w-fit flex-wrap justify-center gap-2 lg:mx-0">
              <Badge>Full Stack</Badge>
              <Badge>Backend & APIs</Badge>
              <Badge>DevOps operacional</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 text-balance dark:text-white sm:text-5xl md:text-6xl">
              Desenvolvedor Full Stack.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 text-pretty dark:text-zinc-300 lg:mx-0">
              Analista Full Stack Júnior com experiência progressiva em suporte técnico, integrações, APIs, banco de dados, rotinas de ERP, marketplaces, Docker/Linux e produtos web/mobile.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={SOCIALS.linkedin}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-transform duration-150 ease-out hover:bg-zinc-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                Falar pelo LinkedIn
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SOCIALS.github}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Ver GitHub
              </a>
              <a
                href={SOCIALS.resume}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Currículo PDF
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white/75 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Perfil técnico
            </p>
            <div className="mt-5 grid gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-white/5">
                  <p className="text-2xl font-semibold text-zinc-950 tabular-nums dark:text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
