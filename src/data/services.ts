// src/data/services.ts
import type { ComponentType } from "react";
import { BarChart3, Braces, PanelsTopLeft, Workflow } from "lucide-react";

export type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    icon: Workflow,
    title: "Automações de processos",
    description:
      "Rotinas para reduzir tarefas repetitivas, alertas manuais e conferências que tomam tempo da equipe.",
    bullets: [
      "Dados entre sistemas, planilhas e WhatsApp",
      "Relatórios e notificações automáticas",
      "Regras de negócio adaptadas ao seu fluxo",
    ],
  },
  {
    icon: PanelsTopLeft,
    title: "Sistemas internos",
    description:
      "Ferramentas para organizar agenda, clientes, equipe, chamados, pedidos e qualquer processo operacional.",
    bullets: [
      "Painéis para equipe e gestão",
      "Controle de status, histórico e permissões",
      "Fluxos pensados para uso diário",
    ],
  },
  {
    icon: Braces,
    title: "Integrações de API",
    description:
      "Conexão entre sistemas internos, ferramentas externas, ERPs, marketplaces e bancos de dados.",
    bullets: [
      "REST/Webhooks",
      "Mapeamento e transformação de dados",
      "Monitoramento e retries",
      "Redução de digitação duplicada",
    ],
  },
  {
    icon: BarChart3,
    title: "Portais e dashboards",
    description:
      "Visão clara de indicadores, pendências e movimentações para decisões com menos achismo.",
    bullets: [
      "Indicadores operacionais",
      "Histórico e filtros por período",
      "Acompanhamento em tempo real",
    ],
  },
];
