export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Nérus",
    role: "Analista Full Stack Júnior",
    period: "abr/2026 - atual",
    description:
      "Desenvolvimento e manutenção de integrações internas e externas, conectando produto, suporte e operação em ambiente ERP.",
    bullets: [
      "Desenvolvimento e manutenção de integrações utilizando TypeScript, Node.js e React.",
      "Correção de falhas, análise de código, ajustes no sistema e implementação de melhorias em aplicações existentes.",
      "Apoio na evolução de soluções integradas a ERP, marketplaces e processos internos de negócio.",
      "Atuação conjunta com suporte e desenvolvimento na investigação de incidentes e validação de correções.",
    ],
    stack: ["TypeScript", "Node.js", "React", "ERP", "APIs REST", "Marketplaces"],
  },
  {
    company: "Nérus",
    role: "Analista de Suporte Júnior",
    period: "ago/2024 - mar/2026",
    description:
      "Análise técnica de incidentes em ERP, integrações, fulfillment e fluxo de pedidos, com forte uso de banco, APIs, Docker e Linux.",
    bullets: [
      "Integração, consulta e manipulação de APIs REST voltadas a fulfillment e marketplaces.",
      "Análise e resolução de incidentes relacionados ao ERP, integrações e fluxo de pedidos.",
      "Execução de queries SQL em MySQL para diagnóstico, validação de dados e apoio ao desenvolvimento.",
      "Manutenção e análise de containers Docker e serviços executados em ambientes Linux.",
      "Criação de automações em Node.js para monitoramento de pedidos e conversão XML para JSON.",
    ],
    stack: ["Node.js", "APIs REST", "MySQL", "Docker", "Linux", "XML/JSON", "Fulfillment"],
  },
  {
    company: "Nérus",
    role: "Assistente de Suporte de TI",
    period: "ago/2023 - ago/2024",
    description:
      "Suporte técnico ao ERP e integrações usadas por clientes, com investigação de ocorrências e documentação de cenários.",
    bullets: [
      "Suporte técnico ao ERP e às integrações utilizadas pelos clientes da empresa.",
      "Manipulação de APIs, Docker, Linux, MySQL, XML e JSON para análise e correção de ocorrências.",
      "Apoio técnico a equipes internas e clientes, com documentação de cenários e validação de soluções.",
    ],
    stack: ["ERP", "APIs", "Docker", "Linux", "MySQL", "XML/JSON"],
  },
  {
    company: "Nérus",
    role: "Estagiário de Suporte",
    period: "mai/2023 - ago/2023",
    description:
      "Entrada na operação técnica com suporte ao sistema, banco de dados, Linux e serviços em nuvem.",
    bullets: [
      "Apoio no suporte ao sistema da empresa em ambientes Linux, banco de dados e serviços hospedados na AWS.",
      "Auxílio na identificação de falhas, coleta de evidências técnicas e atendimento de demandas de clientes.",
    ],
    stack: ["Linux", "Banco de dados", "AWS", "Suporte técnico"],
  },
  {
    company: "Polícia Militar de Minas Gerais (PMMG)",
    role: "Estagiário Desenvolvimento Mobile",
    period: "mar/2023 - mai/2023",
    description:
      "Desenvolvimento mobile e adaptação de código para interfaces e fluxos com autenticação.",
    bullets: [
      "Desenvolvimento de interfaces em Dart e integração com Firebase.",
      "Apoio em autenticação e adaptação de código Java para Dart.",
      "Vivência com leitura de código legado e entrega em contexto institucional.",
    ],
    stack: ["Dart", "Firebase", "Mobile", "Java"],
  },
  {
    company: "Diletec",
    role: "Desenvolvedor Web (Freelancer)",
    period: "jun/2021 - jul/2021",
    description:
      "Criação de interfaces web e funcionalidades para site institucional/comercial.",
    bullets: [
      "Desenvolvimento de interfaces em WordPress e componentes UX/UI.",
      "Integrações com gateways de pagamento e ajustes em PHP.",
      "Contato direto com demanda de negócio, layout e publicação web.",
    ],
    stack: ["WordPress", "PHP", "UX/UI", "Pagamentos"],
  },
];
