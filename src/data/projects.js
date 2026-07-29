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
      "Solo-built SaaS in production for home service businesses — missed-call text-back, 10DLC compliance, and automated follow-ups under real TCPA constraints. Stripe checkout triggers an eight-step Telnyx auto-provisioning pipeline; inbound SMS routes through a Postgres-backed queue with rate limiting and carrier vetting. Express API on Render, React dashboard on Cloudflare Pages, edge intake on Cloudflare Workers.",
    tech: ["Node.js", "PostgreSQL", "Telnyx", "Stripe", "Cloudflare Workers"],
    image: "/images/projects/responsepro.png",
    liveUrl: "https://responsepro.app",
    repoUrl: null,
    featured: true,
  },
  {
    id: "shermlandscaping",
    title: "shermlandscaping.com",
    tagline: "Client website build for a landscaping business",
    description:
      "Full client site from scope through launch — React 19 static site generation, flat prerendered routes, LocalBusiness JSON-LD, and a custom postbuild pipeline that externalizes inline scripts and emits Cloudflare CSP headers. Contact forms POST to a live API with honeypot spam protection. Built for speed, SEO, and a non-technical owner who can run it without me.",
    tech: ["React", "TypeScript", "Vite SSG", "Cloudflare Pages"],
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
