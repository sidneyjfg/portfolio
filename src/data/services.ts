// src/data/services.ts
import type { ComponentType } from "react";
import { Layout, Workflow, Layers } from "lucide-react";

export type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Layout,
    title: "Criação de Sites",
    description:
      "Landing pages e sites institucionais modernos, rápidos e com SEO pronto para campanhas.",
    bullets: [
      "Next.js/React + Tailwind",
      "Design responsivo e acessível",
      "Formulários, analytics e SEO técnico",
    ],
  },
  {
    icon: Workflow,
    title: "Automações",
    description:
      "Bots e rotinas para eliminar tarefas repetitivas e reduzir erros operacionais.",
    bullets: [
      "Jobs agendados (Cron/Queues)",
      "Scraping, relatórios e notificações",
      "Orquestração com Docker/Linux",
    ],
  },
  {
    icon: Layers,
    title: "Integrações de API",
    description:
      "Conecto sistemas, ERPs e marketplaces para dados consistentes de ponta a ponta.",
    bullets: [
      "REST/Webhooks",
      "Mapeamento e transformação de dados",
      "Monitoramento e retries",
      "Integração com marketplaces"
    ],
  },
];
