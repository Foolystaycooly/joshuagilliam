import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-6 py-32 sm:px-8">
      <p className="font-display text-sm uppercase tracking-[0.2em] text-periwinkle">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-contrast-dark dark:text-ink-100">
        That page doesn't exist.
      </h1>
      <Link
        to="/"
        className="mt-6 text-sm font-medium text-periwinkle underline decoration-periwinkle/40 underline-offset-4 hover:text-periwinkle-light"
      >
        Back to home
      </Link>
    </section>
  );
}
