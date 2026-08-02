import { Download, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card, Container, SectionTitle } from "@/pages/components";
import { SOCIALS } from "@/data";

const contactLinks = [
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin },
  { label: "GitHub", href: SOCIALS.github, icon: Github },
  { label: "Currículo PDF", href: SOCIALS.resume, icon: Download },
  { label: "E-mail", href: SOCIALS.email, icon: Mail },
];

export default function Contact() {
  return (
    <section id="contato" className="py-16 transition-colors">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle>Contato</SectionTitle>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Aberto a conversas para vagas Full Stack, Backend, integrações, produto interno, SaaS e contextos com operação técnica.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {SOCIALS.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {SOCIALS.phoneLabel}
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="p-5">
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-zinc-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:text-zinc-100"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="font-semibold">{item.label}</span>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
