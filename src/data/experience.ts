export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Nérus",
    role: "Analista de Suporte de TI",
    period: "mai/2023 - Atual",
    description:
      "Desenvolvimento de automações para monitoramento de integrações com marketplaces (pedidos, divergências de estoque/preço e notas fiscais), manipulação de APIs REST para fulfillment, análise de incidentes em ERP, manutenção de containers Docker, suporte em Linux, conversão XML ↔ JSON, queries MySQL e apoio técnico a times internos com foco em escalabilidade e eficiência.",
  },
  {
    company: "Polícia Militar de Minas Gerais (PMMG)",
    role: "Estagiário Desenvolvimento Mobile",
    period: "mar/2023 - mai/2023",
    description:
      "Desenvolvimento de interfaces em Dart, integração com Firebase, autenticação, interpretação e adaptação de código Java em Dart.",
  },
  {
    company: "Diletec",
    role: "Desenvolvedor Web (Freelancer)",
    period: "jun/2021 - jul/2021",
    description:
      "Desenvolvimento de interfaces em WordPress, integrações com gateways de pagamento, implementação de funcionalidades em PHP e criação de componentes UX/UI.",
  },
];
