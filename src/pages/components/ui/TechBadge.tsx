import { motion } from "framer-motion";

export default function TechBadge({ name, logo }: { name: string; logo?: string }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="group inline-flex items-center gap-2 rounded-full border border-zinc-800/40 bg-zinc-900/40 
                 dark:border-white/10 dark:bg-white/5 px-3 py-1.5
                 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur
                 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_24px_-12px_rgba(0,0,0,0.5)]
                 transition-shadow"
    >
      {logo && (
        <img
          src={logo}
          alt={name}
          width={16}
          height={16}
          loading="lazy"
          className="rounded-sm object-contain opacity-90 group-hover:opacity-100"
          style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.3))" }}
        />
      )}
      <span className="text-xs text-zinc-200/90">{name}</span>
      {/* brilho sutil */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
