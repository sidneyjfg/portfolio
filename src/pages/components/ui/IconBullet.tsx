import type { ReactNode } from "react";
export default function IconBullet({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-zinc-600 dark:text-zinc-300">{icon}</div>
      <p className="text-zinc-700 dark:text-zinc-300">{children}</p>
    </div>
  );
}
