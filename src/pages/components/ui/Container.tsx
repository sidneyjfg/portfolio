import type { ReactNode } from "react";
import { classNames } from "@/lib/classNames";

export default function Container({ className = "", children }: { className?: string; children?: ReactNode }) {
  return <div className={classNames("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}
