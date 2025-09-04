// src/pages/components/ui/ProjectGallery.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const asset = (p: string) => new URL(p, import.meta.env.BASE_URL).href;

export default function ProjectGallery({ images = [] }: { images?: string[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  if (!images.length) return null;

  return (
    <>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setOpenIdx(i)}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/50"
          >
            <img src={asset(src)} alt={`Projeto ${i + 1}`} className="w-full h-32 object-cover" loading="lazy" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
          >
            <motion.img
              key={images[openIdx]}
              src={asset(images[openIdx])}
              alt="Preview"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-white/10 shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            {/* navegação simples */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i! - 1 + images.length) % images.length); }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 text-3xl"
                  aria-label="Anterior"
                >‹</button>
                <button
                  onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i! + 1) % images.length); }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 text-3xl"
                  aria-label="Próxima"
                >›</button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
