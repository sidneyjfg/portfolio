export type ProjectStatus = "Produto real" | "Módulo real" | "Projeto mobile" | "MVP em pausa" | "Case técnico";

export type Project = {
  title: string;
  status: ProjectStatus;
  summary: string;
  technicalFocus: string[];
  stack: string[];
  github?: string | null;
  demo?: string | null;
};

export const PROJECTS: Project[] = [
  {
    title: "Hubly",
    status: "Produto real",
    summary:
      "SaaS próprio de agendamento, gestão e presença digital para clínicas, barbearias e salões, com foco em agenda, clientes, profissionais, planos e operação diária.",
    technicalFocus: [
      "Next.js, React e TypeScript no frontend",
      "Backend Node.js/TypeScript com regras de agenda e autenticação",
      "Modelagem de dados para clientes, profissionais, serviços e agendamentos",
      "RBAC, planos, dashboard operacional e fluxo de produto real",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "MySQL", "Docker", "Tailwind CSS"],
    demo: "https://hublyapp.com.br/",
  },
  {
    title: "Hubly Tickets",
    status: "Módulo real",
    summary:
      "Central de chamados, dúvidas, ideias e solicitações para organizar suporte do ecossistema Hubly em um canal profissional.",
    technicalFocus: [
      "Modelagem de chamados, tópicos e fluxo de atendimento",
      "Experiência de suporte com fórum e abertura de solicitações",
      "Integração ao produto principal como módulo complementar",
    ],
    stack: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/sidneyjfg/support-hubly",
  },
  {
    title: "API iFood ↔ ERP",
    status: "Case técnico",
    summary:
      "Integração backend para processar pedidos, webhooks e sincronização de estoque entre iFood e ERP em contexto multi-loja.",
    technicalFocus: [
      "API REST com Node.js, TypeScript e Express",
      "Idempotência por loja para reduzir duplicidade operacional",
      "Sequelize/MySQL, Docker, logs e reconciliação de eventos",
    ],
    stack: ["Node.js", "TypeScript", "Express.js", "Sequelize", "MySQL", "Docker"],
    github: "https://github.com/sidneyjfg/apiIfood",
  },
  {
    title: "App de Agendamentos",
    status: "MVP em pausa",
    summary:
      "Backend para agendamentos com clientes, equipe, serviços, disponibilidade, lembretes via WhatsApp e planos com Stripe.",
    technicalFocus: [
      "API Node/Express com Prisma e MySQL",
      "Autenticação JWT, rotas por domínio e webhooks Stripe",
      "Lembretes automáticos com WhatsApp e rotinas agendadas",
    ],
    stack: ["Node.js", "Express.js", "Prisma", "MySQL", "Stripe", "JWT", "node-cron"],
    github: "https://github.com/sidneyjfg/agendamento",
  },
];
