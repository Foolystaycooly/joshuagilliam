import { Link } from "react-router-dom";
import { site } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-200/70 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center text-sm text-ink-600 sm:flex-row sm:justify-between sm:text-left dark:text-ink-400">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-5">
          <Link to="/contact" className="transition-colors hover:text-periwinkle dark:hover:text-periwinkle-light">
            Get in touch
          </Link>
          <span className="text-ink-200 dark:text-white/15">/</span>
          <span>Built with React &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
