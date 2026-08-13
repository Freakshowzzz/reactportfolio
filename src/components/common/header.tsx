import { useEffect, useState } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/cn";
import ThemeToggle from "@/components/ui/ThemeToggle";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-sky-400/10 bg-[#05070a]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / mark */}
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-sm tracking-wider text-slate-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
          </span>
          <span className="transition-colors group-hover:text-sky-400">
            Adonis<span className="text-sky-400">.dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-slate-400 transition-colors hover:text-slate-100 [&:hover>span]:w-full"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-400 transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              "rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm text-sky-300 transition-colors",
              "hover:border-sky-400/60 hover:bg-sky-400/20"
            )}
          >
            Let's talk
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-md text-slate-300 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "overflow-hidden border-b border-sky-400/10 bg-[#05070a]/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-slate-300 transition-colors hover:bg-sky-400/10 hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-center text-sm text-sky-300"
          >
            Let's talk
          </a>
          <div className="mt-3 flex justify-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}