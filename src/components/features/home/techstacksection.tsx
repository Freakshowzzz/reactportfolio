import { useState } from "react";
import { cn } from "@/lib/cn";

type Tech = {
  name: string;
  category: string;
  description: string;
  url: string;
};

const TECH_STACK: Tech[] = [
  {
    name: "Laravel",
    category: "Backend",
    description:
      "A PHP web framework known for expressive syntax, with built-in tools for routing, authentication, and database migrations.",
    url: "https://laravel.com",
  },
  {
    name: "Next.js",
    category: "Framework",
    description:
      "A React framework that adds server-side rendering, static site generation, and file-based routing on top of React.",
    url: "https://nextjs.org",
  },
  {
    name: "React",
    category: "Frontend",
    description:
      "A JavaScript library for building user interfaces out of reusable, composable components.",
    url: "https://react.dev",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description:
      "A utility-first CSS framework that provides low-level classes for building custom designs directly in markup.",
    url: "https://tailwindcss.com",
  },
  {
    name: "Figma",
    category: "Design",
    description:
      "A collaborative interface design tool used for wireframing, prototyping, and building shared design systems.",
    url: "https://figma.com",
  },
  {
    name: "GitHub",
    category: "Tooling",
    description:
      "A platform for hosting and collaborating on Git repositories, with built-in issues, pull requests, and CI/CD.",
    url: "https://github.com",
  },
];

export default function TechStackSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleCard(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="stack" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
          Tech Stack
        </h2>
        <p className="mt-3 max-w-lg text-2xl font-semibold text-slate-100 sm:text-3xl">
          Tools I build with
        </p>

        <div className="mt-12 grid grid-cols-2 items-start gap-4 sm:grid-cols-3">
          {TECH_STACK.map((tech, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={tech.name}
                className={cn(
                  "rounded-xl border bg-slate-900/30 transition-colors",
                  isOpen
                    ? "border-sky-400/50 bg-slate-900/50"
                    : "border-slate-700/50 hover:border-sky-400/40 hover:bg-slate-900/50"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleCard(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                        {tech.category}
                      </p>
                      <p
                        className={cn(
                          "mt-1 text-lg font-medium transition-colors",
                          isOpen ? "text-sky-300" : "text-slate-100"
                        )}
                      >
                        {tech.name}
                      </p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={cn(
                        "shrink-0 text-slate-500 transition-transform duration-300",
                        isOpen && "rotate-180 text-sky-400"
                      )}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expandable detail panel */}
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0">
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-slate-400">
                        {tech.description}
                      </p>
                      <a
                        href={tech.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1 text-sm text-sky-400 transition-colors hover:text-sky-300"
                      >
                        Visit site
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M3 9L9 3M9 3H4M9 3V8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}