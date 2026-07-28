import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { TechTag } from "./TechTag";
import { cardVariants } from "../../lib/motionVariants";

const MotionLink = motion.create(Link);

/**
 * @param {object} project - entry from data/projects.js
 * @param {number} index - used for the placeholder index number when no image is present
 * @param {string} [linkTo] - if provided, the whole card links internally (e.g. Home -> /projects)
 */
export function ProjectCard({ project, index = 0, linkTo }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.image) && !imageFailed;

  const Wrapper = linkTo ? MotionLink : motion.article;
  const wrapperProps = linkTo ? { to: linkTo } : {};

  return (
    <Wrapper
      {...wrapperProps}
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group relative flex flex-col overflow-hidden rounded-md border border-ink-200 bg-base-light-raised shadow-sm transition-colors duration-300 hover:border-periwinkle/60 hover:shadow-lg dark:border-white/10 dark:bg-base-dark-raised dark:hover:border-periwinkle/50"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-ink-200 dark:border-white/10">
        {showImage ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted-light/50 dark:bg-contrast-dark/15">
            <span className="font-display text-5xl font-semibold text-muted dark:text-contrast">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-contrast-dark dark:text-ink-100">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
            {project.description}
          </p>
        </div>

        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag, tagIndex) => (
              <TechTag key={`${tag}-${tagIndex}`}>{tag}</TechTag>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-4 pt-2 text-sm font-medium">
          {linkTo ? (
            <span className="inline-flex items-center gap-1.5 text-periwinkle">
              View case study
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          ) : (
            <>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-periwinkle transition-colors hover:text-periwinkle-light"
                >
                  Visit site
                  <ArrowUpRight size={14} />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-600 transition-colors hover:text-periwinkle dark:text-ink-400"
                >
                  <SiGithub size={14} />
                  Source
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
