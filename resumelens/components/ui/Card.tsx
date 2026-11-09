import type { ReactNode } from "react";

export default function Card({ children, title, className = "" }: { children: ReactNode; title?: string; className?: string }) {
  return (
    <section className={`rounded-xl border border-brand-100 bg-white p-5 shadow-sm ${className}`}>
      {title && <h2 className="mb-4 text-base font-semibold text-ink">{title}</h2>}
      {children}
    </section>
  );
}
