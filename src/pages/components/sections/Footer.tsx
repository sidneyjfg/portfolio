import { Container } from "@/pages/components";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <Container>
        <div className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Sidney Junio — Desenvolvido com React e Tailwind.
        </div>
      </Container>
    </footer>
  );
}
