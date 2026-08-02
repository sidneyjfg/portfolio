// src/pages/components/ui/ProjectGallery.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { asset } from "@/utils/asset"; // manter

export default function ProjectGallery({ images = [] }: { images?: string[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  useEffect(() => {
    if (openIdx === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIdx]);

  if (!images.length) return null;

  return (
    <>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setOpenIdx(i)}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl border border-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:border-zinc-800"
            type="button"
          >
            <img
              src={asset(src)}
              alt={`Projeto ${i + 1}`}
              className="h-32 w-full object-cover"
              loading="lazy"
              width={320}
              height={128}
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Preview do projeto"
          >
            <motion.img key={images[openIdx]} src={asset(images[openIdx])} alt="Preview"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-white/10 shadow-2xl"
              width={960}
              height={640}
              initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} />
            <button
              aria-label="Fechar preview"
              className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-lg text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              onClick={() => setOpenIdx(null)}
              type="button"
            >
              ×
            </button>
            {images.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i! - 1 + images.length) % images.length); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="Anterior" type="button">‹</button>
                <button onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i! + 1) % images.length); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="Próxima" type="button">›</button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
