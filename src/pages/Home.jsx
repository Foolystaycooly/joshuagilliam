import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { site } from "../data/site";
import { featuredProjects } from "../data/projects";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProjectCard } from "../components/ui/ProjectCard";
import { gridContainerVariants } from "../lib/motionVariants";

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionLink = motion.create(Link);

export function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:px-8 sm:pt-28">
        <motion.div initial="hidden" animate="visible" variants={heroContainer} className="max-w-2xl">
          <motion.p
            variants={heroItem}
            className="font-display text-sm font-medium uppercase tracking-[0.22em] text-periwinkle"
          >
            {site.role}
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-contrast-dark sm:text-6xl dark:text-ink-100"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-5 font-display text-xl font-medium leading-snug text-ink-600 sm:text-2xl dark:text-ink-200"
          >
            {site.tagline}
          </motion.p>

          <motion.p variants={heroItem} className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-400">
            {site.intro}
          </motion.p>

          <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-4">
            <MotionLink
              to="/projects"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 rounded-md bg-periwinkle px-5 py-2.5 text-sm font-semibold text-base-dark transition-colors hover:bg-periwinkle-light"
            >
              View projects
              <ArrowRight size={15} strokeWidth={2} />
            </MotionLink>
            <MotionLink
              to="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 rounded-md border border-ink-200 px-5 py-2.5 text-sm font-semibold text-contrast-dark transition-colors hover:border-periwinkle hover:text-periwinkle dark:border-white/15 dark:text-ink-100 dark:hover:border-periwinkle-light dark:hover:text-periwinkle-light"
            >
              Get in touch
            </MotionLink>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-ink-200/70 px-6 py-20 sm:px-8 dark:border-white/10">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A couple of things I've built end to end. More case studies live on the projects page."
        />

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} linkTo="/projects" />
          ))}
        </motion.div>
      </section>
    </>
  );
}
