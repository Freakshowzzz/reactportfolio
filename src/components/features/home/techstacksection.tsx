const TECH_STACK = [
  { name: "Laravel", category: "Backend" },
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Figma", category: "Design" },
  { name: "GitHub", category: "Tooling" },
];

export default function TechStackSection() {
  return (
    <section id="stack" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
          Tech Stack
        </h2>
        <p className="mt-3 max-w-lg text-2xl font-semibold text-slate-100 sm:text-3xl">
          Tools I build with
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-xl border border-slate-700/50 bg-slate-900/30 p-5 transition-colors hover:border-sky-400/40 hover:bg-slate-900/50"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {tech.category}
              </p>
              <p className="mt-1 text-lg font-medium text-slate-100 transition-colors group-hover:text-sky-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}