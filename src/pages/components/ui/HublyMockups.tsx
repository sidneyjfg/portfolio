import { CalendarCheck2, Clock3, MessageCircle, TrendingDown, UserRound } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function DashboardScreen() {
  const appointments = [
    { time: "08:30", name: "Ana Ribeiro", status: "Confirmado" },
    { time: "10:00", name: "Carlos Dias", status: "Agendado" },
    { time: "11:30", name: "Mariana Valente", status: "Retorno" },
  ];

  return (
    <div className="h-full rounded-[1.1rem] bg-slate-950 p-4 text-white shadow-inner">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
            Resumo do dia
          </p>
          <h3 className="mt-1 text-lg font-semibold">Operação em tempo real</h3>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-right">
          <p className="text-[10px] text-slate-400">Ocupação</p>
          <p className="text-lg font-semibold">87%</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Consultas", "18"],
          ["No-show", "-32%"],
          ["Encaixes", "12"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[10px] text-slate-400">{label}</p>
            <p className="mt-2 text-xl font-semibold tabular-nums">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-300">Fila operacional</p>
            <CalendarCheck2 className="h-4 w-4 text-sky-300" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            {appointments.map((item) => (
              <div
                key={item.time}
                className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold tabular-nums">
                    {item.time}
                  </span>
                  <span className="truncate text-xs text-slate-200">{item.name}</span>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-200">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <p className="text-xs text-slate-300">Faltas em queda</p>
            </div>
            <p className="mt-2 text-xl font-semibold">controle por status</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-sky-300" aria-hidden="true" />
              <p className="text-xs text-slate-300">Lembretes</p>
            </div>
            <p className="mt-2 text-xl font-semibold">WhatsApp & e-mail</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBookingScreen() {
  return (
    <div className="h-full rounded-[1.65rem] bg-white p-4 text-zinc-950">
      <div className="h-28 rounded-2xl bg-gradient-to-br from-sky-200 via-white to-emerald-100 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Hubly</p>
        <h3 className="mt-4 text-xl font-semibold">Barbearia Central</h3>
        <p className="text-xs text-zinc-600">Agenda online e atendimento local</p>
      </div>

      <div className="mt-4 space-y-3">
        <div className="rounded-2xl border border-zinc-200 p-3">
          <p className="text-xs text-zinc-500">Serviço</p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <span className="text-sm font-semibold">Corte masculino</span>
            <span className="text-xs font-semibold text-sky-700">R$ 45</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["09:00", "10:30", "14:00"].map((time, index) => (
            <button
              key={time}
              className={
                index === 1
                  ? "rounded-xl bg-zinc-950 px-2 py-3 text-xs font-semibold text-white"
                  : "rounded-xl border border-zinc-200 px-2 py-3 text-xs font-semibold text-zinc-700"
              }
              type="button"
            >
              {time}
            </button>
          ))}
        </div>

        <div className="rounded-2xl bg-zinc-100 p-3">
          <div className="flex items-center gap-2">
            <UserRound className="h-4 w-4 text-zinc-500" aria-hidden="true" />
            <p className="text-sm font-medium">Joao Martins</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-zinc-500" aria-hidden="true" />
            <p className="text-xs text-zinc-600">Quinta, 10:30</p>
          </div>
        </div>

        <div className="rounded-2xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white">
          Confirmar agendamento
        </div>
      </div>
    </div>
  );
}

export function HublyHeroMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto min-h-[340px] w-full max-w-[560px] md:min-h-[430px]">
      <motion.div
        className="absolute left-0 top-8 w-[86%] rounded-[1.4rem] border border-zinc-300/80 bg-zinc-950 p-2 shadow-2xl dark:border-white/10"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "perspective(900px) rotateX(14deg) translateY(18px)" }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "perspective(900px) rotateX(0deg) translateY(0)" }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="mb-2 flex items-center gap-1.5 px-2 pt-1">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-[1rem]">
          <DashboardScreen />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-[36%] min-w-[150px] rounded-[2rem] border border-zinc-300 bg-zinc-950 p-2 shadow-2xl dark:border-white/10"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(18px) scale(.96)" }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0) scale(1)" }}
        transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-white/25" />
        <div className="aspect-[9/18] overflow-hidden rounded-[1.65rem]">
          <MobileBookingScreen />
        </div>
      </motion.div>
    </div>
  );
}

export function HublyCaseScreens() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {[
        {
          title: "Dashboard operacional",
          text: "Indicadores de agenda, ocupacao, faltas e fila do dia para a equipe acompanhar a rotina.",
        },
        {
          title: "Agenda e status",
          text: "Controle de horarios, profissionais, confirmacoes, cancelamentos e historico por cliente.",
        },
        {
          title: "Clientes e historico",
          text: "Base ativa com contatos, ultima visita, retorno, reagendamentos e linha do tempo.",
        },
        {
          title: "Hubly Tickets",
          text: "Modulo de suporte para chamados, duvidas, ideias e solicitacoes em um canal profissional.",
        },
      ].map((screen) => (
        <article
          key={screen.title}
          className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-slate-950">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="grid gap-2">
              <div className="h-5 w-2/5 rounded bg-zinc-300 dark:bg-white/20" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 rounded bg-zinc-200 dark:bg-white/10" />
                <div className="h-16 rounded bg-zinc-200 dark:bg-white/10" />
                <div className="h-16 rounded bg-zinc-200 dark:bg-white/10" />
              </div>
              <div className="h-20 rounded bg-zinc-200 dark:bg-white/10" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">{screen.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{screen.text}</p>
        </article>
      ))}
    </div>
  );
}
