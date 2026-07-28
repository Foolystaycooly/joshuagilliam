import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProjectCard } from "../components/ui/ProjectCard";
import { gridContainerVariants } from "../lib/motionVariants";

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow="Case studies"
        title="Projects"
        description="A running list of things I've built — production systems and client work. More gets added here as it ships."
      />

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-8 sm:grid-cols-2"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
