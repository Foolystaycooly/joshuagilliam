// Core site identity. Everything here is rendered directly by pages/components —
// edit this file rather than hunting through JSX to update copy.

export const site = {
  name: "Joshua Gilliam", // EDIT ME if this isn't right
  role: "Software Developer",

  // One-liner used on the Home hero.
  tagline: "I build the software small businesses actually run on.",

  // Short, few-sentence intro for the Home page. Keep this in first person and specific —
  // it's the first real writing a visitor sees.
  intro:
    "I write backend systems and full-stack apps for small and mid-size businesses — the kind of software that has to actually work, every day, with no one watching over it. Most of what I build runs quietly in production: automated messaging, client sites, internal tools. I like scoping a problem myself, shipping it, and being the one who gets the call if it breaks.",

  location: "EDIT ME — City, State", // e.g. "Charlotte, NC"
  email: "you@example.com", // EDIT ME — used on the Contact page and as a mailto: link

  // Optional resume download. Drop a PDF in /public and point this at it, or leave null to hide the link.
  resumeUrl: null,

  // Rendered on the Contact page (and optionally elsewhere) via <SocialLink />.
  // `icon` keys map to lucide-react icons in components/ui/SocialLink.jsx.
  socials: [
    { label: "Email", url: "mailto:you@example.com", icon: "mail" }, // EDIT ME
    { label: "GitHub", url: "https://github.com/EDIT-ME", icon: "github" }, // EDIT ME
    { label: "LinkedIn", url: "https://linkedin.com/in/EDIT-ME", icon: "linkedin" }, // EDIT ME
  ],
};
