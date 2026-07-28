// Project case studies for the Projects page (and Home's featured grid, via `featured: true`).
// To add a new project, copy the commented template at the bottom of this file.
//
// image: place a screenshot in /public/images/projects/ and point to it with a root-relative
// path (e.g. "/images/projects/responsepro.png"). If the file doesn't exist yet, <ProjectCard />
// falls back to a styled placeholder panel, so it's safe to leave this pointing at a file you
// haven't added yet.

export const projects = [
  {
    id: "responsepro",
    title: "ResponsePro",
    tagline: "Compliance-focused SMS automation for home service businesses",
    description:
      "Compliance-focused SMS automation for home service businesses — solo-built and running in production. Handles real customer-facing messaging under real regulatory constraints (10DLC registration, opt-in/opt-out, carrier filtering), not a weekend prototype. I own the infrastructure end to end: it has to stay up, stay compliant, and keep working when I'm not looking at it.",
    tech: ["EDIT ME", "EDIT ME", "EDIT ME"], // e.g. "Node.js", "Twilio", "PostgreSQL"
    image: "/images/projects/responsepro.png",
    liveUrl: "https://responsepro.app",
    repoUrl: null, // EDIT ME
    featured: true,
  },
  {
    id: "shermlandscaping",
    title: "shermlandscaping.com",
    tagline: "Client website build for a landscaping business",
    description:
      "A full client site build for a landscaping business, handled solo from initial scope through launch — design, build, content, and deployment. Built to be fast, easy for a non-technical owner to maintain, and to actually generate leads rather than just look good.",
    tech: ["EDIT ME", "EDIT ME"], // e.g. "React", "Tailwind CSS"
    image: "/images/projects/shermlandscaping.png",
    liveUrl: "https://shermlandscaping.com",
    repoUrl: null,
    featured: true,
  },

  // --- Template: copy this block to add another project. ---
  // {
  //   id: "your-project-slug",
  //   title: "Project Name",
  //   tagline: "One line summary of what it does",
  //   description: "A short paragraph: what it is, your role, and any notable constraints.",
  //   tech: ["Tech", "Stack", "Tags"],
  //   image: "/images/projects/your-project-slug.png",
  //   liveUrl: null,
  //   repoUrl: null,
  //   featured: false,
  // },
];

export const featuredProjects = projects.filter((project) => project.featured);
