import { Container, SectionTitle, Card } from "@/pages/components";
import { EXPERIENCES } from "@/data";

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 transition-colors">
      <Container>
        <SectionTitle>Experiência</SectionTitle>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <Card key={exp.company} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">{exp.company}</p>
                </div>
                <span className="text-sm text-zinc-500">{exp.period}</span>
              </div>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">{exp.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
