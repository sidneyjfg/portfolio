export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f4f7fb_100%)] transition-colors dark:bg-[linear-gradient(180deg,#09090b_0%,#0f172a_48%,#09090b_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(82,82,91,0.36) 1px, transparent 1px), linear-gradient(to bottom, rgba(82,82,91,0.36) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-48 border-b border-zinc-200/70 bg-white/55 dark:border-white/10 dark:bg-white/[0.03]" />
    </div>
  );
}
