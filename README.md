# Personal portfolio

Four-page portfolio/resume site — Home, Projects, About, Contact.

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for routing between the four pages
- [Tailwind CSS v4](https://tailwindcss.com/) for styling (custom periwinkle palette + Space Grotesk/Inter type pairing, see `src/index.css`)
- [Framer Motion](https://motion.dev/) for page transitions, scroll-triggered reveals, hover states, and the home hero entrance
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling, wired up in `src/hooks/useLenis.js`
- [Lucide](https://lucide.dev/) for UI icons, plus [Simple Icons](https://simpleicons.org/) for the GitHub/X brand marks (Lucide dropped brand logos in v1)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run lint      # oxlint
```

## Editing content

Content lives in `src/data/` as plain arrays/objects — you shouldn't need to touch any component or page markup to update copy:

- `src/data/site.js` — name, role, tagline, intro paragraph, email, resume link, social links. **Has placeholder values you'll want to replace** (email, socials, location).
- `src/data/projects.js` — case-study entries (ResponsePro, shermlandscaping.com, etc). Each entry has a `featured` flag; featured projects also show up on the Home page. Copy the commented template at the bottom of the file to add a new project. `tech` arrays currently have placeholder `"EDIT ME"` tags — fill in real stack tags.
- `src/data/interests.js` — the "things I'm into" list on the About page. Add/remove/reword entries freely; the layout adapts automatically.

Project screenshots go in `public/images/projects/` (see the README in that folder) — reference them from `data/projects.js` with a root-relative path like `/images/projects/responsepro.png`. If an image is missing, the project card falls back to a styled placeholder automatically, so it's safe to add entries before you have a screenshot.

The About page's longer bio paragraphs live directly in `src/pages/About.jsx` (in the `bioParagraphs` array near the top of the file) — edit those directly, they're placeholder copy.

## Structure

```
src/
  data/        content — projects, site info, interests
  context/     ThemeContext (persisted light/dark toggle)
  hooks/       useLenis (smooth-scroll setup)
  lib/         shared Framer Motion variants
  components/
    layout/    Navbar, Footer, ThemeToggle, PageWrapper (route transitions)
    ui/        ProjectCard, TechTag, SectionHeading, SocialLink
  pages/       Home, Projects, About, Contact, NotFound
```
