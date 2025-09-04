import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";

export function useActiveSection(ids: string[]): [string, Dispatch<SetStateAction<string>>] {
  const [active, setActive] = useState<string>(ids?.[0] ?? "hero");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0] && visible[0].target instanceof HTMLElement) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    elements.forEach((el) => observer.current?.observe(el));
    return () => observer.current?.disconnect();
  }, [ids]);

  return [active, setActive];
}
