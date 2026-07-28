import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { site } from "../data/site";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SocialLink } from "../components/ui/SocialLink";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — email is still visible and
      // selectable, and the mailto: link in the socials list below still works.
    }
  };

  const otherSocials = site.socials.filter((social) => social.icon !== "mail");

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk."
          description="Best way to reach me is email — I'm generally quick to respond."
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <button
          type="button"
          onClick={handleCopy}
          className="group flex items-center gap-3 rounded-md border border-ink-200 px-5 py-3 transition-colors hover:border-periwinkle dark:border-white/15 dark:hover:border-periwinkle-light"
        >
          <span className="font-display text-lg font-medium text-contrast-dark dark:text-ink-100">
            {site.email}
          </span>
          <span className="flex h-6 w-6 items-center justify-center text-ink-600 transition-colors group-hover:text-periwinkle dark:text-ink-400 dark:group-hover:text-periwinkle-light">
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <Check size={15} />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <Copy size={15} />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>

        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="text-sm font-medium text-periwinkle"
            >
              Copied to clipboard
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="mt-14 flex flex-col gap-4 border-t border-ink-200/70 pt-10 sm:flex-row sm:gap-10 dark:border-white/10"
      >
        {otherSocials.map((social) => (
          <SocialLink key={social.label} {...social} />
        ))}
      </motion.div>
    </section>
  );
}
