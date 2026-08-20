import ProjectCard from "@/components/features/projects/projectscard";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsGridSection() {
  return (
    <section className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
          Projects
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-5xl">
          Everything I've built
        </h1>
        <p className="mt-4 max-w-xl text-slate-400">
          From my first-ever website to the projects I'm building now.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}