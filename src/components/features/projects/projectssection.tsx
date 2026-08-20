import { Link } from "react-router";
import Button from "@/components/ui/button";
import ProjectCard from "@/components/features/projects/projectscard";
import { PROJECTS } from "@/lib/projects";

const FEATURED_IDS = ["portfolio-v2", "first-react-project", "group-project"];

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section id="projects" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
              Projects
            </h2>
            <p className="mt-3 max-w-lg text-2xl font-semibold text-slate-100 sm:text-3xl">
              Selected work
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline">View all projects</Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}