// src/data/projects.ts
export type ProjectVisibility = "public" | "private";
export type Metric = { label: string; value: string };

export type Project = {
  title: string;
  summary: string;           // resumo curto pro card
  pain: string;              // dor do negócio
  solution: string;          // solução construída
  integrations: string[];    // integrações envolvidas
  tech: string[];            // stack
  metrics?: Metric[];        // resultados
  images?: string[];         // múltiplas imagens (public/)
  visibility: ProjectVisibility;
  clientKind?: string;
  nda?: boolean;
  role?: string;
  github?: string | null;
  demo?: string | null;
};

export const PROJECTS: Project[] = [
  {
    title: "Monitor de Pedidos & Produtos (Marketplaces)",
    summary:
      "Automações que monitoram pedidos sem integração e divergências de estoque/preço, com alertas e reprocessos.",
    pain:
      "Pedidos ficavam parados sem integração e havia divergências recorrentes de estoque/preço entre ERP e marketplaces.",
    solution:
      "Serviço Node/Express com jobs agendados em containers Docker. Consulta Plugg.To/AnyMarket e ERP, reconcilia dados, detecta pedidos não integrados e divergências, e notifica o time (Google). Janelas de busca configuráveis e trilha de auditoria em MySQL.",
    integrations: ["Nérus ERP", "Plugg.To", "AnyMarket", "Google (Chat/Email)"],
    tech: ["TypeScript", "Express.js", "Docker", "Linux", "MySQL"],
    metrics: [
      { label: "Redução de chamados por incidentes", value: "≈ 97%" },
    ],
    images: [
      "images/monitor-marketplaces-1.jpg",
      "images/monitor-marketplaces-2.jpg",
    ],
    visibility: "private",
    clientKind: "Varejo / E-commerce",
    nda: true,
    role: "Dev/Automation",
    github: null,
    demo: null,
  },
  {
    title: "Monitor de Notas Fulfillment (ERP ↔ Marketplace)",
    summary:
      "Serviço que verifica notas fulfillment não integradas e alerta time para correções rápidas.",
    pain:
      "Notas fulfillment ficavam pendentes ou não integravam no ERP, afetando SLA de expedição e conciliação fiscal.",
    solution:
      "Job em Node rodando em Docker (Linux) que cruza ERP e canais fulfillment, identifica lacunas e notifica no Google. Parametrização de período de busca e relatórios de inconsistências.",
    integrations: ["Nérus ERP", "Fulfillment (marketplaces)", "Google (Chat/Email)"],
    tech: ["Node.js", "Docker", "Linux", "MySQL"],
    metrics: [
      { label: "Redução de chamados por incidentes", value: "≈ 93%" },
    ],
    images: [
      "images/fulfillment-notas-1.jpg",
      "images/fulfillment-notas-2.jpg",
    ],
    visibility: "private",
    clientKind: "Logística / E-commerce",
    nda: true,
    role: "Dev/Automation",
    github: null,
    demo: null,
  },
  {
    title: "API iFood ↔ ERP (multi-loja, idempotente)",
    summary:
      "Integração entre iFood e ERP com suporte a múltiplas lojas (merchantId), processamento de pedidos e controle de estoque publicado de forma idempotente por loja.",
    pain:
      "Sincronização manual e falhas de consistência entre ERP e iFood ao operar várias lojas; pedidos duplicados e divergência de estoque.",
    solution:
      "API Node.js + TypeScript + Express com Sequelize/MySQL. Camada de idempotência por loja (merchantId), filas de processamento por evento, reconciliação de estoque e endpoints seguros para webhooks do iFood. Observabilidade e logs por loja.",
    integrations: ["iFood", "ERP", "Webhooks iFood"],
    tech: ["Node.js", "TypeScript", "Express.js", "Sequelize", "MySQL", "Docker"],
    metrics: [
      { label: "Melhoria no controle de estoque aumentou em", value: "≈90%" },
    ],
    images: [
      // adicione prints se quiser (coloque os arquivos em /public/images/...)
      // "/images/ifood-1.jpg",
      // "/images/ifood-2.jpg",
    ],
    visibility: "public",
    clientKind: "Food delivery / Omnichannel",
    nda: false,
    role: "Full Stack",
    github: "https://github.com/sidneyjfg/apiIfood",
    demo: null,
  },

];