import { ExternalLink, Github } from "lucide-react";
import { Badge, Card, Container, SectionTitle } from "@/pages/components";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="py-16 transition-colors">
      <Container>
        <div className="mb-8 max-w-3xl">
          <SectionTitle>Projetos técnicos</SectionTitle>
          <p className="leading-7 text-zinc-600 dark:text-zinc-300">
            Projetos usados como evidência técnica. Repositório só aparece quando ajuda a avaliação; projetos em pausa ou cases técnicos são rotulados de forma explícita.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="flex h-full flex-col p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
                  {project.status}
                </span>
              </div>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{project.summary}</p>

              <div className="mt-5">
                <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">Foco técnico</h4>
                <ul className="mt-3 space-y-2">
                  {project.technicalFocus.map((item) => (
                    <li key={item} className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                {project.demo ? (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:text-zinc-100"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Ver demo
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:text-zinc-100"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Ver código
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
