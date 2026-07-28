export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="font-display text-xs font-medium uppercase tracking-[0.22em] text-periwinkle">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-contrast-dark sm:text-4xl dark:text-ink-100">
        {title}
      </h2>
      {description && (
        <p
          className={
            isCentered
              ? "mx-auto mt-4 max-w-xl text-ink-600 dark:text-ink-400"
              : "mt-4 max-w-xl text-ink-600 dark:text-ink-400"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
