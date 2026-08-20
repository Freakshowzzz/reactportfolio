import { cn } from "@/lib/cn";

type SocialLink = {
  label: string;
  href: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Freakshowzzz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/freakshowzzz/" },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adonisbillyregodon@gmail.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-sky-400/10 bg-[#05070a]/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs tracking-wider text-slate-500">
          © {year} Adonis Billy Regodon — built with React &amp; Vite
        </p>

        <nav className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className={cn(
                "text-xs text-slate-400 transition-colors hover:text-sky-300"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}