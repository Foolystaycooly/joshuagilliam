// Shared Framer Motion variants for staggered grids (project cards, etc). Kept out of
// component files so those files can export components only — that's what lets Vite's
// Fast Refresh hot-patch them during development instead of falling back to a full reload.

export const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
