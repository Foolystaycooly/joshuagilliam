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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      // Clipboard API unavailable — email remains visible and selectable.
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(site.phoneDisplay);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 1800);
    } catch {
      // Clipboard API unavailable — phone remains visible and selectable.
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
        className="mt-10 flex flex-col gap-4"
      >
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group flex items-center gap-3 rounded-md border border-ink-200 px-5 py-3 transition-colors hover:border-periwinkle dark:border-white/15 dark:hover:border-periwinkle-light"
          >
            <span className="font-display text-lg font-medium text-contrast-dark dark:text-ink-100">
              {site.email}
            </span>
            <span className="flex h-6 w-6 items-center justify-center text-ink-600 transition-colors group-hover:text-periwinkle dark:text-ink-400 dark:group-hover:text-periwinkle-light">
              <AnimatePresence mode="wait" initial={false}>
                {copiedEmail ? (
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
            {copiedEmail && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="text-sm font-medium text-periwinkle"
              >
                Email copied
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="group flex items-center gap-3 rounded-md border border-ink-200 px-5 py-3 transition-colors hover:border-periwinkle dark:border-white/15 dark:hover:border-periwinkle-light">
            <a
              href={`tel:${site.phone}`}
              className="font-display text-lg font-medium text-contrast-dark dark:text-ink-100"
            >
              {site.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={handleCopyPhone}
              aria-label="Copy phone number"
              className="flex h-6 w-6 items-center justify-center text-ink-600 transition-colors hover:text-periwinkle dark:text-ink-400 dark:hover:text-periwinkle-light"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copiedPhone ? (
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
            </button>
          </div>

          <AnimatePresence>
            {copiedPhone && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="text-sm font-medium text-periwinkle"
              >
                Phone copied
              </motion.span>
            )}
          </AnimatePresence>
        </div>
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
