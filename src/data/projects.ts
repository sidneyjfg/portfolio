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
    title: "App de Agendamentos (Profissionais & Serviços)",
    summary:
      "Backend de agendamentos com serviços, clientes, equipe, disponibilidades e lembretes via WhatsApp; planos Free/Premium com cobrança Stripe.",
    pain:
      "Profissionais e pequenas equipes perdiam horários e dependiam de planilhas/WhatsApp manual, sem visão centralizada de agenda, equipe e lembretes.",
    solution:
      "API Node/Express com Prisma/MySQL para gerenciar serviços, clientes, funcionários e disponibilidades; criação e controle de agendamentos; autenticação JWT; planos Free/Premium com Stripe (checkout e webhooks); lembretes automáticos via WhatsApp (whatsapp-web.js) orquestrados por node-cron; rotas /api/auth, /api/professional, /api/customers, /api/employees, /api/plans, /api/stripe (webhook) e /api/whatsapp.",
    integrations: [
      "Stripe (Checkout/Webhooks)",
      "WhatsApp (whatsapp-web.js)",
      "Cron (node-cron)"
    ],
    tech: [
      "Node.js",
      "Express.js",
      "Prisma",
      "MySQL",
      "whatsapp-web"
    ],
    // metrics: [
    //   { label: "No-shows reduzidos", value: "—" },
    //   { label: "Tempo médio p/ confirmação", value: "—" },
    // ],
    images: [
      // adicione imagens em /public/images e referencie aqui:
      // "/images/agendamentos-dashboard.png",
      // "/images/agendamentos-calendario.png",
    ],
    visibility: "private",
    clientKind: "Agendamento / Serviços",
    nda: false,
    role: "Backend",
    github: "https://github.com/sidneyjfg/agendamento",
    demo: null,
  },
  {
    title: "Lista de Compras com OCR & NFC-e",
    summary:
      "App Flutter que confere automaticamente itens do cupom fiscal (imagem/QR/URL) contra a sua lista de compras; funciona offline com Hive.",
    pain:
      "Conferência manual de compras é demorada e sujeita a erros ao comparar o cupom com a lista planejada.",
    solution:
      "App multiplataforma em Flutter com persistência local (Hive). Importa cupons por OCR (foto/imagem), leitura do QR da NFC-e (SEFAZ) ou URL; organiza revisão em seções (bate com a lista, divergentes, a mais), consolida itens iguais e calcula proporcionais para produtos por peso/volume. Histórico e cache para continuar depois.",
    integrations: [
      "SEFAZ (NFC-e via QR/URL)",
      "Google ML Kit (Text Recognition / OCR)",
      "Câmera & QR Code"
    ],
    tech: [
      "Flutter",
      "Dart",
    ],
    // metrics: [
    //   { label: "Tempo de conferência", value: "—" },
    //   { label: "Diferenças identificadas/compra", value: "—" },
    // ],
    images: [
      // adicione prints em /public/images e referencie aqui:
      "/images/appConfig.jpg",
      "/images/appLista.jpg",
      "/images/appCupom.jpg",
    ],
    visibility: "public",
    clientKind: "Consumo / Supermercados",
    nda: false,
    role: "Mobile (Flutter)",
    github: null,
    demo: null,
  },
  {
    title: "SaaS Finanças — Controle Financeiro & Metas",
    summary:
      "Plataforma web para controle de receitas/despesas, orçamentos e metas; free com registro manual e premium com importação bancária e colaboração.",
    pain:
      "Falta de centralização e visibilidade do fluxo financeiro para indivíduos e pequenas empresas, dificultando controle de orçamento, metas e divisão de despesas.",
    solution:
      "Aplicação React + Node/Express com arquitetura SOLID. Registro de transações, metas e orçamentos por categoria, relatórios com gráficos e exportação, integração bancária (premium), colaboração multiusuário e alertas automáticos.",
    integrations: [
      "importação de transações",
      "Email/SMS/Push (notificações)",
      "Exportação PDF/Excel"
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "JWT",
      "Sequelize",
      "MySQL",
      "Docker",
      "SOLID"
    ],
    // metrics: [
    //   { label: "Usuários ativos (MVP)", value: "—" },
    //   { label: "Tempo p/ registrar transação", value: "—" },
    // ],
    images: [
      // adicione prints se quiser (coloque os arquivos em /public/images/...)
      // "/images/saas-financas-1.png",
      // "/images/saas-financas-2.png",
    ],
    visibility: "public",
    clientKind: "Indivíduos / Freelancers / Pequenas empresas",
    nda: false,
    role: "Full Stack",
    github: "https://github.com/sidneyjfg/saas-financas-web",
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