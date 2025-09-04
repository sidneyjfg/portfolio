import { Container, SectionTitle, Card } from "@/pages/components";
import { SERVICES } from "@/data";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="servicos" className="py-16 transition-colors">
      <Container>
        <SectionTitle>Serviços</SectionTitle>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-3xl">
          <p className="text-zinc-600 dark:text-zinc-300 max-w-3xl">
            Posso acelerar seu produto com criação de sites (landing pages), automações e integrações de API sob medida.
          </p>
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 text-zinc-900 dark:text-white">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <ChevronRight className="w-4 h-4 mt-0.5 text-zinc-400" /> {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
