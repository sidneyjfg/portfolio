import { Github, Linkedin, Mail } from "lucide-react";
import { Container, Card, Badge } from "@/pages/components";
import { SOCIALS } from "@/data";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="pt-28 md:pt-32 pb-16 transition-colors">
      <Container>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-6 items-center"
          style={{ willChange: "transform" }}
        >
          <div className="md:col-span-7 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Desenvolvedor <span className="text-zinc-500 dark:text-zinc-400">Full Stack</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl">
              Crio experiências digitais excepcionais com foco em performance, acessibilidade e impacto real no negócio.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={SOCIALS.github}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/50"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={SOCIALS.linkedin}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/50"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={SOCIALS.email}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/50"
              >
                <Mail className="w-4 h-4" /> Fale comigo
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <Card className="p-6 md:p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-semibold text-zinc-900 dark:text-white">4+</div>
                  <div className="text-xs text-zinc-500">anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-zinc-900 dark:text-white">6</div>
                  <div className="text-xs text-zinc-500">projetos entregues</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-zinc-900 dark:text-white">100%</div>
                  <div className="text-xs text-zinc-500">Personalizado</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Node", "TypeScript", "AWS", "Mysql", "Python"].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
