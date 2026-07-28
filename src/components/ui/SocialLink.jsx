import { Mail } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

// LinkedIn's mark was pulled from icon packages (including lucide-react and Simple Icons)
// over Microsoft trademark enforcement — see simple-icons/simple-icons#11372. A small
// inline glyph for linking out to a personal profile is standard practice and keeps us
// off of any redistributable icon set.
function LinkedinGlyph({ size = 24, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const ICONS = {
  mail: Mail,
  github: SiGithub,
  linkedin: LinkedinGlyph,
  twitter: SiX,
};

export function SocialLink({ label, url, icon, showLabel = true }) {
  const Icon = ICONS[icon] ?? Mail;

  return (
    <motion.a
      href={url}
      target={url?.startsWith("http") ? "_blank" : undefined}
      rel={url?.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group inline-flex items-center gap-2.5 text-sm font-medium text-contrast-dark dark:text-ink-100"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors group-hover:border-periwinkle group-hover:text-periwinkle dark:border-white/15 dark:text-ink-400 dark:group-hover:border-periwinkle-light dark:group-hover:text-periwinkle-light">
        <Icon size={16} />
      </span>
      {showLabel && (
        <span className="transition-colors group-hover:text-periwinkle dark:group-hover:text-periwinkle-light">
          {label}
        </span>
      )}
    </motion.a>
  );
}
