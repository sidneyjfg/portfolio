import { Braces, Database, ServerCog, TerminalSquare } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Card, Container, SectionTitle } from "@/pages/components";

const highlights = [
  {
    title: "Backend & integrações",
    text: "APIs REST, webhooks, autenticação, idempotência, rotas por domínio e comunicação entre sistemas.",
    icon: Braces,
  },
  {
    title: "Banco de dados",
    text: "Modelagem, queries MySQL, ORMs, análise de dados operacionais e persistência para produtos reais.",
    icon: Database,
  },
  {
    title: "Operação & suporte",
    text: "Vivência com ERP, marketplaces, pedidos, notas fiscais, incidentes, logs e troubleshooting.",
    icon: ServerCog,
  },
  {
    title: "DevOps do dia a dia",
    text: "Docker, Linux, configuração de ambiente, scripts, aliases e automações de terminal para produtividade.",
    icon: TerminalSquare,
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="destaques" className="py-16 transition-colors">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionTitle>Destaques técnicos</SectionTitle>
            <p className="max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
              Meu diferencial está em conectar desenvolvimento com operação real: entender o problema, investigar dados, integrar sistemas e entregar ferramentas que sobrevivem ao uso diário.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(8px)" }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0)" }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.04, duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Card className="h-full p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.text}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
