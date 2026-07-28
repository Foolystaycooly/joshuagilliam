import { motion } from "framer-motion";
import { interests } from "../data/interests";

const bioContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const bioItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const listItem = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Longer, casual-toned bio copy. EDIT ME with your actual story — this is placeholder
// text written in first person to give a sense of tone/structure, not a final draft.
const bioParagraphs = [
  "So — a little more about me than the homepage has room for. I'm a software developer who likes taking things from \"someone should really automate this\" to actually running in production, with as few moving parts as I can get away with.",
  "Most of my work lives in that unglamorous middle ground between \"side project\" and \"enterprise software\": real businesses, real customers, real consequences if something breaks at 2am. ResponsePro grew out of exactly that — a compliance problem home service businesses kept running into with customer texting, that I ended up solving by building the whole thing myself, front to back. I've done the same on a smaller scale with client sites, where the fun part isn't just shipping something that looks good, it's handing off something a non-technical owner can actually run without me.",
  "EDIT ME — this is a good spot for the personal-history paragraph: how you got into building things, what you studied (or didn't), any detour that's actually relevant to how you work now.",
  "Outside of writing code, here's what's currently taking up space in my head:",
];

export function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-xs font-medium uppercase tracking-[0.22em] text-periwinkle"
      >
        About
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-4 font-display text-4xl font-semibold tracking-tight text-contrast-dark sm:text-5xl dark:text-ink-100"
      >
        A bit more about me.
      </motion.h1>

      <motion.div
        variants={bioContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10 space-y-5 text-base leading-relaxed text-ink-600 sm:text-lg dark:text-ink-400"
      >
        {bioParagraphs.map((paragraph, index) => (
          <motion.p key={index} variants={bioItem}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid gap-3 sm:grid-cols-2"
      >
        {interests.map((interest) => (
          <motion.div
            key={interest.label}
            variants={listItem}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="flex items-start gap-3 rounded-md border border-ink-200 px-4 py-3 dark:border-white/10"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-periwinkle" />
            <span>
              <span className="block text-sm font-medium text-contrast-dark dark:text-ink-100">
                {interest.label}
              </span>
              {interest.note && (
                <span className="mt-0.5 block text-sm text-ink-600 dark:text-ink-400">{interest.note}</span>
              )}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
