// src/pages/components/ui/BackgroundFX.tsx
import { useEffect, useRef } from "react";

/** Opcional: partículas bem leves; desative removendo o <ParticlesBG /> lá embaixo */
function ParticlesBG() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;

    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // menos partículas pra ser leve
    const N = 70;
    const parts = Array.from({ length: N }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.8 + 0.6,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = "#ffffff";
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > c.width) p.dx *= -1;
        if (p.y < 0 || p.y > c.height) p.dy *= -1;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // respeita usuários com redução de movimento
  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none motion-reduce:hidden"
      aria-hidden
    />
  );
}

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Base que alterna com o tema */}
      <div className="absolute inset-0 bg-white dark:bg-zinc-950 transition-colors" />

      {/* Noise sutil (já tinha) */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.09] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 40 40'><g fill='%23000' fill-opacity='.7'><circle cx='1' cy='1' r='1'/></g></svg>\")",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Spotlight claro */}
      <div
        className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity"
        style={{
          background:
            "radial-gradient(700px 480px at 70% 8%, rgba(0,0,0,0.12), transparent 60%)",
        }}
      />
      {/* Spotlight escuro */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(950px 620px at 50% 0%, rgba(255,255,255,0.10), transparent 60%)",
        }}
      />

      {/* Glows radiais (coloridos, suaves) */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-indigo-500/20 dark:bg-indigo-400/15 blur-3xl" />
      <div className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-pink-400/20 dark:bg-pink-300/15 blur-2xl" />
      <div className="absolute bottom-[-120px] left-1/3 w-[520px] h-[520px] rounded-full bg-cyan-400/20 dark:bg-cyan-300/15 blur-3xl" />

      {/* Aurora (gradiente animado) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-1 opacity-70 mix-blend-overlay dark:mix-blend-screen motion-reduce:opacity-40">
          <div className="aurora-mask" />
        </div>
      </div>

      {/* Grid “tech” sutil por cima */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,120,120,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,120,120,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Partículas (opcional) */}
      <ParticlesBG />
    </div>
  );
}
