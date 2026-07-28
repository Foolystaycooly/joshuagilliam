export function TechTag({ children }) {
  return (
    <span className="rounded-sm border border-ink-200 px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-600 dark:border-white/15 dark:text-ink-400">
      {children}
    </span>
  );
}
