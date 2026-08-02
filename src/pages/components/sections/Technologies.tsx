import { Container, SectionTitle } from "@/pages/components";
import { TECHNOLOGIES } from "@/data";

const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    text: "Universidade Positivo - graduação em andamento, com previsão de conclusão em dezembro de 2026.",
  },
  {
    title: "Técnico em Tecnologia da Informação",
    text: "SENAI - formação técnica em TI/Informática concluída entre 2018 e 2019, junto ao Ensino Médio Técnico no SESI.",
  },
  {
    title: "Cursos e conhecimentos complementares",
    text: "Lógica de programação, POO, MySQL, NoSQL, Windows, Linux, redes LAN/WLAN, TCP/IP, Scrum, Kanban, testes unitários e Excel Avançado.",
  },
];

export default function Technologies() {
  return (
    <>
      <section id="stack" className="py-16 transition-colors">
        <Container>
          <div className="mb-8 max-w-3xl">
            <SectionTitle>Stack & ferramentas</SectionTitle>
            <p className="leading-7 text-zinc-600 dark:text-zinc-300">
              Tecnologias que uso em produtos, integrações, suporte operacional e automações.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
              <article
                key={category}
                className="rounded-lg border border-zinc-200 bg-white/75 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60"
              >
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="formacao" className="py-16 transition-colors">
        <Container>
          <div className="mb-8 max-w-3xl">
            <SectionTitle>Formação, imersões e evolução</SectionTitle>
            <p className="leading-7 text-zinc-600 dark:text-zinc-300">
              Além da experiência profissional, mantenho uma rotina prática de estudo e construção para evoluir arquitetura, produto e operação.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-zinc-200 bg-white/75 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60"
              >
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
