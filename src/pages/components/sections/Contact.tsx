import { Container, SectionTitle, Card, IconBullet } from "@/pages/components";
import { SOCIALS } from "@/data";
import { Mail, Phone, MapPin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-16 transition-colors">
      <Container>
        <SectionTitle>Vamos Conversar</SectionTitle>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
          Tem um projeto em mente ou quer otimizar processos com automação/integração?
          Vamos tirar do papel.
        </p>

        <div className="mt- grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-5">
            <IconBullet icon={<Mail className="w-5 h-5" />}>sidneyjunio191@gmail.com </IconBullet>
          </Card>
          <Card className="p-5">
            <IconBullet icon={<Phone className="w-5 h-5" />}>{SOCIALS.phoneLabel}</IconBullet>
          </Card>
          <Card className="p-5">
            <IconBullet icon={<MapPin className="w-5 h-5" />}>{SOCIALS.location}</IconBullet>
          </Card>
          <Card className="p-5">
            <div className="flex items-start gap-3">
              <Github className="w-5 h-5 mt-1" />
              <a href={SOCIALS.github} className="text-zinc-700 dark:text-zinc-200 hover:underline">
                /sidneyjfg
              </a>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <a
            href={SOCIALS.email}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/50"
          >
            <Mail className="w-4 h-4" /> Iniciar conversa por e-mail
          </a>
        </div>
      </Container>
    </section>
  );
}
